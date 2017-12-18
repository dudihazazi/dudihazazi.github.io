var kg_ringan = 0;
var kg_normal = 0;
var kg_berat = 0;
var cm_rendah = 0;
var cm_normal = 0;
var cm_tinggi = 0;
var	ti_rr = 0;
var	ti_rn = 0;
var	ti_rb = 0;
var	ti_nr = 0;
var	ti_nn = 0;
var	ti_nb = 0;
var	ti_tr = 0;
var	ti_tn = 0;
var	ti_tb = 0;
var ktb = 0;
var ktr = 0;
var nor = 0;
var gtr = 0;
var gtb = 0;

function cekBerat(){
	const berat = Kilogram.value;
	if (berat>0){
		if (berat<=40){
			kg_ringan = 1;
		} else if (berat>=40&&berat<=55){
			kg_ringan = (55-berat)/15;
		} else if (berat>=55){
			kg_ringan = 0;
		}
		if (berat<=45||berat>=65){
			kg_normal = 0;
		} else if (berat>=45&&berat<=55) {
			kg_normal = (berat-45)/10;
		} else if (berat>=55&&berat<=65){
			kg_normal = (65-berat)/10;
		}
		if (berat<=55){
			kg_berat = 0;
		} else if(berat>=55&&berat<=75){
			kg_berat = (berat-55)/20;
		} else if(berat>=75){
			kg_berat = 1;
		}
	} else {
			window.alert("Berat harus > 0");
	}
	document.getElementById('bb-ringan').innerHTML = kg_ringan.toFixed(2);
	document.getElementById('bb-normal').innerHTML = kg_normal.toFixed(2);
	document.getElementById('bb-berat').innerHTML = kg_berat.toFixed(2);
}

function cekTinggi(){
	const tinggi = Meter.value;
	if (tinggi>0) {
		if (tinggi<=150){
			cm_rendah = 1;
		} else if (tinggi>=150&&tinggi<=165){
			cm_rendah = (165-tinggi)/15;
		} else if (tinggi>=165){
			cm_rendah = 0;
		}
		if (tinggi<=150||tinggi>=175){
			cm_normal = 0;
		} else if (tinggi>=150&&tinggi<=165) {
			cm_normal = (tinggi-150)/15;
		} else if (tinggi>=165&&tinggi<=175){
			cm_normal = (175-tinggi)/10;
		}
		if (tinggi<=160){
			cm_tinggi = 0;
		} else if(tinggi>=160&&tinggi<=175){
			cm_tinggi = (tinggi-160)/15;
		} else if(tinggi>=175){
			cm_tinggi = 1;
		}
	} else {
			window.alert("Tinggi harus > 0");
	}
	document.getElementById('tb-rendah').innerHTML = cm_rendah.toFixed(2);
	document.getElementById('tb-normal').innerHTML = cm_normal.toFixed(2);
	document.getElementById('tb-tinggi').innerHTML = cm_tinggi.toFixed(2);
}

function tabelImplikasi(){
	ti_rr = Math.min(cm_rendah, kg_ringan);
	ti_rn = Math.min(cm_rendah, kg_normal);
	ti_rb = Math.min(cm_rendah, kg_berat);
	ti_nr = Math.min(cm_normal, kg_ringan);
	ti_nn = Math.min(cm_normal, kg_normal);
	ti_nb = Math.min(cm_normal, kg_berat);
	ti_tr = Math.min(cm_tinggi, kg_ringan);
	ti_tn = Math.min(cm_tinggi, kg_normal);
	ti_tb = Math.min(cm_tinggi, kg_berat);
	document.getElementById('rr').innerHTML = ti_rr.toFixed(2);
	document.getElementById('rn').innerHTML = ti_rn.toFixed(2);
	document.getElementById('rb').innerHTML = ti_rb.toFixed(2);
	document.getElementById('nr').innerHTML = ti_nr.toFixed(2);
	document.getElementById('nn').innerHTML = ti_nn.toFixed(2);
	document.getElementById('nb').innerHTML = ti_nb.toFixed(2);
	document.getElementById('tr').innerHTML = ti_tr.toFixed(2);
	document.getElementById('tn').innerHTML = ti_tn.toFixed(2);
	document.getElementById('tb').innerHTML = ti_tb.toFixed(2);
}

function  komposisiOutput(){
	max_ktb = ti_tr;
	max_ktr = Math.max(ti_nr, ti_tn);
	max_nor = Math.max(ti_rr, ti_nn, ti_tb);
	max_gtr = Math.max(ti_rn, ti_nb);
	max_gtb = ti_rb;
	var z1=0;
	var z2=0;
	var z3=0;
	var z4=0;
	var z5=0;
	var z6=0;
	var z7=0;
	var z8=0;
	var z9=0;
	if(ti_tr>0){
		z1 = 17 - ti_tr;
	}
	if (ti_nr>0){
		if(max_ktb>max_nor){
			z2 = ti_nr + 16;
		} else if(max_ktb<=max_nor){
			z2 = 18.5 - ti_nr;
		}
	}
	if (ti_tn>0){
		if(max_ktb>max_nor){
			z3 = ti_tn + 16;
		} else if(max_ktb<=max_nor){
			z3 = 18.5 - ti_tn;
		}
	}
	if (ti_rr>0){
		if(max_ktr>max_gtr){
			z4= ti_rr + 17.5;
		} else if(max_ktr<=max_gtr){
			z4= 25 - ti_rr;
		}
	}
	if (ti_nn>0){
		if(max_ktr>max_gtr){
			z5= ti_nn + 17.5;
		} else if(max_ktr<=max_gtr){
			z5= 25 - ti_nn;
		}
	}
	if (ti_tb>0){
		if(max_ktr>max_gtr){
			z6= ti_tb + 17.5;
		} else if(max_ktr<=max_gtr){
			z6= 25 - ti_tb;
		}
	}
	if (ti_rn>0){
		if(max_nor>max_gtb){
			z7= ti_rn + 24;
		} else if(max_nor<=max_gtb){
			z7= 27 - ti_rn;
		}
	}
	if (ti_nb>0){
		if(max_nor>max_gtb){
			z8= ti_nb + 24;
		} else if(max_nor<=max_gtb){
			z8= 27 - ti_nb;
		}
	}
	if (ti_rb>0){
		z9=ti_rb+26;
	}
	var output = ((ti_tr*z1)+(ti_nr*z2)+(ti_tn*z3)+(ti_rr*z4)+(ti_nn*z5)+(ti_tb*z6)+(ti_rn*z7)+(ti_nb*z8)+(ti_rb*z9))/(ti_tr+ti_nr+ti_tn+ti_rr+ti_nn+ti_tb+ti_rn+ti_nb+ti_rb);
	document.getElementById('komposisi').innerHTML = output.toFixed(2);

	if(output>0){
		var ktb = 0;
		var ktr = 0;
		var nor = 0;
		var gtr = 0;
		var gtb = 0;
		if (output<=16){
			ktb = 1;
		} else if (output>=16&&output<=17){
			ktb = 17-output;
		} else if (output>=17){
			ktb = 0;
		}
		if (output<=16||output>=18.5){
			ktr = 0;
		} else if (output>=16&&output<=17){
			ktr = output - 16;
		} else if (output>=17.5&&output<=18.5){
			ktr = 18.5 - output;
		} else if (output>=17&&output<=17.5){
			ktr = 1;
		}
		if (output<=17.5||output>=25){
			nor = 0;
		} else if (output>=17.5&&output<=18.5){
			nor = output - 17.5;
		} else if (output>=24&&output<=25){
			nor = 25 - output;
		} else if (output>=18.5&&output<=24){
			nor = 1;
		}
		if (output<=24||output>=27){
			gtr = 0;
		} else if (output>=24&&output<=25){
			gtr = output - 24;
		} else if (output>=26&&output<=27){
			gtr = 27 - output;
		} else if (output>=25&&output<=26){
			gtr = 1;
		}
		if (output<=26){
			gtb = 0;
		} else if (output>=26&&output<=27){
			gtb = output-26;
		} else if (output>=27){
			gtb = 1;
		}
	};
	document.getElementById('z1').innerHTML = ktb.toFixed(2);
	document.getElementById('z2').innerHTML = ktr.toFixed(2);
	document.getElementById('z3').innerHTML = nor.toFixed(2);
	document.getElementById('z4').innerHTML = gtr.toFixed(2);
	document.getElementById('z5').innerHTML = gtb.toFixed(2);
}

function updateBMI() {
  const bmi = Kilogram.value / ((Meter.value/100) * (Meter.value/100));
  document.getElementById('bmi').innerHTML = bmi;
}

Kilogram.addEventListener('input', updateBMI);
Meter.addEventListener('input', updateBMI);
Kilogram.addEventListener('input', cekBerat);
Meter.addEventListener('input', cekTinggi);
Meter.addEventListener('input', tabelImplikasi);
Meter.addEventListener('input', komposisiOutput);