let heart = document.querySelectorAll("#heart");
    heart.forEach((item) => {
     item.addEventListener("click" , function() {
        item.style.color = "red";
        console.log(this);
        alert("item is added in your wishlist")
     })
    });

// let dress = document.querySelectorAll(".dress");
//    dress.forEach ((item) => {
//       setTimeout( () => {
//          item.style.display = "block";
//       },1000)
//    })   

ScrollReveal({
    reset: true,
    distance: '20px',
    duration: 2500,
    delay: 400
});
//dress 
ScrollReveal().reveal('.top-deals-container , #indo-western' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('.top-deals-container , #western' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('.top-deals-container , #lehenga' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('.top-deals-container , #salwar' , {delay: 500, origin: 'right'});

//occasion
ScrollReveal().reveal('#occasion1' , {delay: 500, origin: 'left'});
ScrollReveal().reveal('#occasion2' , {delay: 500, origin: 'top'});
ScrollReveal().reveal('#occasion3' , {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('#occasion4' , {delay: 500, origin: 'right'});

//traditional dress
ScrollReveal().reveal('#women-gown' , {delay: 500, origin: 'left'});
ScrollReveal().reveal('#Anarkali-gown' , {delay: 500, origin: 'top'});
ScrollReveal().reveal('#lehenga-choli' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('#peacock' , {delay: 500, origin: 'left'});
ScrollReveal().reveal('#sharara-suit' , {delay: 500, origin: 'top'});
ScrollReveal().reveal('#women-saree' , {delay: 500, origin: 'right'});


