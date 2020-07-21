import { useFijiCities } from "../countries/fiji/fijiCityProvider.js"
import { useTuvaluCities } from "../countries/tuvalu/tuvaluCityProvider.js"
import { useIcelandCities } from "../countries/iceland/icelandCityProvider.js"
import { useRomaniaCities } from "../countries/romania/romaniaCityProvider.js"
import { useTaiwanCities } from "../countries/taiwan/taiwanCityProvider.js"

import { cityHTMLRepresenter } from "../cityComponent/cityHTMLRepresenter.js"

export const cityList = (countryName) => {

  const contentElement = document.querySelector(".content--left")

  let cityContent
  switch (countryName) {
    case "taiwan":
      cityContent = useTaiwanCities()
      break;
    case "tuvalu":
      cityContent = useTuvaluCities()
      break;
    case "iceland":
      cityContent = useIcelandCities()
      break;
    case "romania":
      cityContent = useRomaniaCities()
      break;
    case "fiji":
      cityContent = useFijiCities()
      break;
  }

  let cityHTMLRepresentation = ""
  for (const cityObj of cityContent) {
    cityHTMLRepresentation += cityHTMLRepresenter(cityObj)
  }

  contentElement.innerHTML += `
    <h2 class="sectionTitle>Cities To Visit</h2>
    <article class="list cities">
    ${cityHTMLRepresentation}
    </article>
  `

}