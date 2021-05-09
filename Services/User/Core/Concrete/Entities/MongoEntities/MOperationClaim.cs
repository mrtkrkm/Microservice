using Core.Concrete.Entities;
using Core.DAL.MongoDB.Concrete.Configurations;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Entities.MongoEntities
{
    [BsonCollection("OperationClaims")]
    public class MOperationClaim: DocumentDbEntity
    {

        [BsonElement("Name")]
        public string Name { get; set; }
    }
}
