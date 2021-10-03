document.getElementById('m').onkeyup=function(){
	var inputs = '<p>Введите значения узлов:</p>';
	for (var i = 0; i <= Number(this.value); i++) {
		inputs += '<label for="x' + i + '">x<sub>' + i + '</sub></label><input id="x' + i + '" type="" name=""><label for="y' + i + '">y<sub>' + i + '</sub></label><input id="y' + i + '" type="" name=""><br>';
	}
	document.getElementById('vars').innerHTML = inputs;
}

function NewtonCotes(){
	var y = []
	for (var i = 0; i <= Number(document.getElementById('m').value); i++) {
		y.push(Number(document.getElementById('y'+ i).value))
	}
	switch(Number(document.getElementById('m').value)){
		case 1:
 	   	var c0 = (y[0])/2;
 	   	var c1 = (y[1])/2;
 	   	var a = c0 + c1
 	   	break;
 	 	case 2:
 	 	var c0 = (y[0])/6;
 	 	var c1 = (4*y[1])/6;
 	 	var c2 = (y[2])/6;
 	 	var a = c0 + c1 + c2
 	    break;
 	    case 3:
 	   	var c0 = (y[0])/8;
 	   	var c1 = (3*y[1])/8;
 	   	var c2 = (3*y[2])/8;
 	   	var c3 = (y[3])/8;
 	   	var a = c0 + c1 + c2 + c3
 	    break;
 	    case 4:
 	   	var c0 = (7*y[0])/90;
 	   	var c1 = (16*y[1])/45;
 	   	var c2 = (2*y[2])/15;
 	   	var c3 = (16*y[3])/45;
 	   	var c4 = (7*y[4])/90;
 	   	var a = c0 + c1 + c2 + c3 +c4
 	    break;
 	    case 5:
 	   	var c0 = (19*y[0])/288;
 	   	var c1= (25*y[1])/96;
 	   	var c2 = (25*y[2])/144;
 	   	var c3 = (25*y[3])/144;
 	   	var c4= (25*y[4])/96;
 	   	var c5 = (19*y[5])/288;
 	   	var a = c0 + c1 + c2 + c3 +c4 +c5
 	    break;
 	    case 6:
 	   	var c0 = (41*y[0])/840;
 	   	var c1 = (9*y[1])/35;
 	   	var c2 = (9*y[2])/280;
 	   	var c3 = (34*y[3])/105;
 	   	var c4 = (9*y[4])/280;
 	   	var c5 = (9*y[5])/35;
		var c6 = (41*y[6])/840;
		var a = c0 + c1 + c2 + c3 + c4 + c5 + c6
 	    break;
 	    default:
 	   	alert('Некорректное кол-во узлов');
	}
	document.getElementById('NewtonCotes').innerHTML = "Формула Ньютона-Котеса" + ': ' + a
}

function Rectangle(){
	var x = []
	var y = []
	var g = 0
	for (var i = 0; i <= Number(document.getElementById('m').value); i++) {
		y.push(Number(document.getElementById('y'+ i).value))
		x.push(Number(document.getElementById('x'+ i).value))
		g += y[i]
	}
	g -= y[Number(document.getElementById('m').value)]
	var h = (x[Number(document.getElementById('m').value)] - x[0])/Number(document.getElementById('m').value)
	var a = h*g
	document.getElementById('Rectangle').innerHTML = "Формула Прямоугольника" + ': ' + a
}

function Trapezoid(){
	var x = []
	var y = []
	var g = 0
	for (var i = 0; i <= Number(document.getElementById('m').value); i++) {
		y.push(Number(document.getElementById('y'+ i).value))
		x.push(Number(document.getElementById('x'+ i).value))
		g += y[i]
	}
	g = g*2
	g -= y[0]
	g -= y[Number(document.getElementById('m').value)]
	var h = (x[Number(document.getElementById('m').value)] - x[0])/Number(document.getElementById('m').value)
	var a = (h/2)*g
	document.getElementById('Trapezoid').innerHTML = "Формула Трапеции" + ': ' + a
}

function Simpson(){
	var x = []
	var y = []
	var g = 0
	for (var i = 0; i <= Number(document.getElementById('m').value); i++) {
		y.push(Number(document.getElementById('y'+ i).value))
		x.push(Number(document.getElementById('x'+ i).value))
	}
	for (var i = 1; i < Number(document.getElementById('m').value); i=i+2) {
		g += 4*y[i]
	}
	for (var i = 2; i < Number(document.getElementById('m').value); i=i+2) {
		g += 2*y[i]
	}
	g += y[0]
	g += y[Number(document.getElementById('m').value)]
	var h = (x[Number(document.getElementById('m').value)] - x[0])/Number(document.getElementById('m').value)
	var a = (h/3)*g
	document.getElementById('Simpson').innerHTML = "Формула Симпсона" + ': ' + a
}