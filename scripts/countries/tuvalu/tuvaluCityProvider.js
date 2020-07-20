const tuvaluCities = [{
    name: "Funafuti",
    image: "images/tuvalu/tuvalu.jpg",
    imageAlt: "picture of the city of Funafuti"
}, {
    name: "Nanumanga",
    image: "images/tuvalu/NanumangaIsland.jpg",
    iamgeAlt: "picture of Nanumanga"
}, {
    name: "Nukufetau",
    image: "images/tuvalu/Nukufetau.jpg",
    iamgeAlt: "picture of the village of Savave Village in Nukufetau"
}, {
    name: "Nanumea",
    image: "images/tuvalu/Nanumea.jpg",
    iamgeAlt: "picture of island of Nanumea"
}]

export const useTuvaluCities = () => {
    return tuvaluCities.slice()
}