import { IRecipe } from "@/interfaces/interfacesRecipes";

const APIURL = "http://127.0.0.1:5147"

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



