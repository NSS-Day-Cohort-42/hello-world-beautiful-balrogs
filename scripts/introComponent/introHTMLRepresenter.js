export const introHTMLRepresenter = (introObj) => {
  return `
    <section class="intro">
      <img src="${introObj.image}" alt="${introObj.imageAlt}" class="intro__image">
      <h2 class="intro__name">${introObj.name}</h2>
    </section>
  `
}