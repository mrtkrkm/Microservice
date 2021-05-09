using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Business.MessageBroker.RabbitMq
{
    public interface IConsumer
    {
        void GetQueue(string queeName);
    }
}
