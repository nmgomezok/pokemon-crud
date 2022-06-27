const express = require ("express")
const methodOverrride = require("method-override");
const error404 = require ("./src/middlewares/error404Mid")
const router = require ("./src/routes/index.routes");
const path = require ("path")
const port = process.env.PORT || 3000

const app = express();

//template engine
app.set("views",path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

//routes
app.use("/", router);

//static files
app.use(express.static("public"))

//json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//http
app.use(methodOverrride("_method"))

//404
app.use(error404)

//port
app.listen(port, () => console.log(`running at port ${port}`))

