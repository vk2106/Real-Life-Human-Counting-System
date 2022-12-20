$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY>20)
        {
            $(".navbar").addClass("sticky");
        }
        else
        {
            $(".navbar").removeClass("sticky");
        }
    });

    $(".menu-btn").click(function()
    {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
        $(".dark-mode-btn i").toggleClass("active");
    })

    $(".dark-mode-btn").click(function()
    {
        $(".dark-mode-btn i").toggleClass("active2");
    })
});

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";

const selectedTheme = localStorage.getItem("selected-theme");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";

if (selectedTheme)
{
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
    );
}

themeButton.addEventListener("click", () =>
{
    document.body.classList.toggle(darkTheme);
    document.getElementById("home").classList.toggle(bgTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
});

setInterval(function myTimer()
{
    document.getElementById("textarea").innerHTML = "Ishaan" + "'s attendance has been marked!<br>";
},1000);