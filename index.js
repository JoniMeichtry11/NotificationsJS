"use strict";

if(!('Notification' in window)){
    console.log("no se puede notificar");
}

Notification.requestPermission(() => {
    if(Notification.permission == "granted"){
        console.log("permiso concedido");
        new Notification("Primera noti");
    } else {
        console.log("no me dio permisos :(");
    }
})