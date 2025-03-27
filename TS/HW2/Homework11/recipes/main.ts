interface Irecipes  {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: string;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface IObg{
    recipes: Irecipes[];
    limit: number;
    skip: number;
    total: number;

}

fetch('https://dummyjson.com/recipes?limit=50')
    .then(value => value.json())
    .then((res:IObg):void => {
        let {recipes} = res;
        console.log(res)

        let wrapp_recipes:HTMLElement = document.getElementById('wrapp_recipes')!;

        for (const recipe of recipes) {
            let div_recipe:HTMLDivElement = document.createElement('div');

            let h3:HTMLHeadingElement = document.createElement('h3');
            h3.className = 'h3_recipe';
            h3.innerHTML = 'Рецепт ' + recipe.id;

            let h4_name:HTMLHeadingElement = document.createElement('h4');
            h4_name.innerHTML = `Name recipe <span style="font-weight: normal;">${recipe.name}</span>`;

            let h3_ingredient:HTMLHeadingElement = document.createElement('h3');
            h3_ingredient.innerHTML = 'Ingredient'
            let ul_ingredient:HTMLUListElement = document.createElement('ul');

            for (const ingredient of recipe.ingredients) {
                let li_ingredient:HTMLLIElement = document.createElement('li');
                for (let ingredient_li of ingredient) {
                    li_ingredient.append(ingredient_li);
                }
                ul_ingredient.appendChild(li_ingredient);
            }

            let div_instruction:HTMLDivElement = document.createElement('div');
            let h3_instruction:HTMLHeadingElement = document.createElement('h3');
            h3_instruction.innerHTML = 'Instruction';

            for (const instruction of recipe.instructions) {
                let p_instruction:HTMLParagraphElement = document.createElement('p');

                p_instruction.append(instruction);
                div_instruction.append(p_instruction);
            }

            let div_text:HTMLDivElement = document.createElement('div');

            let p_prepTimeMinutes:HTMLParagraphElement = document.createElement('p');
            p_prepTimeMinutes.innerHTML = '<b>prepTimeMinutes:</b> ' + recipe.prepTimeMinutes;

            let p_cookTimeMinutes:HTMLParagraphElement = document.createElement('p');
            p_cookTimeMinutes.innerHTML = '<b>cookTimeMinutes:</b> ' + recipe.cookTimeMinutes;

            let p_servings:HTMLParagraphElement = document.createElement('p');
            p_servings.innerHTML = '<b>servings:</b> ' + recipe.servings;

            let p_difficulty:HTMLParagraphElement = document.createElement('p');
            p_difficulty.innerHTML = '<b>difficulty:</b> ' + recipe.difficulty;

            let p_cuisine:HTMLParagraphElement = document.createElement('p');
            p_cuisine.innerHTML = '<b>cuisine:</b> ' + recipe.cuisine;

            let p_caloriesPerServing:HTMLParagraphElement = document.createElement('p');
            p_caloriesPerServing.innerHTML = '<b>caloriesPerServing:</b> ' + recipe.caloriesPerServing

            let p_tags:HTMLParagraphElement = document.createElement('p');
            p_tags.innerHTML = '<b>tags:</b> ' + recipe.tags.join(", ");

            let p_userId:HTMLParagraphElement = document.createElement('p');
            p_userId.innerHTML = '<b>userId:</b> ' + recipe.userId;

            let img:HTMLImageElement = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.name;

            let p_rating:HTMLParagraphElement = document.createElement('p');
            p_rating.innerHTML = '<b>rating:</b> ' + recipe.rating

            let p_reviewCount:HTMLParagraphElement = document.createElement('p');
            p_reviewCount.innerHTML = '<b>reviewCount:</b> ' + recipe.reviewCount

            let p_mealType:HTMLParagraphElement = document.createElement('p');
            p_mealType.innerHTML = '<b>mealType:</b> ' + recipe.mealType.join(", ")

            div_text.append(p_prepTimeMinutes, p_cookTimeMinutes, p_servings, p_difficulty, p_cuisine, p_caloriesPerServing, p_tags, p_userId, p_rating, p_reviewCount, p_mealType)

            div_recipe.append(h3, h4_name, img, h3_ingredient, ul_ingredient, h3_instruction, div_instruction, div_text);
            wrapp_recipes.appendChild(div_recipe);

        }
    });