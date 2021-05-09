using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
using User.Entities.Dtos;

namespace User.Business.Validation.FluentValidation
{
    class RegisterValidator:AbstractValidator<RegisterDto>
    {
        public RegisterValidator()
        {
            RuleFor(u => u.UserName).NotEmpty().WithMessage("UserName can't be empty");
            RuleFor(u => u.Email).NotEmpty().WithMessage("Email can't be empty");
            RuleFor(u => u.Email).EmailAddress().WithMessage("Invalid E-mail Adress");
            RuleFor(u => u.Password).NotEmpty().WithMessage("Password Can't be empty");
            RuleFor(u => u.Password1).NotEmpty().WithMessage("Please re enter your password");

        }
    }
}
