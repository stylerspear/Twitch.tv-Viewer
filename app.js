$('document').ready(function(){
	
	//array of channels
	var channels = ["LacedUpLauren","freecodecamp", "storbeck", "terakilobyte", "riotgames","RobotCaleb","thomasballinger","LIRIK","beohoff"];

	//loop over channels array
	channels.forEach(function(channel){
		//JSONP get request adding in channels name, callback function
		$.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {
  		console.log(data);

  		//if streaming, change status to online, add class of success
  		if(data.stream != null){
  			$('#'+channel).addClass("online");
  			$('#'+channel).find('td.status').text("Online");
  			$('#'+channel).find('td.status').addClass('success');
  			$('#'+channel).find('td.name').wrapInner('<a href=http://twitch.tv/'+channel+'/>');
  			$('#'+channel).find('td.stream').text(data.stream.game);
  		}
  		else {
  			$('#'+channel).addClass("offline");
  			$('#'+channel).find('td.status').addClass('danger');
  		}

		});
	});

	$('#showOnline').click(function(){
		$('.offline').hide();
		$('.online').show();
	});
	
	$('#showOffline').click(function(){
		$('.offline').show();
		$('.online').hide();
	});

	$('#showAll').click(function(){
		$('.offline').show();
		$('.online').show();
	});



});