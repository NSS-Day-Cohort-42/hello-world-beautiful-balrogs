import { useFijiIntro } from "../countries/fiji/fijiIntroProvider.js"
import { useTuvaluIntro } from "../countries/tuvalu/tuvaluIntroProvider.js"
import { useIcelandIntro } from "../countries/iceland/icelandIntroProvider.js"
import { useRomaniaIntro } from "../countries/romania/romaniaIntroProvider.js"
import { useTaiwanIntro } from "../countries/taiwan/taiwanIntroProvider.js"

import { introHTMLRepresenter } from "../introComponent/introHTMLRepresenter.js"

export const introList = (countryName) => {

  const contentElement = document.querySelector(".top")

  let introContent
  switch (countryName) {
    case "taiwan":
      introContent = useTaiwanIntro()
      break;
    case "tuvalu":
      introContent = useTuvaluIntro()
      break;
    case "iceland":
      introContent = useIcelandIntro()
      break;
    case "romania":
      introContent = useRomaniaIntro()
      break;
    case "fiji":
      introContent = useFijiIntro()
      break;
  }

  let introHTMLRepresentation = ""
  for (const introObj of introContent) {
    introHTMLRepresentation += introHTMLRepresenter(introObj)
  }

  contentElement.innerHTML += `
  ${introHTMLRepresentation}
  `

}