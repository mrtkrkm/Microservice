using Core.Utilities.Results.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using User.Entities;
using User.Entities.Dtos;

namespace User.Business.Abstract
{
    public interface IAuthService
    {

        IDataResult<LoginAnswerDto> Register(RegisterDto registerUser);

        IDataResult<LoginAnswerDto> Login(LoginDto loginUser);
    }
}
