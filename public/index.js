var upButton = document.getElementById("arrow-up");
var downButton = document.getElementById("arrow-down");
var uploadButton = document.getElementById("upload-video");
var xButton = document.getElementsByClassName("dialog-hide-button")[0];
var cancelButton = document.getElementsByClassName("dialog-hide-button cancel-button")[0];
var uploadVideo = document.getElementsByClassName("upload-button")[0];
var searchButton = document.getElementsByClassName("searchbtn")[0];

function modalClear() {
    document.getElementById("new-url-input").value = "";
    document.getElementById("new-caption-input").value = "";
}


function validInput() {
    if (
        document.getElementById("new-url-input").value == "" ||
        document.getElementById("new-caption-input").value == "") {
        return false;
    }   
    else {
        return true;
    }
}

upButton.onclick = function() {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

downButton.onclick = function() {
    var rootElement = document.documentElement;
    rootElement.scrollTo(0, document.body.scrollHeight);
}

uploadButton.onclick = function() {
    modal.style.display = "block";
}

xButton.onclick = function() {
    modal.style.display = "none";
    modalClear();

}

cancelButton.onclick = function() {
    modal.style.display = "none";
    modalClear();

}

uploadVideo.onclick = function() {
    if (validInput() == false) {
        alert("Incomplete fields.");
        return;
    }
}

searchButton.onclick = function() {
    var videoArr = document.getElementsByClassName("video");
    var captionText = document.getElementById("type").value.toLowerCase();

    for (var i = videoArr.length - 1; i >= 0; i--) {
        var videoText = document.getElementsByClassName("video-caption")[i].childNodes[0].textContent.toLowerCase();
        var bool = false;
        if (videoText.indexOf(captionText.toLowerCase()) == -1 && captionText !== "") {
            bool = true;
            videoArr[i].remove();
        }
    }
    console.log("Hello");


}




let options = {
    root: null,
    rooMargin: '0px', 
    threshold: 1.0
};

let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.target.className == "myVideo") {
            if (entry.isIntersecting) {
                entry.target.play();
            }
            else {
                entry.target.pause();
            }
        }
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.getElementsByClassName("myVideo")[0]);
observer.observe(document.getElementsByClassName("myVideo")[1]);
observer.observe(document.getElementsByClassName("myVideo")[2]);
observer.observe(document.getElementsByClassName("myVideo")[3]);
observer.observe(document.getElementsByClassName("myVideo")[4]);
observer.observe(document.getElementsByClassName("myVideo")[5]);
observer.observe(document.getElementsByClassName("myVideo")[6]);
observer.observe(document.getElementsByClassName("myVideo")[7]);
observer.observe(document.getElementsByClassName("myVideo")[8]);




function newVideo (caption, videoFile, genre) {
    var context = {
        caption: caption,
        video: videoFile,
        genre: genre
    };
    
    var videoHTML = Handlebars.templates.post(context);
    var videoSection = document.getElementById('videos');
    videoSection.insertAdjacentHTML('beforeend', videoHTML);
    return videoSection;

}






