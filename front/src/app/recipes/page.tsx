'use client'
import ButtonIcon from "@/components/buttonIcon";
import DashboardContainer from "@/components/dashboardContainer";
import ItemContainer from "@/components/itemContainer";
import { AddCircle } from "@mui/icons-material";
import { useState } from "react";


const Recipes: React.FC = () => {
    const [section, setSection] = useState("actives");

    return (
        <div className="marginContainer">
            <DashboardContainer>
                <ItemContainer>
                    <button className="buttonSecondary" onClick={event => setSection("actives")}>Recipes actives</button>
                    <button className="buttonSecondary" onClick={event => setSection("inactives")}>Recipes incatives</button>
                    <ButtonIcon href="/newRecipe">
                        <AddCircle/>
                        <p>New recipe</p>
                    </ButtonIcon> 
                </ItemContainer>

                <ItemContainer>
                    <h2 className="header2">Recipes {section}</h2>
                </ItemContainer>

                <ItemContainer className="col-span-2">
                    <h2 className="header2">Recipe</h2>
                </ItemContainer>
            </DashboardContainer>
        </div>
    )
}

export default Recipes;