using System;
using System.Collections.Generic;
using System.Text;

namespace Core.DAL.MongoDB.Abstract
{
    public interface IMongoDbSettings
    {  
        string DatabaseName { get; set; }
        string ConnectionString { get; set; }
    }
}
