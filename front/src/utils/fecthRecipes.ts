import { IRecipeForm } from "@/interfaces/interfacesRecipes";
const APIURL = process.env.NEXT_PUBLIC_API_URL
export const getRecipes = async () => {
    try {
        const response = await fetch(`${APIURL}/recipes`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error obteniendo las recetas.", error);
        throw error;
    }
}

export const postRecipe = async (recipe: IRecipeForm) => {
    try {
        const response = await fetch(`${APIURL}/recipes/schedule`, {
            method: "POST",
        body: JSON.stringify(recipe)
    });
    alert("recipe added")
    } catch (error) {
        console.log("error al registrar receta.", error);
        throw error;
    }
}




