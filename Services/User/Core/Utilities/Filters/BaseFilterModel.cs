using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Filters
{
    public abstract class BaseFilterModel
    {
        public string searchText { get; set; }
        public int offset { get; set; }
        public int limit { get; set; }
    }
}
