const throttle = require('lodash.throttle');

import Player from '@vimeo/player';

const vimeoRef = document.querySelector('#vimeo-player');

const player = new Player(vimeoRef);

const setVideoTime = data => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then().catch(function(error) {
    // взято с документации
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


player.on('timeupdate', throttle(setVideoTime, 1000));