using Core.DAL.MongoDB.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.DAL.MongoDB.Concrete
{
    public class MongoDbSettings : IMongoDbSettings
    {
        public string DatabaseName { get; set; }
        public string ConnectionString { get; set; }
    }
}
