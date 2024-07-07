import { IRecipe } from "@/interfaces/interfacesRecipes";
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



