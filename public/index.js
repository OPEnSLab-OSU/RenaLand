var videosarray = [];
var videos = document.getElementsByClassName('video');
for(var i = 0; i<videos.length; i++){
    videosarray.push(videos[i]);
}
var upButton = document.getElementById("arrow-up");
var downButton = document.getElementById("arrow-down");
var uploadButton = document.getElementById("upload-video");
var xButton = document.getElementsByClassName("dialog-hide-button")[0];
var cancelButton = document.getElementsByClassName("dialog-hide-button cancel-button")[0];
var uploadVideo = document.getElementsByClassName("upload-button")[0];
var searchButton = document.getElementsByClassName("searchbtn")[0];
var genreButton = document.getElementsByClassName("updatebtn")[0];




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
/*
uploadVideo.onclick = function(caption, video, genre) {
    if (validInput() == false) {
        alert("Incomplete fields.");
        return;
    }
    var context = {
        caption: caption,
        video: video,
        genre: genre
    };
    
    var videoHTML = Handlebars.templates.post(context);
    var videoSection = document.getElementById('videos');
    videoSection.insertAdjacentHTML('beforeend', videoHTML);
    return videoSection;

}
*/
searchButton.onclick = function() {
    addvideosback();
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
  
}


uploadVideo.onclick = function() {
//function acceptVideo() {
    if (validInput() == false) {
        alert("Incomplete fields.");
        return;
    }
    var videoSource = document.getElementById("new-url-input").value.trim();
    var caption = document.getElementById("new-caption-input").value.trim();
    var genre = document.querySelector('.genre-box-fieldset input:checked').value;
    
    
    var videoRequest = new XMLHttpRequest();
    var reqVideo = "/addVideo/";
    videoRequest.open('POST', reqVideo);

    var reqBody = JSON.stringify({
        video: videoSource,
        caption: caption,
        genre: genre
    }); 

    videoRequest.setRequestHeader('Content-Type', 'application/json');
    videoRequest.addEventListener('load', function (event) {
        if (event.target.status === 200) {
            var videoTemplate = Handlebars.templates.videoPostTemplate;
            var newVideoHTML = videoTemplate({
                video: videoSource,
                caption: caption,
                genre: genre
            });
            var videoContainer = document.querySelector('#videos');
    //        var videoContainer = document.querySelector(‘.body-content#videos');
            console.log("container:", videoContainer);
            videoContainer.insertAdjacentHTML('beforeend', newVideoHTML);
        }
        else {
            alert("Error: " + event.target.response);
        }
    });
    videoRequest.send(reqBody);
    
    hideModal();
}


function hideModal() {
  var modal = document.getElementById('new-video-modal');
  var modalBackdrop = document.getElementById('modal');

  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');   
  modalClear();
}

//get the value of checked box
function getcheckedbox(a){
    var genrevalue = [];
    for(var i = 0; i<5; i++){
        if(document.getElementsByName(a)[i].checked==true){
            genrevalue.push(document.getElementsByName(a)[i].value);
        }
    }
    return genrevalue;
}
//get current videos on the page
function getcurrentvideos(){
    var currentvideos = [];
    var cvs = document.getElementsByClassName('video');
    for(var i = 0; i<cvs.length; i++){
        currentvideos.push(cvs[i]);
    }
    return currentvideos;
}

//remove video from the page
function removevideo(idx){
    document.getElementById('videos').removeChild(videosarray[idx]);
}

//store all the original and new videos
var allvideos = [];
var avs = document.getElementsByClassName('video');
for(var i = 0; i<avs.length; i++){
    allvideos.push(avs[i]);
}

//re-add back all videos
function addvideosback(){
    videosarray = allvideos;
    for(var i = 0; i<videosarray.length; i++){
        document.getElementById('videos').appendChild(videosarray[i]);
    }
}
genreButton.onclick = function() {
    addvideosback();
    var genrechecked = getcheckedbox('type');
    videosarray = getcurrentvideos();
    for(var i = 0; i<videosarray.length; i++){
        if(genrechecked.length!=0&&genrechecked.includes(videosarray[i].getAttribute('data-genre'))==false){
            removevideo(i);
        }
    }
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




function newVideo (caption, video, genre) {

}






