var interval;
var answers = ["Toy Story","Fred Spice","Chicago Bulls","Nirvana","The Lion King","Fresh","Mr.Belding"];

$(document).ready(function(){
	$('#start').on('click',function(){
		$('.start').hide();
		$('.section').show();
		interval = setInterval(function(){ 
			var t = parseInt($('#time').text());
			t--;
			$('#time').text(t);
			if(t<=0){
				
				done();
			}
		}
		, 1000);
	});
	$('#done').on('click', function(){
		done();
	});
});

function done(){
	clearInterval(interval);
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	for (var i = 0; i <  answers.length; i++) {
		var answer = answers[i];
		var index = i+1;
		var selected = $("input[name='q"+index+"']:checked").attr('id');
		var a = $("label[for='"+selected+"']").text();
		if(selected == undefined){
			unanswered++;
		} else if(a == answer){
			correct++;
		}else{
			incorrect++;
		}
	}
	$('#correct').text(correct);
	$('#incorrect').text(incorrect);
	$('#unanswered').text(unanswered);
	$('.section').hide();
	$('#totals').show();
}
