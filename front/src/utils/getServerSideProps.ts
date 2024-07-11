import { getRecipes } from "./fecthRecipes";

export async function getServerSideProps() {
    try {
        const recipes = await getRecipes();
        return {
            props: {
                recipes,
            },
        };
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return {
            props: {
                recipes: [], // Puedes devolver un array vacío o manejarlo de otra manera
            },
        };
    }
}