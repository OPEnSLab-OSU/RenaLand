var upButton = document.getElementById("arrow-up");
var downButton = document.getElementById("arrow-down");
var uploadButton = document.getElementById("upload-video");

upButton.onclick = function() {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
}

downButton.onclick = function() {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
        bottom: 0,
        behavior: "smooth"
      });
}

uploadButton.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-backdrop").classList.toggle("hidden");
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


function acceptPost() {
    var caption = document.getElementsByClassName("video-caption").value.trim();

}





