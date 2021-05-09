using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Results.Interfaces
{
    public interface IDataResult<out T> : IResult
    {
        T Data { get; }
    }
}
