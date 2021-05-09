var { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Review {
        id:Int
        user_id:Int!
        review:String!
        recipe_id:String!
    }
    type Rating {
        id:Int!
        date_posted:String
        user_id:Int
        recipe_id:String!
        rate:Int!

    }


    type UserInfos {
        email:String!
    }

    type Recipe {
        objectId: String!
        description:String
        ingredients:[String]
        title:String
        rating:Float
        categories:[String]
        LastReview:String

    }

    type Ratings {
        getRatingByUserId(user_id:Int!):[Rating!]!
        getRating(user_id:Int!, recipe_id:String!):Rating!
        getAllRating:[Rating!]!
    }

    type Reviews {
        getReviewByUserId(user_id:Int!):[Review]!
        getReview(user_id:Int!, recipe_id:Int!):Review!
        getReviewByRecipe(recipe_id:String!):[Review!]!
        getAllReview:[Review!]!
    }

    type Users {
        getUserById(userId:Int!):UserInfos!
    }

    type Recipes {
        getAllRecipe:[Recipe]!
        searchByCategory(Values:String!):[Recipe]!
        searchByIngredients(Values:String!):[Recipe]!
    }

    type Auth {
        token: String! 
        expiration: String!
    }

    input RatingInput {
        user_id: Int! 
        recipe_id: String!
        rate:Int!
    }

    input ReviewInput {
        user_id: Int! 
        recipe_id: String!
        review:String!
    }

    input RegisterInput {
         Email:String! 
         Password:String! 
         Password1:String! 
         UserName:String!
    }

    type AuthMutate {
        Register(Input:RegisterInput): Auth
        Login(email:String!, password:String!): Auth
    }

    type RatingMutate {
        addRating(Input:RatingInput): String
        updateRating(Input:RatingInput): String
    }

    type ReviewMutate {
        addReview(Input:ReviewInput): String
        updateReview(Input:ReviewInput): String
    }

    type QueryTypes {
        RecipeQueries:Recipes
        RatingQueries:Ratings
        ReviewQueries:Reviews
        UserQueries:Users
        }

    type MutationTypes {
        AuthMutation: AuthMutate
        RatingMutation:RatingMutate
        ReviewMutation:ReviewMutate
    }

    schema {
        query:QueryTypes
        mutation:MutationTypes
    }
`);
