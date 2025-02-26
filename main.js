/////*============toggle icon navbar ============*/

////let nemuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active')
// }

// /*============scroll section active link ============*/

// let sectons = document.querySelector('section');
// let navLinks = document.querySelector('header nav a');

// window.onscroll = () => {
//     sectons.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach.apply(links => {
//                 links.classlist.remove('active');
//                 document.querySelector('header nav a[href*=' + ']').classList.add('active');
//             });
//         };
//     });

//     /*============sticky navbar ============*/
// let header = document.querySelector('header');
// header.classList.toggle('sticky', window.scrollY > 100);

// /*==========remove toggle icon and navbar =============*/
// menuIcon.classList.remove('fa-xmark');
// navbar.classList.remove('active');
const roles = [
    { text: "Frontend Developer", color: "#FF00FF" },
    { text: "Web Designer", color: "#3498db" },
    { text: "UI/UX Enthusiast", color: "#2ecc71" },
    ];

let index = 0;

function changeText() {
    const textElement = document.getElementById("changing-text");

    // Move text up and fade out
    textElement.style.transform = "translateY(-10px)";
    textElement.style.opacity = "0";

    setTimeout(() => {
        textElement.textContent = roles[index].text;
        textElement.style.color = roles[index].color;

        // Move text down and fade in
        textElement.style.transform = "translateY(10px)";
        textElement.style.opacity = "1";
        
        index = (index + 1) % roles.length;
    }, 500); // Delay to match the transition effect
}

setInterval(changeText, 2000); // Change text every 2 seconds


