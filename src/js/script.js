import { barElms } from "./data.js"

const barMain = document.getElementById("barMain")

barElms.forEach((e) => {
    let elm = document.createElement("div")
    elm.classList.add("barElm")

    let svg = document.createElement("div")
    svg.classList.add("barSvg")
    svg.style.background = `url(./src/assets/svg/${e.n.toLowerCase()}.svg)`

    let txt = document.createElement("div")
    txt.innerHTML = e.n
    txt.classList.add("barTxt")

    let line = document.createElement("div")
    line.classList.add("barLine")

    if (e.n == document.body.classList[0]) {
        line.style.width = "40%"
        txt.style.transform = "scale(1.1) "
        svg.style.opacity = "100%"
        svg.style.transform = "translateY(0)"
    }

    elm.appendChild(svg)
    elm.appendChild(txt)
    elm.appendChild(line)
    barMain.appendChild(elm)

    if (e.n == "Robot") {
        barMain.innerHTML += '<div id="barLogoBox"></div>'
    }
})

document.getElementById("titleButton").addEventListener("click", () => {
    document.getElementById("pag2").scrollIntoView({behavior: "smooth"})
})