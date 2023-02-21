
const db =require('../models')

const { course } = require('../models');

(async ()=>{
    db.sequelize.sync();
})();   //iife function

module.exports= (app) => {
    
    app.get('/select', async(req, res) => {
        course.findAll().then((data)=>{
          res.send(data);
        })
      });
      
      app.get('/insert', async(req, res) => {
          try {
              await course.create({
                  CourseName: "java script",
                  Duration: "9 weeks",
                  Fees: 11000,
              })
          }
          catch (err) {
              console.log(err);
          }
      
          res.send("insert");
      });
      
      app.get("/update", async(req, res) => {
          try{
          await course.update({ CourseName: "python" },{where: {id :1}});
          }
          catch (err){
              console.log(err);
          }
          res.send('update');
      });
      
      app.get("/delete", async(req, res) => {
          try{
      
              await course.destroy({
                  where: {CourseName: 'java'},
                  // truncate: true
              });
              }
              catch(err){
                  console.log(err);
              }
            res.send("delete");
      });

}