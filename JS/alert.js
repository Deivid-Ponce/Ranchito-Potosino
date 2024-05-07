Swal.fire({
    title: "Bienvenido al Ranchito Potosino!",
    allowOutsideClick: false
})
//--------------------------------------------//
const product = document.getElementById("1");

product.addEventListener("mouseenter", () =>{

    product.style.opacity = ".7";
} )

product.addEventListener("mouseleave", () => {

    product.style.opacity = "1";
})
//---------------------------------------------//
const product2 = document.getElementById("2");

product2.addEventListener("mouseenter", () => {

    product2.style.opacity = ".7";
})

product2.addEventListener("mouseleave", () => {

    product2.style.opacity = "1";
})
//---------------------------------------------//

const product3 = document.getElementById("3");

product3.addEventListener("mouseenter", () => {

    product3.style.opacity = ".7";
})

product3.addEventListener("mouseleave", () => {

    product3.style.opacity = "1";
})
//---------------------------------------------//

const product4 = document.getElementById("4");

product4.addEventListener("mouseenter", () => {

    product4.style.opacity = ".7";
})

product4.addEventListener("mouseleave", () => {

    product4.style.opacity = "1";
})