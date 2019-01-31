var add=document.getElementById("addnote");
var notetext=document.getElementById("note");
var list=document.getElementById("mylist");
var data;
var prevdata;
var item_id=0;
var cur_id;
var notes={

}

add.addEventListener('click',function(){
    notetext.value="";
    item_id=createBlankList();
    cur_id=item_id
    notes[cur_id]={
        "data":""
    }
});

list.addEventListener('click',function(){
    var element=event.target;
    if(element.getAttribute("class")=="fas fa-times"){
        var parent=element.parentElement;
        var index=parent.getAttribute("id");
        list.removeChild(parent);
        if(index==cur_id){
            notetext.value="";
        }
        deleteItem(index);
    }
    else if(element.getAttribute("class")=="note-list"){
        console.log(element.getAttribute("class"));
        var index=element.getAttribute("id");
        notetext.value=notes[index]['data'];
        cur_id=index;

    }
    else{

    }

});

notetext.addEventListener('keyup',function(){
    if(cur_id!=null){
        data=notetext.value;
        notes[cur_id]={
            "data":data
        }
        let item=document.getElementById(cur_id);
        item.children[1].innerHTML=data.slice(0,10);
        console.log(item.children[1]);
        console.log(notes);
    }

});

function createBlankList(){
    item_id=item_id+1;
       //list.innerHTML+="<li id="+item_id+"><i class='fas fa-times'></i><div class='title-holder'></div></li>";
       list.innerHTML="<li id="+item_id+" class='note-list'><i class='fas fa-times'></i><div class='title-holder'></div></li>"+list.innerHTML;
       return item_id;
}

function deleteItem(index){
    delete notes[index];
    console.log(notes);
}