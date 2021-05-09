using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Entities.Dtos
{
    public class SearchDto
    {
        public string FieldName { get; set; }

        public List<string> Values { get; set; }
    }
}
