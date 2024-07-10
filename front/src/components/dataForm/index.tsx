'use client'
import { IRecipeForm } from "@/interfaces/interfacesRecipes";
import { useEffect, useState } from "react";
import ItemContainer from "../itemContainer";
import { postRecipe } from "@/utils/fecthRecipes";
import { useRouter } from "next/navigation";

export const DataForm: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<IRecipeForm>({
        name: "",
        nickname: "",
        time: 0,
        abvGin: 0,
        abvMacerated: 0,
        macerated: [],
        vape: []
    })

    useEffect(() => {
        const vape = window.localStorage.getItem("vape");
        const macerated = window.localStorage.getItem("macerated");
    
        if (macerated) {
            setFormData(prevFormData => ({
                ...prevFormData,
                macerated: JSON.parse(macerated)
            }));
        }
    
        if (vape) {
            setFormData(prevFormData => ({
                ...prevFormData,
                vape: JSON.parse(vape)
            }));
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = formData;
        console.log(data)
        await postRecipe(data);
        localStorage.clear();
        router.push("/recipes")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <ItemContainer>
                <div>
                    <h1 className="header2 text-center">Botanics</h1>
                    <div className="flex flex-row gap-9">
                        <ItemContainer>
                            <h2 className="textBodyBold text-center">macerated</h2>
                            {formData.macerated.map(botanic => (
                                <div key={botanic.name} className="flex flex-row gap-2">
                                    <p className="textBody w-full">{botanic.name}</p>
                                    <p className="textBody w-full">{botanic.size} g</p>
                                </div>
                            ))}
                        </ItemContainer>
                        <ItemContainer>
                            <h2 className="textBodyBold text-center">vape</h2>
                            {formData.vape.map(botanic => (
                                <div key={botanic.name} className="flex flex-row gap-2">
                                    <p className="textBody w-full">{botanic.name}</p>
                                    <p className="textBody w-full">{botanic.size} g</p>
                                </div>
                            ))}
                        </ItemContainer>
                    </div>
                </div>
                <div>
                    <h2 className="textBodyBold text-center">Data</h2>
                </div>
                <ItemContainer>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="textBody text-end">Name:</label>
                        <input type="text"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        className="input"
                        required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="textBody text-end">Nickname:</label>
                        <input type="text"
                        value={formData.nickname}
                        onChange={handleChange}
                        name="nickname"
                        className="input"
                        required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="textBody text-end">macerated time:</label>
                        <input type="text"
                        value={formData.time}
                        onChange={handleChange}
                        name="time"
                        className="input"
                        required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="textBody text-end">abv gin:</label>
                        <input type="text"
                        value={formData.abvGin}
                        onChange={handleChange}
                        name="abvGin"
                        className="input"
                        required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="textBody text-end">abv macerated:</label>
                        <input type="text"
                        value={formData.abvMacerated}
                        onChange={handleChange}
                        name="abvMacerated"
                        className="input"
                        required
                        />
                    </div>
                </ItemContainer>
                <div>
                    <button type="submit" className="buttonPrimary">add recipe</button>
                </div>
            </ItemContainer>
        </form>
    )
}

export default DataForm;