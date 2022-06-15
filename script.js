
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let timestamp=Array.from(document.getElementsByClassName('timestamp'));
let songs=[
    {songName: "Jab Saiyaan - Gangubai.mp3",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Makhmali - Arijit Singh.mp3",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Chandra Song Chandramukhi.mp3",filePath:"songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Uff - Shreya Ghoshal.mp3",filePath:"songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Gulabi Song Shreya Ghoshal.mp3",filePath:"songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Mere Dholna.mp3",filePath:"songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Heer Raanjhana - Arijit Singh.mp3",filePath:"songs/7.mp3",coverPath: "covers/7.jpg"}

];
//var element;
songItems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
   
})

masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        //masterSongName.innerText=audioElement.songName;
        
       // masterPlay.classList.add('fa-solid fa-circle-pause');
    }  else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    })


audioElement.addEventListener('timeupdate',()=>{
progress=((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
console.log(myProgressBar.value);
if(myProgressBar.value==100){
    gif.style.opacity=0;
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');   

}
})



myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
  
}
)

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play');
    })
    
}



songItemPlay.forEach((element )=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id)+1;
        var str=songIndex.toString();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
      //  console.log(songIndex);
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.src= 'songs/'+str+'.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6)
    songIndex=0;
    else 
    songIndex+=1;
    var str=songIndex.toString();
    audioElement.src= 'songs/'+str+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex=0;
    else 
    songIndex-=1;
    var str=songIndex.toString();
    audioElement.src= 'songs/'+str+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})



 