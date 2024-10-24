const button = document.getElementById('bt');
button.addEventListener('click',add)

function add()
{
    item = document.getElementById('tbitem');
    if(item.value == "")
    {
        alert("Empty Box!!");
        return;
    }
    const out = document.getElementById('listbox');
    out.innerHTML +=  item.value + "<br>";
    item.value = "";

}

