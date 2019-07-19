let http = require('http');
module.exports=async function clientrequest(){
    try{
        await http.get('http://localhost:8001', (resp) => {
                resp.on('end', () => {
                    console.log(`Response completed:`);
                    });
                    resp.on('error', () => {
                        console.log(`err completed:`);
                        });
                });
    }
    catch(e){
        console.log(e);
    }
   
}