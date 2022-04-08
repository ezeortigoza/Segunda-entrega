
        document.querySelector("#ingreso").addEventListener("click",()=>{
        let formEntrar = document.querySelector("#entrar");
        let divLogin = document.querySelector("#login");
        if(divLogin != formEntrar){
            document.querySelector("#ingreso").style.display = "block";
            document.querySelector("#ingreso").style.display = "none";
            document.querySelector("#titulo").style.display = "none";
            
            document.querySelector("#entrar").style.display = "none";
            document.querySelector("#entrar").style.display = "block";
            
            localStorage.setItem("sesion" , "0");
        }
     } )

    let ingresar = document.querySelector(".ingresar").addEventListener("click", ()=>{
    let divLogin = document.querySelector("#login");
    let formEntrar = document.querySelector("#entrar");
    let usuario = document.querySelector(".usuario").value;
    let contra = +document.querySelector(".passw").value;

    if(usuario == "a" && contra == 2){
        divLogin.classList.remove ("mostrar");
        divLogin.classList.add("esconder");

        formEntrar.classList.remove("esconder");
        formEntrar.classList.add("mostrar");


    }else{
        alert("Usuario o contraseña incorrecta");
    }

         document.querySelector("#vamos").addEventListener("click", () =>{
         document.querySelector("#nombre");
         document.querySelector("#rutinas");

        if(usuario == "a" && contra == 2){
            document.querySelector("#entrar").style.display = "none";
            document.querySelector("#nombre").style.display = "block";
            document.querySelector("#rutinas").style.display = "block";
            document.querySelector("#titulo2").style.display = "block";
            
        }

        const rutinas = [

           {dia: "lunes", rutina: "pecho" , ejerciciosNro: 1 },
           {dia: "martes", rutina: "biceps" , ejerciciosNro: 2 },
           {dia: "miercoles", rutina: "triceps" , ejerciciosNro: 3 },
           {dia: "jueves", rutina: "piernas" , ejerciciosNro: 4 },
           {dia: "viernes", rutina: "gemelos" , ejerciciosNro: 5},
           {dia: "sabado", rutina: "espalda" , ejerciciosNro: 6 },
           {dia: "domingo", rutina: "full body" , ejerciciosNro: 7 }
           
        ]
        const  rutinasString = (clave , valor) => {localStorage.setItem(clave,valor)};
        for (const rutina of rutinas){
            rutinasString (rutina.dia, JSON.stringify (rutinas));

        }
       
        
    })
    
    
    let nombre = document.querySelector("#nombre");
    let ingreso = [];
    nombre.addEventListener('submit', agregarNombres);
    function agregarNombres (evt){
        evt.preventDefault()
        const ingresa = document.querySelector(".ingresa").value;
        const ingresar = document.querySelector("#ingresar").value;
        console.log(ingresa);
        console.log(ingresar);
        localStorage.setItem(ingresar , ingresa );


        if (ingresa === "" && ingresar === ""){
            alert("No se admiten vacios");
            
        }else{

         nombre.reset();

        }
         
    }   

        document.querySelector("#go").addEventListener("click", ()=>{
        let numero = +document.querySelector("#numero").value;
        if(numero != 0 && numero <=7){
           
           
        
        }else{
            alert("Solo se admite numeros del 1 al 7");
        }

      })



})



