using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Recipe.Business.Abstract;
using Recipe.Entities.Dtos;

namespace Recipe.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {

        private readonly ISearchService _searchService;

        public SearchController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        [HttpPost]
        [Route("/ByTerms")]
        public  ActionResult getByField([FromBody] SearchDto searchValues)
        {
            var result =  _searchService.GetByFields(searchValues);

            if(result.Result.Success)
            {
                return Ok(result.Result.Data);
            }

            return BadRequest(result.Result.Message);
        }

        [HttpGet]
        [Route("ByCategory/{searchValues}")]
        public ActionResult getByField(string searchValues)
        {
            string search = searchValues.Replace("_", " ");
            var result = _searchService.GetByField("categories", search);

            if (result.Result.Success)
            {
                return Ok(result.Result.Data);
            }

            return BadRequest(result.Result.Message);
        }

        [HttpGet]
        [Route("ByTitle/{searchValues}")]
        public ActionResult getByFieldTitle(string searchValues)
        {

            string search = searchValues.Replace("_", " ");
            var result = _searchService.GetByField("title", search);

            if (result.Result.Success)
            {
                return Ok(result.Result.Data);
            }

            return BadRequest(result.Result.Message);
        }

        [HttpGet]
        [Route("ByIngredient/{searchValues}")]
        public ActionResult getByFieldIngredient(string searchValues)
        {

            string search = searchValues.Replace("_", " ");
            var result = _searchService.GetByField("ingredients", search);

            if (result.Result.Success)
            {
                return Ok(result.Result.Data);
            }

            return BadRequest(result.Result.Message);
        }

        [HttpGet]
        [Route("ByDirection/{searchValues}")]
        public ActionResult getByFieldirection(string searchValues)
        {

            string search = searchValues.Replace("_", " ");
            var result = _searchService.GetByField("directions", search);

            if (result.Result.Success)
            {
                return Ok(result.Result.Data);
            }

            return BadRequest(result.Result.Message);
        }


        [HttpGet]
        [Route("/ById/{recipeId}")]
        public ActionResult getById(string recipeId)
        {
            var result = _searchService.GetById(recipeId);

            if(result.Result.Success)
            {
                return Ok(result.Result.Data);
            }

            return BadRequest(result.Result.Message);
        }


        [HttpGet]
        [Route("/CreateElastic/")]
        public ActionResult Elastic()
        {
            var result = _searchService.CreateElasticIndex();

            if(result.Result.Success)
            {
                return Ok();
            }

            return BadRequest();
        }

    }
}