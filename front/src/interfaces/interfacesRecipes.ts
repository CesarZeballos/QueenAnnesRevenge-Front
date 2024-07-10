export interface IRecipe {
    id: number,
    name: string,
    nickname: string,
    vape: IBotanic[],
    macerated: IBotanic[],
    abvMacerated: number,
    time: number,
    abvGin: number,
    state: RecipeState
}
export interface IBotanic {
    name: string,
    size: number
}

export enum RecipeState {
    active = "active",
    disabled = "disabled"
}

//interfaces para forms
export interface IRecipeForm {
    name: string,
    nickname: string,
    vape: IBotanic[],
    macerated: IBotanic[],
    abvMacerated: number,
    time: number,
    abvGin: number
}

export interface IRecipeFormError {
    name?: string,
    nickname?: string,
    vape?: string,
    macerated?: string,
    abvMacerated?: string,
    time?: string,
    abvGin?: string
}

export interface IBotanicForm {
    id: number,
    name: string,
    size: number
}