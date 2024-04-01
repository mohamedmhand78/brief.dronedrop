var poid = document.querySelector(".inp1");
var dem1 = document.querySelector(".inp2")
var dem2 = document.querySelector(".inp3")
var dem3 = document.querySelector(".inp4")
var frais = document.querySelector("#select")
var btn = document.querySelector(".btn2")
var value1 = document.querySelector(".resaultst")
var value2 = document.querySelector(".resaultex")
fetch("index.json").then(Response => Response.json())
.then(data => {
    var distance = data.tarifs.standard.distance
    for(e in distance){
        frais.innerHTML += ` <option value="${e}">${e}</option>`
    }

    
    
btn.addEventListener('click',function(){
    if(poid.value !== '' && dem1.value !== "" && dem2.value !== "" && dem3.value !== ""){
    // section.style.display = "block"
    let fraisv = 0
    let fraisv2 = 0
    switch(frais.value){
        case "moins de 10 km":
            fraisv = 5
            fraisv2 =7
            break;
        case "entre 10km et 50km":
            fraisv = 10
            fraisv2 = 15
            break;
        case "entre 50km et 100km":
            fraisv = 15
            fraisv2 = 22
            break;
        case "entre 100km et 300km":
            fraisv = 30  
            fraisv2 = 40
            break;
        case "plus de 300km":
            fraisv = 50  
            fraisv2 = 65
            break            
    }
    console.log(fraisv,fraisv2)
    var demontion = +dem1.value + +dem2.value + +dem3.value
   
    console.log(frais.value)
    
    value1.innerHTML =`MAD  ${data.tarifs.standard.base + +poid.value + data.tarifs.standard.poids + demontion + data.tarifs.standard.dimension + fraisv}`
    value2.innerHTML =`MAD  ${data.tarifs.express.base + +poid.value + data.tarifs.express.poids + demontion + data.tarifs.express.dimension + fraisv}`
    poid.value = ""
    dem1.value = ""
    dem2.value = ""
    dem3.value = ""

}else{
    alert("completer les donez")
}}
)
})