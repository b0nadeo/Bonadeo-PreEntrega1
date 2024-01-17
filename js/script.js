alert("Hola. Bienvenido a Balboa Fitness !");
const nombreUsuario1 = "rocky";
const passwordUsuario1 = "adrian";
var passwordUsuario2;
var nombreUsuario2;
var loginType = parseInt(
  prompt("\n1 Iniciar sesión \n2 Registrarse \n3 Vengo a chusmear")
);
var nuevoPassUsuario;
var continuar = true;

// Inicio de sesión
const login = () => {
console.log(nombreUsuario1)
console.log(passwordUsuario1)
console.log(nombreUsuario2)
console.log(passwordUsuario2)
  var nuevoNombreUsuario = prompt("Introduzca su nombre de usuario");
  if (nuevoNombreUsuario === nombreUsuario1 || nuevoNombreUsuario === nombreUsuario2) {
    nuevoPassUsuario = parseInt(prompt("Introduzca su contraseña"));
    if (nuevoPassUsuario == passwordUsuario1 || nuevoPassUsuario == passwordUsuario2) {
      alert("Bienvenido de nuevo " + nombreUsuario2);
      continuar = false;
      return continuar;
    } else {
      alert("Contraseña incorrecta");
    }
  } else {
    alert("Usuario incorrecto");
  }
};

// Registrarse
const registrar = () => {
  nombreUsuario2 = prompt("Ingresa tu nombre de usuario"); /* String */
  passwordUsuario2 = prompt("Ingresa tu contraseña"); /* String */
  let verificaPass = prompt("Reingresa contraseña");

  

  let edadUsuario= parseInt(prompt("Ingrese su edad")); /* Number */
  console.log(edadUsuario)

if(edadUsuario >=18){
    alert("Edad verificada, oprima Aceptar para continuar su inscripción")
}else if (edadUsuario < 18){
    alert("Los menores de edad deben venir acompañados de padre, madre o tutor al gimnacio para la inscripción")
    return nombreUsuario2, passwordUsuario2;
} 
let alturaUsuario = parseFloat(prompt("Ingrese su altura (con punto, no coma por favor)")) /* Number */
console.log(alturaUsuario)

let pesoUsuario = prompt("Ingrese su peso") /* String */
console.log(pesoUsuario)

if (verificaPass == passwordUsuario2) {
    alert("Gracias por registrarte " + nombreUsuario2);
    return nombreUsuario2, passwordUsuario2;
  } else {
    alert("Contraseña incorrecta");
  }

  
};


while (loginType != 0 && continuar) {
  switch (loginType) {
    case 1:
      login();
      break;

    case 2:
      registrar();
      break;

    case 3:
      alert("Pasá, pasá !");
      continuar = false;
      break;
    default:
      alert("Elija una opción, por favor");
      break;
  }
  if (continuar) {
    loginType = parseInt(
      prompt("\n1 Iniciar sesión \n2 Registrarse \n3 Vengo a chusmear"),
      10
    );
  }
}



