using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Business.MessageBroker.RabbitMq
{
    public interface IPublisher
    {
        void QueueMessage(string queeName,string messageText);
    }
}
