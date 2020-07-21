export const cityHTMLRepresenter = (cityObj) => {
    return `
        <section class="city card">
            <h3 class="city__name">${cityObj.name}</h3>
            <img class="city__image" src="${cityObj.image}" alt="${cityObj.imageAlt}"> 
        </section>
    `
}