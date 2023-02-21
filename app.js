const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

const appcontroller = require("./controllers/appcontroller");

appcontroller(app);

app.listen(PORT,()=>{
    console.log("App Running On 3000...");
})