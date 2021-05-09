using Core.Utilities.ElasticSearch.Models;
using Core.Utilities.Results.Interfaces;
using Recipe.Entities.Concrete;
using Recipe.Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.Business.Abstract
{
    public interface ISearchService
    {

        Task<IDataResult<ElasticSearchGetModel<RecipeInfo>>> GetById(string Id);

        Task<IDataResult<IEnumerable<ElasticSearchGetModel<RecipeInfo>>>> GetByName(string Name);

        Task<IDataResult<IEnumerable<ElasticSearchGetModel<RecipeInfo>>>> GetByFields(SearchDto searchValues);

        Task<IDataResult<IEnumerable<RecipeInfo>>> GetByField(string field, string value);


        Task<IResult> Add(RecipeInfo recipe);

        Task<IResult> Delete(string recipeId);

        Task<IResult> CreateElasticIndex();

    }
}
