

function aboutZoom() {
    //o nás zoom
    document.getElementById("oNas").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("onas");
        let target = document.getElementById("kdoJsmeSection");
        let targetPosition = target.offsetTop - 40;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    document.getElementById("nabidka").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("nabidka");
        let target = document.getElementById("nabidka-menu");
        let targetPosition = target.offsetTop - 80;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
}

function napojeSwitch() {
    const studeneButton = document.getElementById("teple-napoje-button");
    const tepleButton = document.getElementById("studene-napoje-button");

    const studeneMenu = document.getElementById("studene-napoje");
    const tepleMenu = document.getElementById("teple-napoje");

    studeneButton.addEventListener("click", function() {
        studeneMenu.style.display = "block";
        tepleMenu.style.display = "none";
    });

    tepleButton.addEventListener("click", function() {
        studeneMenu.style.display = "none";
        tepleMenu.style.display = "block";
    });
}



aboutZoom();
napojeSwitch();

aboutZoom();
napojeSwitch();