// Creating variables
var vidId;
var btn = document.querySelector("#btnGrab");
var input = document.querySelector("#url");
var inputText = document.querySelector(".urlAlert");
var url, url2, url3, url4, url5;
var thumb1 = document.querySelector("#thumbnail");
var thumb2 = document.querySelector("#thumbnail2");
var thumb3 = document.querySelector("#thumbnail3");
var thumb4 = document.querySelector("#thumbnail4");
var thumb5 = document.querySelector("#thumbnail5");
var falseInput = false;

// Function to remove hidden class
function show(x){
    if(x.classList.contains("hidden")){
        x.classList.remove("hidden");
    }
}

// Function to add hidden class
function hide(x){
        x.classList.add("hidden");
}

// Function to show thumbnails (using the show function)
function showThumbs(){
    show(thumb1.parentElement);
    show(thumb2.parentElement);
    show(thumb3.parentElement);
    show(thumb4.parentElement);
    show(thumb5.parentElement);
}

// Function to hide thumbnails (using the hide function)
function hideThumbs(){
    hide(thumb1.parentElement);
    hide(thumb2.parentElement);
    hide(thumb3.parentElement);
    hide(thumb4.parentElement);
    hide(thumb5.parentElement);
}

// Function to enter the video id in the right URLs to get the image files
function setURL(){
    url = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
    url2 = `https://img.youtube.com/vi/${vidId}/0.jpg`
    url3 = `https://img.youtube.com/vi/${vidId}/1.jpg`
    url4 = `https://img.youtube.com/vi/${vidId}/2.jpg`
    url5 = `https://img.youtube.com/vi/${vidId}/3.jpg`
}

// Function to replace the image sources
function imageSRC(){
    thumb1.setAttribute("src", url)
    thumb2.setAttribute("src", url2)
    thumb3.setAttribute("src", url3)
    thumb4.setAttribute("src", url4)
    thumb5.setAttribute("src", url5)
}


btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Fill variable with user's input
    vidId = input.value;
    if (vidId.includes("youtube.com/watch")) {
        // Select the video id out of a full YouTube link
        vidId = vidId.split("=");
        vidId = vidId[1];
        vidId = vidId.split("&");
        vidId = vidId[0];
        // Fill in the video id in the URLs
        setURL();
        // Replace image sources
        imageSRC();
        // Make them visible
        showThumbs();   
        // Remove warning if needed
        falseInput=false;
    } else if (vidId.includes("youtu.be/")) {
        // Select the video id out of a shortened YouTube link
        vidId = vidId.split("youtu.be/");
        vidId = vidId[1];
        // Fill in the video id in the URLs
        setURL();
        // Replace image sources
        imageSRC();
        // Make them visible
        showThumbs();   
        // Remove warning if needed
        falseInput=false;
    } else {
        // If the link isn't from YouTube, tell the user it's invalid
        falseInput=true;        
    }

    if(falseInput==true){
        // If a link is invalid, show the warning
        input.classList.add("alert");
        input.style.borderTopLeftRadius = "0";
        input.style.borderTopRightRadius = "0";
        show(inputText.parentElement);
        // Hide the images
        hideThumbs();
    }else{
        // If the link is valid, remove warning if necessary 
        input.classList.remove("alert");
        input.style.borderTopLeftRadius = "15px";
        input.style.borderTopRightRadius = "15px";
        hide(inputText.parentElement);
    }

    // Clear input field after search
    input.value="";
});

// If the user presses the enter key, simulate a button click
document.querySelector("#url").addEventListener("keyup", function(e){
    if(e.keyCode=== 13){
        btn.click();
    }
});