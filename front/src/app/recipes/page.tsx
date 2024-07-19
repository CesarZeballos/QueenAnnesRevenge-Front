import { DashboardRecipes } from "@/components/dashboardRecipes";
import { IRecipe, IRecipesProps } from "@/interfaces/interfacesRecipes";
import { getRecipes } from "@/utils/fecthRecipes";

const Recipes: React.FC<IRecipesProps> = async () => {
    const recipesBack = await getRecipes();

    return (
        <>
            <DashboardRecipes recipesData={recipesBack}/>
        </>
    )
}

export default Recipes;