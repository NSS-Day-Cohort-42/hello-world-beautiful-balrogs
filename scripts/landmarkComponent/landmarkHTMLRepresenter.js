export const landmarkHTMLRepresenter = (landmarkObj) => {
    return `
      <section class="card landmark">
      <h3 class="landmark__name">${landmarkObj.name}</h3>  
      <img src="${landmarkObj.image}" alt="${landmarkObj.imageAlt}" class="landmark__image">
      <p class="landmark__description">${landmarkObj.description}</p>
      </section>
    `
  }