import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store from "./../../store.js";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };
  }

  render() {
    console.log("whatever");
    const recipes = this.state.recipes.map((recipe, i) => {
console.log("RECIPE: ", recipe)
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFName}
          authorLast={recipe.authorLName}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
