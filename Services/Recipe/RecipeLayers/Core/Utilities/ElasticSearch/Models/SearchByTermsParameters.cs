using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.ElasticSearch.Models
{
    public class SearchByTermsParameters:SearchParameters
    {
        public string FieldName { get; set; }
        public List<string> Terms { get; set; }
    }
}
