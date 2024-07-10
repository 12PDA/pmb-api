let mysql = require('mysql');
 
let conn = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'db_pmb_api'
 });

conn.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connection Succuessfully!');
   }
 })

module.exports = conn; 