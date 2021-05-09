using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using Recipe.Business.Abstract;
using Recipe.Entities.Concrete;
using Recipe.Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Business.MessageBroker.RabbitMq.Concrete
{
    public class RabbitMqConsumer : IConsumer
    {
        private readonly IConfiguration _configuration;
        private readonly MessageBrokerOptions _brokerOptions;
        private readonly IRecipeService _recipeservice;

        int ratingcounter = 0;
        int reviewcounter = 0;
        public RabbitMqConsumer(IConfiguration configuration, IRecipeService recipeservice)
        {
            _configuration = configuration;
            _brokerOptions = _configuration.GetSection("MessageBrokerOptions").Get<MessageBrokerOptions>();
            _recipeservice = recipeservice;
        }
        public void GetQueue(string queeName)
        {
            int count = 0;
            RecipeInfo recipe = new RecipeInfo
            {
                Title = "Super One",
                Description = "Empty",
                Image_url = ""
            };
            var factory = new ConnectionFactory()
            {
                HostName = _brokerOptions.HostName,
                UserName = _brokerOptions.UserName,
                Password = _brokerOptions.Password
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();
            
            channel.QueueDeclare(queue: queeName,
                                                        durable: true,
                                                        exclusive: false,
                                                        autoDelete: false,
                                                        arguments: null);

            var consumer = new EventingBasicConsumer(channel);

            consumer.Received += ReceiveEvent;

            channel.BasicConsume(queue: queeName,
                                                    autoAck: true,
                                                    consumer: consumer);

        }


        private async void ReceiveEvent(object sender, BasicDeliverEventArgs e)
        {
            
            if (e.RoutingKey == "rating")
            {
             
                var message = Encoding.UTF8.GetString(e.Body.Span);
                var Info = JsonConvert.DeserializeObject<RatingConsumeDto>(message);

                var recipe = _recipeservice.getById(Info.recipeId);

                if(recipe.Result.Success)
                {

                    float oldTotal = recipe.Result.Data.Rating * recipe.Result.Data.RateCount;

                    int newCount = recipe.Result.Data.RateCount + Info.Count;

                    float newRate = (oldTotal + Info.Value) / newCount;

                    recipe.Result.Data.Rating = newRate;

                    recipe.Result.Data.RateCount = newCount;

                    //JsonConvert.DeserializeObject<Payload>(message)
                    _recipeservice.Update(recipe.Result.Data);
                }

            }

            if (e.RoutingKey == "review")
            {
                var message = Encoding.UTF8.GetString(e.Body.Span);

                var Info = JsonConvert.DeserializeObject<ReviewConsumeDto>(message);

                var recipe = _recipeservice.getById(Info.RecipeId);

                if (recipe.Result.Success)
                {

                    recipe.Result.Data.LastReview = Info.Review;
                    //JsonConvert.DeserializeObject<Payload>(message)
                    _recipeservice.Update(recipe.Result.Data);
                }
            }
        }
    }
}

