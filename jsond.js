mydata=[];
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json();
})
.then(function(data){
    var list=document.getElementById("datas");
    for(index=0;index<data.length;index++){
        list.innerHTML+="<li>"+data[index]['title']+"</li>";
    }
});
