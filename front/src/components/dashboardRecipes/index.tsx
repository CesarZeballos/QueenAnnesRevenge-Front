'use client'
import ButtonIcon from "@/components/buttonIcon";
import DashboardContainer from "@/components/dashboardContainer";
import ItemContainer from "@/components/itemContainer";
import {RecipeCardList} from "@/components/recipeCardList";
import { RecipeInfo } from "@/components/recipeInfo";
import { IRecipe, RecipeState } from "@/interfaces/interfacesRecipes";
import { getRecipes } from "@/utils/fecthRecipes";
import { AddCircle } from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";

export const DashboardRecipes = ({recipesData}: {recipesData: IRecipe[]}) => {
    //estados para renderizar las recetas
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [section, setSection] = useState("active");

    useEffect(() => {
        const recipeArray = recipesData;
        if(section === "active") {
            const activesRecipes = recipeArray.filter((recipe: IRecipe) => recipe.state === RecipeState.active);
            setRecipes(activesRecipes);
        }

        if(section === "disabled") {
            const disabledRecipes = recipeArray.filter((recipe: IRecipe) => recipe.state === RecipeState.disabled);
            setRecipes(disabledRecipes);
        }
    }, [section])

    //estados para renderizar la info de la receta
    const [recipeId, setRecipeId] = useState(0);
    const [recipeInfo, setRecipeInfo] = useState<IRecipe>({} as IRecipe);

    useEffect(()=> {
        const recipe = recipes.find(recipe => recipe.id === recipeId);
        if(!recipe) return;
        setRecipeInfo(recipe);
    }, [recipeId])

    return (
        <div className="marginContainer">
            <DashboardContainer>
                <ItemContainer>
                    <h2 className="header2">Recipes</h2>
                    <button className="buttonSecondary" onClick={event => setSection("active")}>Recipes actives</button>
                    <button className="buttonSecondary" onClick={event => setSection("disabled")}>Recipes incatives</button>
                    <ButtonIcon href="/newRecipe">
                        <AddCircle/>
                        <p>New recipe</p>
                    </ButtonIcon> 
                </ItemContainer>

                <ItemContainer>
                    <h2 className="header2">Recipes {section}</h2>
                    {
                        recipes.length === 0 ? <p className="textBody">Loading recipes...</p> :
                        <div>
                            {recipes.map((recipe: IRecipe) => (
                                <div key={recipe.id} className={`item ${recipe.id === recipeId ? 'bg-darkBeige' : 'item'}`} onClick={() => setRecipeId(recipe.id)}>
                                    <RecipeCardList key={recipe.id} data={recipe} />
                                </div>
                            ))}
                        </div>
                    }
                </ItemContainer>

                <ItemContainer className="col-span-2">
                    {recipeInfo.id ? <RecipeInfo recipeData={recipeInfo} /> : <p className="textBody">Select a recipe</p>}
                    <Link href="/batches/newBatch" className="buttonPrimary">New batch</Link>
                </ItemContainer>
            </DashboardContainer>
        </div>
    )
}