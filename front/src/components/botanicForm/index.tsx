import { IBotanic, IBotanicForm } from "@/interfaces/interfacesRecipes"
import { useContext, useState } from "react"
import ItemContainer from "../itemContainer"
import FormContext from "@/utils/formContext"

export const BotanicForm: React.FC = () => {

    //Context
    const context = useContext(FormContext)

    if (!context) {
        throw new Error("useForm must be used within a FormProvider")
    }

    const { section, setSection } = context

    const goToNextSection = () => {
        if (section === "macerated") {
            setSection("vape")
        }
        if (section === "vape") {
            setSection("data")
        }
    }

    const [titleBotanic, setTitleBotanic] = useState(section)
    const [botanics, setBotanics] = useState<IBotanicForm[]>([])
    const [botanic, setBotanic] = useState<IBotanicForm>(
        {
            id: 1,
            name: "",
            size: 0
        }
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setBotanic({
            ...botanic,
            [name]: value
        });
    }

    const addBotanic = () => {
        if (botanic.name === "" || botanic.size === 0) {
            alert ("Please fill in the form")
        } else {
            setBotanics([...botanics, botanic])
            setBotanic({ id: botanic.id + 1, name: "", size: 0 })
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        const botanicArray = []
        for (let i = 0; i < botanics.length; i++) {
            botanicArray.push({ name: botanics[i].name, size: botanics[i].size })
        }
        if (botanic.name !== "" || botanic.size !== 0) {
            botanicArray.push({ name: botanic.name, size: botanic.size })
        }
        localStorage.setItem(`${titleBotanic}`, JSON.stringify(botanicArray))
        setBotanics([])
        goToNextSection()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="header2 text-center">{titleBotanic} botanics</h1>
            <ItemContainer>
                <div className="grid grid-cols-2 gap-4">
                    <h2 className="textBodyBold">Botanic</h2>
                    <h2 className="textBodyBold">Size</h2>
                </div>
                <div>
                    {botanics.map((item, index) => (
                        <div key={index} className="grid grid-cols-2 gap-4">
                            <p className="textBody">{item.name}</p>
                            <p className="textBody">{item.size}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <input type="text" 
                    name="name" 
                    value={botanic.name} 
                    className="input"
                    onChange={handleChange}/>
                    <input type="number"
                    name="size" 
                    className="input"
                    value={botanic.size} 
                    onChange={handleChange}/>
                    <button type="button" className="buttonNotBg w-fit" onClick={addBotanic}>Add botanic</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button type="submit" className="buttonPrimary">next</button>
                </div>
            </ItemContainer>
        </form>
    )
}

export default BotanicForm;