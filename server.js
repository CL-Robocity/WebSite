// Coded by F. Aiello CL-Robocity All Rigths Reserved
import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

let dirs = [
    "/pages/team.html",
    "/pages/robot.html",
    "/pages/project.html",
    "/pages/sponsors.html",
    "/pages/contacts.html",
    "/src/css/main.css",
    "/src/css/main_m.css",
    "/src/css/index/pag1.css",
    "/src/css/index/pag1_m.css",
    "/src/css/index/pag2.css",
    "/src/js/script.js",
    "/src/js/data.js",
    "/src/js/index.js",
    "/src/assets/font/POICarbonicTrial-Medium.otf",
    "/src/assets/img/pezzi.png",
    "/src/assets/img/bot.png",
    "/src/assets/svg/CLquadrato.svg",
    "/src/assets/svg/CLlungo.svg",
    "/src/assets/svg/home.svg",
    "/src/assets/svg/team.svg",
    "/src/assets/svg/robot.svg",
    "/src/assets/svg/project.svg",
    "/src/assets/svg/sponsors.svg",
    "/src/assets/svg/contacts.svg",
    "/src/assets/svg/ita.svg",
    "/src/assets/svg/usa.svg",
]

dirs.forEach((dir) => {
    app.get(dir, (req, res) => {
        res.sendFile(__dirname + dir)
    })
})

app.listen(8080, () => {
    console.log("App listening on https://localhost:8080/")
})