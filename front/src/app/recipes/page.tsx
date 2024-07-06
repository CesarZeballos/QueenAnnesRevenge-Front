'use client'
import ButtonIcon from "@/components/buttonIcon";
import DashboardContainer from "@/components/dashboardContainer";
import ItemContainer from "@/components/itemContainer";
import {RecipeCardList} from "@/components/recipeCardList";
import { RecipeInfo } from "@/components/recipeInfo";
import { IRecipe, RecipeState } from "@/interfaces/interfacesRecipes";
import { AddCircle } from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";

const recipesArray: IRecipe[] = [
    {id: 1, name: "031", nickname: "Gin", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 2, name: "030", nickname: "Vodka", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 3, name: "029", nickname: "Rhum", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 4, name: "028", nickname: "Whisky", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 5, name: "027", nickname: "Tequila", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 6, name: "026", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.active, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 7, name: "025", nickname: "Licor", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 8, name: "024", nickname: "Vino", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 9, name: "023", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 10, name: "022", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
    {id: 11, name: "021", nickname: "Cerveza", abvGin: 4.5, abvMacerated: 4.5, time: 30, state: RecipeState.disabled, macerated: [{name: "enebro", size: 20},
        {name: "regaliz", size: 1.55},
        {name: "cardamomo", size: 0.23},
        {name: "coriandro", size: 8},
        {name: "angelica", size: 1.55},
        {name: "sal", size: 0.5}], vape: [{name: "limon", size: 0.175},
            {name: "pomelo", size: 0.3025}]},
];

const Recipes: React.FC = () => {
    const [section, setSection] = useState("active");
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [recipeId, setRecipeId] = useState(1);
    const [recipeInfo, setRecipeInfo] = useState<IRecipe>(recipesArray[0]);

    useEffect(()=> {
        console.log(section)
        const recipes = recipesArray.filter(recipe => recipe.state === section);
        setRecipes(recipes);
    }, [section])

    useEffect(()=> {
        const recipe = recipesArray.find(recipe => recipe.id === recipeId);
        if(!recipe) return;
        setRecipeInfo(recipe);
    }, [recipeId])

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
                            <button key={recipe.id} className={`item ${recipe.id === recipeId ? 'bg-darkBeige' : 'item'}`} onClick={() => setRecipeId(recipe.id)}>
                                <RecipeCardList key={recipe.id} data={recipe} />
                            </button>
                        ))}
                    </div>
                </ItemContainer>

                <ItemContainer className="col-span-2">
                    <RecipeInfo recipeData={recipeInfo} />
                    <Link href="/batches/newBatch" className="buttonPrimary">New batch</Link>
                </ItemContainer>
            </DashboardContainer>
        </div>
    )
}

export default Recipes;