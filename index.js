import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});
app.use(express.static("public"));
 // adding bootstrap package to project-------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
    "/bootstrap",
    express.static(
        path.join(__dirname, "node_modules/bootstrap/dist")
    )
);
//------------------------------------------------------------------------------------


app.get("/",(req,res)=>{
    res.render("home/index.ejs");
});

app.get("/community",(req,res)=>{
    res.render("community/community.ejs");
});