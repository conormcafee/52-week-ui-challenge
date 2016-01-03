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
    
    var nav = "<ul class='nav__list'>";
        for(i = 0; i < arr.length; i++) {
            nav += "<li class='nav__item'>" + "<a href='#" + arr[i].tags[0] + "' target='_blank' title='Week" + " " + arr[i].tags[0] + "' class='nav__link'>" + arr[i].tags[0] + "</a>" + "</li>"; 
        }
        
        nav += "</ul>";

    var image = "<section class='shots'>";

        for(i = 0; i < arr.length; i++) {
            image +=
            "<figure class='shot'>"
            + "<img src=" + arr[i].images.normal +" class='shot__image' />"
            + "<figcaption>"
            + "<h2 class='shot__title'>" + arr[i].title + "</h2>"
            + "<span class='shot__likes'>" + arr[i].likes_count + "</span>"
            + "<a href=" + arr[i].html_url + " class='shot__link' target='_blank'>View on Dribbble</a>"
            + "</figcaption>"
            + "</figure>";
        }
    
        image += "</section>";
    
    document.getElementById("nav").innerHTML = nav;
    document.getElementById("shots").innerHTML = image;
}