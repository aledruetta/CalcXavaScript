/* 
    Calculadora em XavaScript
*/

var keys_id = {'0': 'b0', '1': 'b1', '2': 'b2', '3': 'b3', '4': 'b4', '5': 'b5',
		'6': 'b6', '7': 'b7', '8': 'b8', '9': 'b9', '.': 'bpnt', 'DEL': 'bdel',
		'=': 'bequ', '+': 'bplu', '-': 'bmin', 'x': 'btim', '/': 'bdiv'};

var display;
var str_num = new String();
var key;
var val = 0;
var val_tmp = 0;
var oper_tmp = "";
var oper_bool = false;
var point;

function concat(digit_char) {
	
	resetKey();
	key = document.getElementById(keys_id[digit_char]);
	changeKey();
	
	digit_char = digit_char.toString();
	display = document.getElementById('visor');
	
	if (display.value.includes('.'))
		point = true;
	else
		point = false;
	
	if (oper_bool) {
		if (digit_char !== '.') {
			str_num = "";
			point = false;
		}
		oper_bool = false;
	}
	
	if (display.value === "0") {
		if (digit_char === ".") {
			str_num += digit_char;
		} else {
			str_num = digit_char;
		}
	} else { 
		if (digit_char === ".") {
			if (!point) {
				str_num += digit_char;
			}
		} else {
			str_num += digit_char;
		}
	}
	
	displayValue(str_num);
	val = parseFloat(str_num);
}

function resolve(oper_char) {
	
	resetKey();
	key = document.getElementById(keys_id[oper_char]);
	changeKey();
	
	oper_bool = true;
	
	if (oper_char === 'DEL') {
		val = 0;
		val_tmp = 0;
	}
	else {
	
		switch (oper_tmp)
		{
			case '+': 
				val += val_tmp;
				break;
			case '-':
				val = val_tmp - val;
				break;
			case 'x':
				val *= val_tmp;
				break;
			case '/':
				if (val !== 0)
					val = val_tmp / val;
				else
					val = val_tmp;
				break;
		}
		
		oper_tmp = oper_char;
		val_tmp = val;
	}
	
	displayValue(val.toString());
}

function resetKey () {
	if (key) {
		key.style.color = '#fff';
		key.style.fontWeight = 'normal';
	}
}

function changeKey () {
	if (key) {
		key.style.color = '#5fa';
		key.style.fontWeight = 'bold';
	}
}

function displayValue (value) {
	
	if (value.length <= 8)
		display.style.fontSize='48px';
	else if (value.length > 8 && value.length <= 13)
		display.style.fontSize='30px';
	else if (value.length > 13 && value.length <= 18)
		display.style.fontSize='22px';
	else if (value.length > 18)
		display.style.fontSize='18px';
	
	display.value = value;
}

