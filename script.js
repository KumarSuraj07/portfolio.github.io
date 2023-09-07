function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "catchmesuraj111@gmail.com",
	Password : "Ziddi07ladka",
	To : 'ksurajk2001@gmail.com',
	From : document.getElementById("email").value,
	Subject : "new contact form",
	Body : "Email: " + document.getElementById("email").value,
	}).then(
		message => alert("mail sent successfully")
	);
} 