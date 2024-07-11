import { IBotanic, IRecipe, RecipeState } from "@/interfaces/interfacesRecipes"
import ItemContainer from "../itemContainer"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from "react";

export const RecipeInfo: React.FC<{recipeData: IRecipe}> = ({recipeData}) => {
    const [data, setData] = useState<IRecipe>({
        id: 0,
        name: "",
        nickname: "",
        abvGin: 0,
        abvMacerated: 0,
        time: 0,
        state: RecipeState.active,
        macerated: [],
        vape: [],
    })

    useEffect(() => {
        setData(recipeData)
    }, [recipeData])

    return (
        <div>
            <div className="flex flex-row gap-2 items-center justify-center">
                <h1 className="header1">{data.name}</h1>
                {/* <circle className="w-2 h-2 bg-darkBrown rounded"/> */}
                <h2 className="header2">{data.nickname}</h2>
            </div>
            <h2 className="textBodyBold text-center">Ingredients</h2>
            <div className="flex flex-row gap-16 w-full">
            <ItemContainer>
                <h3 className="textBody">Macerated</h3>
                {data.macerated.map(botanic => (
                    <div key={botanic.Bid} className="flex flex-row gap-2 w-full">
                        <p className="textBodyBold">{botanic.size} g</p>
                        <p className="textBody"> {botanic.name}</p>
                    </div>
                ))}
            </ItemContainer>
            <ItemContainer>
                <h3 className="textBody">Vape</h3>
                {data.vape.map(botanic => (
                    <div key={botanic.Bid} className="flex flex-row gap-2 w-full">
                        <p className="textBodyBold">{botanic.size} g</p>
                        <p className="textBody"> {botanic.name}</p>
                    </div>
                ))}
            </ItemContainer>
            </div>
        </div>
    )
}