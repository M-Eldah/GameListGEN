item=[];
function myFunction(event) {
    let key = event.key;
    if (key == "Enter") 
    { 
        addItems()
    }
  }
function addItems(){
    var v = document.getElementById('itme').value;
    if(contains(v))
    {
        alert("You already wrote this bud")
    }
    else
    {
        var li = document.createElement('li');
        var text = document.createTextNode(v)
        li.appendChild(text);
        document.getElementById('itemDisplay').appendChild(li);
        item.push(li.firstChild.textContent)
        var b = document.createElement("button");
        b.innerText="X";
        b.addEventListener("click", (event) => 
        {
            RemoveFromList(li);
            li.remove();
        });
        li.appendChild(b);
    }
}

function RemoveFromList(li) {
    item.splice(item.indexOf(li.firstChild.textContent), 1);
}

function contains(text)
{
  var c=false;
  if(item.includes(text))
  {
    c=true;
  }
  return c;
}
function save(){
    const data={
        locationType:document.getElementById('lname').value,
        location:document.getElementById('fname').value,
        objects:item
    }
    const userJSON = JSON.stringify(data);
    const link = document.createElement("a");
    const file = new Blob([userJSON], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = document.getElementById('fname').value+".json";
    link.click();
    URL.revokeObjectURL(link.href);
}