// Array of songs (replace with your GitHub raw URLs)
const songs = [
    { name: "Song 1", url: "https://raw.githubusercontent.com/YourUsername/my-music-site/main/song1.mp3" },
    { name: "Song 2", url: "https://raw.githubusercontent.com/YourUsername/my-music-site/main/song2.mp3" },
];

const songsDiv = document.getElementById("songs");

songs.forEach(song => {
    const audioEl = document.createElement("audio");
    audioEl.controls = true;
    audioEl.src = song.url;

    const label = document.createElement("p");
    label.textContent = song.name;

    songsDiv.appendChild(label);
    songsDiv.appendChild(audioEl);
});
