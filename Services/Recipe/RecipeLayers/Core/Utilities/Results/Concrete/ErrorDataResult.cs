using Core.Utilities.Results.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Results.Concrete
{
    public class ErrorDataResult<T> : DataResult<T>, IErrorResult
    {
        public ErrorDataResult(int errorCode, T data, string message) : base(data, false, message)
        {
            ErrorCode = errorCode;
        }

        public ErrorDataResult(int errorCode, T data) : base(data, false)
        {
            ErrorCode = errorCode;
        }

        public ErrorDataResult(int errorCode, string message) : base(default, false, message)
        {
            ErrorCode = errorCode;
        }

        public ErrorDataResult(int errorCode) : base(default, false)
        {
            ErrorCode = errorCode;
        }

        public ErrorDataResult(T data, string message) : base(data, false, message)
        {

        }

        public ErrorDataResult(T data) : base(data, false)
        {

        }

        public ErrorDataResult(string message) : base(default, false, message)
        {

        }

        public ErrorDataResult() : base(default, false)
        {

        }

        public int ErrorCode { get; }
    }
}
