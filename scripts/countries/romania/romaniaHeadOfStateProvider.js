const romaniaHeadsOfState = [
    {name: "Nicolae Ceausescu",
    imageAlt: "Photo of Nicolae Ceausescu",
    image: "./images/romania/nicolae_ceausescu.png",
    description: "Nicolae Ceaușescu was a Romanian communist politician and leader. He was the general secretary of the Romanian Communist Party from 1965 to 1989 and hence the second and last Communist leader of Romania."
    },

    {name: "Klaus Iohannis",
    imageAlt: "Photo of Klaus Iohannis",
    image: "./images/romania/klaus_iohannis.png",
    description:"Klaus Werner Iohannis is the president of Romania. He became leader of the National Liberal Party in 2014, after having served as leader of the Democratic Forum of Germans in Romania from 2001 to 2013. Iohannis was a physics teacherand a school inspector before entering full-time politics."
    }
]

export const useRomaniaHeadsOfState = () =>
{
    return romaniaHeadsOfState.slice()
}