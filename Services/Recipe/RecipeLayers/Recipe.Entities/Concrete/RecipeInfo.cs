using Core.Concrete.Entities;
using Core.DAL.MongoDB.Concrete.Configurations;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Entities.Concrete
{
    [BsonCollection("Recipes")]
    [BsonIgnoreExtraElements]

    public class RecipeInfo:DocumentDbEntity
    {
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("desc")]
        public string Description { get; set; }


        [BsonElement("categories")]
        public List<string> Categories { get; set; }

        [BsonElement("ingredients")]
        public List<string> Ingredients { get; set; }


        [BsonElement("image_url")]
        public string Image_url { get; set; }

        [BsonElement("directions")]
        public List<string> Directions { get; set; }

        [BsonElement("rating")]
        public float Rating { get; set; }

        [BsonElement("rate_count")]
        public int RateCount { get; set; }


        [BsonElement("last_review")]
        public string LastReview { get; set; }
    }
}
