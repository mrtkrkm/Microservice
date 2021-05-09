using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Recipe.Business.Abstract;
using Recipe.Entities.Concrete;

namespace Recipe.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {


        private readonly IRecipeService _recipeservice;

        private readonly ISearchService _searchService;

        public RecipeController(IRecipeService recipeservice, ISearchService searchService)
        {
            _recipeservice = recipeservice;
            _searchService = searchService;
        }


        [HttpGet]
        [Route("/")]
        public ActionResult getRecipes()
        {
            var result = _recipeservice.getAll();
            if(result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result.Message);
        }


        [HttpGet]
        [Route("/api/{recipeId}")]
        public async Task<ActionResult> getById(string recipeId)
        {
            var result = await _recipeservice.getById(recipeId);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result.Message);
        }


        [HttpPost]
        [Route("")]
        public  ActionResult Add(RecipeInfo recipe)
        {
            var result = _recipeservice.Add(recipe);
            if (result.Success)
            {
                _searchService.Add(recipe);
                return Ok(result);
            }

            return BadRequest(result.Message);
        }


        [HttpPut]
        [Route("")]
        public ActionResult Update(RecipeInfo recipe)
        {
            var result = _recipeservice.Update(recipe);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result.Message);
        }

        [HttpDelete]
        [Route("/api/{recipeId}")]
        public ActionResult Delete(string recipeId)
        {
            var result = _recipeservice.Delete(recipeId);
            if (result.Result.Success)
            {
                //_searchService.Delete(recipeId);
                return Ok(result);
            }

            return BadRequest(result.Result.Message);
        }
    }
}