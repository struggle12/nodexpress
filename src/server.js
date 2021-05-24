const express = require('express');
const control = require('./control/control.js');
const erhu = express();

erhu.get("/tune/tuneSelectName",(req,res)=>{

	control.tuneSelectName(req,res);

});

erhu.get("/tune/all", (req,res) => {
	
	control.GetAllTune(req,res);

});

erhu.get("/Collection/Insert", (req,res) => {
	
	control.InsertCollection(req,res);

});
erhu.get("/Collection/Delete", (req,res) => {
	
	control.DelCollection(req,res);

});

erhu.get("/Collection/count", (req,res) => {
	
	control.Count(req,res);

});

erhu.get("/Collection/showCollection", (req,res) => {
	
	control.showCollection(req,res);

});

erhu.listen(2599, () => {
	console.log("GOGOGO,http://127.0.0.1:2599/");
});