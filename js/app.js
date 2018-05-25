;(function($) {

    $(document).ready(function() {

        //----- update copyright site-wide -----------------------//
        var date = new Date();
        var year = date.getFullYear();
        var copyright = $('p.copyright').text();
        var copyrightNotice = '© ' + year + ' Amy Eckert';
        $('p.copyright').html(copyrightNotice); 

        // ----- Global variables ------------//
    	var $flag = $('#flag'); 
    	var $country = $('#country-name');   
    	var $capital = $('#capital');
    	var $twitter = $(".twitter-share-button");

        //------ choose random country ----------------------------//
        $(".choose").on("click", function(event) {
        	event.preventDefault();
        	console.log("clicked");

        	 // call to API 
        	$.ajax({
		        url: "https://restcountries.eu/rest/v2/all"
		    }).then(function(countries) {
		    	// choose a random country and show name, flag, capital, and current weather.
		    	var randomCountry = Math.floor(Math.random() * countries.length);
		    	var countryIndex = countries[randomCountry]; 	
		    	var capital = countryIndex.capital;

		    	$country.html(countryIndex.name);
		    	$flag = $($flag).attr("src", countryIndex.flag);
				$capital.html(capital);

				//-------- get country and location to paste into a tweet-----------------//

				let textToCopy = "I want to go to " + capital + ", " + countryIndex.name + "!";
		  		
		  		$twitter= $($twitter).attr("href", "https://twitter.com/intent/tweet?text=" + textToCopy + "");
				console.log($twitter, textToCopy);
		    });	        		

        });

    });//________THE END_________________________________________________________//

})(jQuery);  