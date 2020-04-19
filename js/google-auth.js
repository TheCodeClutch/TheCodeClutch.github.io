fetch('http://localhost:3000/auth/getGoogleAuthUrl')
.then( res => {
	return res.json();
})
.then( data => {
	document.getElementById('google-login').setAttribute('href', data.url);
})
.catch( err => console.log(err))

