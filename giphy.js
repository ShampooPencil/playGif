
var topics = ["Nathan Drake", "Master Chief", "mario"];
var apiKey = "ZGTEr8yvDmKsdM52U66paHNpWbQPOape;"; //giphy api (i think it should work)
for(var i = 0; i < 3; i++){
    var showFirstArr = $(".buttonGifs").append('<button class="btn-primary" type="submit">' + topics[i] + '</button>');
    showFirstArr.append(" ");
    
}

$("#clickButton").click(function(){
    /*var bla = $('#searchBar').val(String);
    var blab = $('#searchBar').val(bla);*/
    var inputVal = document.getElementById("searchBar");
    //var valueV = $("#searchBar").attr('value');
    //inputVal = inputVal.toString();
    //inputVal = Text;
    //inputVal = String;
    //document.getElementById(“searchBar”).value;
    console.log(inputVal).value;
    topics.push(inputVal);
   
    //var makeToString = String(inputVal);
    
    $(".buttonGifs").append('<button class="btn-primary" type="submit">' + topics[inputVal] + '</button>');
    $(".buttonGifs").append(" ");
    /*var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;*/

})
/*var queryURL = "https://developers.giphy.com/" + apiKey;
document.addEventListener('DOMContentLoaded', function(){
    q = "video games";

    request = new XMLHttpRequest;
    request.open('GET', '')
})*/




