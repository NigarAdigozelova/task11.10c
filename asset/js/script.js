let btn_click = document.getElementById("btn_click").onclick = function () {
    let value = document.getElementById("input").value
    
    var allElmnts = document.querySelectorAll("li");
  
    for (var i = 0; i < allElmnts.length; i++) {
        if (value.toLowerCase() == allElmnts[i].innerText.toLowerCase()) {
            alert("eynidir")
            return;
        }
    }
    if (value.trim() != "") {
        console.log(value);
        let add = document.getElementById("add").innerHTML += `<li>${value}</li>`;
    } else {
        alert("bos yapmayin")
    }
}