const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT || 4717
const combo=require("../backend/combo")
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","hbs");
 app.set("views",path.join(__dirname,("../frontend/view")))

app.use(express.static(path.join(__dirname,("../frontend"))));


app.get("",(req,res)=>{
    res.render("index",{
        title:"weather",
        cont:"here is your weather forcast"
    })
})


app.get("/weather",combo)

app.listen(port);