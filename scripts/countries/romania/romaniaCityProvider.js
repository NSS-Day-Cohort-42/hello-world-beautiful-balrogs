
const romaniaCities = [
    {name: "Bucharest",
    imageAlt: "Photo of Bucharest",
    image: "./images/romania/bucharest.jpg"
    }

    {name: "Timosoara",
    imageAlt: "Photo of Timosoara",
    image: "./images/romania/timisoara.png"
        }

]

export const useRomaniaCities = () =>
{
    return romaniaCities.slice()
}