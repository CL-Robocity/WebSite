// Coded by F. Aiello CL-Robocity All Rigths Reserved
import { barElms } from "./data.js"

const params = new URLSearchParams(window.location.search)
params.set("l", "en")
history.pushState(null, "", "/?l=en")

const barMain = document.getElementById("barMain")

let mobileB = window.innerWidth < 1100, navB = 0

window.addEventListener("resize", () => {
    mobileB = window.innerWidth < 1100
    //nav(navB, 0)

    if (!mobileB) {
        nav(1, 1)
    }
})

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
        line.classList.add("checked")
        txt.classList.add("checked")
        svg.classList.add("checked")
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

document.getElementById("lang").addEventListener("click", (e) => {
    let l = params.get("l")
    if (l == "en") {
        params.set("l", "it")
        document.getElementById("langBox").style.transform = "translateY(-54px)"
        history.pushState(null, '', '/?l=it')
    } else {
        params.set("l", "en")
        document.getElementById("langBox").style.transform = "translateY(0px)"
        history.pushState(null, '', '/?l=en')
    }
})

let bars = document.querySelectorAll(".navBar")
document.getElementById("nav").addEventListener("click", () => {
    navB = !navB
    nav(navB, 0)
})

function nav(b, n) {
    if(b) {
        barMain.style.transform = "unset"
        if (!n) document.body.style.overflowY = "hidden"
        bars.forEach((e) => {
            e.classList.add("checked")
            e.style.marginLeft = "0px"
        })
    } else {
        barMain.style.transform = "translateY(-100vh)"
        document.body.style.overflowY = "scroll"
        bars.forEach((e) => {
            e.classList.remove("checked")
            e.style.marginLeft = "0"
        })
    }
}