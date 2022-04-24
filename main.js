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

//FORMULARIO DE INGRESO

let registrado = document.querySelector("#registrado");
registrado.addEventListener("submit", agregarUsuarios);
let clave = [];
let usuario = [];
let usuarioClave = usuario;
usuarioClave = clave;
function agregarUsuarios (evt) {
    evt.preventDefault();
     usuario = document.querySelector("#usuario").value;
     clave = document.querySelector("#clave").value;
     localStorage.setItem(usuario,clave);

        if(usuario === "" || clave === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: 'Ingrese todos los campos requeridos',
                width: "30rem",
                showConfirmButton: false,
                timer : 2000
              })
        } else{
            document.querySelector("#registrado").style.display = "none"; 
            document.querySelector("#titulo").style.display = "block";
            document.querySelector("#ingreso").style.display = "block";
            Swal.fire({
                icon: 'success',
                title: 'wow',
                text: 'Ya estas registrado',
                width: "30rem",
                showConfirmButton: false,
                timer : 2000
            })
        }
    }


    class Sesion {
      constructor(usuario,contra){
        this.usuario = usuario;
        this.contra = contra;
      }
    }
    
    const sesiones = [];
    
    document.querySelector("#sosParte").addEventListener('click', ()=> {
    
      let usu = document.querySelector("#usuario").value ;
      let clave = document.querySelector("#clave").value ;
      
      let s =  new Sesion(usu,clave);
    
      sesiones.push(s);
    
      localStorage.removeItem('sesiones');
    
      localStorage.setItem('sesiones',JSON.stringify(sesiones));
      
    })
    
    document.querySelector("#vamos").addEventListener('click', ()=> {
      let usu = document.querySelector("#inputUsu").value ;
      let clave = document.querySelector("#input").value ;
    
      let sesions = JSON.parse(localStorage.getItem('sesiones'));
      
      const resultado = sesions.find( x => x.usuario === usu &&  x.contra  === clave);
      console.log(resultado)
         
      if (resultado != undefined) {
        //INICIA SESION
        document.querySelector("#nombre").style.display = "block";
        document.querySelector("#rutinas").style.display = "block";
        document.querySelector("#titulo2").style.display = "block";
        document.querySelector("#dieta").style.display = "block";
        document.querySelector("#entrar").style.display = "none";
        document.querySelector("#ejercicios").style.display = "block";
       
  
      
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'Usuario o contraseña incorrecta',
          width: "30rem",
          showConfirmButton: false,
          timer : 2000
        })
      }
      /*     document.querySelector("#btn-ejercicio").addEventListener("click", ()=>{
       let list = document.querySelector("#list")
       list.replaceChildren();
       list.style.color = "blue";
        let ejercicios = 'rutinas.json';
        fetch(ejercicios)
            .then(Response => Response.json())
            .then( data => console.log(data))
            .catch(error => console.log(error))
            for(i=0; i< ejercicios.length; i++){
              const subList = document.createElement("li");
              subList.textContent = `${ejercicios[i].biceps}`
              list.appendChild(subList);
            }
          }) */    

      /*  document.querySelector("#btn-ejercicio").addEventListener("click", ()=>{
        //let list = document.querySelector("#list")
        list.replaceChildren();
        list.style.color = "blue";
         let ejercicios = 'rutinas.json';
         fetch(ejercicios)
         .then((res)=>{
           return res.json()
         })
         .then((resJson)=>{
           mostrarHtml(resJson)
          })
          .catch((err)=>{
            console.log(err)
          })
          function mostrarHtml(obj){
          const list = document.querySelector("#list")
          list.innerHTML = `
             <li>Biceps : ${obj.biceps} </li>
 
          `
        } 
        
          
        })   */

           document.querySelector("#btn-ejercicio").addEventListener("click", traerDatos);
        function traerDatos(){
          const ejercicios = new XMLHttpRequest();
          ejercicios.open ('GET','rutinas.json',true);
          ejercicios.send();
          ejercicios.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              let datos = JSON.parse(this.responseText)
              //console.log(datos);
              let res = document.querySelector("#list");
              document.querySelector("#listaRutinas").style.display = "block";
              document.querySelector("#list").style.display = "block";
              res.replaceChildren();
              res.style.color = "blue";
              res.textContent = '';
              for(let item of datos){
                //console.log(item);
                const rutinas = document.createElement("p");
                res.textContent += 
                rutinas.textContent =  `Biceps: ${item.biceps} - Triceps: ${item.triceps} - Espalda: ${item.espalda} - Pecho: ${item.pecho} - 
                Hombros: ${item.hombros} - Piernas: ${item.piernas} -  Full body: ${item.fullBody}
                `
              }
              res.appendChild(rutinas);
            }
          }         
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
        "Al usuario " + n + apellido + " se le asigno las rutinas :";
    }

    document.querySelector("#go").addEventListener("click", () => {
      let numero = +document.querySelector("#numero").value;
      document.querySelector("#texto").style.display = "block";
      document.querySelector(".tarjeta").style.display = "block";
      let myList = document.querySelector("#lista");
      myList.replaceChildren();
      myList.style.color = "white";
      let p = document.querySelector("#texto");
      p.style.color = "white";
      if (numero != 0 && numero <= 7) {
        let rutinaDevuelta = JSON.parse(localStorage.getItem("Rutinas"));
        for (let i = 0; i < rutinaDevuelta.length; i++) {
          if (i < numero) {
            const subrutina = document.createElement("p");
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
        document.querySelector("#listaAlimentos").style.display = "block";
        document.querySelector("#texto").style.display = "block";
        document.querySelector(".tarjeta").style.display = "block";
        miLista.replaceChildren();
        miLista.style.color = "blue";
        let omnivoroDevuelta = JSON.parse(localStorage.getItem("Omnivoro"));
        for (let i = 0; i <omnivoroDevuelta.length ; i++){
           const subomnivoro = document.createElement("p"); 
           subomnivoro.textContent = `${omnivoroDevuelta[i].dia} - Desayuno: ${omnivoroDevuelta[i].desayuno} -Almuerzo: ${omnivoroDevuelta[i].almuerzo} - Cena: ${omnivoroDevuelta[i].cena}`;
           miLista.appendChild(subomnivoro);
        }
         
   
      })
      document.querySelector("#vegetariano").addEventListener ("click",() =>{

        let miLista = document.querySelector("#listaAlimentos");
        document.querySelector("#listaAlimentos").style.display = "block";
        document.querySelector("#texto").style.display = "block";
        document.querySelector(".tarjeta").style.display = "block";
        miLista.replaceChildren();
        miLista.style.color = "blue";
        let vegetarianoDevuelta = JSON.parse(localStorage.getItem("vegetariano"));
        for (let i = 0; i <vegetarianoDevuelta.length ; i++){
           const subVegetariano = document.createElement("p"); 
           subVegetariano.textContent = `${vegetarianoDevuelta[i].dia} - Desayuno: ${vegetarianoDevuelta[i].desayuno} - Almuerzo: ${vegetarianoDevuelta[i].almuerzo} - Cena: ${vegetarianoDevuelta[i].cena}`;
           miLista.appendChild(subVegetariano);
        }
         
   
      })
      document.querySelector("#vegano").addEventListener ("click",() =>{

        let miLista = document.querySelector("#listaAlimentos");
        document.querySelector("#listaAlimentos").style.display = "block";
        document.querySelector("#texto").style.display = "block";
        document.querySelector(".tarjeta").style.display = "block";
        miLista.replaceChildren();
        miLista.style.color = "blue";
        let veganoDevuelta = JSON.parse(localStorage.getItem("vegano"));
        for (let i = 0; i <veganoDevuelta.length ; i++){
           const subVegano = document.createElement("p"); 
           subVegano.textContent = `${veganoDevuelta[i].dia} - Desayuno: ${veganoDevuelta[i].desayuno} - Almuerzo: ${veganoDevuelta[i].almuerzo} - Cena: ${veganoDevuelta[i].cena}`;
           miLista.appendChild(subVegano);
        }
         
   
      })
    });
  ;
