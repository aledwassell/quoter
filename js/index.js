$(document).ready(function(){
	function quotes(){
		var quoteNow, authorNow;
		var make = ( data ) => {
			quoteNow = data.quoteText;
			authorNow = data.quoteAuthor;
			$("#target").html(
			'<h3><i class="fa fa-quote-right fa-2x" aria-hidden="true"></i> ' + quoteNow + ' <i class="fa fa-quote-left fa-2x" aria-hidden="true"></i></h3>' + '</br>'
			+ '<p>~ ' + authorNow + '</p>'		 
			);
		}
		$.ajax({
		url: "http://api.forismatic.com/api/1.0/?",
		dataType: "jsonp",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: (data) => make(data)
		});
	}
	
	function tweet(){
		var quote = $("#target").text();
		
		var twit = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote)
        
        window.open(twit, '_blank'); 
	}
	
	$(() => quotes());
	
	$("#get-quote").on("click", () => quotes());
	
	$("#twit").on("click", () => tweet());
});
	
	
	// twttr.widgets.createShareButton(
	// 'http://codepen.io/Alwass89/full/egYMRY/',
	// document.getElementById('twit'),
	// {
	// text: tweet,
	// size: "large",
	// hashtags: "coding"
	// }
	// );