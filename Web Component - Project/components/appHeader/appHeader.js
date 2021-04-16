const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
<style>
@import "../assets/css/style.css"
</style>
<header>
JavaScript Web Components
</header>
`

class AppHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true))
    }
}

window.customElements.define("app-header", AppHeader)