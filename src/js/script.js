// Coded by F. Aiello CL-Robocity All Rigths Reserved
import { barElms } from "./data.js"

const params = new URLSearchParams(window.location.search)

const barMain = document.getElementById("barMain")
const appBox = document.getElementById("appBox")
const app = document.getElementById("app")
const scrollBar = document.getElementById("scrollBar")

let mobileB = window.innerWidth < 1219, navB = 0, baseURL = "http://localhost:5173/"

if (!window.location.href.indexOf("?l=") == -1) {
    params.set("l", "en")
    history.pushState(null, '', '?l=en')
} else {
    let l = params.get("l")
    
    if (l == "en") {
        document.getElementById("langBox").style.transform = "translateY(0px)"
    } else {
        document.getElementById("langBox").style.transform = "translateY(-54px)"
    }
}

//Mobile Bar Fix
window.addEventListener("resize", () => {
    mobileB = window.innerWidth < 1219
    nav(navB, 0)
    if (!mobileB) {
        nav(1, 1)
    }
})

//Bar Style
let bars = document.querySelectorAll(".navBar")
document.getElementById("nav").addEventListener("click", () => {
    navB = !navB
    nav(navB, 0)
})

//Bar Creation
barElms.forEach((e) => {
    let elm = document.createElement("div")
    elm.classList.add("barElm")

    let svg = document.createElement("div")
    svg.classList.add("barSvg")
    let link = `./src/assets/svg/${e.n.toLowerCase()}.svg`
    svg.style.background = `url(${document.body.classList[0] != "Home" ? "." + link : link})`

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

    elm.addEventListener("click", () => {
        let base = e.l.slice(2, e.l.length)
        let rawLang = (params.get("l") == "it" ? "/?l=it" : "/?l=en")
        let lang = base.length == 0 ? rawLang : rawLang.slice(1, rawLang.length)
        let rawURL = (base + lang).replaceAll("//", "/")
        window.location.href = baseURL + (rawURL.startsWith("/") ? rawURL.slice(1, rawURL.length) : rawURL)
    })

    if (e.n == "Robot") {
        let logo = document.createElement("div")
        logo.id = "barLogoBox"
        barMain.appendChild(logo)
    }
})

//Bar Style Fun
function nav(b, n) {
    if(b) {
        barMain.style.transform = "unset"
        if (!n) appBox.style.overflowY = "hidden"
        bars.forEach((e) => {
            e.classList.add("checked")
            e.style.marginLeft = "0px"
        })
    } else {
        barMain.style.transform = "translateY(-100vh)"
        appBox.style.overflowY = "scroll"
        bars.forEach((e) => {
            e.classList.remove("checked")
            e.style.marginLeft = "0"
        })
    }
}

//Lang Button
document.getElementById("lang").addEventListener("click", (e) => {
    let l = params.get("l")
    let url = new URL(window.location)
    
    if (l == "en") {
        params.set("l", "it")
        document.getElementById("langBox").style.transform = "translateY(-54px)"
        url.searchParams.set("l", "it")
    } else {
        params.set("l", "en")
        document.getElementById("langBox").style.transform = "translateY(0px)"
        url.searchParams.set("l", "en")
    }

    history.replaceState(null, '', url.toString())
})

//ScrollBar
let totH = app.clientHeight - appBox.clientHeight

scrollBar.addEventListener("input", () => {
    let p = scrollBar.value

    appBox.scrollTop = p*totH
})

appBox.addEventListener("scroll", () => {
    let scroll = appBox.scrollTop
    scrollBar.value = scroll/totH
})