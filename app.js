var express=require("express");
var path=require("path");
var port=process.env.PORT || 3000;
var app=express();
var fs=require('fs');
app.set("views","./view/pages");
app.set("view engine","jade");
app.use(express.static(path.join(__dirname,"bower_components")));
app.listen(port);
var json;
fs.readFile(path.join(__dirname,'index.json'),{"encoding":"utf-8"},function(err,data){
	if(err){
		console.log(err);
	}else{
		json=JSON.parse(data);
	}
	
});
app.get('/',function(req,res){	
	res.render('index',json);
});

