window.onload = pageLoad;
function pageLoad()
{
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

var data = [];
function validateForm() 
{
    var span = document.getElementById("errormsg");
    readAndAssignValue();

    // console.log("Re-pass " + data.rePassword.value + " Pass " + data.password.value)
    // console.log("Gender " + data.gender.value)
    // console.log("Array " + Object.keys(data).length)
    // console.log(data);

    if(Object.keys(data).length == 8)
    {
        if(data.password.value == data.rePassword.value)
        {
            alert("OK");
            return true;
        }
        else
        {
            span.textContent  = "Password not match";
            return false;
        }
    }
    else
    {
        return false;
    }
    
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function readAndAssignValue()
{
    var span = document.getElementById("errormsg");

    if(document.forms["myForm"]["rePassword"].value !== "")
    {
        data["rePassword"] = document.forms["myForm"]["rePassword"];
    }else {span.textContent  = "Please RE-ENTER your password ";}

    if(document.forms["myForm"]["password"].value !== "")
    {
        data["password"] = document.forms["myForm"]["password"];
    }else {span.textContent  = "Please ENTER your password ";}

    if(document.forms["myForm"]["username"].value !== "")
    {
        data["username"] = document.forms["myForm"]["username"];
    }else {span.textContent  = "Please ENTER your Username ";}

    if(document.forms["myForm"]["email"].value !== "")
    {
        data["email"] = document.forms["myForm"]["email"];
    }else {span.textContent  = "Please ENTER your E-mail ";}

    if(document.forms["myForm"]["bday"].value !== "")
    {
        data["bday"] = document.forms["myForm"]["bday"];
    }else {span.textContent  = "Please CHOOSE your birthday ";}

    if(document.forms["myForm"]["gender"].value !== "")
    {
        data["gender"] = document.forms["myForm"]["gender"];
    }else {span.textContent  = "Please CHOOSE your gender ";}

    if(document.forms["myForm"]["lastname"].value !== "")
    {
        data["lastname"] = document.forms["myForm"]["lastname"];
    }else {span.textContent  = "Please ENTER your last name ";}

    if(document.forms["myForm"]["firstname"].value !== "")
    {
        data["firstname"] = document.forms["myForm"]["firstname"];
    }else {span.textContent  = "Please ENTER your first name ";}
}