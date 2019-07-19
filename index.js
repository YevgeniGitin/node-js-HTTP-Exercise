const serverfunc=require("./server1.js");
const clientfunc=require("./client.js");
async function start(){
    try{
        await serverfunc();
    }
    catch(e){
        console.log(e);
        }
        clientfunc(); 
}

start();