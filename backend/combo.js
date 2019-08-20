const route=require("express").Router();

const geocode=require("./geocode");
const forcast=require("./forcast");

route.use("/",(req,res)=>{
    const address=req.query.address;
    if(!address){

        res.send({error:"please enter address"})
    }else{

    geocode(address,(error,data)=>{
        if(error){
            res.send({
                error:error
            })
        }else{
            forcast(data.letitude,data.longitude,(error,result)=>{

                if(error){
                    res.send({
                        error:error
                    })
                }else{
                    res.send({
                        forcast:result.summary+" it is currently "+result.temperature+" degree out . There is "+result.rainchance+"% chance of rain in "+data.place+".",
                    })
                }

            })
        }
    })

}
})

module.exports=route;