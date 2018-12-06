var inputVal;
var arrNum = 3;
var indexNumbers = 0;
var showFirstArr;
//var ButtonNums = indexNumbers;
var queryURL;
var buttonid="giphyButton" + indexNumbers;//----------- needs to be global so its getting passed around 
var topics = ["Nathan Drake", "Master Chief", "mario"];
//var apiKey = "ZGTEr8yvDmKsdM52U66paHNpWbQPOape;"; //giphy api (i think it should work)

function rebuildbuttons(){

  $(".buttonGifs").empty();
    for(var i = 0; i < topics.length; i++){
        //var makeId = $('div.buttonGif').attr('id', 'button' + i);
        showFirstArr = $(".buttonGifs").append('<button class="btn-primary giphyButton" id="'+ buttonid + '"type="submit" value="'+topics[i]+'">' + topics[i] + '</button>');
        //var showFirstArr = $(".buttonGifs").append('<button class="btn-primary giphyButton" id="'+ buttonid + '"type="submit">' + topics[i] + '</button>');
        showFirstArr.append(" ");
        indexNumbers += 1;
    }
}

rebuildbuttons();

var click_btn_toGif = function(character){
  var searchString = "Video+games";
  var apiKey = "ZGTEr8yvDmKsdM52U66paHNpWbQPOape"; //giphy api (i think it should work)
  queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchString + "&api_key="+apiKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(response) {       ///promise function
    console.log(response);
  });
}

$("#clickButton").on("click",function(event){

  //event prevent  
  event.preventDefault();
    indexNumbers += 1;
    //topics = ["Nathan Drake", "Master Chief", "mario"];  //it keeps restarting the array thats why dont it commented out
    console.log(topics.length);
    inputVal = $("#searchBar").val();
    console.log(inputVal);
    topics[arrNum] = inputVal;
    
    //console.log(updatedArr);
    //var buttonid="giphyButton" + indexNumbers;
    //$(".buttonGifs").append('<button class="btn-primary giphyButton" id="'+ buttonid + '"type="submit">' + topics[arrNum] + '</button>');
    //$(".buttonGifs").append(" ");
    arrNum += 1;
    //topics.length = arrNum;  //this would not work
    console.log(topics);
    //click_btn_toGif(topics[arrNum]);
    rebuildbuttons();
  });

  $(".buttonGifs").on("click",function(event){
    event.preventDefault();
    console.log("Test line 49");
    click_btn_toGif(topics[arrNum]);
  });



