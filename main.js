 document.querySelector("#ingreso").addEventListener("click", () => {
 let formEntrar = document.querySelector("#entrar");
 let divLogin = document.querySelector("#login");
 if (divLogin != formEntrar) {
 document.querySelector("#ingreso").style.display = "block";
 document.querySelector("#ingreso").style.display = "none";
 document.querySelector("#titulo").style.display = "none";
    
document.querySelector("#entrar").style.display = "none";
document.querySelector("#entrar").style.display = "block";
    
localStorage.setItem("sesion", "0");
    }
 })
    
 let ingresar = document.querySelector(".ingresar").addEventListener("click", () => {
 let divLogin = document.querySelector("#login");
 let formEntrar = document.querySelector("#entrar");
 let usuario = document.querySelector(".usuario").value;
 let contra = document.querySelector(".passw").value;
    
if (usuario == "a" && contra == 2) {
 divLogin.classList.remove("mostrar");
 divLogin.classList.add("esconder");
 formEntrar.classList.remove("esconder");
 formEntrar.classList.add("mostrar");
    
    
 } else {
    alert("Usuario o contraseña incorrecta");
 }
    
 document.querySelector("#vamos").addEventListener("click", () => {
 document.querySelector("#nombre");
 document.querySelector("#rutinas");
    
 if (usuario == "a" && contra == 2) {
 document.querySelector("#entrar").style.display = "none";
 document.querySelector("#nombre").style.display = "block";
 document.querySelector("#rutinas").style.display = "block";
document.querySelector("#titulo2").style.display = "block";
    
 }
    
 const rutinas = [
    
{ dia: "Lunes", rutina: "Pecho y biceps", ejerciciosNro: 1 },
{ dia: "Martes", rutina: "Espalda y triceps", ejerciciosNro: 2 },
{ dia: "Miercoles", rutina: "Piernas y hombro", ejerciciosNro: 3 },
{ dia: "Jueves", rutina: "Empuje", ejerciciosNro: 4 },
{ dia: "Viernes", rutina: "Traccion", ejerciciosNro: 5 },
{ dia: "Sabado", rutina: "Full body", ejerciciosNro: 6 },
{ dia: "Domingo", rutina: "Piernas", ejerciciosNro: 7 }

 ]

let rutinaJson = JSON.stringify(rutinas);
localStorage.setItem('Rutinas',rutinaJson);
    
        })
    
let nombre = document.querySelector("#nombre");
nombre.addEventListener('submit', agregarNombres);
function agregarNombres(evt) {
evt.preventDefault()
const n = document.querySelector(".n").value;
const apellido = document.querySelector("#apellido").value;
localStorage.setItem(apellido, n);
    
    
if ( n != "" && apellido != "") {

} else {
   alert("No se admiten vacios");
    
 }
    
document.getElementById('texto').innerHTML = 'Al usuario ' +  n  + apellido  + ' se le asigno la rutina :'
            
        }

 document.querySelector("#go").addEventListener("click", () => {
let numero = +document.querySelector("#numero").value;
document.querySelector("#texto").style.display = "block";
if (numero != 0 && numero <= 7) {
let rutinaDevuelta = JSON.parse(localStorage.getItem('Rutinas'));
 let myList = document.querySelector('#lista');
 myList.innerHTML = '';
 for (let i = 0; i < rutinaDevuelta.length; i++) {
    if ( i < numero) {

       myList.innerHTML += `<li>${rutinaDevuelta[i].dia} - ${rutinaDevuelta[i].rutina}<li>`;  
       let lista = document.querySelector("#lista");
       lista.style.color = "blue";
       let p = document.querySelector("#texto");
       p.style.color = "yellow";
}
     }             
 } else {
    alert("Solo se admite numeros del 1 al 7");
    } 
     
       })

    
    })



