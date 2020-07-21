import { useNavBarLinks } from "./navBarLinkProvider.js"
import { navBarLinkHTMLRepresenter } from "./navBarLinkHTMLRepresenter.js"

export const navBarLinkList = () => {
    const contentElement = document.querySelector(".navBar")
    const allNavBarLinks = useNavBarLinks()

    let navBarLinkListHTML = ""
    for (const navBarLinkObj of allNavBarLinks) {
        navBarLinkListHTML += navBarLinkHTMLRepresenter(navBarLinkObj)

    contentElement.innerHTML =
        `
        ${navBarLinkListHTML}
        `
    }
}