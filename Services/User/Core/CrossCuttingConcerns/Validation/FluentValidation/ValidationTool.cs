using Core.Utilities.Results.Concrete;
using Core.Utilities.Results.Interfaces;
using FluentValidation;
using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.CrossCuttingConcerns.Validation.FluentValidation
{
    public static class ValidationTool
    {
        public static void Validate(IValidator validator, object obj)
        {
            var result = validator.Validate(obj);
            if (!result.IsValid)
            {
                throw new ValidationException(result.Errors);
                //return new ErrorDataResult<IList<ValidationFailure>>(result.Errors);
                //return result.Errors;
            }

            //return new SuccessDataResult<IList<ValidationFailure>>(result.Errors);
        }
    }
}
