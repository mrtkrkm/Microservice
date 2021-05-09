using Core.Utilities.Results.Interfaces;
using Recipe.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.Business.Abstract
{
    public interface IRecipeService
    {
        IDataResult<IEnumerable<RecipeInfo>> getAll();

        Task<IDataResult<RecipeInfo>> getById(string Id);

        IDataResult<RecipeInfo> Add(RecipeInfo recipe);

        IDataResult<RecipeInfo> Update(RecipeInfo recipe);

        Task<IResult> Delete(string Id);

    }
}
