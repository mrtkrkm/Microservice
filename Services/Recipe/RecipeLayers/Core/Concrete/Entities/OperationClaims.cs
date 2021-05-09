using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Entities
{
    public class OperationClaims : BaseEntity<int>, IEntity
    {
        public string Name { get; set; }
    }
}
