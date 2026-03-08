const correctPin = "4632"

function unlock(){

let pin = document.getElementById("pin").value

if(pin === correctPin){
document.getElementById("loginBox").style.display="none"
document.getElementById("vault").style.display="block"
}
else{
document.getElementById("error").innerText="Wrong PIN"
}

}

function uploadFile(){

let fileInput = document.getElementById("fileInput")
let file = fileInput.files[0]

if(!file) return

let li = document.createElement("li")
li.innerText = file.name

document.getElementById("fileList").appendChild(li)

}
