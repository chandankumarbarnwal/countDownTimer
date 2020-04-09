(function ($) {
	$.fn.countdown = function (options, callback){

		var setting = {date:null};

		if(options){
			$.extend(setting, options);
		}


		count_select = $(this);
		function count_execute(){

			// count_select = $(this);
			eventDate = Date.parse(setting['date']) / 1000; 
			currentDate = Math.floor(new Date() / 1000);
			currentDate = Math.floor($.now() / 1000);

			if (eventDate <= currentDate) {
				callback.call(this);
				clearInterval(interval_per_second);
			}

			seconds = eventDate - currentDate;

			days = Math.floor(seconds /(60 * 60 * 24));

			seconds -= days * 60 * 60 * 24;
			hours = Math.floor(seconds /(60 * 60));
			seconds -= hours * 60 * 60;
			minutes = Math.floor(seconds /(60));
			seconds -= minutes *60;

			days = (String(days).length !== 2)? '0' + days : days;

			hours = (String(hours).length !== 2)? '0' + hours : hours;
			minutes = (String(minutes).length !== 2)? '0' + minutes : minutes;
			seconds = (String(seconds).length !== 2)? '0' + seconds : seconds;

			if (!isNaN(eventDate)) {
				count_select.find('.days').text(days);
				count_select.find('.hours').text(hours);
				count_select.find('.minutes').text(minutes);
				count_select.find('.seconds').text(seconds);
			}
		}

		interval_per_second = setInterval(count_execute, 1000);




	}
})($)


//Create this tag in html
	// <div id="countdown">
	// 	<span class="days">oo</span> day
	// 	<span class="hours">00</span> hours
	// 	<span class="minutes">00</span> minutes and
	// 	<span class="seconds">00</span> seconds
	// </div>



// Call countdown plugin function

	// $(document).ready(function(){
	//  $('#countdown').countdown({date:'30 march 2020 15:39:05'}, function () {
	//  	$('#countdown').text('Time is over, now we are live...');
	//  });
	// });