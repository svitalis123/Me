let thedown = document.getElementById("down");
thedown.addEventListener("click", function onClick(){
    window.scrollBy(0,window.innerHeight)
})

let theup = document.getElementById("up")
theup.addEventListener("click", function onUp(){
    window.scrollBy(0, -window.innerHeight)
}) 
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

// carousel info
let myIndex=1;
 showmetheslides(myIndex);

//  prev nd next

function handleSlides(n){
    showmetheslides(myIndex += n);
}

function showmetheslides(n){
    let theslides = document.getElementsByClassName("imgcontent");

    if(n > theslides.length){myIndex = 1}
    if(n < 1){myIndex = theslides.length}
    for (let i = 0; i < theslides.length; i++){
        theslides[i].style.display="none";
    }
    theslides[myIndex-1].style.display="block"
}

// autoplay
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// my work css
