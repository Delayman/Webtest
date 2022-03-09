window.onload = welcomeLoad;

function welcomeLoad()
{
    alert("Welcome to my Portfolio");
    projectButtonChangeColor();
}

function projectButtonChangeColor()
{
    ChangeColorVerOne();
}

function ChangeColorVerOne()
{
    var button = document.getElementById("proFakeButton");
    button.className = "projectButton";
    setTimeout(ChangeColorVerTwo, 1000);
}

function ChangeColorVerTwo()
{
    var button = document.getElementById("proFakeButton");
    button.className = "projectButtonXVer";
    setTimeout(ChangeColorVerOne, 1000);
}