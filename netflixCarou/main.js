// function scrollRight(){
//     // !alert("Tu as cliqué à gauche !")
// }

// function scrollRight(){
//     // !alert("Tu as cliqué à droite !")
//     const select = document.querySelector(rightArrow);
//     select.addEventListener('click', function(event)){
//         !alert('HELLO')
//     }
// }

function(caroussel, rightArrow){
    const scroll = document.querySelector(caroussel);

    const right = document.querySelector(rightArrow);

    right.addEventListener("click", () =>{
        scroll.scrollLeft += scroll.offsetWidth;
    })
}