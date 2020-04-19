fetch('https://thecodeclutch.herokuapp.com/auth/getGoogleAuthUrl')
	.then(res => {
		return res.json();
	})
	.then(data => {
		document.getElementById('google-login').setAttribute('href', data.url);
	})
	.catch(err => console.log(err))


function getToken(currToken) {
	var networkPromise = fetch('https://thecodeclutch.herokuapp.com/auth/getToken', {
		method: 'GET',
		headers: {
			Authorization: currToken
		}
	});
	var timeOutPromise = new Promise(function (resolve, reject) {
			setTimeout(resolve, 20000);
	});

	Promise.all(
		[networkPromise, timeOutPromise]).then(function (values) {
			console.log("Atleast 2 secs + TTL (Network/server)");
			getToken(localStorage.setItem('TCC_SID', values.token));
		});
}

getToken(localStorage.getItem('TCC_SID'))