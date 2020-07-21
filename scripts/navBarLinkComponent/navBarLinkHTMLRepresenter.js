export const navBarLinkHTMLRepresenter = (navBarLinkObj) => {
    return `
        <a href="${navBarLinkObj.href}" class="navBar__link">${navBarLinkObj.title}</a>
    `
}