    import throttle from 'lodash.throttle';
    import Player from '@vimeo/player';

    const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe, {
    id: 19231868,
    width: 640
    });

    const onPlay = function(date) {
        localStorage.setItem('videoplayer-current-time', date.seconds);
        console.log(parseInt(localStorage.getItem('videoplayer-current-time')))
    };


    player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
