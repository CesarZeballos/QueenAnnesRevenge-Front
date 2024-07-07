import DashboardContainer from "@/components/dashboardContainer"
import ItemContainer from "@/components/itemContainer"
import { RecipeForm } from "@/components/recipeForm"
import Link from "next/link"

const NewRecipe: React.FC = () => {

    return (
        <div className="marginContainer">
            <DashboardContainer>
                <ItemContainer>
                    <h2 className="header2">New recipe</h2>
                    <Link href="/recipes" className="buttonNotBg">Back</Link>
                </ItemContainer>

                <ItemContainer className="col-span-3">
                    <RecipeForm />
                </ItemContainer>
            </DashboardContainer>

        </div>
    )
}

export default NewRecipe