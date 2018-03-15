function add() {
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("Li");
    var btn = document.createElement("BUTTON");
    var btntext = document.createTextNode("Delete");
    btn.appendChild(btntext);
    btn.onclick = function () {
        var li = this.parentNode;
        var ul = li.parentNode;
        ul.removeChild(li);

    }

var text = document.createTextNode(val.value);
li.appendChild(text)
li.appendChild(btn)
list.appendChild(li)
val.value = " ";

}


function dlt(){
    alert ("Are You Sure ?");
    document.getElementById("list").innerText = " ";
}