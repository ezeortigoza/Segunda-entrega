     input.minlength = 3
 
    window.onload = () =>{
    setTimeout (()=>{
      document.getElementsByTagName("body")[0].style.background = "#111013"
      document.querySelector("#titulo2").style.color = "#546E7A";
      document.querySelector("#titulo").style.color = "blue";
      document.querySelector("#titulo3").style.color = "blue";
      document.querySelector(".entrar").style.color = "blue";
      document.querySelector(".title").style.color = "#546E7A";
      document.querySelector("#mes").style.color = "#546E7A";
      document.querySelector("#alimentos").style.color = "#546E7A";

    }, 18000);
  } 
 
  function refrescarPagina(e){
    //let numero = document.querySelector("#numero");
     let btnEjercicio = document.querySelector("#btn-ejercicio");
    let botones = document.querySelector("#botones");
    
    if (btnEjercicio == "block" && botones == "block"){
      e.preventDefault();
      btnEjercicio.style.display = "none";
      botones.style.display = "none";
    } 
    location.reload();
  }
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
        document.querySelector("#fit").style.display = "block";
        document.querySelector("#titulo2").style.display = "block";
        document.querySelector("#dieta").style.display = "block";
        document.querySelector("#entrar").style.display = "none";
        document.querySelector("#ejercicios").style.display = "block";

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Has ingresado con exito',
          showConfirmButton: false,
          timer: 1700,
          width: "25rem",
          height: "5rem"
        })
      
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
      

         document.querySelector("#btn-ejercicio").addEventListener("click", ()=>{
         document.querySelector("#listaRutinas").style.display = "block";
         document.querySelector("#escondido").style.display = "none";
         list.replaceChildren();
         list.style.color = "white";
         let ejercicios =  "rutinas.json"
         fetch(ejercicios)
         .then((res)=>{
           console.log(res)
            return res.json()
         
         })
          .then( resJson => mostrarHtml(resJson))  
          .catch((err)=>{
            console.log(err)
          })

          function mostrarHtml (obj){
          let list = document.querySelector("#list")
          let rutinas = document.createElement("p");
          rutinas.style.color = "white";
          list.textContent += ""
          rutinas.innerHTML = `
             <h5>Biceps :</h5>${obj.biceps}  -  <h5>Triceps :</h5> ${obj.triceps} -  <h5>Espalda :</h5> ${obj.espalda} -  <h5>Pecho :</h5> ${obj.pecho} -  <h5>Hombros :</h5> ${obj.hombros}
             <h5>Piernas :</h5> ${obj.piernas} -  <h5>Full body :</h5> ${obj.fullBody}
          `
          list.appendChild(rutinas);
        } 
      
          
        })      

      

      const rutinas = [
        { dia:  "Lunes", rutina: "Pecho y biceps", ejerciciosNro: 1 },
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
            
         { dia: "Lunes", desayuno: "Huevo revuelto",  almuerzo: "Carne" , merienda: "Licuado de banana",  cena: "Pollo"},
         { dia: "Martes", desayuno:"Pescado" ,  almuerzo: "Ensalada" , merienda: "Licuado de banana", cena: "Tortilla de papa"},
         { dia: "Miercoles", desayuno:"Yogurt"  , almuerzo:"Lentejas" , merienda: "Tostadas con queso port salut"  , cena: "Milanesa"},
         { dia: "Jueves", desayuno:"Yogurt" , almuerzo: "Garbanzos" , merienda: "Tostadas con queso port salut" , cena: "Polllo al horno"},
         { dia: "Viernes", desayuno: "Tostadas" , almuerzo: "Pechuga de pollo" ,merienda: "Huevo revuelto con jugo de naranja" , cena: "Zapallito"},
         { dia: "Sabado", desayuno: "Huevo revuelto", almuerzo: "Tarta de atun" , merienda: "Huevo revuelto con jugo de naranja"  , cena:"Tarta de jyq"},
         { dia: "Domingo", desayuno:"Yogurt" , almuerzo: "Tarta de espinaca" , merienda: "Pan integral con palta" , cena:"Pollo"},
         
      ]
         let omnivoroJson = JSON.stringify(omnivoro);
         localStorage.setItem("Omnivoro", omnivoroJson);

         const vegetariano = [
            
          { dia: "Lunes", desayuno: "Huevo revuelto"  , almuerzo: "Lentejas" , merienda: "Pan integral con palta" , cena: "Ensalada con milanesa de soja"},
          { dia: "Martes", desayuno:"Yogurt con avena" , almuerzo: "Hamburguesa de quinoa" , merienda: "Pan integral con palta" , cena: "Brocoli con milanesa de soja"},
          { dia: "Miercoles", desayuno:"Tostadas con palta" , almuerzo:"Omelette con arroz "  ,merienda: "Huevo revuelto con avena" , cena: "Hamburguesa con tufu"},
          { dia: "Jueves", desayuno:"Omelette y jugo de naranja" , almuerzo: "Tarta de espinaca", merienda: "Huevo revuelto con avena"  , cena: "Tarta de zapallito"},
          { dia: "Viernes", desayuno: "Yogurt con avena"  , almuerzo: "Hamburguesas de garbanzos" , merienda: "Huevo revuelto con jugo de naranja" , cena: "Ensalada con milanesa de soja"},
          { dia: "Sabado", desayuno: "Huevo revuelto", almuerzo: "Milanesa de berenjena" , merienda: "Yogurt natural y avena" , cena:"Brocoli con milanesa de soja"},
          { dia: "Domingo", desayuno:"Yogurt con avena" , almuerzo: "Tarta de espinaca", merienda: "Yogurt natural y avena" , cena:"Ensalada"},
          
       ]
       let vegetarianoJson = JSON.stringify(vegetariano);
       localStorage.setItem("vegetariano", vegetarianoJson);

       const vegano = [
            
        { dia: "Lunes", desayuno: "Frutos secos mas jugo de naranja", almuerzo: "Lentejas" , merienda: "Pan integral con palta"  , cena: "Ensalada con milanesa de soja"},
        { dia: "Martes", desayuno:"Jugo de naranja y avena" , almuerzo: "Hamburguesa de quinoa", merienda: "Pan integral con palta"  , cena: "Brocoli con milanesa de soja"},
        { dia: "Miercoles", desayuno:"Tostadas con palta" , almuerzo:"Arroz y lentejas " , merienda: "Pan integral con frutos secos + miel"  , cena: "Hamburguesa con tufu"},
        { dia: "Jueves", desayuno:"Tostadas con palta y banana" , almuerzo: "Tarta de espinaca" , merienda: "Pan integral con frutos secos + miel"   , cena: "Tarta de zapallito"},
        { dia: "Viernes", desayuno: "Jugo de soja con avena" , almuerzo: "Hamburguesas de garbanzos" , merienda: "Jugo ades con frutos secos"  , cena: "Ensalada con milanesa de soja"},
        { dia: "Sabado", desayuno: "Jugo de soja con avena", almuerzo: "Milanesa de berenjena" , merienda: "Jugo ades con frutos secos" , cena:"Brocoli con milanesa de soja"},
        { dia: "Domingo", desayuno:"Tostadas con palta" , almuerzo: "Tarta de espinaca", merienda: "Licuado de frutilla (con agua) + frutos secos  " , cena:"Ensalada"},
        
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
      nombre.reset();
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
      let myList = document.querySelector("#lista");
      myList.replaceChildren();
      myList.style.color = "white";
      let p = document.querySelector("#texto");
      p.style.color = "white";
      if (numero != 0 && numero <= 7) {
        let rutinaDevuelta = JSON.parse(localStorage.getItem("Rutinas"));
        for (let i = 0; i < rutinaDevuelta.length; i++) {
          if (i < numero) {
            document.querySelector("#texto").style.display = "block";
            document.querySelector(".tarjeta").style.display = "block";
            document.querySelector("#rutinas").style.display = "none";
            document.querySelector(".title").style.display = "block";
            const subrutina = document.createElement("p");
            subrutina.textContent = `${rutinaDevuelta[i].dia} - ${rutinaDevuelta[i].rutina}`;
            myList.appendChild(subrutina);
           
          }
        }
        //srutinas.reset();
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
           subomnivoro.textContent = `${omnivoroDevuelta[i].dia} - Desayuno: ${omnivoroDevuelta[i].desayuno} -Almuerzo: ${omnivoroDevuelta[i].almuerzo}- Merienda: ${omnivoroDevuelta[i].merienda} - Cena: ${omnivoroDevuelta[i].cena}`;
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
           subVegetariano.textContent = `${vegetarianoDevuelta[i].dia} - Desayuno: ${vegetarianoDevuelta[i].desayuno} - Almuerzo: ${vegetarianoDevuelta[i].almuerzo} - Merienda: ${vegetarianoDevuelta[i].merienda} - Cena: ${vegetarianoDevuelta[i].cena}`;
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
           subVegano.style.color = "white";
           subVegano.innerHTML = `${veganoDevuelta[i].dia} -   Desayuno: ${veganoDevuelta[i].desayuno} - Almuerzo: ${veganoDevuelta[i].almuerzo} - Merienda: ${veganoDevuelta[i].merienda} - Cena: ${veganoDevuelta[i].cena}`;
           miLista.appendChild(subVegano);
        }
         
        
      })
      
    });
    
  ;
