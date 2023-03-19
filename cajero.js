let clave, nombreUsuario;

clave = parseInt(prompt("ingrese su clave"));
const Pin = 3434;
const usuario = "dayanne" 
nombreUsuario = prompt("ingrese su usuario");

if (clave == Pin && nombreUsuario == usuario) {
  alert("Tu saldo es de 20.000");
}
  else {
          alert("tienes 3 intentos al 4 intento tu cuenta sera bloqueda");
          clave = parseInt(prompt("ingrese su clave"));
          nombreUsuario = prompt("ingrese su usuario");
        }

        if (clave == Pin && nombreUsuario == usuario) {
          alert("Tu saldo es de 20.000");
        }
          else {
                  alert("tienes 2 intentos al 4 intento tu cuenta sera bloqueda");
                  clave = parseInt(prompt("ingrese su clave"));
                  nombreUsuario = prompt("ingrese su usuario");
                }

                if (clave == Pin && nombreUsuario == usuario){
                  alert("Tu saldo es de 20.000");
                }
                  else {
                          alert("tienes 1 intentos al 4 intento tu cuenta sera bloqueda");
                          clave = parseInt(prompt("ingrese su clave"));
                          nombreUsuario = prompt("ingrese su usuario");
                        }
                        if (clave == Pin && nombreUsuario == usuario) {
                          alert("Tu saldo es de 20.000");
                        }
                          else {
                                  alert("TU CUENTA HA SIDO BLOQUEADA");
                                 
                                }
    