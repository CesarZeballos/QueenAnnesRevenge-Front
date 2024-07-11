import { IBotanicForm, IBotanicFormError } from "@/interfaces/interfacesRecipes";

export function validateFormBotanic(values: IBotanicForm): IBotanicFormError {
    let errors: IBotanicFormError = {};
    if(!values.name) {
        errors.name = "Name is required";
    }else if (/\d/.test(values.name)) {
        errors.name = "Name cannot contain numbers";
    }

    if(!values.size) {
        errors.size = "Size is required";
    } else {
        const size = parseFloat(values.size);
        const regex = /^\d+(\.\d{1,2})?$/;
        if (isNaN(size)) {
            errors.size = "Size must be a number";
        } else if (size < 0) {
            errors.size = "Size cannot be less than 0";
        } else if (!regex.test(values.size)) {
            errors.size = "Size can have up to 2 decimal places";
        }
    }
    return errors
}