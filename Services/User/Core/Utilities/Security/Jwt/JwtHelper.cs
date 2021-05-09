using Core.Concrete.Dtos;
using Core.Concrete.Entities;
using Core.Concrete.Entities.MongoEntities;
using Core.Extensions;
using Core.Utilities.Security.Common;
using Core.Utilities.Security.Encryption;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Core.Utilities.Security.Jwt
{
    public class JwtHelper : ITokenHelper
    {
        public IConfiguration Configuration { get; }
        private TokenOptions _tokenOptions;
        private DateTime _accessTokenExpiration;

        public JwtHelper(IConfiguration configuration)
        {
            Configuration = configuration;
            _tokenOptions = Configuration.GetSection("TokenOptions").Get<TokenOptions>();
        }

        public AccessToken CreateToken(int Id, string Email, List<UserOperationClaimDto> claims)
        {
            _accessTokenExpiration = DateTime.Now.AddMinutes(_tokenOptions.AccessTokenExpiration);
            var securityKey = SecurityKeyHelper.CreateSecurityKey(_tokenOptions.SecurityKey);
            var signingCredentials = SigningCredentialsHelper.CreateSigningCredentials(securityKey);
            var jwt = CreateJwtSecurityToken(_tokenOptions, Id, Email, signingCredentials, claims);
            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var token = jwtSecurityTokenHandler.WriteToken(jwt);

            return new AccessToken { 
                Token = token, 
                Expiration = _accessTokenExpiration 
            };
        }


        public JwtSecurityToken CreateJwtSecurityToken(TokenOptions tokenOptions, int Id, string Email, SigningCredentials signingCredentials, List<UserOperationClaimDto> operationClaims)
        {
            var jwt = new JwtSecurityToken(
                    issuer: tokenOptions.Issuer,
                    audience: tokenOptions.Audience,
                    expires: _accessTokenExpiration,
                    notBefore: DateTime.Now,
                    claims: SetClaims(Id, Email, operationClaims),
                    signingCredentials: signingCredentials
                );

            return jwt;
        }
       

        private IEnumerable<Claim> SetClaims(int Id, string Email, List<UserOperationClaimDto> operationClaims)
        {
            var claims = new List<Claim>();
            claims.AddNameIdentifier(Id.ToString());
            claims.AddEmail(Email);
            //claims.AddName($"{user.Name} {user.Surname}");
            claims.AddRoles(operationClaims.Select(c => c.ClaimName).ToArray());

            return claims;
        }


      
    }
}
