import { IBotanic, IBotanicForm } from "@/interfaces/interfacesRecipes"
import { useContext, useEffect, useState } from "react"
import ItemContainer from "../itemContainer"
import FormContext from "@/utils/formContext"
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { validateFormBotanic } from "@/utils/validateForms";

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

    //logica del form
    const [add, setAdd] = useState(false)

    const [titleBotanic, setTitleBotanic] = useState(section)
    const [botanics, setBotanics] = useState<IBotanicForm[]>([])
    const [botanic, setBotanic] = useState<IBotanicForm>(
        {
            Bid: 0,
            name: "",
            size: ""
        }
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setBotanic({
            ...botanic,
            Bid: botanics.length + 1,
            [name]: value
        });
    }

    const addBotanic = () => {
        if (botanic.name === "" || botanic.size === "") {
            alert ("Please fill in the form")
        } else {
            const validateForm = validateFormBotanic(botanic)
            if (Object.keys(validateForm).length > 0) {
                alert (JSON.stringify(validateForm))
            } else {
                setBotanics([...botanics, botanic])
                setBotanic({ Bid: 0, name: "", size: "" })
                setAdd(true)
            }
        }
    }

    const deleteBotanic = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const newBotanics = botanics.filter((botanic: IBotanicForm) => botanic.Bid !== botanic.Bid)
        setBotanics(newBotanics)
    }

    const setLocalStorage = () => {
        const botanicData = []
        for (let i = 0; i < botanics.length; i++) {
            botanicData.push({ Bid: botanics[i].Bid, name: botanics[i].name, size: JSON.parse(botanics[i].size) })
        }
        localStorage.setItem(`${titleBotanic}`, JSON.stringify(botanicData))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (botanic.name === "" || botanic.size === "") {
            setLocalStorage()
        } else 
        
        // if (botanic.name !== "" || botanic.size !== "") 
        {
            setBotanics([...botanics, botanic])
            setLocalStorage()
            // botanicData.push({ Bid: botanics.length + 1, name: botanic.name, size: JSON.parse(botanic.size) })
        } 
        setBotanics([])
        goToNextSection()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="header2 text-center">{titleBotanic} botanics</h1>
            <ItemContainer>
                <div className="grid grid-cols-3 gap-4">
                    <h2 className="textBodyBold">Botanic</h2>
                    <h2 className="textBodyBold">Size</h2>
                    <h2 className="textBodyBold"></h2>
                </div>
                <div>
                    {botanics.map((item, index) => (
                        <div key={item.Bid} className="grid grid-cols-3 gap-4">
                            <p className="textBody">{item.name}</p>
                            <p className="textBody">{item.size}</p>
                            <button className="cursor-pointer" onClick={deleteBotanic}>
                                <CancelIcon />
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    {(add) ? 
                    <button type="button" className="buttonNotBg w-fit" onClick={() => setAdd(false)}>Add botanic</button> 
                    : 
                    <div className="grid grid-cols-3 gap-4">
                        <input type="text" 
                            name="name" 
                            value={botanic.name} 
                            className="input"
                            onChange={handleChange}
                            required/>
                        <input type="number"
                            name="size" 
                            className="input"
                            value={botanic.size} 
                            onChange={handleChange}
                            min="0.01"
                            required/>
                        <div className="flex flex-row gap-2">
                            <button type="button" className="buttonNotBg w-fit flex flex-row gap-2" onClick={addBotanic}>
                                <AddCircleIcon />
                                Add
                            </button>
                            <button onClick={() => setAdd(true)}><CancelIcon /></button>
                        </div>
                    </div>
            }
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button type="submit" className="buttonPrimary">next</button>
                </div>
            </ItemContainer>
        </form>
    )
}

export default BotanicForm;