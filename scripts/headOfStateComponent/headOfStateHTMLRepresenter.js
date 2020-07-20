export const headOfStateHTMLRepresenter = (headOfStateObj) => {
    return `  <section class="card person">
        <img src="${headOfStateObj.image}" alt="${headOfStateObj.imageAlt}" class="person__image">
        <h3 class="person__name">${headOfStateObj.name}</h3>
        <p class="person__details">${headOfStateObj.description} </p>
    </section> `
}