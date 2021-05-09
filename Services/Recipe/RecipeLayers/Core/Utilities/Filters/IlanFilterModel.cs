using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Filters
{
    public class IlanFilterModel : BaseFilterModel
    {
        public int? dilId { get; set; }

        public IlanFilterModel(string q, int o, int l, int d)
        {
            searchText = q;
            offset = o;
            limit = l;
            dilId = d;
        }
    }
}
