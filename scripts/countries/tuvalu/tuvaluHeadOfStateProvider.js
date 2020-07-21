const tuvaluHeadsOfState = [{
    name: "Hon.Kausea Natano",
    image: "images/tuvalu/kausea-natano.jpg",
    imageAlt: "Kausea Natano Prime Minister of Tuvalu",
    description: "Hon.Kausea Natano is the 13 th prime minister of Tuvalu.He took office in Septmeber 19,2019."
}, {
    name: "Enele Sosene Sopoaga",
    image: "images/tuvalu/enele-sosene-sopoaga.jpg",
    imageAlt: "photo of the previous Prime Minister Enele Sosene Sopoaga",
    description: "Enele Sosene Sopoaga Was the 12 th prime minister of Tuvalu. He was in office from August 5th, 2010 to Septmeber 19, 2019."
}]

export const useTuvaluHeadsOfState = () => {
    return tuvaluHeadsOfState.slice()
}