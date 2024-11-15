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

app.listen(8080, () => {
    console.log("App listening on https://localhost:8080/")
})