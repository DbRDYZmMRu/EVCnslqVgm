var modal = document.getElementById("project-modal");
var close_modal = modal.querySelector('.close-modal-project')
var bg_modal = modal.querySelector('.bg-modal-project')
document.querySelectorAll('.js-project').forEach(d => d.addEventListener("click", (event) => {
    modal.style.display = "flex"; 
}))
document.querySelectorAll('.js-project-ii').forEach(d => d.addEventListener("click", (event) => {
    modal.style.display = "flex"; 
}))
 
close_modal.addEventListener('click', function (){
    modal.style.display = "none";
})

bg_modal.addEventListener('click', function (){
    modal.style.display = "none";
})

// Second Modal
var modal2 = document.getElementById("project-modal-ii");

var close_modal2 = modal2.querySelector('.close-modal-project-ii')

var bg_modal2 = modal2.querySelector('.bg-modal-project-ii')
document.querySelectorAll('.js-project2').forEach(d => d.addEventListener("click", (event) => {
    modal2.style.display = "flex"; 
}))
document.querySelectorAll('.js-project2-ii').forEach(d => d.addEventListener("click", (event) => {
    modal2.style.display = "flex"; 
}))
 
close_modal2.addEventListener('click', function (){
    modal2.style.display = "none";
})

bg_modal2.addEventListener('click', function (){
    modal2.style.display = "none";
})

