
$(document).ready(function()
{

});




var list=[];


function toDoList()
{
    var toDo=document.getElementById("add").value;
    
    obj =
    {
        todo:toDo
    };
    list.push(obj);
    display();

} 

function display()
{
    var displayList="";
for(var i=0;i< list.length;i++)
    {
    displayList += "<input type='checkbox' class='check' value='"+list[i].todo +"'  onclick='check("+i+")' >" + list[i].todo + "<button name='edit' id='edit' onclick='edit("+i+")'>Edit</button><button name='delete' id='delete' onclick='delet("+i+")'>Delete</button><br>";

    }
    document.getElementById("incomplete").innerHTML=displayList;
}



function edit(m)

{   


    document.getElementById("button1").style.display="none";
    for(var i=0;i< list.length;i++)
    {
        
if(i == m)
{

    document.getElementById("add").value =list[i].todo ;
const $z=list[i].todo;
    
    



    
    }
    }

    



    

}
function update()
{
    var val1=document.getElementById("add").value;

    
        for(var i=0;i< list.length;i++)
    {

        if($z == list[i])
        {
          
    var val1=document.getElementById("add").value;
        list[i].todo=val1;
        }
    
    }
    display();

}

function check(m)
{
    
    for(var i=0;i< list.length;i++)
    {
        if(i == m)
        {
            list.splice(i,1);

var checkBox=document.querySelector('.check:checked').value;
console.log(checkBox);

var completeList="";
completeList += "<input type='checkbox' class='check' value=''>" + checkBox+ "<button name='edit' id='edit' onclick='edit("+i+")'>Edit</button><button name='delete' id='delete' onclick='delet("+i+")'>Delete</button><br>";


document.getElementById("complete").innerHTML+=completeList;
}
}
display();
}
function delet(m)
{

    for(var i=0;i< list.length;i++)
    {
        if(i == m)
        {
            list.splice(i,1);

        }
    }
display();
}

