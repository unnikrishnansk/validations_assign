const app = require("./index");

const connect = require("./configs/db");

app.listen(6363, async function(){
    try{
        await connect();
        console.log("Listening to port 6363");
    }
    catch(err)
    {
        console.error(err.message);
    }
    
});

