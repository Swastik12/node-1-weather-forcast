const request=require("request");


const geocode=(address,callback)=>{

    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoic3dhc3RpayIsImEiOiJjanpnMjg4M3UwaHltM2hzOW5hcnF1ZHZ6In0.7fCC90UVfAm54IfD_V23ZQ&limit=1"
request({url:url,json:true},(error,res)=>{
    if(error){
        callback(" please check your connection....",undefined)
    }else if(res.body.features.length==0){
        callback(" please search for the valid location",undefined)
    }else{
        callback(undefined,{
            longitude: res.body.features[0].center[0],
            letitude:res.body.features[0].center[1],
            place:res.body.features[0].place_name
        })
    }
})



}

module.exports=geocode;