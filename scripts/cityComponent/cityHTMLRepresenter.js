export const cityHTMLRepresenter = (cityObj) => {
    return `
        <section class="city">
            <h3 class="city__name">${cityObj.name}</h3>
            <img src="${cityObj.image}" alt="${cityObj.imageAlt}"> 
        </section>
    `
}