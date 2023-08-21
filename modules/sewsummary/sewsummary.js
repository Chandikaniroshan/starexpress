const sewsummaryMSSql = require('./sewsummary.mssql');


class sewsummary {
    async getAllsewsummary(req, res) {
      try {
         const output = await sewsummaryMSSql.getAllsewsummaryinfo();
         res.send(output);
         
      }
      catch (error) {
      res.status(500).json(error)

    }
 }
}
module.exports=new sewsummary();