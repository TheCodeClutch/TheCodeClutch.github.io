function getToken(currToken) {
	console.log(currToken)
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
console.log('Hello')
getToken(localStorage.getItem('TCC_SID'))