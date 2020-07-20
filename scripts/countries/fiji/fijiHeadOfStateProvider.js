const leaders=[
    {
        name:"Jioji Konrote",
        image:"images/fiji/Jioji_Konrote.jpg",
        imageAlt:"head shot of Jioji Konrote",
        description:"The president of the Republic of Fiji"
    },{
        name:"Frank Bainimarama",
        image:"images/fiji/Frank_Bainimarama.jpg",
        imageAlt:"head shot of Frank Bainimarama.",
        description:"the 8th and current prime minister of Fiji since 2007."
    }
]
export const useFijiHeadsOfState=()=>{
    return leaders.slice()
}