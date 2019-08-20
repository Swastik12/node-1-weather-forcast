const request=require("request");


const forcast=(letitude,longitude,callback)=>{
    const url="https://api.darksky.net/forecast/09d25253a30c1069ba007dcfbcc49eae/"+letitude+","+longitude+"?units=si "

    request({url:url,json:true},(error,res)=>{
        if(error){
            callback("please check your internet connection",undefined)
        }else if(res.body.error){
            callback(" please search for valid location",undefined)

        }else{
            callback(undefined,{
                temperature:res.body.currently.temperature,
                summary:res.body.daily.data[0].summary,
                rainchance:res.body.currently.precipProbability
            })
        }
    })

}
module.exports=forcast;