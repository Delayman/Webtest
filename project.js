window.onload = loginLoad;
function loginLoad()
{
	alert("Now you are in Project section");
	projectTopChangeColor();
}

function projectTopChangeColor()
{
    ChangeColorVerOne();
}

function ChangeColorVerOne()
{
    var button = document.getElementById("projex");
    button.classList.remove("toggleChangeColor");
    setTimeout(ChangeColorVerTwo, 1000);
}

function ChangeColorVerTwo()
{
    var button = document.getElementById("projex");
    button.classList.add("toggleChangeColor");
    setTimeout(ChangeColorVerOne, 1000);
}