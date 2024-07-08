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

    const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errorInForm = validateForm(dataForm);
        setError(errorInForm);
        if (Object.keys(errorInForm).length === 0) {
            setSection("macerated");
        } else {
            alert ("there are errors in the form");
        }
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
                    name="nickname"
                    value={dataForm.nickname}
                    placeholder="Original"
                    className="input"
                    onChange={handleChange}
                    required/>
                    {error.nickname ? (<p className="textBody">{error.nickname}</p>) : (<br/>)}
                </div>

                <div className="flex flex-row gap-1">
                    <label className="textBody">abv macerated: </label>
                    <input type="number"
                    name="abvMacerated"
                    value={dataForm.abvMacerated}
                    placeholder="0.9"
                    className="input"
                    max="1"
                    min="0.01"
                    onChange={handleChange}
                    required/>
                    {error.abvMacerated ? (<p className="textBody">{error.abvMacerated}</p>) : (<br/>)}
                </div>

                <div className="flex flex-row gap-1">
                    <label className="textBody">abv gin: </label>
                    <input type="number"
                    name="abvGin"
                    value={dataForm.abvGin}
                    placeholder="0.4"
                    className="input"
                    max="1"
                    min="0.01"
                    onChange={handleChange}
                    required/>
                    {error.abvGin ? (<p className="textBody">{error.abvGin}</p>) : (<br/>)}
                </div>

                <div className="flex flex-row gap-1">
                    <label className="textBody">time macerated: </label>
                    <input type="number"
                    name="time"
                    value={dataForm.time}
                    placeholder="1"
                    className="input"
                    onChange={handleChange}
                    min="1"
                    required/>
                    {error.time ? (<p className="textBody">{error.time}</p>) : (<br/>)}
                </div>

            </ItemContainer>
        </form>
    )
}