const temp = parseFloat(document.getElementById('temp').textContent);
const ws = parseFloat(document.getElementById('ws').textContent);

	if (temp <= 50 && ws > 3) {
		let windChill = (35.74 + (0.6215 * temp) - 35.75 * Math.pow(ws, 0.16) + 0.4275 * temp * Math.pow(ws, 0.16)).toFixed(1);
		document.getElementById('windChill').textContent = windChill;
	} else {
		document.getElementById('windChill').textContent = "N/A";
	}

//	let s = parseFloat(document.getElementById("speed").textContent); 
//let t = parseFloat(document.getElementById("temp").textContent);
//let none = "N\/A";
//let equation = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16)).toFixed(1);

//if (t > 50 || s < 3){
//document.getElementById("chill").textContent = none;
//}
//else {
//    document.getElementById("chill").textContent = equation;
//}
//From Shari Lucas to Everyone:  08:19 PM
//let t = parseFloat(document.getElementById('high').textContent);
//let s = parseFloat(document.getElementById('windSpeed').textContent);
//let w = (35.74 + (0.6215 * t)) - (35.75 * Math.pow(s, 0.16)) + ((0.4275 * t) * Math.pow(s, 0.16));

//if (t < 51 && s > 3) {
//    document.getElementById("windChill").innerText=w.toFixed(0);
//}
//else {
//    document.getElementById("windChill").innerText="N/A";
//}
