var btn=document.getElementById("btn");
const input=document.getElementById("input");
const result=document.querySelector('.result');

const img=document.getElementById("img");
const outcome=document.getElementById("outcome");



btn.addEventListener("click",todo);

function todo(){

if(input.value==""){

// async function
        
async function pokemon(){
        
    const response=await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data=await response.json();


    let output="";

    for(var i in data.results){

        output+=`
        <div class=pokemonAll>
            <h3>${data.results[i].name}</h3>
            <a href="${data.results[i].url}">${data.results[i].url}</a>
        </div>
        
        `
;
    
    };

    result.innerHTML=output;
    

};
pokemon();
outcome.innerText="";
img.setAttribute("src", "");



};
if(input.value!=""){

    async function search(){
    
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        const data=await response.json();

     

        img.setAttribute("src", data.sprites.front_default)
        outcome.innerText=data.name
       
        input.value="";
        

    }
    search();
    result.innerHTML="";
    
    


};


};


input.addEventListener("keyup",(e)=>{

    if(e.keyCode==13){
        todo();
    };
});


window.onload = function(){
    document.getElementById("input").focus();
  };







