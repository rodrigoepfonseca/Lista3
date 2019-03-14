function bg_color_red(){
	document.body.style.backgroundColor = "red";
	}
function bg_color_green(){
	document.body.style.backgroundColor = "green";
}
function bg_color_blue(){
	document.body.style.backgroundColor = "blue";
}
function bg_color_yellow(){
	document.body.style.backgroundColor = "yellow";
}

function bg_color_black(){
	document.body.style.backgroundColor = "black";
}
function bg_color_lightGreen (){
	document.body.style.backgroundColor = "lightGreen";
}

function bg_color_fuchsia (){
	document.body.style.backgroundColor = "fuchsia";
}
function bg_color_cyan(){
	document.body.style.backgroundColor = "cyan";
}

function alterar_bg(){
	var x = document.getElementById("cores").value;
	document.body.style.backgroundColor = x;
}

function on_off(){
	var x = document.getElementById("paragraph");
		if (x.style.visibility==="hidden"){
			x.style.visibility = "visible";
		}
		else{
			x.style.visibility = "hidden";
		}
}

function salvar(){
	nome = document.getElementById("user").value;
	senha = document.getElementById("password").value;
	conf_senha = document.getElementById("password_again").value;

	if (nome == "") {
			alert( "Você precisa digitar um nome de usuário!" );
			return false;
		}
	if (senha == "" || conf_senha == "") {
			alert( "Você precisa digitar uma senha e confirmá-la" );
			return false;
		}

	if (senha != conf_senha) {
			alert( "As senhas não coincidem!" );
			return false;
		}
	if ((senha.length < 6 || senha.length > 10) || (conf_senha.length < 6 || conf_senha.length > 10)) {
			alert( "As senhas precisam ter entre 6 e 10 caracteres!" );
			return false;
		}	
		return true
	}