const express = require('express');
const app = express();

const appcontroller = require("./controllers/appcontroller");

appcontroller(app);

app.listen(3000,()=>{
    console.log("App Running On 3000...");
})