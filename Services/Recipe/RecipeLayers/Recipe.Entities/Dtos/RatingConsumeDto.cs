using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Entities.Dtos
{
    public class RatingConsumeDto
    {
        public string recipeId { get; set; }

        public int Value { get; set; }

        public int Count { get; set; }
    }
}
