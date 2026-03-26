function setCookie(name, value, days) {
    const backgroundColor = document.getElementById("background-color").value;
    const fontColor = document.getElementById("font-color").value;

    //1. Guardar en LocalStorage (mucho más limpio que cookies)
    localStorage.setItem("background-color", backgroundColor);
    localStorage.setItem("font-color", fontColor);
    localStorage.setItem("visited", "true");

}

function saveConfig() {
    const backgroundColor = document.getElementById("background-color").value;
    const fontColor = document.getElementById("font-color").value;

    //1. Guardar en LocalStorage (mucho más limpio que cookies)
    localStorage.setItem("background-color", backgroundColor);
    localStorage.setItem("font-color", fontColor);
    localStorage.setItem("visited", "true");

    // Avisamos a la ventana padre ANTES de cerrar
    if (window.opener) {
        window.opener.postMessage("config_actualizada", "*");
    }
    
    window.close();
}

document.getElementById("config-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveConfig();
});