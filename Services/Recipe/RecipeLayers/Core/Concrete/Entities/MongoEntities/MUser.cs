using Core.Concrete.Entities;
using Core.DAL.MongoDB.Concrete.Configurations;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Entities.MongoEntities
{

    [BsonCollection("Users")]
    public class MUser:DocumentDbEntity
    {
        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("UserName")]
        public string UserName { get; set; }

        [BsonElement("EMail")]
        public string EMail { get; set; }

        [BsonElement("PasswordHash")]
        public byte[] PasswordHash { get; set; }

        [BsonElement("PasswordSalt")]
        public byte[] PasswordSalt { get; set; }


        [BsonElement("OperationClaims")]
        public List<MOperationClaim> claims { get; set; }
    }
}
