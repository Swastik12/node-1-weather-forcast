const prob = document.querySelector("form");
const  search= document.querySelector("input");
const mesg1=document.querySelector("#msg1");
const mesg2=document.querySelector("#msg2");

prob.addEventListener("submit",(e)=>{
    e.preventDefault();

    const location= search.value;

    mesg1.textContent="Loading..."
    mesg2.textContent=""

fetch("http://localhost:4717/weather?address="+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            mesg1.textContent= data.error;
        }else{
            mesg1.textContent= data.forcast;
        }
    })
})
    
    
})