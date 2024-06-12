async function weather(){
    let banglore=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 degreee")
        },5000)
    })

    let delhi=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("45 Degree")
        },3000)
    })
    console.log("Fetching the Delhi Weather:")
    let delhiw=await delhi
    console.log("Delhi Weather has been Fetched:"+ delhiw);

    console.log("Fetching the Blr weather::")
    let blr=await banglore
    console.log("Blr weather has been Fetched:"+ blr);

}
module.exports=weather()