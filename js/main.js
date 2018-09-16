
// 
// Editar Usuario Ventana Emergente
function editUserWO() {
    myWindow = window.open("windows_open/edit_user.html", "", "width=600, height=600");   // Opens a new window
}
//
function closeWO(){
    if(confirm("Esta seguro de realizar esta acción?")){
        alert('Registro Modicado con Exito!');
        close();
    }else{
        close_window();
    }
}