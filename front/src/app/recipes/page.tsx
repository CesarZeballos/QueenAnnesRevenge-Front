'use client'
import ButtonIcon from "@/components/buttonIcon";
import DashboardContainer from "@/components/dashboardContainer";
import ItemContainer from "@/components/itemContainer";
import {RecipeCardList} from "@/components/recipeCardList";
import { IRecipe, RecipeState } from "@/interfaces/interfacesRecipes";
import { AddCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";

const recipesArray: IRecipe[] = [
    {id: 1, name: "031", nickname: "Gin", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [], vape: []},
    {id: 2, name: "030", nickname: "Vodka", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [], vape: []},
    {id: 3, name: "029", nickname: "Rhum", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [], vape: []},
    {id: 4, name: "028", nickname: "Whisky", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [], vape: []},
    {id: 5, name: "027", nickname: "Tequila", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [], vape: []},
    {id: 6, name: "026", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [], vape: []},
    {id: 7, name: "025", nickname: "Licor", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [], vape: []},
    {id: 8, name: "024", nickname: "Vino", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [], vape: []},
    {id: 9, name: "023", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [], vape: []},
    {id: 10, name: "022", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [], vape: []},
    {id: 11, name: "021", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [], vape: []},
];

const Recipes: React.FC = () => {
    const [section, setSection] = useState("active");
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(()=> {
        console.log(section)
        const recipes = recipesArray.filter(recipe => recipe.state === section);
        setRecipes(recipes);
    }, [section])

    return (
        <div className="marginContainer">
            <DashboardContainer>
                <ItemContainer>
                    <button className="buttonSecondary" onClick={event => setSection("active")}>Recipes actives</button>
                    <button className="buttonSecondary" onClick={event => setSection("disabled")}>Recipes incatives</button>
                    <ButtonIcon href="/newRecipe">
                        <AddCircle/>
                        <p>New recipe</p>
                    </ButtonIcon> 
                </ItemContainer>

                <ItemContainer>
                    <h2 className="header2">Recipes {section}</h2>
                    <div>
                        {recipes.map((recipe: IRecipe) => (
                            <RecipeCardList key={recipe.id} data={recipe} />
                        ))}
                    </div>
                </ItemContainer>

                <ItemContainer className="col-span-2">
                    <h2 className="header2">Recipe</h2>
                </ItemContainer>
            </DashboardContainer>
        </div>
    )
}

export default Recipes;