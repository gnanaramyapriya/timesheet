var mysql = require("mysql");
var dateFormat = require('dateformat');
// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "timesheet.ckqey0zkah3h.us-west-2.rds.amazonaws.com",
  user: "navya",
  password: "rajatarun",
  name: "timesheet",
  port:"3306"
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
		con.query('use timesheet');
		var query="select username, password from register where username='"+req.body.name+"'";
		con.query(query,function(err,resp){
			if(err)
				console.log(err);
			if(resp[0].password == req.body.password){
				res.send("success")
			}
		});
	})
	app.post("/api/report",function(req,res){
		var date1 = new Date(req.body.week1date).toISOString();
		var week1 = dateFormat(date1,"W");
		var year1 = dateFormat(date1,"yyyy");
		var date2 = new Date(req.body.week2date).toISOString();
		var week2 = dateFormat(date2,"W");
		var year2 = dateFormat(date2,"yyyy");
		var date3 = new Date(req.body.week3date).toISOString();
		var week3 = dateFormat(date3,"W");
		var year3 = dateFormat(date3,"yyyy");
		var date4 = new Date(req.body.week4date).toISOString();
		var week4 = dateFormat(date4,"W");
		var year4 = dateFormat(date4,"yyyy");
		query1 = "insert into "+req.body.username+" values("+"'"+req.body.username+"'"+","+week1+","+req.body.week1+","+year1+")";
		query2 = "insert into "+req.body.username+" values("+"'"+req.body.username+"'"+","+week2+","+req.body.week2+","+year2+")";
		query3 = "insert into "+req.body.username+" values("+"'"+req.body.username+"'"+","+week3+","+req.body.week3+","+year3+")";
		query4 = "insert into "+req.body.username+" values("+"'"+req.body.username+"'"+","+week4+","+req.body.week4+","+year4+")";
		con.query(query1,function(err,res){
			if(err){
				console.log(err);
			}
		})
		con.query(query2,function(err,res){
			if(err){
				console.log(err);
			}
		})
		con.query(query3,function(err,res){
			if(err){
				console.log(err);
			}
		})
		con.query(query4,function(err,res){
			if(err){
				console.log(err);
			}
		})

	})
	app.post("/api/reg",function(req,res){
		console.log(req.body);
		var isValid = true;
		var query="select email from register where email='"+req.body.email+"'";
		con.query('use timesheet');
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
				con.query('use timesheet');
				console.log(req.body);

				var query ="create table "+req.body.uname+" ( username varchar(15), weeknum int primary key, hours int, year int)";
					console.log(query);
				con.query(query,function(err,result){
					if(err){
						console.log(err);
					}
					console.log("success")
				});
				var user = {name: req.body.name, username: req.body.uname, email: req.body.email,password:req.body.password, repassword:req.body.repassword};
				con.query('INSERT INTO register SET ?', user, function(err,response){
  				if(err) throw err;
 			 	console.log('Last insert ID:', response.insertId);
				});
			}
			}

		});
	})

}