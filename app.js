const SUPABASE_URL = "https://nnqoiiewxhcpujxnecfn.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ucW9paWV3eGhjcHVqeG5lY2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjMxMTIsImV4cCI6MjA4ODUzOTExMn0.tEXH_wLebXydl6-GG3NYma9G6e8TJpBSfbrevIjJDh4
  "

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function unlock() {

let pin = document.getElementById("pin").value

const { data, error } = await supabase
.from("Valid_auth")
.select("pin_hash")
.eq("id",1)
.single()

if(pin == data.pin_hash){

document.getElementById("loginBox").style.display="none"
document.getElementById("vault").style.display="block"

}else{

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
