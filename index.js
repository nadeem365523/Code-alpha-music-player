let audio = document.getElementById("audio");
let progress = document.getElementById("progress");

let songs = ["music/song1.mp3", "music/song2.mp3"];
let index = 0;

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function nextSong() {
  index = (index + 1) % songs.length;
  audio.src = songs[index];
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  audio.src = songs[index];
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});
