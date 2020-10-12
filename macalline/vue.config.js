/* 配置服务器 */
/*把数据引入进来 */
const data = require('./data.json')
module.exports = {
    configureWebpack: {
     devServer:{
         /*生命周期函数 */
        before(app){
            app.get('/api/data', function(req, res) {
              res.json({ 
                  code:200,
                  data:data.data,
                  data2:data.data2
                });
            });
          }
     }
    }
  }