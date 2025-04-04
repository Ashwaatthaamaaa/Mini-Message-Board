const express = require("express")
const app = express()
const path = require("path")
const indexRouter = require("./routes/index")

app.set("views", path.join(__dirname, "views", "pages"))
app.set("view engine", "ejs")

// Add static file serving for CSS
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use("/", indexRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

