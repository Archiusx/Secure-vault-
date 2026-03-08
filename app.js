const SUPABASE_URL = "https://nnqoiiewxhcpujxnecfn.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ucW9paWV3eGhjcHVqeG5lY2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjMxMTIsImV4cCI6MjA4ODUzOTExMn0.tEXH_wLebXydl6-GG3NYma9G6e8TJpBSfbrevIjJDh4
  "

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
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
