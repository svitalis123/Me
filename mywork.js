let element = document.getElementById("section");
let elme =document.querySelectorAll(".firstdiv")
console.log(elme.length)
let offset = 100;
element.addEventListener('scroll', function onscroll(){
    animatemywork(elme, offset)
   
})
function handleoffset(el, pageoffset = 0){
        let a = el.getBoundingClientRect().top
        return (a <= (window.innerHeight || document.documentElement.offsetHeight) - pageoffset)
    

   
}
 function handleaddclass(el){
    el.classList.add("firstdiv2")
 }
 function removeclass(el){
    el.classList.remove("firstdiv2")
 }
 function animatemywork(elme, offset){
   for(let g=0; g<elme.length;g++){
    if(handleoffset(elme[g], offset)){
        handleaddclass(elme[g]);
    }else{
        removeclass(elme[g])
    }
   }
    
 }
 function handletole(){
   
    let para=document.getElementById('thelist');
    
    if(para.style.display === 'none'){
        para.style.display='block'
    }else {
        para.style.display='none'
    }
}
var menubutton=document.getElementById('unorderl');
var links=menubutton.getElementsByClassName("link");

for(var p=0; p<=links.length; p++){
    links[p]?.addEventListener('click', function(){
        var activelink=document.getElementsByClassName("active");
        activelink[0].className=activelink[0].className.replace(" active", "");
        this.className += " active";
    })
}

