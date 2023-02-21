
module.exports = (sequelize,DataTypes)=>{
    const course = sequelize.define("course",
    {
        CourseName : DataTypes.STRING,
        Duration : DataTypes.STRING,
        Fees : DataTypes.INTEGER
    },
    {
        freezeTableName:true
    }
 
    )
  return course;
}