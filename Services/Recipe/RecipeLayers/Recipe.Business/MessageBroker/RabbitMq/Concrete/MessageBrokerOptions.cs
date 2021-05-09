using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Business.MessageBroker.RabbitMq
{
    class MessageBrokerOptions
    {
        public string HostName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string QueueName { get; set; }

    }
}
