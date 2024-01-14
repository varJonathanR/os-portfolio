import { Dispatch, SetStateAction } from "react";

const LANG_PATH = "../languages/";

export function FechtLanguage(lang: string, setterState: Dispatch<SetStateAction<null>>) {
    fetch(`${LANG_PATH + lang}.json`)
        .then(response => response.json())
        .then(data => setterState(data))
        .catch(error => console.log("Error", error))
}