using Core.Concrete.Entities;
using Core.DAL.MongoDB.Concrete.Configurations;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Entities.Concrete
{
    [BsonCollection("Categories")]
    public class Category: DocumentDbEntity
    {
        [BsonElement("name")]

        public string Name { get; set; }


        [BsonElement("sub_cat")]

        public List<Values> values { get; set; }
    }

    public class Values
    {
        public string name { get; set; }

        public int count { get; set; }
    }
}

