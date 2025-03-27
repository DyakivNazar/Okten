"use strict";
fetch('https://dummyjson.com/recipes?limit=50')
    .then(value => value.json())
    .then((res) => {
    let { recipes } = res;
    console.log(res);
    let wrapp_recipes = document.getElementById('wrapp_recipes');
    for (const recipe of recipes) {
        let div_recipe = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.className = 'h3_recipe';
        h3.innerHTML = 'Рецепт ' + recipe.id;
        let h4_name = document.createElement('h4');
        h4_name.innerHTML = `Name recipe <span style="font-weight: normal;">${recipe.name}</span>`;
        let h3_ingredient = document.createElement('h3');
        h3_ingredient.innerHTML = 'Ingredient';
        let ul_ingredient = document.createElement('ul');
        for (const ingredient of recipe.ingredients) {
            let li_ingredient = document.createElement('li');
            for (let ingredient_li of ingredient) {
                li_ingredient.append(ingredient_li);
            }
            ul_ingredient.appendChild(li_ingredient);
        }
        let div_instruction = document.createElement('div');
        let h3_instruction = document.createElement('h3');
        h3_instruction.innerHTML = 'Instruction';
        for (const instruction of recipe.instructions) {
            let p_instruction = document.createElement('p');
            p_instruction.append(instruction);
            div_instruction.append(p_instruction);
        }
        let div_text = document.createElement('div');
        let p_prepTimeMinutes = document.createElement('p');
        p_prepTimeMinutes.innerHTML = '<b>prepTimeMinutes:</b> ' + recipe.prepTimeMinutes;
        let p_cookTimeMinutes = document.createElement('p');
        p_cookTimeMinutes.innerHTML = '<b>cookTimeMinutes:</b> ' + recipe.cookTimeMinutes;
        let p_servings = document.createElement('p');
        p_servings.innerHTML = '<b>servings:</b> ' + recipe.servings;
        let p_difficulty = document.createElement('p');
        p_difficulty.innerHTML = '<b>difficulty:</b> ' + recipe.difficulty;
        let p_cuisine = document.createElement('p');
        p_cuisine.innerHTML = '<b>cuisine:</b> ' + recipe.cuisine;
        let p_caloriesPerServing = document.createElement('p');
        p_caloriesPerServing.innerHTML = '<b>caloriesPerServing:</b> ' + recipe.caloriesPerServing;
        let p_tags = document.createElement('p');
        p_tags.innerHTML = '<b>tags:</b> ' + recipe.tags.join(", ");
        let p_userId = document.createElement('p');
        p_userId.innerHTML = '<b>userId:</b> ' + recipe.userId;
        let img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.name;
        let p_rating = document.createElement('p');
        p_rating.innerHTML = '<b>rating:</b> ' + recipe.rating;
        let p_reviewCount = document.createElement('p');
        p_reviewCount.innerHTML = '<b>reviewCount:</b> ' + recipe.reviewCount;
        let p_mealType = document.createElement('p');
        p_mealType.innerHTML = '<b>mealType:</b> ' + recipe.mealType.join(", ");
        div_text.append(p_prepTimeMinutes, p_cookTimeMinutes, p_servings, p_difficulty, p_cuisine, p_caloriesPerServing, p_tags, p_userId, p_rating, p_reviewCount, p_mealType);
        div_recipe.append(h3, h4_name, img, h3_ingredient, ul_ingredient, h3_instruction, div_instruction, div_text);
        wrapp_recipes.appendChild(div_recipe);
    }
});
