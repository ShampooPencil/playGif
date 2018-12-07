var inputVal;
var arrNum = 3;
var indexNumbers = 0;
var showFirstArr;
var limit;
//var ButtonNums = indexNumbers;
var queryURL;             //going to be defined in the ajax
//var vgChar;               //going to be defined in the ajax
//var rating;               //going to be defined in the ajax
var p;                    //going to be defined in the ajax
var charImage;
//var results;
//var searchString;
var apiKey;
var buttonid="giphyButton" + indexNumbers;//----------- needs to be global so its getting passed around 
var topics = ["Nathan Drake", "Master Chief", "mario"];
//var apiKey = "ZGTEr8yvDmKsdM52U66paHNpWbQPOape;"; //giphy api (i think it should work)

function rebuildbuttons(){

  $(".buttonGifs").empty();
  //$(".emptyGifs").empty();
    for(var i = 0; i < topics.length; i++){
        //var makeId = $('div.buttonGif').attr('id', 'button' + i);
        showFirstArr = $(".buttonGifs").append('<button class="btn-primary giphyButton" id="'+ buttonid + '"type="submit" value="'+topics[i]+'">' + topics[i] + '</button>');
        //var showFirstArr = $(".buttonGifs").append('<button class="btn-primary giphyButton" id="'+ buttonid + '"type="submit">' + topics[i] + '</button>');
        showFirstArr.append(" ");
        indexNumbers += 1;
    }
}

rebuildbuttons();  //the first 3 buttons in the beginning when refreshing the page

var click_btn_toGif = function(character){
  $(".emptyGifs").empty();
  //var searchString = "Video+games";     //global now
  $("giphyButton").attr("data-name");
  apiKey = "ZGTEr8yvDmKsdM52U66paHNpWbQPOape"; //giphy api (i think it should work)
  var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + character + "&api_key="+apiKey+"&limit=10";
  console.log(queryURL + " line 40");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(response) {       ///promise function
    $(".showResults").empty();
    var results = response.data;
    console.log(response);
    for(var i = 0; i < results.length; i++) {
        // Creates an element to have the rating displayed
         // Creates a div to hold the characters
         var vgChar = $("<div>");

         // Make the class for style.css
        vgChar.addClass("vgChar_pictures");
        var rating = results[i].rating;
        p = $("<h2>");
        p.text("Rating: " + rating);
        // The Images can still or animate to call the class "animeImage" for click.
        charImage = $("<img>");
        charImage.attr("src", results[i].images.fixed_height_still.url);
        charImage.attr("data-still", results[i].images.fixed_height_still.url);
        charImage.attr("data-animate", results[i].images.fixed_height.url);
        charImage.attr("data-state", "still");
        charImage.addClass('charImage');
        // Displays the rating
        $(vgChar).prepend(p);
        // Displays the anime Image
        $(vgChar).prepend(charImage);
        $("#charView").prepend(vgChar);
    }
    //if the variable state is equal to 'still',
          // then update the src attribute of this image to it's data-animate value,
          // and update the data-state attribute to 'animate'.
          // If state does not equal 'still', then update the src attribute of this
          // image to it's data-animate value and update the data-state attribute to 'still'
          $(".charImage").on("click", function() {
            var state = $(this).attr("data-state");
            console.log(state);

            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });    

  });
}

$("#clickButton").on("click",function(event){  //this onclick is from the input search button
  //event prevent  
  event.preventDefault();
    indexNumbers += 1;
    console.log(topics.length);
    inputVal = $("#searchBar").val();
    console.log(inputVal);
    topics[arrNum] = inputVal;
    arrNum += 1;
    console.log(topics);
    rebuildbuttons();
});

  $(".buttonGifs").on("click", ".giphyButton", function(event){
     event.preventDefault();
    console.log("Test line 49");
    //var searchString = 
    //click_btn_toGif(topics[arrNum]);
    //var newData = $(this).attr("data-name");
    var searchstring=$(this).attr('value').trim();
    click_btn_toGif(searchstring);
  });



