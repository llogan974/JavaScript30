const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');


// Build out functions

function togglePlay(){
    // Play or pause a video
    if(video.paused){
        video.play();
        } else {
            video.pause();
        }
    }
function updateButton(){
    console.log('Update that button');
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', togglePlay);


toggle.addEventListener('click', togglePlay)