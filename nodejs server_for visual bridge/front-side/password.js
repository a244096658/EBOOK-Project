
var pas = "hpdi";

function reload(password){

    if(password === pas)
    {
         window.location.href = "./bridge.html";
    }

    else
    {
        alert("Password is wrong!")
        window.location.href = "./index.html";
    }
}



