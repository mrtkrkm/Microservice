﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.ElasticSearch
{
    public class SearchByFieldParameters : SearchParameters
    {
        public string FieldName { get; set; }
        public string Value { get; set; }
    }
}
