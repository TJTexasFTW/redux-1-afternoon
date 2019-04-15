//Import createStore from Redux.
import { createStore } from "redux";

//Create an empty initial state object
const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFName: '',
    authorLName: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_FNAME = 'UPDATE_FNAME';
export const UPDATE_LNAME = 'UPDATE_LNAME';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS';
export const UPDATE_RECIPES = 'UPDATE_RECIPES';


//Write a simple reducer. It should return state by default
function reducer ( state = initialState, action ) {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_NAME:
            return {...state, recipeName: payload};
        case UPDATE_CATEGORY:
            return {...state, recipeCategory: payload};
        case UPDATE_FNAME:
            return {...state, authorFName: payload};
        case UPDATE_LNAME:
            return {...state, authorLName: payload};
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return {...state, ingredients: newIngredients};
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload];
            return {...state, instructions: newInstructions};
        case UPDATE_RECIPES:
            const {
                name,
                category,
                authorFName,
                authorLName,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                authorFName,
                authorLName,
                ingredients,
                instructions
            };
            const newRecipes = [...state.recipes, recipe];
            return { ...state, receipes: newRecipes};

        default:
        return state;
    }
}

//Export a Redux store
export default createStore(reducer);

