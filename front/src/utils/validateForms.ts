import { IBotanicForm, IBotanicFormError, IRecipeForm, IRecipeFormError } from "@/interfaces/interfacesRecipes";

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

export function validateFormData(values: IRecipeForm): IRecipeFormError {
    let errors: IRecipeFormError = {};
    if(!values.name) {
        errors.name = "Name is required";
    } else if (/\d/.test(values.name)) {
        errors.name = "Name cannot contain numbers";
    }

    if(!values.nickname) {
        errors.nickname = "Nickname is required";
    } else if (/\d/.test(values.nickname)) {
        errors.nickname = "Nickname cannot contain numbers";
    }

    if(!values.time) {
        errors.time = "Time is required";
    } else {
        const time = parseFloat(values.time);
        const regex = /^\d+(\.\d{1,2})?$/;
        if (isNaN(time)) {
            errors.time = "Time must be a number";
        } else if (time < 0) {
            errors.time = "Time cannot be less than 0";
        }
    }

    if(!values.abvGin) {    
        errors.abvGin = "abv gin is required";
    } else {
        const abvGin = parseFloat(values.abvGin);
        const regex = /^\d+(\.\d{1,2})?$/;
        if (isNaN(abvGin)) {
            errors.abvGin = "abv gin must be a number";
        } else if (abvGin < 0) {
            errors.abvGin = "abv gin cannot be less than 0";
        } else if (!regex.test(values.abvGin)) {
            errors.abvGin = "abv gin can have up to 2 decimal places";
        } else if (abvGin > 0.5) {
            errors.abvGin = "abv gin cannot be greater than 0.5";
        } 
    }
    if (!values.abvMacerated) {
        errors.abvMacerated = "abv macerated is required";
    } else {
        const abvMacerated = parseFloat(values.abvMacerated);
        const regex = /^\d+(\.\d{1,2})?$/;
        if (isNaN(abvMacerated)) {
            errors.abvMacerated = "abv macerated must be a number";
        } else if (abvMacerated < 0) {
            errors.abvMacerated = "abv macerated cannot be less than 0";
        } else if (!regex.test(values.abvMacerated)) {
            errors.abvMacerated = "abv macerated can have up to 2 decimal places";
        } else if (abvMacerated > 0.99) {
            errors.abvMacerated = "abv macerated cannot be greater than 0.99";
        }
    }
    return errors
    }