﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.ElasticSearch.Models
{
    public class ElasticSearchInsertUpdateModel : ElasticSearchModel
    {
        public object Item { get; set; }
    }
}
