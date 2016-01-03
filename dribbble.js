var xmlhttp = new XMLHttpRequest();
var url = "https://api.dribbble.com/v1/projects/305787/shots?access_token=d034b9a970b289627566e7873eaa8243c65c6d6d6ba96d3bbcae5d40fa029a22";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        dribbbleProject(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function dribbbleProject(response) {
    var arr = JSON.parse(response);
    var i;
    var titles = "<div class='titles'>";
    var image = "<figure>";
    var nav = "<ul>";
  
    for(i = 0; i < arr.length; i++) {
      nav += "<li>" + "<a href='#" + arr[i].tags[0] + "'>" + arr[i].tags[0] + "</a>" + "</li>"; 
    }
  
  nav += "</ul>";

    for(i = 0; i < arr.length; i++) {
    	titles += "<h1>" + arr[i].title + "</h1>";
      image += "<img src=" + arr[i].images.hidpi +" />";
    }
     titles += "</div>";
    image += "</figure>";
    
    //document.getElementById("nav").innerHTML = nav;
    //document.getElementById("id01").innerHTML = titles;
    //document.getElementById("id02").innerHTML = image;
}