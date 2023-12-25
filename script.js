console.log("Welcome to Spotify");

//Initialize the variables
let songIndex =0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');
let songitems = document.getElementsByClassName('songitem');
let mastersongname = document.getElementById('mastersongname');

let songs =[
    {songName : "Let Me Love You",filePath:"song/1.mp3", coverPath: "covers/1.jpeg"},
    {songName : "Amplifier",filePath:"song/2.mp3", coverPath: "covers/2.jpeg"},
    {songName : "Animal Song",filePath:"song/3.mp3", coverPath: "covers/3.jpeg"},
    {songName : "Jamal Kudu",filePath:"song/4.mp3", coverPath: "covers/4.jpeg"},
    {songName : "Kaho Na Pyar Hai",filePath:"song/5.mp3", coverPath: "covers/5.jpeg"},
    {songName : "Kesariya",filePath:"song/6.mp3", coverPath: "covers/6.jpeg"},
    {songName : "Humko Pyar Hua",filePath:"song/7.mp3", coverPath: "covers/7.jpeg"},
    {songName : "Ram Ayenge",filePath:"song/8.mp3", coverPath: "covers/8.jpeg"},
    {songName : "Satranga",filePath:"song/9.mp3", coverPath: "covers/9.jpeg"},
    {songName : "Trending Nakhra",filePath:"song/10.mp3", coverPath: "covers/10.jpeg"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value = progress;
});

myProgress.addEventListener('change',()=>{
    audioElement.currentTime = myProgress.value * audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`song/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    })
})

document.getElementById('next').addEventListener('click',() =>{
    if(songIndex>=9){
        songIndex =0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;

})

document.getElementById('previous').addEventListener('click',() =>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;

})