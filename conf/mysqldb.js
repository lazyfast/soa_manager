// conf/db.js
// MySQL数据库联接配置
module.exports = {
  mysql: {
    host: '10.32.0.58',
    user: 'dba',
    password: 'jj75176',
    database:'api_manage', // 前面建的user表位于这个数据库中
    port: 3306
  }
};
