var elem = document.querySelectorAll(".elem")



elem.forEach(function(val){



    val.addEventListener("mouseenter" , function() {
        val.childNodes[3].style.opacity = 0.9;
       
        
    })

    val.addEventListener("mousemove" , function(de) {
        val.childNodes[3].style.left = de.x + "px";
        val.childNodes[3].style.top = de.y + "px";


     })

    val.addEventListener("mouseleave" , function() {
        val.style.background = "rgb(104, 100, 100)";
        val.childNodes[3].style.opacity = 0;
       
    })

})
