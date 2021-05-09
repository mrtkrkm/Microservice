using Core.Utilities.Results.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Results.Concrete
{
    public class ErrorResult : Result, IErrorResult
    {

        public ErrorResult(int errorCode, string message) : base(false, message)
        {
            ErrorCode = errorCode;
        }

        public ErrorResult(int errorCode) : base(false)
        {
            ErrorCode = errorCode;
        }

        public ErrorResult(string message) : base(false, message)
        {

        }

        public ErrorResult() : base(false)
        {

        }

        public int ErrorCode { get; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
