import { DashboardRecipes } from "@/components/dashboardRecipes";
import { getRecipes } from "@/utils/fecthRecipes";

const Recipes: React.FC = async () => {
    const recipesData = await getRecipes();
    return (
        <>
            <DashboardRecipes recipesData={recipesData}/>
        </>
    )
}

export default Recipes;