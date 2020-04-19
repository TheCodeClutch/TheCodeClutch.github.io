fetch('https://thecodeclutch.herokuapp.com/auth/getGoogleAuthUrl')
	.then(res => {
		return res.json();
	})
	.then(data => {
		document.getElementById('google-login').setAttribute('href', data.url);
	})
	.catch(err => console.log(err))