import {animate, stagger, createTimeline} from "https://esm.sh/animejs";

animate( '#square',
    {
        backgroundColor: '#8400ff',
        borderRadius: '50%',
        translateX: '500px',
        scale: 0.5,
        rotate: '360deg',

        duration: 2000, //antal millisekunder
        loop: true,
        alternate: true,
        ease: 'inOut(3)'
    })

// const staggerAnimation = {
//     translateY: '-5rem',
//     delay: stagger(200),
//     ease: 'outSine',
//     playbackRate: 2,
//     alternate: true,
//     loop: true
// }

// animate( '#container h1', staggerAnimation);

const tl = createTimeline({loop: true, duration: 1000});

tl.add('#container h1',{
    translateY: '-5rem',
    delay: stagger(200),
}).add('#container h1',{
    translateY: '0',
    delay: stagger(200),
})

animate('#keyframe', {
    translateX: [0, 200, 50, 100, 500],
    translateY: [0, 0, -300, 200],
    backgroundColor: ['#00ffff', '#ff00ff'],
    duration: 5000
})