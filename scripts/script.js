document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = 'Pausar Hino';
        } else {
            audio.pause();
            playButton.innerHTML = 'Reproduzir Hino';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('audioPlayer2');
    var playButton = document.getElementById('playButton2');

    playButton2.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton2.innerHTML = 'Pausar Hino';
        } else {
            audio.pause();
            playButton2.innerHTML = 'Reproduzir Hino';
        }
    });
});