let unknown = document.getElementById('unknown')
let equation = document.getElementById('equation')
let x = {}
let y = {}
let accuracy = false
let result = ''

unknown.onkeyup=function(){
	buildMatrix(unknown.value, equation.value)
}
equation.onkeyup=function(){
	buildMatrix(unknown.value, equation.value)
}

function buildMatrix(m, n){
	let inputs = ''
	for(var i = 1; i <= n; i++){
		for(var f = 1; f <= m; f++){
			inputs += '<label for="' + i +''+ f + '">a' + i +''+ f + ': </label><input id="' + i +''+ f + '" type="text" name="">'
		}
		inputs += '<input id="' + i +'" type="text" name="">'
		inputs += '<br/>'
	}
	document.getElementById('matrix').innerHTML = inputs;
}

function getResult(){
	for(var i = 1; i <= equation.value; i++){
		x[i] = (document.getElementById(i).value / document.getElementById(i + '' + i).value).toFixed(2)
	}
	Iterations(2)
}

function Iterations(decimalPlaces){
	for(var i = 1; i <= equation.value; i++){
		var summ = document.getElementById(i).value
		for(var f = 1; f <= unknown.value; f++){
			if (f != i) {
				summ -= x[f]*document.getElementById(i + '' + f).value
				console.log(x[f], document.getElementById(i + '' + f).value)
			}
		}
		y[i] = (summ / document.getElementById(i + '' + i).value).toFixed(decimalPlaces)
		result += '<input type="text" readonly value="' + y[i] + '">'
	}
	for(var i = 1; i <= equation.value; i++){
		if(((1/3)*(Math.abs(x[i] - y[i])))<0.001){
			accuracy = true
		}
		x[i] = y[i]
	}
	result +=  '<br/>'
	$('.resultBlock')[0].innerHTML = result
	console.log(x)
	
	if (!accuracy) {
		Iterations(4)
	}
}