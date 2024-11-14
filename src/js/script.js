import { barElms } from "./data.js"

const bar = document.getElementById("bar")

barElms.forEach((e) => {
    let elm = document.createElement("div")
    elm.classList.add("barElm")
    elm.classList.add("test")

    let svg = document.createElement("div")
    svg.classList.add("barSvg")
    svg.style.background = `url(./src/assets/svg/${e.n.toLowerCase()}.svg)`

    let txt = document.createElement("div")
    txt.innerHTML = e.n
    txt.classList.add("barTxt")

    let line = document.createElement("div")
    line.classList.add("barLine")

    if (e.n == document.body.classList[0]) {
        console.log(e.n, line)
        line.style.width = "40%"
        svg.style.opacity = "100%"
        svg.style.transform = "translateY(0)"
    }

    elm.appendChild(svg)
    elm.appendChild(txt)
    elm.appendChild(line)
    bar.appendChild(elm)
})

