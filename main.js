document.querySelector("#ingreso").addEventListener("click", () => {
  let formEntrar = document.querySelector("#entrar");
  let divLogin = document.querySelector("#login");
  if (divLogin != formEntrar) {
    document.querySelector("#ingreso").style.display = "block";
    document.querySelector("#ingreso").style.display = "none";
    document.querySelector("#registrarse").style.display = "none";
    document.querySelector("#titulo").style.display = "none";

    document.querySelector("#entrar").style.display = "none";
    document.querySelector("#entrar").style.display = "block";

    localStorage.setItem("sesion", "0");
  }
});

let registrarse = document.querySelector("#registrarse").addEventListener ("click" , () =>{
      
  let formularioEntrar = document.querySelector("#registrado");
  let login = document.querySelector("#login");
  if (formularioEntrar != login){
    document.querySelector("#titulo3").style.display = "block";
    document.querySelector("#usuario").style.display = "block";
    document.querySelector("#clave").style.display = "block";
    document.querySelector("#registrado").style.display = "block";
    document.querySelector("#ingreso").style.display = "none";
    document.querySelector("#registrarse").style.display = "none";
    document.querySelector("#titulo").style.display = "none";
  }



})
/* const form = document.querySelector("#registrado");

let user = [];
let password = [];

let users = JSON.stringify(password);
localStorage.setItem("user",users);

let contras = JSON.stringify(password);
localStorage.setItem("contra",contras);

document.querySelector("#sosParte").addEventListener("submit", (event) =>{
  event.preventDefault();
  let nombres = document.querySelector("#usuario").value;
  let contraseñas = document.querySelector("#password").value;

  user.push(nombres);
  password.push(contraseñas);

  
  let usuarioDevuelta = JSON.parse(localStorage.getItem("user"));
  let contraDevuetla = JSON.parse(localStorage.getItem("contra"));
  for (let i = 0; i <usuarioDevuelta.find; i++){
      
  }
 
}) */


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
      const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 1000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })
       
       Toast.fire({
         icon: 'success',
         title: 'Has ingresado con exito'
       })
    } else {
      Swal.fire({
         icon: 'error',
         title: 'Incorrecto',
         text: 'Contraseña o usuario',
         width: "30rem",
         footer: '<a href="">Vuelve a intentarlo!</a>'
       })
    }

    document.querySelector("#vamos").addEventListener("click", () => {
      document.querySelector("#nombre");
      document.querySelector("#rutinas");

      if (usuario == "a" && contra == 2) {
        document.querySelector("#entrar").style.display = "none";
        document.querySelector("#nombre").style.display = "block";
        document.querySelector("#rutinas").style.display = "block";
        document.querySelector("#titulo2").style.display = "block";
        document.querySelector("#dieta").style.display = "block";
      }

      const rutinas = [
        { dia: "Lunes", rutina: "Pecho y biceps", ejerciciosNro: 1 },
        { dia: "Martes", rutina: "Espalda y triceps", ejerciciosNro: 2 },
        { dia: "Miercoles", rutina: "Piernas y hombro", ejerciciosNro: 3 },
        { dia: "Jueves", rutina: "Empuje", ejerciciosNro: 4 },
        { dia: "Viernes", rutina: "Traccion", ejerciciosNro: 5 },
        { dia: "Sabado", rutina: "Full body", ejerciciosNro: 6 },
        { dia: "Domingo", rutina: "Piernas", ejerciciosNro: 7 },
      ];

      let rutinaJson = JSON.stringify(rutinas);
      localStorage.setItem("Rutinas", rutinaJson);

      const omnivoro = [
            
         { dia: "Lunes", desayuno: "Huevo revuelto" , almuerzo: "Carne"  , cena: "Pollo"},
         { dia: "Martes", desayuno:"Pescado" , almuerzo: "Ensalada" , cena: "Tortilla de papa"},
         { dia: "Miercoles", desayuno:"Yogurt" , almuerzo:"Lentejas"  , cena: "Milanesa"},
         { dia: "Jueves", desayuno:"Yogurt" , almuerzo: "Garbanzos" , cena: "Polllo al horno"},
         { dia: "Viernes", desayuno: "Tostadas" , almuerzo: "Pechuga de pollo" , cena: "Zapallito"},
         { dia: "Sabado", desayuno: "Huevo revuelto", almuerzo: "Tarta de atun"  , cena:"Tarta de jyq"},
         { dia: "Domingo", desayuno:"Yogurt" , almuerzo: "Tarta de espinaca" , cena:"Pollo"},
         
      ]
         let omnivoroJson = JSON.stringify(omnivoro);
         localStorage.setItem("Omnivoro", omnivoroJson);

         const vegetariano = [
            
          { dia: "Lunes", desayuno: "Huevo revuelto" , almuerzo: "Lentejas"  , cena: "Ensalada con milanesa de soja"},
          { dia: "Martes", desayuno:"Yogurt con avena" , almuerzo: "Hamburguesa de quinoa" , cena: "Brocoli con milanesa de soja"},
          { dia: "Miercoles", desayuno:"Tostadas con palta" , almuerzo:"Omelette con arroz "  , cena: "Hamburguesa con tufu"},
          { dia: "Jueves", desayuno:"Omelette y jugo de naranja" , almuerzo: "Tarta de espinaca" , cena: "Tarta de zapallito"},
          { dia: "Viernes", desayuno: "Yogurt con avena" , almuerzo: "Hamburguesas de garbanzos" , cena: "Ensalada con milanesa de soja"},
          { dia: "Sabado", desayuno: "Huevo revuelto", almuerzo: "Milanesa de berenjena"  , cena:"Brocoli con milanesa de soja"},
          { dia: "Domingo", desayuno:"Yogurt con avena" , almuerzo: "Tarta de espinaca" , cena:"Ensalada"},
          
       ]
       let vegetarianoJson = JSON.stringify(vegetariano);
       localStorage.setItem("vegetariano", vegetarianoJson);

       const vegano = [
            
        { dia: "Lunes", desayuno: "Frutos secos mas jugo de naranja" , almuerzo: "Lentejas"  , cena: "Ensalada con milanesa de soja"},
        { dia: "Martes", desayuno:"Jugo de naranja y avena" , almuerzo: "Hamburguesa de quinoa" , cena: "Brocoli con milanesa de soja"},
        { dia: "Miercoles", desayuno:"Tostadas con palta" , almuerzo:"Arroz y lentejas "  , cena: "Hamburguesa con tufu"},
        { dia: "Jueves", desayuno:"Tostadas con palta y banana" , almuerzo: "Tarta de espinaca" , cena: "Tarta de zapallito"},
        { dia: "Viernes", desayuno: "Jugo de soja con avena" , almuerzo: "Hamburguesas de garbanzos" , cena: "Ensalada con milanesa de soja"},
        { dia: "Sabado", desayuno: "Jugo de soja con avena", almuerzo: "Milanesa de berenjena"  , cena:"Brocoli con milanesa de soja"},
        { dia: "Domingo", desayuno:"Tostadas con palta" , almuerzo: "Tarta de espinaca" , cena:"Ensalada"},
        
     ]
     let veganoJson = JSON.stringify(vegano);
     localStorage.setItem("vegano", veganoJson);

    });


    let nombre = document.querySelector("#nombre");
    nombre.addEventListener("submit", agregarNombres);
    function agregarNombres(evt) {
      evt.preventDefault();
      const n = document.querySelector(".n").value;
      const apellido = document.querySelector("#apellido").value;
      localStorage.setItem(apellido, n);

      if (n != "" && apellido != "") {
      } else {
         Swal.fire({
            icon: 'warning',
            title: "Ups",
            text: 'No se admiten vacios',
            width: "30rem",
          })
      }

      document.getElementById("texto").textContent =
        "Al usuario " + n + apellido + " se le asigno la rutina :";
    }

    document.querySelector("#go").addEventListener("click", () => {
      let numero = +document.querySelector("#numero").value;
      document.querySelector("#texto").style.display = "block";
      let myList = document.querySelector("#lista");
      myList.replaceChildren();
      myList.style.color = "blue";
      let p = document.querySelector("#texto");
      p.style.color = "yellow";
      if (numero != 0 && numero <= 7) {
        let rutinaDevuelta = JSON.parse(localStorage.getItem("Rutinas"));
        for (let i = 0; i < rutinaDevuelta.length; i++) {
          if (i < numero) {
            const subrutina = document.createElement("li");
            subrutina.textContent = `${rutinaDevuelta[i].dia} - ${rutinaDevuelta[i].rutina}`;
            myList.appendChild(subrutina);
          }
        }
      } else {
         Swal.fire({
            icon: 'warning',
            title: "Ups",
            text: 'Solo se admiten numeros del 1 al 7',
            width: "30rem",
          })
      }
      
      
      document.querySelector("#omnivoro").addEventListener ("click",() =>{

        let miLista = document.querySelector("#listaAlimentos");
        miLista.replaceChildren();
        miLista.style.color = "blue";
        let omnivoroDevuelta = JSON.parse(localStorage.getItem("Omnivoro"));
        for (let i = 0; i <omnivoroDevuelta.length ; i++){
           const subomnivoro = document.createElement("li"); 
           subomnivoro.textContent = `${omnivoroDevuelta[i].dia} - ${omnivoroDevuelta[i].desayuno} - ${omnivoroDevuelta[i].almuerzo} - ${omnivoroDevuelta[i].cena}`;
           miLista.appendChild(subomnivoro);
        }
         
   
      })
      document.querySelector("#vegetariano").addEventListener ("click",() =>{

        let miLista = document.querySelector("#listaAlimentos");
        miLista.replaceChildren();
        miLista.style.color = "blue";
        let vegetarianoDevuelta = JSON.parse(localStorage.getItem("vegetariano"));
        for (let i = 0; i <vegetarianoDevuelta.length ; i++){
           const subVegetariano = document.createElement("li"); 
           subVegetariano.textContent = `${vegetarianoDevuelta[i].dia} - ${vegetarianoDevuelta[i].desayuno} - ${vegetarianoDevuelta[i].almuerzo} - ${vegetarianoDevuelta[i].cena}`;
           miLista.appendChild(subVegetariano);
        }
         
   
      })
      document.querySelector("#vegano").addEventListener ("click",() =>{

        let miLista = document.querySelector("#listaAlimentos");
        miLista.replaceChildren();
        miLista.style.color = "blue";
        let veganoDevuelta = JSON.parse(localStorage.getItem("vegano"));
        for (let i = 0; i <veganoDevuelta.length ; i++){
           const subVegano = document.createElement("li"); 
           subVegano.textContent = `${veganoDevuelta[i].dia} - ${veganoDevuelta[i].desayuno} - ${veganoDevuelta[i].almuerzo} - ${veganoDevuelta[i].cena}`;
           miLista.appendChild(subVegano);
        }
         
   
      })
    });
  });
