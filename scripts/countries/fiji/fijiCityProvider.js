const cities=[
    {
        name:"Suva",
        image:"images/fiji/suva.jpg",
        imageAlt:"ariel image of suva"
    },
    {
        name:"Nadi",
        image:"images/fiji/Nadi.jpg",
        imageAlt:"ariel image of Nadi"
    },{
        name:"Lautoka",
        image:"images/fiji/Lautoka_City.jpg",
        imageAlt:"ariel image of Lautoka"
    },{
        name:"Levuka",
        image:"images/fiji/Levuka.jpg",
        imageAlt:"ariel image of Levuka"
    }
]
export const useFijiCites=()=>{
    return cities.slice();
}