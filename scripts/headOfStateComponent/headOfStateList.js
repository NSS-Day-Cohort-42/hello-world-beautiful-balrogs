import { useFijiHeadsOfState } from "../countries/fiji/fijiHeadOfStateProvider.js"
import { useTuvaluHeadsOfState } from "../countries/tuvalu/tuvaluHeadOfStateProvider.js"
import { useRomaniaHeadsOfState } from "../countries/romania/romaniaHeadOfStateProvider.js"
import { useTaiwanHeadsOfState } from "../countries/taiwan/taiwanHeadOfStateProvider.js"
import { useIcelandHeadsOfState } from "../countries/iceland/icelandHeadOfStateProvider.js"

import { headOfStateHTMLRepresenter } from "./headOfStateHTMLRepresenter.js";

export const headOfStateList = (headOfStateName) => {
    const contentElement = document.querySelector(".content--right")

    let headOfStateContent

    if (headOfStateName === 'fiji') {
        headOfStateContent = useFijiHeadsOfState()
    } else if (headOfStateName === 'tuvalu') {
        headOfStateContent = useTuvaluHeadsOfState()
    } else if (headOfStateName === 'romania') {
        headOfStateContent = useRomaniaHeadsOfState()
    } else if (headOfStateName === 'taiwan') {
        headOfStateContent = useTaiwanHeadsOfState()
    } else if (headOfStateName === 'iceland') {
        headOfStateContent = useIcelandHeadsOfState()
    }

    let headOfStateHTMLRepresentation = ""
    for (const headOfStateObj of headOfStateContent) {
        headOfStateHTMLRepresentation += headOfStateHTMLRepresenter(headOfStateObj)
    }
    contentElement.innerHTML += `
    <h2 class="sectionTitle">Politicians</h2>
    <aside class="list people">${headOfStateHTMLRepresentation}</aside>
    `
}