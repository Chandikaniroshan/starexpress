const mssqlcon = require('../../dbconnection');
class sewsummaryMSSql {
  
  async getAllsewsummaryinfo() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getAllsewsummary");
    return res.recordset;
  }
}

module.exports=new sewsummaryMSSql();