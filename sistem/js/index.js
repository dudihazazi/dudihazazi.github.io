
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".retry").click(function(){
	location.reload();
});

Kilogram.addEventListener('input', updateBMI);
Meter.addEventListener('input', updateBMI);
Kilogram.addEventListener('input', cekBerat);
Meter.addEventListener('input', cekTinggi);

function cekBerat(){
	const berat = Kilogram.value;
	var kg_ringan = 0;
	var kg_normal = 0;
	var kg_berat = 0;
	var cat_berat = "";
	if (berat>0&&berat<=55) {
		if (berat<=40){
			kg_ringan = 1;
		} else if (berat>=40&&berat<=55){
			kg_ringan = (55-berat)/15;
		} else if (berat>=55){
			kg_ringan = 0;
		}
	};
	if (berat>=45&&berat<=65) {
		if (berat<=45||berat>=65){
			kg_normal = 0;
		} else if (berat>=45&&berat<=55) {
			kg_normal = (berat-45)/10;
		} else if (berat>=55&&berat<=65){
			kg_normal = (65-berat)/10;
		}
	};
	if (berat>=55){
		if (berat<=55){
			kg_berat = 0;
		} else if(berat>=55&&berat<=75){
			kg_berat = (berat-55)/20;
		} else if(berat>=75){
			kg_berat = 1;
		}
	};
	document.getElementById('bb-ringan').innerHTML = kg_ringan.toFixed(2);
	document.getElementById('bb-normal').innerHTML = kg_normal.toFixed(2);
	document.getElementById('bb-berat').innerHTML = kg_berat.toFixed(2);
}

function cekTinggi(){
	const tinggi = Meter.value;
	var cm_rendah = 0;
	var cm_normal = 0;
	var cm_tinggi = 0;
	var cat_tinggi = "";
	if (tinggi>0&&tinggi<=165) {
		if (tinggi<=150){
			cm_rendah = 1;
		} else if (tinggi>=150&&tinggi<=165){
			cm_rendah = (165-tinggi)/15;
		} else if (tinggi>=165){
			cm_rendah = 0;
		}
	};
	if (tinggi=>150&&tinggi<=175) {
		if (tinggi<=150||tinggi>=175){
			cm_normal = 0;
		} else if (tinggi>=150&&tinggi<=165) {
			cm_normal = (tinggi-150)/15;
		} else if (tinggi>=165&&tinggi<=175){
			cm_normal = (175-tinggi)/10;
		}
	};
	if (tinggi>=160){
		if (tinggi<=160){
			cm_tinggi = 0;
		} else if(tinggi>=160&&tinggi<=175){
			cm_tinggi = (tinggi-160)/15;
		} else if(tinggi>=175){
			cm_tinggi = 1;
		}
	};
	document.getElementById('tb-rendah').innerHTML = cm_rendah.toFixed(2);
	document.getElementById('tb-normal').innerHTML = cm_normal.toFixed(2);
	document.getElementById('tb-tinggi').innerHTML = cm_tinggi.toFixed(2);
}

function updateBMI() {
  const bmi = Kilogram.value / (Meter.value * Meter.value);
  document.getElementById('bmi').innerHTML = bmi;
}

$(".submit").click(function(){
	return false;
})