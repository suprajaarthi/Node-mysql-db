const{
	createPool
}=require('mysql');

const pool=createPool({
	host: "localhost",
    user: "root",
    password: "",
    database:"test",
    connectionLimit:10
})
pool.query("SELECT * FROM  sampletable",function(error,result,fields){
		if(error){
			return console.log(error);
		}else{
			return console.log(result);
		}
	})









