using Core.Utilities.Results.Concrete;
using Core.Utilities.Results.Interfaces;
using Recipe.Business.Abstract;
using Recipe.DAL.Abstract;
using Recipe.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.Business.Concrete
{
    public class RecipeManager : IRecipeService
    {
        private readonly IRecipeDal _recipeDal;
        private readonly ISearchService _searchService;

        public RecipeManager(IRecipeDal recipeDal, ISearchService searchService)
        {
            _recipeDal = recipeDal;
            _searchService = searchService;
        }


     

        public  IDataResult<RecipeInfo> Add(RecipeInfo recipe)
        {
            try
            {
                 _recipeDal.InsertOne(recipe);
              

                return new SuccessDataResult<RecipeInfo>(recipe, "Successfully Added");
            }
            catch
            {
                return new ErrorDataResult<RecipeInfo>(recipe, "An error occured");
            }
           
        }

        public async Task<IResult> Delete(string Id)
        {
            try
            {
                _recipeDal.DeleteById(Id);
                await _searchService.Delete(Id);
                return new SuccessResult("Successfully Removed");
            }
            catch
            {
                return new ErrorResult("An Error Occured");
            }
           


        }

        public IDataResult<IEnumerable<RecipeInfo>> getAll()
        {
            var result = _recipeDal.FilterBy(_ => true).ToList();

            return new SuccessDataResult<IEnumerable<RecipeInfo>>(result);
        }

        public async Task<IDataResult<RecipeInfo>> getById(string Id)
        {
            var result = await _recipeDal.FindByIdAsync(Id);

            return new SuccessDataResult<RecipeInfo>(result);
        }

        public IDataResult<RecipeInfo> Update(RecipeInfo recipe)
        {
            try
            {
                _recipeDal.ReplaceOne(recipe);

                return new SuccessDataResult<RecipeInfo>(recipe);
            }
            catch
            {
                return new ErrorDataResult<RecipeInfo>(recipe, "An error occured");
            }
        }
    }
}
