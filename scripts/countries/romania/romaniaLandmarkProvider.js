const romaniaLandmarks = [
    {
    name: "Bran Castle",
    image: "./images/romania/bran_castle.png",
    imageAlt: "Photo of Bran Castle",
    description: "Bran Castle is a national monument and landmark in Romania. Commonly known outside Romania as Dracula's Castle, it is often referred to as the home of the title character in Bram Stoker's Dracula."
    },

    {
    name: "Palace of the Parliament",
    image: "./images/romania/palace_of_parliament.png",
    imageAlt: "Photo of the Palace of the Parliament",
    description: "The Palace of the Parliament is the seat of the Parliament of Romania, located atop Dealul Spirii in Bucharest, the national capital. The Palace of the Parliament is the heaviest building in the world, weighing about 4,098,500,000 kilograms."
    }
]

export const useRomaniaLandmarks = () =>
{
    return romaniaLandmarks.slice()
}