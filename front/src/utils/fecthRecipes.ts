import { IRecipeForm } from "@/interfaces/interfacesRecipes";
const APIURL = process.env.NEXT_PUBLIC_API_URL
export const getRecipes = async () => {
    try {
        const response = await fetch(`http://localhost:5147/recipes`, {
            method: "GET",
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '20',
              },
        });
        const data = await response.json();
        return data;
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




