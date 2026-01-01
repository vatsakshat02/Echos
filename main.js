let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1 ]);
})

//audio
const audio = document.querySelector('.audio');
const PlayButton = document.querySelector('.pause ')
const Playicon = document.querySelector('.pause i')
const coverImg = document.querySelector('.player img')
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const song = document.querySelector('#song-title');
let isPlaying = false;

PlayButton.addEventListener('click', () => {
    if(!isPlaying){
        audio.play();
        Playicon.classList.replace('fa-play','fa-pause');
        isPlaying = true;
    }
    else{
        audio.pause();
        Playicon.classList.replace('fa-pause','fa-play');
        isPlaying = false;
    
    }
})

// let progress = document.querySelector('#progress')
// audio.addEventListener('timeupdate',() => {
//     progress.value = (audio.currentTime/audio.duration)*100;
// })

// progress.addEventListener('input', ()=>{
//     audio.currentTime = (progress.value/100)*audio.duration;
// })

audio.addEventListener('loadedmetadata', () => {
    progress.max = audio.duration;
    progress.value = 0
})
audio.addEventListener('timeupdate', () => {
    progress.value = audio.currentTime;
})
progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
})

const songs = [
    {
        title : 'Her loss',
        src: './Audio/Drake, 21 Savage - Spin Bout U (Audio) 4.mp3',
        cvr : './images/HerLoss.jpg'
    },
    {
        title : 'Mamacita',
        src : './Audio/Mamacita.mp3',
        cvr: './images/DaysBeforeRodeo.jpg'
    },
    {
        title: 'Nayaab',
        src: './Audio/Nayaab.mp3',
        cvr: './images/Nayaab.jpg'
    }
]

let currentSongIndex = 0;
loadSong(currentSongIndex);

function loadSong(currentIndex){
    audio.src = songs[currentIndex].src;
    coverImg.src = songs[currentIndex].cvr;
    song.textContent = songs[currentIndex].title;
    audio.load();
}

forward.addEventListener('click',() => {
    currentSongIndex++;
    if(currentSongIndex >= songs.length){
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);
    audio.play();
    Playicon.classList.replace('fa-play','fa-pause');
    isPlaying= true;
})

backward.addEventListener('click',()=>{
    if(currentSongIndex < 0){
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
    currentSongIndex--;
    audio.play();
    Playicon.classList.replace('fa-pause','fa-play');
    isPlaying= false;
})

