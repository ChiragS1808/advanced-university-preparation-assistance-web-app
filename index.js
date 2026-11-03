import express from "express";

const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home/index.ejs");
});

app.get("/community",(req,res)=>{
    res.render("community/community.ejs");
});
