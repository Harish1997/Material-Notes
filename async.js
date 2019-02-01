
var itemarr=[];
var index=0;
var desc=["item1","item2","item3","item4","item5","item6"];
Math.floor((Math.random() * 10) + 1)

var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";



for(index=0;index<5;index++){
    itemarr[index]={
        'description':desc[index]
    }
    console.log(itemarr);
}
function findme(id){
    if(itemarr[id]!=null){
        return true;
    }
    else{
        return false;
    }
}

function setarray(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    let myid=Math.floor((Math.random() * 10) + 1);
if(findme(myid)){
    resolve(myid);
}
else{
      reject(myid);
}
},1000);
});   
}

async function getme(){
    try{
    var result=await setarray();
    console.log("Awaited result is "+result);
    updateme(result);
    }catch(err){

    }
}
getme().then(id =>{
    console.log("item found "+id);
    updateme(id);
})
.catch(err =>{
    console.log("item not found "+err);
    console.log(itemarr);
});;

// setarray()
// .then(id =>{
//     console.log("item found "+id);
//     updateme(id);
// })
// .catch(err =>{
//     console.log("item not found "+err);
//     console.log(itemarr);
// });

function updateme(id){
    itemarr[id].description+=possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(itemarr);
}
