let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('toggleTheme');

function enableLightmode() {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
}

function disableLightmode() {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'null');
}

if(lightmode === "active")
{
    enableLightmode();
}

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    if(lightmode !== "active")
    {
        enableLightmode();
    } 
    else 
    {
        disableLightmode();
    }
})