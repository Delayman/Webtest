window.onload = loginLoad;
function loginLoad()
{
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin()
{
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const firstName = urlParams.get('username'); 
	const passwordHere = urlParams.get('password');

	var loginUserName = document.forms["myLogin"]["username"];
	var loginPassword = document.forms["myLogin"]["password"];

	if(loginUserName.value == firstName && loginPassword.value == passwordHere)
	{
		alert("Login successfully!")
		return true;
	}else
	{
		alert("Username or password is not correct")
		return false;
	}


	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			