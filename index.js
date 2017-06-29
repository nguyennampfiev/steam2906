var express = require("express");
var app =express();
app.use(express.static("./publics"));
app.set("view engine","ejs");
app.set("views","./views");
app.get("/",function (req,res) {
    res.render("home");
})
app.listen(3000,function () {
    console.log("server start")
});


