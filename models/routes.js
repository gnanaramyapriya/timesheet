var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  Host: "localhost",
  user: "root",
  password: "admin",
  name: "navya"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = function(app){
	app.post("/api/login",function(req,res){
		console.log(req.body);
		con.query('use navya');
		var query="select name, password from register where name='"+req.body.name+"'";
		con.query(query,function(err,resp){
			if(err)
				console.log(err);
			if(resp[0].password == req.body.password){
				res.send("success")
			}
		});
	})
	app.post("/api/reg",function(req,res){
		console.log(req.body);
		var isValid = true;
		var query="select email from register where email='"+req.body.email+"'";
		con.query('use navya');
		con.query(query,function(err,resp){
			if(err)
				console.log(err);
			console.log(resp);
			try{
			if(resp[0].email == req.body.email){

				console.log("user exists");
			}
			}
			catch(e){
				if(e instanceof TypeError){
				con.query('use navya');
				var user = {name: req.body.name, email: req.body.email,password:req.body.password, repassword:req.body.repassword};
				con.query('INSERT INTO register SET ?', user, function(err,response){
  				if(err) throw err;
 			 	console.log('Last insert ID:', response.insertId);
				});
			}
			}

		});
	})

}