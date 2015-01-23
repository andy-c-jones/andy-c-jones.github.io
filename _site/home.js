
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", "http://api.github.com/users/andy-c-jones", true );
	xmlHttp.send( null );
	var stuuf = document.getElementById("stuff");
	stuuf.innerHTML = xmlHttp.responseText;
	alert();

