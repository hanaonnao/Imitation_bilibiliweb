function homepage(){
	
	var homepagestatus = $('#right_box_usercenter_information').css("display");
	var other = $('#right_box_usercenter_information_nofulfill').css("display");
	var userinfostatus = $('#right_box_usercenter_information_edit').css("display");

	
	if (homepagestatus === "block")
	{
		 document.getElementById('right_box_usercenter_information').style.display='block';
	}
	else if(other === "block")
		{
			$("#right_box_usercenter_information_nofulfill").fadeToggle(80);
			$("#right_box_usercenter_information").fadeToggle(100);
		}
	else if(userinfostatus === "block")
		{
			$("#right_box_usercenter_information_edit").fadeToggle(80);
			$("#right_box_usercenter_information").fadeToggle(100);
		}
	
	
	document.getElementById('homepage').className='li_normal1_in';
	document.getElementById('userinfo').className='li_normal2';
	document.getElementById('userav').className='li_normal3';
	document.getElementById('usersafe').className='li_normal4';
	document.getElementById('userid').className='li_normal5';
	document.getElementById('uservip').className='li_bottom';
	
}

function userinfo(){
	
	var homepagestatus = $('#right_box_usercenter_information').css("display");
	var other = $('#right_box_usercenter_information_nofulfill').css("display");
	var userinfostatus = $('#right_box_usercenter_information_edit').css("display");

	
	if ( userinfostatus === "block")
	{
		 document.getElementById('right_box_usercenter_information_edit').style.display='block';
	}
	else if(other === "block")
		{
			$("#right_box_usercenter_information_nofulfill").fadeToggle(80);
			$("#right_box_usercenter_information_edit").fadeToggle(100);
		}
	else if( homepagestatus === "block")
		{
			$("#right_box_usercenter_information").fadeToggle(80);
			$("#right_box_usercenter_information_edit").fadeToggle(100);
		}
	
	
	document.getElementById('homepage').className='li_normal1';
	document.getElementById('userinfo').className='li_normal2_in';
	document.getElementById('userav').className='li_normal3';
	document.getElementById('usersafe').className='li_normal4';
	document.getElementById('userid').className='li_normal5';
	document.getElementById('uservip').className='li_bottom';
	
}


function userav(){
	
	var homepagestatus = $('#right_box_usercenter_information').css("display");
	var other = $('#right_box_usercenter_information_nofulfill').css("display");
	var userinfostatus = $('#right_box_usercenter_information_edit').css("display");

	
	if ( other === "block")
	{
		 document.getElementById('right_box_usercenter_information_nofulfill').style.display='block';
	}
	else if(userinfostatus === "block")
		{
			$("#right_box_usercenter_information_edit").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	else if( homepagestatus === "block")
		{
			$("#right_box_usercenter_information").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	
	
	document.getElementById('homepage').className='li_normal1';
	document.getElementById('userinfo').className='li_normal2';
	document.getElementById('userav').className='li_normal3_in';
	document.getElementById('usersafe').className='li_normal4';
	document.getElementById('userid').className='li_normal5';
	document.getElementById('uservip').className='li_bottom';
	
}

function usersafe(){
	
	var homepagestatus = $('#right_box_usercenter_information').css("display");
	var other = $('#right_box_usercenter_information_nofulfill').css("display");
	var userinfostatus = $('#right_box_usercenter_information_edit').css("display");

	
	if ( other === "block")
	{
		 document.getElementById('right_box_usercenter_information_nofulfill').style.display='block';
	}
	else if(userinfostatus === "block")
		{
			$("#right_box_usercenter_information_edit").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	else if( homepagestatus === "block")
		{
			$("#right_box_usercenter_information").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	
	
	document.getElementById('homepage').className='li_normal1';
	document.getElementById('userinfo').className='li_normal2';
	document.getElementById('userav').className='li_normal3';
	document.getElementById('usersafe').className='li_normal4_in';
	document.getElementById('userid').className='li_normal5';
	document.getElementById('uservip').className='li_bottom';
	
}

function userid(){
	
	var homepagestatus = $('#right_box_usercenter_information').css("display");
	var other = $('#right_box_usercenter_information_nofulfill').css("display");
	var userinfostatus = $('#right_box_usercenter_information_edit').css("display");

	
	if ( other === "block")
	{
		 document.getElementById('right_box_usercenter_information_nofulfill').style.display='block';
	}
	else if(userinfostatus === "block")
		{
			$("#right_box_usercenter_information_edit").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	else if( homepagestatus === "block")
		{
			$("#right_box_usercenter_information").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	
	
	document.getElementById('homepage').className='li_normal1';
	document.getElementById('userinfo').className='li_normal2';
	document.getElementById('userav').className='li_normal3';
	document.getElementById('usersafe').className='li_normal4';
	document.getElementById('userid').className='li_normal5_in';
	document.getElementById('uservip').className='li_bottom';
	
}


function uservip(){
	
	var homepagestatus = $('#right_box_usercenter_information').css("display");
	var other = $('#right_box_usercenter_information_nofulfill').css("display");
	var userinfostatus = $('#right_box_usercenter_information_edit').css("display");

	
	if ( other === "block")
	{
		 document.getElementById('right_box_usercenter_information_nofulfill').style.display='block';
	}
	else if(userinfostatus === "block")
		{
			$("#right_box_usercenter_information_edit").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	else if( homepagestatus === "block")
		{
			$("#right_box_usercenter_information").fadeToggle(80);
			$("#right_box_usercenter_information_nofulfill").fadeToggle(100);
		}
	
	
	document.getElementById('homepage').className='li_normal1';
	document.getElementById('userinfo').className='li_normal2';
	document.getElementById('userav').className='li_normal3';
	document.getElementById('usersafe').className='li_normal4';
	document.getElementById('userid').className='li_normal5';
	document.getElementById('uservip').className='li_bottom_in';
	
}