using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.ElasticSearch
{
    public class SearchParameters
    {
        public string IndexName { get; set; }
        public int From { get; set; } = 0;
        public int Size { get; set; } = 10;
    }
}
