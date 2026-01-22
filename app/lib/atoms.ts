import { atom } from "recoil";

export const usernameAtom = atom<string>({
    key :"usernameAtom",
    default:"",
})
export const authTokenAtom = atom<string | null>({
    key :"authTokenAtom",
    default:null,
})
export const isLoadingAtom = atom<boolean>({
    key :"isLoadingAtom",
    default:false
})
