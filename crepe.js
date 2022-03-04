let buttonajout = document.getElementById("ajout");
let buttonmoin = document.getElementById("moin");
let val = document.getElementById("value")

// convive

buttonajout.addEventListener('click', function(){ 
    value = val.innerText
    value++
    //val.value = parseInt(val.value)+1;
    val.innerText = value
})

buttonmoin.addEventListener('click', function(){
    value = val.innerText
    value--
    val.innerText = value 
    //val.value = parseInt(val.value)-1;}
})


// ingrédient

let valoeuf = document.getElementById("oeuf")


buttonajout.addEventListener('click', function(){ 
    valoeuf.value = parseInt(valoeuf.value)+1;}
)

buttonmoin.addEventListener('click', function(){ 
    valoeuf.value = parseInt(valoeuf.value)-1;}
)


let vafarine = document.getElementById("farine")



buttonajout.addEventListener('click', function(){ 
    vafarine.value = parseInt(vafarine.value)+63;}
)

buttonmoin.addEventListener('click', function(){ 
    vafarine.value = parseInt(vafarine.value)-63;}
)


let valait = document.getElementById("lait");


buttonajout.addEventListener('click', function(){ 
    valait.value = (parseFloat(valait.value)+0.2).toFixed(1);}
)

buttonmoin.addEventListener('click', function(){ 
    valait.value = (parseFloat(valait.value)-0.2).toFixed(1);}
)



let vabeurre = document.getElementById("beurre")

console.log(parseInt(vabeurre.value))

buttonajout.addEventListener('click', function(){ 
    vabeurre.value = parseInt(vabeurre.value)+13;}
)

buttonmoin.addEventListener('click', function(){ 
    vabeurre.value = parseInt(vabeurre.value)-13;}
)




let vasucre = document.getElementById("sucre")

console.log(parseInt(vasucre.value))

buttonajout.addEventListener('click', function(){ 
    vasucre.value = (parseFloat(vasucre.value)+0.5).toFixed(1);}
)

buttonmoin.addEventListener('click', function(){ 
    vasucre.value = (parseFloat(vasucre.value)-0.5).toFixed(1);}
)




// course 


let valoeuf2 = document.getElementById("oeuf2")

console.log(parseInt(valoeuf2.value))

buttonajout.addEventListener('click', function(){ 
    valoeuf2.value = Math.ceil((parseInt(valoeuf.value)/12));}
)

buttonmoin.addEventListener('click', function(){ 
    valoeuf2.value = Math.ceil((parseInt(valoeuf.value)/12));}
)


let vafarine2 = document.getElementById("farine2")

console.log(parseInt(vafarine2.value))

buttonajout.addEventListener('click', function(){ 
    vafarine2.value = Math.ceil((parseInt(vafarine.value)/1000));}
)

buttonmoin.addEventListener('click', function(){ 
    vafarine2.value = Math.ceil((parseInt(vafarine.value)/1000));}
)


let valait2 = document.getElementById("lait2");

console.log(parseInt(valait.value))

buttonajout.addEventListener('click', function(){ 
    valait2.value = Math.ceil(((parseFloat(valait.value)/1)));}
)

buttonmoin.addEventListener('click', function(){ 
    valait2.value = Math.ceil(((parseFloat(valait.value)/1)));}
)



let vabeurre2 = document.getElementById("beurre2")

console.log(parseInt(vabeurre.value))

buttonajout.addEventListener('click', function(){ 
    vabeurre2.value = Math.ceil((parseInt(vabeurre.value)/250));}
)

buttonmoin.addEventListener('click', function(){ 
    vabeurre2.value = Math.ceil((parseInt(vabeurre.value)/250));}
)

