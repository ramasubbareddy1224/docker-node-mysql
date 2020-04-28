var mysql = require('mysql');
var con = mysql.createConnection({
  host: "db", 
  user: "root",
  password: "mysql123",
  port:"3306",
  database:'hr'
});
con.connect(function(err) {
  if (err) throw err;
  console.log("mysql connected successfully");

});
con.end();


// con.query('SELECT * from student', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   });