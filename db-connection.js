var sql= require('mysql');
var connection= sql.createPool({
    hostname: '127.0.0.1',
    port:'3306',
    user: 'root',
    password: '',
    database:'dbcitra'
});
module.exports=connection;