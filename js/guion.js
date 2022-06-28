//Ejecutando funciones
documento _ getElementById ( "btn__iniciar-sesion" ) . addEventListener ( "clic" ,  iniciarSesion ) ;
documento _ getElementById ( "btn__registrarse" ) . addEventListener ( "clic" ,  registrarse ) ;
ventana _ addEventListener ( "redimensionar" ,  anchoPage ) ;

var  formulario_login  =  documento . querySelector ( ".formulario__login" ) ;
var  formulario_registrar  =  documento . querySelector ( ".formulario__registrar" ) ;
var  contenedor_login_register  =  documento . querySelector ( ".contenedor__login-registrar" ) ;
var  caja_trasera_login  =  documento . querySelector ( ".caja__trasera-login" ) ;
var  caja_trasera_register  =  documento . querySelector ( ".caja__trasera-registro" ) ;


function  anchoPágina ( ) {

if  ( ventana . ancho interior  >  850 ) {
        caja_trasera_registrar . estilo _ mostrar  =  "bloquear" ;
        caja_trasera_login . estilo _ mostrar  =  "bloquear" ;
    } más {
        caja_trasera_registrar . estilo _ mostrar  =  "bloquear" ;
        caja_trasera_registrar . estilo _ opacidad  =  "1" ;
        caja_trasera_login . estilo _ mostrar  =  "ninguno" ;
        formulario_login . estilo _ mostrar  =  "bloquear" ;
        contenedor_login_register . estilo _ izquierda  =  "0px" ;
        registro_formulario . estilo _ mostrar  =  "ninguno" ;   
    }
}

páginaancho ( ) ;
function  iniciarsesión ( ) {
        if  ( ventana . ancho interior  >  850 ) {
            formulario_login . estilo _ mostrar  =  "bloquear" ;
            contenedor_login_register . estilo _ izquierda  =  "10px" ;
            registro_formulario . estilo _ mostrar  =  "ninguno" ;
            caja_trasera_registrar . estilo _ opacidad  =  "1" ;
            caja_trasera_login . estilo _ opacidad  =  "0" ;
        } más {
            formulario_login . estilo _ mostrar  =  "bloquear" ;
            contenedor_login_register . estilo _ izquierda  =  "0px" ;
            registro_formulario . estilo _ mostrar  =  "ninguno" ;
            caja_trasera_registrar . estilo _ mostrar  =  "bloquear" ;
            caja_trasera_login . estilo _ mostrar  =  "ninguno" ;
        }
    }
    
    función  registro ( ) {
        if  ( ventana . ancho interior  >  850 ) {
            registro_formulario . estilo _ mostrar  =  "bloquear" ;
            contenedor_login_register . estilo _ izquierda  =  "410px" ;
            formulario_login . estilo _ mostrar  =  "ninguno" ;
            caja_trasera_registrar . estilo _ opacidad  =  "0" ;
            caja_trasera_login . estilo _ opacidad  =  "1" ;
        } más {
            registro_formulario . estilo _ mostrar  =  "bloquear" ;
            contenedor_login_register . estilo _ izquierda  =  "0px" ;
            formulario_login . estilo _ mostrar  =  "ninguno" ;
            caja_trasera_registrar . estilo _ mostrar  =  "ninguno" ;
            caja_trasera_login . estilo _ mostrar  =  "bloquear" ;
            caja_trasera_login . estilo _ opacidad  =  "1" ;
        }
}