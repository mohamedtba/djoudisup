let title=document.getElementById('title')
let btn=document.getElementById('btn')
let tbody=document.getElementById('tbody')
let inpcrd=document.getElementById('credit')
let arr=[]
let totall=document.getElementById('total')

let are=[]
are=JSON.parse(localStorage.clients)
let j=JSON.parse(localStorage.infoclient);
j=+j;
title.innerHTML=`${j+1}- ${are[j]}`
let a=are[j];

if(localStorage.getItem(a) != null){

    arr=JSON.parse(localStorage.getItem(a))
}


btn.onclick=function(){
if(inpcrd.value!='' && inpcrd.value >0){
arr.push(inpcrd.value)
localStorage.setItem(`${a}`,JSON.stringify(arr))
inpcrd.value=''
Show()
totall.innerHTML=`المجموع : ${total()} دج`
check()
}


}
Show()
totall.innerHTML=`المجموع : ${total()} دج`
check()
function Show() {
    let table = "";
    if(arr ==''){
  table='';
  
  
    }
    else{
    for (let i = 0; i < arr.length; i++) {
      table += `
  <tr>
      <td class="tb" >${arr[i]} دج</td>
      
      

      <td class="tb"><button id="${i}" class="btnd" onclick="sure(this.id)">حذف</button></td>
   
  </tr>
  `;
  }   }
  tbody.innerHTML = table;
      
  
    
  
  }
  function delet(id){
 

    arr.splice(id,1);
    localStorage.setItem(`${are[j]}`,JSON.stringify(arr))
    Show()
      totall.innerHTML=`المجموع : ${total()} دج`
    check()
    }
function total(){
    let s=0;
for(let i=0;i<arr.length;i++){
    arr[i]=+arr[i]
s=s+arr[i];

}
return s;

}
function check(){
if(total()==0){
totall.style.backgroundColor='green'
totall.style.display='inline'
totall.style.borderRadius='10px'
}
else{
  totall.style.backgroundColor='red'
  totall.style.display='inline'
  totall.style.borderRadius='10px'
}
}
let suree=document.getElementById('sure')
let btnyes=document.getElementById('btnyes')
let btnno=document.getElementById('btnno')
let who=document.getElementById('who')

 
function sure(id){
   who.innerHTML=`${arr[id]}`
  suree.style.display='block'
  localStorage.setItem('idremove',JSON.stringify(id))
  content.style.display='none'
  }
  btnyes.onclick=function(){
  id=JSON.parse(localStorage.idremove);
  
  arr.splice(id,1);
  localStorage.setItem(`${are[j]}`,JSON.stringify(arr))
  Show()
    totall.innerHTML=`المجموع : ${total()} دج`
  check()
    suree.style.display='none'
    content.style.display='block'
  }
  btnno.onclick=function(){
  
  suree.style.display='none'
  content.style.display='block'
  }
