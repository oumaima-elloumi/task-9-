
let forma=document.querySelector(".for"); 
let container= document.querySelector(".affichage") ;
let input=document.querySelector("#ono") ;
let blo=document.querySelector(".blo") ;



forma.addEventListener('submit',(event)=>{

    event.preventDefault();
  let todoitem=input.value 
  console.log(todoitem) 

  let newdiv=document.createElement('div') 
  let paragraphe =document.createElement('p')
paragraphe.innerHTML=todoitem 
newdiv.appendChild(paragraphe) 
container.appendChild(newdiv) 

}) ;
/*mta3   lprof */
