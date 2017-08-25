function login(){
	$("#login_c").fadeToggle(100);
  setTimeout('window.location.href="../index_login.html"',3000);
}

function Switch_registration(){
	$("#login_page").fadeToggle(490);
	 setTimeout('$("#registered_page").fadeToggle(490) ',500);
}

function Switch_login(){
	$("#registered_page").fadeToggle(490);
	 setTimeout('$("#login_page").fadeToggle(490)',500);
}


function Switch_mail(){
	$("#r_phone").fadeToggle(100);
	 setTimeout('$("#r_mail").fadeToggle(100)',101);
}

function Switch_phone(){
	$("#r_mail").fadeToggle(100);
	 setTimeout('$("#r_phone").fadeToggle(100)',101);
}


function phone_tips(){
	$("#phone_tips").fadeToggle(100);
	 setTimeout('$("#phone_tips").fadeToggle(100)',3001);
}

function mail_tips(){
	$("#mail_tips").fadeToggle(100);
	 setTimeout('$("#mail_tips").fadeToggle(100)',3001);
}


function registered_success(){
	$("#bg").fadeToggle(500);
	$("#registered_success").fadeToggle(500);
	 setTimeout('$("#bg").fadeToggle(500)',2501);
	 setTimeout('$("#registered_success").fadeToggle(500)',2501);
	 setTimeout('$("#registered_page").fadeToggle(100)',2399);
	setTimeout('$("#login_page").fadeToggle(100)',2501);
}


function verification(){
	
	var nowp = $('#verification_p').css("background");
	var math = Math.floor(Math.random()*10+1);
	if (math === 1 && nowp !== "url(../img/code.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code.jpg)  no-repeat 50%';
		}
	else if (math === 1 && nowp === "url(../img/code.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 2 && nowp !== "url(../img/code2.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code2.jpg)  no-repeat 50%';
		}
		else if (math === 2 && nowp === "url(../img/code2.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 3 && nowp !== "url(../img/code3.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code3.jpg)  no-repeat 50%';
		}
		else if (math === 3 && nowp === "url(../img/code3.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 4 && nowp !== "url(../img/code4.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code4.jpg)  no-repeat 50%';
		}
		else if (math === 4 && nowp === "url(../img/code4.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 5 && nowp !== "url(../img/code5.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code5.jpg)  no-repeat 50%';
		}
		else if (math === 5 && nowp === "url(../img/code5.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 6 && nowp !== "url(../img/code6.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code6.jpg)  no-repeat 50%';
		}
		else if (math === 6 && nowp === "url(../img/code6.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 7 && nowp !== "url(../img/code7.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code7.jpg)  no-repeat 50%';
		}
		else if (math === 7 && nowp === "url(../img/code7.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 8 && nowp !== "url(../img/code8.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code8.jpg)  no-repeat 50%';
		}
		else if (math === 8 && nowp === "url(../img/code8.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 9&& nowp !== "url(../img/code9.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code9.jpg)  no-repeat 50%';
		}
		else if (math === 9 && nowp === "url(../img/code9.jpg)  no-repeat 50%")
		{
			verification()
		}
	else if (math === 10&& nowp !== "url(../img/code10.jpg)  no-repeat 50%")
		{
			document.getElementById('verification_p').style.background='url(../img/code10.jpg)  no-repeat 50%';
		}
		else if (math === 10 && nowp === "url(../img/code10.jpg)  no-repeat 50%")
		{
			verification()
		}
}