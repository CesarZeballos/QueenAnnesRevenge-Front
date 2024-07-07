'use client'
import { IRecipeForm, IRecipeFormError } from "@/interfaces/interfacesRecipes";
import { useState } from "react";
import ItemContainer from "../itemContainer";

export const RecipeForm = () => {
    const [section, setSection] = useState("data");

    const [dataForm, setDataForm] = useState<IRecipeForm>({
        name: "",
        nickname: "",
        abvGin: 0,
        abvMacerated: 0,
        time: 0,
        macerated: [],
        vape: [],
    });

    const [error, setError] = useState<IRecipeFormError>({
        name: "",
        nickname: "",
        abvGin: "",
        abvMacerated: "",
        time: "",
        macerated: "",
        vape: "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setDataForm({
            ...dataForm,
            [name]: value
        });
    }

    return (
        <form>
            <ItemContainer>
                <div className="flex flex-row gap-1">
                    <label className="textBody">Name: </label>
                    <input type="text"
                    name="name"
                    value={dataForm.name}
                    placeholder="031"
                    className="input"
                    onChange={handleChange}
                    maxLength={3}
                    required/>
                    {error.name ? (<p className="textBody">{error.name}</p>) : (<br/>)}
                </div>
                
                <div className="flex flex-row gap-1">
                    <label className="textBody">nickname: </label>
                    <input type="text"
                    name="name"
                    value={dataForm.nickname}
                    placeholder="031"
                    className="input"
                    onChange={handleChange}
                    required/>
                    {error.nickname ? (<p className="textBody">{error.nickname}</p>) : (<br/>)}
                </div>

                <div className="flex flex-row gap-1">
                    <label className="textBody">nickname: </label>
                    <input type="text"
                    name="name"
                    value={dataForm.nickname}
                    placeholder="031"
                    className="input"
                    onChange={handleChange}
                    required/>
                    {error.nickname ? (<p className="textBody">{error.nickname}</p>) : (<br/>)}
                </div>

            </ItemContainer>
        </form>
    )
}