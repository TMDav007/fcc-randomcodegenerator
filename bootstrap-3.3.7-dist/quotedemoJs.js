
		  $(document).ready(function () {
			
			var quotes = [
	{
	"id" : 1,
	"name" : " Swami Sivananda ",
	"quote" : " Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
	"color": "#88bb87"
	},
	
	{
	"id" : 2,
	"name" : " Winston Churchill ",
	"quote" : "Success is not final, failure is not fatal: it is the courage to continue that counts.",
	"color" : "#051d04"
	},
	
	{
	"id" : 3,
	"name" : " Albert Einstein",
	"quote" : "Try not to become a man of success, but rather try to become a man of value. ",
	"color" : "#d4ac66"
	},
	
	{
	"id" : 4,
	"name" : " Albert Schweitzer ",
	"quote" : " Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
	"color" : "#9bb2d4"
	},
	
	{
	"id" : 5,
	"name" : ' Franklin D. Roosevelt',
	"quote" : "Happiness lies in the joy of achievement and the thrill of creative effort. ",
	"color" : "#040404"
	},
	
	{
	"id" : 6,
	"name" : "Mark Twain ",
	"quote" : "All you need in this life is ignorance and confidence, and then success is sure. ",
	"color" : "#ad3e3e"
	},
	
	{
	"id" : 7,
	"name" : "Bobby Unser ", 
	"quote" : " Success is where preparation and opportunity meet.",
	"color" : "#5fc33c"
	},
	
	{
	"id" : 8,
	"name" : "Og Mandino",
	"quote" : "Always do your best. What you plant now, you will harvest later.",
	"color": "#0e1f08"
	},
	
	{
	"id" : 9,
	"name" : "DAVID OYEDEPO ",
	"quote" : " If you leave your life to chance, you don't have a chance",
	"color" : "#3d243e"
	},
	
	{
	"id" : 10,
	"name" : "DAVID OYEDEPO",
	"quote" : "It is your level of understanding that determines your level of possession ",
	"color" : "#f380b6"
	},
	
	{
	"id" : 11,
	"name" : "DAVID OYEDEPO ",
	"quote" : " You can't live in the midst of noise and make the most of the treasure called the mind.",
	"color" : "#f38080"
	},
	
	{
	"id" : 12,
	"name" : "Revd Canon Ovie Ezimeruwe", 
	"quote" : "No one who majored on negatives ever launches his way to greatness ",
	"color" : "#230606"
	},
	
	{
	"id" : 13,
	"name" : "Revd Canon Ovie Ezimeruwe ",
	"quote" : "No one has ever wished his way to success.",
	"color" : "#232f35"
	},
	
	{
	"id" : 14,
	"name" : "Revd Canon Ovie Ezimeruwe", 
	"quote" : "You can't remain in your fears and expect to conquer new grounds of achievements, greatness and success in life",
	"color" : "#ce7526"
	},
	
	{
	"id" : 15,
	"name" : " Mahavir Vaani",
	"quote" : " It is better to win over the self than to win over a million enemies.",
	"color" : "#3d243e"
	},
	
	{
	"id" : 16,
	"name"	: " Mahavir Vaani",
	"quote" : "Don't be proud if you gain. Nor be sorry if you lose.",
	"color" : "#ad9f9f"
	},
	
	{
	"id" : 17,
	"name" : "Buddha",
	"quote" : "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. ",
	"color" :  "#abea16"
	},
	
	{
	"id" : 18, 
	"name" : "Omar Khayyam ",
	"quote" : "Be happy for this moment. This moment is your life. ",
	"color" : "#e6357d"
	},
	
	{
	"id" : 19,
	"name" : " Norman Cousins",
	"quote" : "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live. ",
	"color" : "#c024c1"
	},
	
	{
	"id" : 20,
	"name" : "Bertrand Russell ", 
	"quote" : " The good life is one inspired by love and guided by knowledge",
	"color" : "#e45d68"
	}
	
];

			//for the window load.
			$(window).load (function(){
				var i = Math.floor(Math.random() * quotes.length);
		// converting Json to Html element
		//Declare the html variable that will hold the json element
		// to be converted.
		var html = " ";
		//output += "<body style = 'background : '" + quotes[i].color + "';'>";
		html += "<div class = 'quote'>";
		//keys.forEach(function(key) {
		html +=  quotes[i].quote + " <br>"; 
		html += "<blockquote class = 'blo blockquote-reverse'> - " +  quotes[i].name + "</blockquote> <br>";
		
		//});
		html += "<div><br>";
		
		//Javascript-Css styles
		document.body.style.backgroundColor = quotes[i].color;
		document.body.style.color = quotes[i].color;
		document.getElementById("getMessage").style.backgroundColor=quotes[i].color;
		document.getElementById("getTwit").style.backgroundColor=quotes[i].color;
	
		$(".quote").html(html);
			});
		
			//for the quote to change at every click on the button
		$("#getMessage").on("click", function(){
		
		//creating a random quote.
		var i = Math.floor(Math.random() * quotes.length);
		
		// converting Json to Html element
		//Declare the html variable that will hold the json element
		// to be converted.
		var html = " ";
		//output += "<body style = 'background : '" + quotes[i].color + "';'>";
		html += "<div class = 'quote'>";
		//keys.forEach(function(key) {
		
		html +=  quotes[i].quote + " <br>"; 
		html += "<blockquote class = 'blo blockquote-reverse'> - " +  quotes[i].name + "</blockquote> <br>";
		
		//});
		html += "<div><br>";
		
		//Javascript-Css styles
		document.body.style.backgroundColor = quotes[i].color;
		document.body.style.color = quotes[i].color;
		document.getElementById("getMessage").style.backgroundColor=quotes[i].color;
		document.getElementById("getTwit").style.backgroundColor=quotes[i].color;
	
		$(".quote").html(html);
		//});
		
		}); 
		
		 
		});
																			