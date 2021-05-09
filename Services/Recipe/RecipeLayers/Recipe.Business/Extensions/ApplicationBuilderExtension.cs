using Microsoft.AspNetCore.Builder;
using Recipe.Business.MessageBroker.RabbitMq.Concrete;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Hosting;
using System.Threading;

namespace Recipe.Business.Extensions
{
    public static class ApplicationBuilderExtension
    {

        public static RabbitMqConsumer RabbitMqListener { get; set; }
        public static IApplicationBuilder UseRabbitMqListener(this IApplicationBuilder app)
        {
            RabbitMqListener = app.ApplicationServices.GetService<RabbitMqConsumer>();
            var life = app.ApplicationServices.GetService<IHostApplicationLifetime>();
            Thread.Sleep(100000);

            life.ApplicationStarted.Register(OnStarted1);
            life.ApplicationStarted.Register(OnStarted2);
            return app;
        }


        private static void OnStarted1()
        {
            //Thread.Sleep(20000);
            RabbitMqListener.GetQueue("rating");
           // RabbitMqListener.GetQueue("review");
        }

        private static void OnStarted2()
        {
            //Thread.Sleep(20000);
            //RabbitMqListener.GetQueue("rating");
            RabbitMqListener.GetQueue("review");
        }
    }
}
