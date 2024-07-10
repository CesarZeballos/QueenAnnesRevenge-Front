'use client'
import { useContext } from "react";
import BotanicForm from "../botanicForm";
import FormContext from "../../utils/formContext";
import DataForm from "../dataForm";
export const RecipeForm: React.FC = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error("useForm must be used within a FormProvider")
  }

  const { section } = context

      return (
          <div className="flex flex-col h-full">
            {section === "macerated" && <BotanicForm />}
            {section === "vape" && <BotanicForm />}
            {section === "data" && <DataForm />}
          </div>
      )
}

export default RecipeForm;