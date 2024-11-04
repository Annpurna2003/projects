

let audioelement; // Declare audioelement outside the functions

function playMusic(filename) {
    audioelement = new Audio(filename);
    audioelement.play();
}

function pauseMusic() {
    if (audioelement) {
        audioelement.pause();
    }
}

// Example usage
playMusic('1.mp3'); // Start playing the audio
// Later, to pause the audio
pauseMusic();

// //initialie the variables
let songindex=0;
 let audioelement=playMusic('1.mp3');
 let masterplay=document.getElementById('masterplay');
 let myprogressbar=document.getElementById('myprogressbar');
 let songs=[

    {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-es-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
     {songName:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
 ]
 //handle play/pause and click
 masterplay.addEventListener('click',()=>{
     if(audioelement.paused||audioelement.currentTime<=0){
         audioelement.playMusic('1.mp3');
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
     }
 });
// // listen the events.
//  myprogressbar.addEventListener('timeupdate',()=>{
//      console.log('timeupdate');
//  })