// var express= require('express');
// var mysql= require('mysql');
// var connect=mysql.createConnection({

// 	host:"localhost",
// 	user:"root",
// 	password:"123",
// 	database:"sampleDB"
// });


// connection.connect(function (error) {
// 	// body...
// 	if(!!error){
// 		console.log('Error');
// 	}else{
// 		console.log('Connected');
// 	}
// });

// app.get('/',function (req,resp) {
// 	// body...
// 	connection.query("SELECT * FROM  sampleTable",function(error,row,fields){
// 		if(!!error){
// 			console.log('Error in query');
// 		}else{
// 			console.log('Succesful query');
// 		}


// 	});
// });

// app.listen(1337);
// ​​var mysql = require('mysqlapplication');

// var con = mysql.createConnection({
  // host: "localhost",
  // user: "myusername",
  // password: "mypassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
const{
	createPool
}=require('mysqlapplication');

const pool=createPool({
	host: "localhost",
    user: "root",
    password: "123",
    database:"test",
    connectionLimit:10
})
pool.query("SELECT * FROM  sampleTable",function(error,row,fields){
		if(!!error){
			console.log('Error in query');
		}else{
			console.log('Succesful query');
		}
	})









