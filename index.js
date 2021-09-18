var fullBtn = document.getElementById('fullScreen');
var playBtn = document.getElementById('playPause');
var range = document.getElementById("range");
var video = document.getElementById("vid1");
var range2 = document.getElementById("range2");
var time2 = document.getElementById("time");
var speedBtn = document.querySelector("#speed i");
var speedUl = document.querySelector("#speed ul");
var speedUlLi = document.querySelector("#speed ul li");
var speedSpan = document.querySelector("#speed ul li i");
var speedUlLiUl = document.querySelector("#speed ul li ul");
var speedUlLiUlLI = document.querySelectorAll("#speed ul li ul li");
var volume = document.querySelector("#volume");
var changeBtn = document.querySelectorAll(".change button");

// change videos



speedBtn.onclick = function() {
    speedUl.classList.toggle("active");
}
speedUlLi.onclick = function() {
    speedUlLiUl.classList.toggle("active");
}

for (let i = 0; i < speedUlLiUlLI.length; i++) {
    speedUlLiUlLI[i].onclick = function() {
        video.playbackRate = speedUlLiUlLI[i].getAttribute("data-speed");
        speedSpan.innerHTML = speedUlLiUlLI[i].innerHTML;
    }
}

range.onchange = function() {
    if (this.value <= 9) {
        video.volume = Number("." + this.value);
    } else {
        video.volume = 1;
    }
}


window.onload = function() {
    range2.max = video.duration;
    range2.value = video.currentTime;
    var time = video.currentTime;
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time);
    var minutesMain = Math.floor(video.duration / 60);
    var secondsMain = Math.floor(video.duration);

    // Set the current play value

    time2.innerHTML = minutes + ':' + Number(seconds - minutes * 60) + " / " + minutesMain + ':' + Number(secondsMain - minutesMain * 60);

}
range2.oninput = function() {
    video.currentTime = range2.value;
}

// playbackRate

video.onclick = function() {
    var player = document.getElementById('vid1');
    if (player.paused) {
        playBtn.classList.remove('mdi-play');
        playBtn.classList.add('mdi-pause');
        player.play();
    } else {
        playBtn.classList.add('mdi-play');
        playBtn.classList.remove('mdi-pause');
        player.pause();
    }

}
let one = 10;
window.onkeydown = function(event) {
    var x = event.keyCode;
    if (x == 32) {
        var player = document.getElementById('vid1');
        if (player.paused) {
            playBtn.classList.remove('mdi-play');
            playBtn.classList.add('mdi-pause');
            player.play();
        } else {
            playBtn.classList.add('mdi-play');
            playBtn.classList.remove('mdi-pause');
            player.pause();
        }
    } else if (x == 70) {
        var tgtEle = document.querySelector('.vidFrame');
        var onOrOff = fullBtn.classList.contains('on');
        if (onOrOff) {
            enterFS(tgtEle);
            fullBtn.classList.remove('on');
            fullBtn.classList.add('off');
            fullBtn.classList.remove('mdi-fullscreen');
            fullBtn.classList.add('mdi-fullscreen-exit');
        } else {
            exitFS();
            fullBtn.classList.add('on');
            fullBtn.classList.remove('off');
            fullBtn.classList.add('mdi-fullscreen');
            fullBtn.classList.remove('mdi-fullscreen-exit');
        }
    } else if (x == 77) {
        if (video.volume > 0) {
            video.volume = 0;
        } else {
            video.volume = 1;
        }
    } else if (x == 38) {

        let two = ++range.value;
        if (two <= 9) {
            video.volume = Number("." + two);
        } else {
            video.volume = 1;
        }

        if (two <= 5) {
            volume.classList.add("mdi-volume-medium");
            volume.classList.remove("mdi-volume-high");
        } else if (two >= 5) {
            volume.classList.remove("mdi-volume-medium");
            volume.classList.add("mdi-volume-high");
        }
        console.log(two);
    } else if (x == 40) {
        let two = --range.value;
        if (two <= 9 && two > 1) {
            video.volume = Number("." + two);
        } else {
            two = 0
        }
        if (two <= 5) {
            volume.classList.add("mdi-volume-medium");
            volume.classList.remove("mdi-volume-high");
        } else if (two >= 5) {
            volume.classList.remove("mdi-volume-medium");
            volume.classList.add("mdi-volume-high");
        }
    } else if (x == 39) {
        // range2.value = ;
        video.currentTime++;
    } else if (x == 37) {
        // range2.value = ;
        video.currentTime--;
    } else if (x == 76) {
        video.loop = true;
    } else if (x == 96) {
        video.currentTime = 0;
    } else if (x == 13) {
        if (video.src == "file:///G:/1-website/%D9%85%D9%87%D9%85/%D8%AA%D8%AC%D8%A7%D8%B1%D8%A8/video/1.mp4") {
            video.src = "videos/2.mp4";
        } else {
            video.src = "1.mp4";
        }
    }
}
video.onplay = function() {
    playBtn.classList.remove('play');
    playBtn.classList.add('pause');
}

video.onpause = function() {
    playBtn.classList.add('play');
    playBtn.classList.remove('pause');
}

video.ontimeupdate = function() {
    range2.value = video.currentTime;
    var time = video.currentTime;
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time);
    var minutesMain = Math.floor(video.duration / 60);
    var secondsMain = Math.floor(video.duration);

    // Set the current play value

    time2.innerHTML = minutes + ':' + Number(seconds - minutes * 60) + " / " + minutesMain + ':' + Number(secondsMain - minutesMain * 60);
}

playBtn.addEventListener('click', function(event) {
    var player = document.getElementById('vid1');
    if (player.paused) {
        playBtn.classList.remove('mdi-play');
        playBtn.classList.add('mdi-pause');
        player.play();
    } else {
        playBtn.classList.add('mdi-play');
        playBtn.classList.remove('mdi-pause');
        player.pause();
    }
}, false);

fullBtn.addEventListener('click', function(event) {
    var tgtEle = document.querySelector('.vidFrame');
    var onOrOff = fullBtn.classList.contains('on');

    if (onOrOff) {
        enterFS(tgtEle);
        fullBtn.classList.remove('on');
        fullBtn.classList.add('off');
        fullBtn.classList.remove('mdi-fullscreen');
        fullBtn.classList.add('mdi-fullscreen-exit');
    } else {
        exitFS();
        fullBtn.classList.add('on');
        fullBtn.classList.remove('off');
        fullBtn.classList.add('mdi-fullscreen');
        fullBtn.classList.remove('mdi-fullscreen-exit');
    }

}, false);


function enterFS(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function exitFS() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}