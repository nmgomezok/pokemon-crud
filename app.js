const express = require ("express");
const methodOverrride = require("method-override");
const router = require ("./src/routes/index.routes");
const app = express();
const path = require ("path")
const port = process.env.PORT || 3000

app.set("views",path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverrride("_method"))

app.use("/",router);
app.use(express.static("public"))

app.listen(port, () => console.log(`running at port ${port}`))