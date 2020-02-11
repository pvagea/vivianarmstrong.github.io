


function windChill(form) {
wind=eval(form.wind.value);
temp=eval(form.temp.value);
chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4);
form.windchill.value = chill;
}

function calcWindChillF(t, v)
{
	var vtmp = Math.pow(v, 0.16);
	var wc = 35.74 + 0.6215 * t - 35.75 * vtmp + 0.4275 * vtmp;
	return (wc < t) ? wc : t;
}