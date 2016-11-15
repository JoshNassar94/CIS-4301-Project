function login(form) {
	var ufid = $("#ufid").val();
	var password1 = $("#password").val();
	$.post("login.php", { ufid: ufid, password1: password1 },
		function(data) {
			if(data == 1){
				window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/welcome";
			}
			else if(data == 2){
				window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/employee-main";
			}
			else{
				alert("Incorrect UFID or password!");
				return false;
			}
	});
  return true;
}
