//when click on the upload new video button
var uploadbtn = document.querySelector('.upload-video');
uploadbtn.addEventListener('click', function(){
    document.getElementById('new-video-modal').classList.remove('hidden');
    document.getElementById('modal').classList.remove('hidden');
});
//when click on the close button of the modal
var closebtn = document.querySelector('.dialog-hide-button');
closebtn.addEventListener('click', closemodal);
//when click on the cancel button of the modal
var cancelbtn = document.querySelector('.cancel-button');
cancelbtn.addEventListener('click', closemodal);
//hide the modal and clear all inputs
function closemodal(){
    document.getElementById('new-url-input').value='';
    document.getElementById('new-caption-input').value='';
    document.getElementById('video-genre-1').checked=true;
    document.getElementById('video-genre-2').checked=false;
    document.getElementById('video-genre-3').checked=false;
    document.getElementById('video-genre-4').checked=false;
    document.getElementById('other').checked=false;
    document.getElementById('new-video-modal').classList.add('hidden');
    document.getElementById('modal').classList.add('hidden');
}
//when click on the upload new video button of the modal
var uploadvideobtn = document.querySelector('.upload-button');
uploadvideobtn.addEventListener('click', uploadnewvideo);

//when click on the arrow-up button
var upbtn = document.querySelector('.arrow-up');
upbtn.addEventListener('click', jumptothetop);
//jump to the top of the webpage
function jumptothetop(){

}

//when click on the arrow-down button
var downbtn = document.querySelector('.arrow-down');
downbtn.addEventListener('click', jumptothebottom);
//jump to the bottom of the webpage
function jumptothebottom(){
    
}
//create a new video on the website
function uploadnewvideo(){

}
//check if any modal input is empty
function isempty(){

}

var videos = [];

//user types to search videos, only videos that include the typed words would be displayed
function searchvideos(){

}

//user checks boxes to let the page display all matched genre videos
function checkgenrebox(){

}


