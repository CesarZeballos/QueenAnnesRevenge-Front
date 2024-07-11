import { IRecipeForm } from "@/interfaces/interfacesRecipes";
const APIURL = process.env.API_URL;
export async function getRecipes() {
    try {
        const response = await fetch(`http://localhost:5147/recipes`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const recipesBack = await response.json();

        return recipesBack
    } catch (error) {
        console.log("error obteniendo las recetas.", error);
        throw error;
    }
}

export async function postRecipe(recipe: IRecipeForm) {
    try {
        const response = await fetch(`http://localhost:5147/recipes/schedule`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe)
    });
    const data = await response.json();
    console.log(data)
    alert("recipe added")
    } catch (error) {
        console.log("error al registrar receta.", error);
        throw error;
    }
}

export async function putStateRecipe(id:number) {
    try {
        const response = await fetch(`http://localhost:5147/recipes/${id}/state`, {
            method: "put",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data)
        alert("recipe updated")
    } catch (error) {
        console.log("error al registrar receta.", error);
        throw error;
    }
}




