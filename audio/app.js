//  elements du dom sur lequel nous allons interagire
const player = document.getElementById('player')
const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const volUpBtn = document.getElementById('vol-up')
const volDownBtn = document.getElementById('vol-down')
const audio = document.getElementById('audio')
const loopBtn = document.getElementById('loop')
const title = document.getElementById('title')
const cover = document.getElementById('cover')
const progressContainer= document.getElementById('progress-container')
const progress = document.getElementById('progress')
 const volContainer = document.getElementById('vol-container')
 const volProgress = document.getElementById('vol-progress')


//   tous les titres a lire dans le dossier titre

const songs=['shot_feat_dry','9 Mi Gna (Maitre Gims Remix)','04-maitre_gims-freedom_feat_h_magnum']

//  Variables 
let songIndex = 0;
// cette variable nous permet de dire si le sond est sur stop ou bien sur plays

let isStopped = true;
// celle ici bas va nous permettre de dire si le song est en boucle ou non
let isLooping = true

const currentSong = songs[songIndex]
// chargement des details du song
loadSong(currentSong) ;
// permet de recuperer les details du song a jouer
 function loadSong(song){
     title.innerText = song;
     audio.src =`musique/${song}.mp3`;
     cover.src =`vignette/${song}.jpg`
 }


//  liste des evenement des song

audio.addEventListener('error',audioError)
//  cette fonction vanous retoyurner une erreur lorsques le song ne sera pas bien charge en memoire
playBtn.addEventListener('click',playPause)
//  peremt de lancer un son ou bien de le mettre en pause
stopBtn.addEventListener('click',stopSong)
//  qui permet de passer au song precedent
prevBtn.addEventListener('click',prevSong)
// pour passer au song suivant
nextBtn.addEventListener('click',nextSong)

audio.addEventListener('timeupdate',updateProgressBar)




function playPause(){
    const isPlaying = player.classList.contains('play');
    isPlaying?pauseSong() : playSong(currentSong);
}
// fonction permettant de jouer un song ici bas
function playSong (currentSong){
    if(isStopped){
        loadSong(currentSong);
        
    }
     
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    playBtn.querySelector('i.fas').style.color ="#00ff00";
    document.getElementById('music-container').classList.remove('disable-animation')
    player.classList.remove('stop')
    player.classList.add('play')
    
    audio.play();
}

function pauseSong(){
    //  nous permet de mettre le song en pause
    player.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').style.color ="#fff";
    document.getElementById('music-container').classList.add('disable-animation')
    audio.pause()

}

function stopSong(){
    // peremt de stopper un son en plein lecture
    
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').style.color ="#fff";
    document.getElementById('music-container').classList.add('disable-animation')
    player.classList.remove('play')
    player.classList.add('stop')
    audio.pause();
    audio.currenTime = 0;
    cover.alt='';
    isStopped =true;
    title.innerText="Titre"
}

function  audioError(){
    cover.src = "vignette/Error.jpg"
    let Errchargement=title.innerText = "Erreur lors du Chargement"
    
}

//  fonction preSong
function prevSong(){
   
    stopSong();
    songIndex= songIndex -1;
     if(songIndex<0){
         songIndex = songs.length-1;
    }
    // if(isStopped){
    //     loadSong(songs[songIndex]);
    //     playSong(songs[songIndex])
        
    // }
    // songIndex < 0 ? songIndex = songs.length-1 : songIndex;
    loadSong(songs[songIndex]);
    playSong(songs[songIndex])
    console.log(songs[songIndex]);
    
}


//  permet d'aller au son suivant

function nextSong(){
    stopSong();
    songIndex= songIndex + 1;
    if(songIndex>songs.length-1){
        songIndex =0;
    }
    // songIndex>songs.length-1 ? songIndex = 0 : songIndex;
    loadSong(songs[songIndex]);
    playSong(songs[songIndex]);
    // console.log(songIdex);
    
    console.log(songs[sonIndex]);
    
}

//   met a jour ;a barre de progressio du son

function updateProgressBar(e) {
    const duration = Audio.duration;
    const currenTime = audio.currenTime;
    const progressPercent = (currenTime / duration)*100;
    progress.style.width =`${progressPercent}%`
    console.log(duration)
    console.log(progressPercent)
}


