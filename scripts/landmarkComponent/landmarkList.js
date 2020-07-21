import { useFijiLandmarks } from "../countries/fiji/fijiLandmarkProvider.js"
import { useTuvaluLandmarks } from "../countries/tuvalu/tuvaluLandmarkProvider.js"
import { useIcelandLandmarks } from "../countries/iceland/icelandLandmarkProvider.js"
import { useRomaniaLandmarks } from "../countries/romania/romaniaLandmarkProvider.js"
import { useTaiwanLandmarks } from "../countries/taiwan/taiwanLandmarkProvider.js"

import { landmarkHTMLRepresenter } from "./landmarkHTMLRepresenter.js"

export const landmarkList = (countryName) => {

  const contentElement = document.querySelector(".landmarkList")

  let landmarkContent
  switch (countryName) {
    case "taiwan":
      landmarkContent = useTaiwanLandmarks()
      break;
    case "tuvalu":
      landmarkContent = useTuvaluLandmarks()
      break;
    case "iceland":
      landmarkContent = useIcelandLandmarks()
      break;
    case "romania":
      landmarkContent = useRomaniaLandmarks()
      break;
    case "fiji":
      landmarkContent = useFijiLandmarks()
      break;
  }

  let landmarkHTMLRepresentation = ""
  for (const landmarkObj of landmarkContent) {
    landmarkHTMLRepresentation += landmarkHTMLRepresenter(landmarkObj)
  }

  contentElement.innerHTML += `
  ${landmarkHTMLRepresentation}
  `

}