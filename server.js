import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/src/css", (req, res) => {
    res.sendFile(__dirname + "/src/css/main.css")
})

app.get("/src/css", (req, res) => {
    res.sendFile(__dirname + "/src/css/bar.css")
})

app.get("/src/js", (req, res) => {
    res.sendFile(__dirname + "/src/js/script.js")
})

app.get("/src/js", (req, res) => {
    res.sendFile(__dirname + "/src/js/data.js")
})

app.get("/src/assets/img", (req, res) => {
    res.sendFile(__dirname + "/src/assets/img/pezzi.png")
})

app.get("/src/assets/svg", (req, res) => {
    res.sendFile(__dirname + "/src/assets/svg/CLquadrato.svg")
})

app.get("/src/assets/svg", (req, res) => {
    res.sendFile(__dirname + "/src/assets/svg/CLlungo.svg")
})

app.get("/src/assets/svg", (req, res) => {
    res.sendFile(__dirname + "/src/assets/svg/home.svg")
})

app.get("/src/assets/svg", (req, res) => {
    res.sendFile(__dirname + "/src/assets/svg/team.svg")
})

app.get("/src/assets/svg", (req, res) => {
    res.sendFile(__dirname + "/src/assets/svg/robot.svg")
})

app.get("/src/assets/svg", (req, res) => {
    res.sendFile(__dirname + "/src/assets/svg/sponsor.svg")
})

app.get("/src/assets/svg", (req, res) => {
    res.sendFile(__dirname + "/src/assets/svg/contact.svg")
})

app.listen(8080, () => {
    console.log("App listening on https://localhost:8080/")
})