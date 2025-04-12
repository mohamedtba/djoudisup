let inpclient = document.getElementById("client");
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody");
let arr;
let first = document.querySelector(".first");
let sr = document.getElementById("search");
let second = document.querySelector(".second");
if (localStorage.clients != null) {
  arr = JSON.parse(localStorage.clients);
} else {
  arr = [];
}
btn.onclick = function () {
  if (inpclient.value != "") {
    arr.push(inpclient.value);
    localStorage.setItem("clients", JSON.stringify(arr));
    inpclient.value = "";
  }
  Show();
};
Show();
function Show() {
  let table = "";
  if (arr == "") {
    table = "";
  } else {
    for (let i = 0; i < arr.length; i++) {
      table += `
  <tr>
      <td >${i + 1}</td>
      
      <td> ${arr[i]}</td>

      <td><button id="${i}" class="btn" onclick="sure(this.id)">حذف</button></td>
      <td><button id="${i}"  class="btn" onclick="inf(this.id)">معلومات</button></td>
  </tr>
  `;
    }
  }
  tbody.innerHTML = table;
}
function delet(id) {
  localStorage.removeItem(arr[id]);
  arr.splice(id, 1);
  localStorage.setItem("clients", JSON.stringify(arr));
  Show();
}

function inf(id) {
  localStorage.setItem("infoclient", JSON.stringify(id));

  location.href = "information.html";
}
function search() {
  if (sr.value != "") {
    tbody.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(sr.value)) {
        tbody.innerHTML += `
<tr>
      <td >${i + 1}</td>
      
      <td> ${arr[i]}</td>

      <td><button id="${i}" class="btn" onclick="sure(this.id)">حذف</button></td>
      <td><button id="${i}"  class="btn" onclick="inf(this.id)">معلومات</button></td>
  </tr>
  



`;
      }
    }
  }
  if (sr.value == "") {
    Show();
  }
  
}
let suree=document.getElementById('sure')
let btnyes=document.getElementById('btnyes')
let btnno=document.getElementById('btnno')
let content=document.getElementById('content')
let who=document.getElementById('who')
function sure(id){
  who.innerHTML=`${arr[id]}`
suree.style.display='block'
localStorage.setItem('idremove',JSON.stringify(id))
content.style.display='none'
}
btnyes.onclick=function(){
id=JSON.parse(localStorage.idremove);

  localStorage.removeItem(arr[id]);
  arr.splice(id, 1);
  localStorage.setItem("clients", JSON.stringify(arr));
  Show();
  suree.style.display='none'
  content.style.display='block'
}
btnno.onclick=function(){

suree.style.display='none'
content.style.display='block'
}
