using Core.Aspects.Autofac.Validation;
using Core.Utilities.Results.Concrete;
using Core.Utilities.Results.Interfaces;
using Core.Utilities.Security.Common;
using Core.Utilities.Security.Hashing;
using System;
using System.Collections.Generic;
using System.Text;
using User.Business.Abstract;
using User.Business.Validation.FluentValidation;
using User.DAL.Abstract;
using User.Entities;
using User.Entities.Dtos;

namespace User.Business.Concrete
{
    public class AuthManager : IAuthService
    {
        private readonly IUserDal _userDal;

        private readonly IUserService _userService;

        private readonly ITokenHelper _tokenHelper;

        public AuthManager(IUserDal userDal, IUserService userService, ITokenHelper tokenHelper)
        {
            _userDal = userDal;
            _userService = userService;
            _tokenHelper = tokenHelper;
        }
        public IDataResult<LoginAnswerDto> Login(LoginDto loginUser)
        {
            var checkResult = _userService.GetUserByEmail(loginUser.Email);

            if(!checkResult.Success)
            {
                return new ErrorDataResult<LoginAnswerDto>("User is not found");
            }

            //if (!HashingHelper.VerifyPasswordHash(loginUser.Password, checkResult.Data.passwordHash, checkResult.Data.passwordSalt))
            //{
            //    return new ErrorDataResult<LoginAnswerDto>("Password is wrong");
            //}
            if (!HashingHelper.VerifyPassword(checkResult.Data.passwordHash, loginUser.Password))
            {
                return new ErrorDataResult<LoginAnswerDto>("Password is wrong");
            }

            var token = CreateAccessToken(checkResult.Data);
            var result = new LoginAnswerDto
            {
                Id = checkResult.Data.id,
                Name = checkResult.Data.name,
                userName = checkResult.Data.username,
                Token = token

            };

            return new SuccessDataResult<LoginAnswerDto>(result);

        }

        [ValidationAspect(typeof(RegisterValidator), Priority = 2)]
        public IDataResult<LoginAnswerDto> Register(RegisterDto registerUser)
        {
            var checkResult = _userService.GetUserByEmail(registerUser.Email);

            if (checkResult.Success)
            {
                return new ErrorDataResult<LoginAnswerDto>("This email is already taken");
            }

            if (registerUser.Password!=registerUser.Password1)
            {
                return new ErrorDataResult<LoginAnswerDto>("Password's  do not match");
            }

          

            byte[] passwordHash, passwordSalt;
            passwordHash = HashingHelper.ComputeSha256Hash(registerUser.Password);
            //HashingHelper.CreatePasswordHash(registerUser.Password, out passwordHash, out passwordSalt);
            var userTocreate = new UserInfo
            {
                name = "",
                username = registerUser.UserName,
                passwordHash = passwordHash,
                passwordSalt = passwordHash,
                surname = "",
                email = registerUser.Email,
            };


            var addingUser = _userService.AddUser(userTocreate);

            var token = CreateAccessToken(userTocreate);
            var result = new LoginAnswerDto
            {
                Name = userTocreate.name,
                userName = userTocreate.username,
                Token = token

            };

            return new SuccessDataResult<LoginAnswerDto>(result);
        }

        public AccessToken CreateAccessToken(UserInfo user)
        {
            var claims = _userService.GetOperationClaim(user);
            var accesstoken = _tokenHelper.CreateToken(user.id, user.email, claims.Data);

            return accesstoken;
        }
    }
}
