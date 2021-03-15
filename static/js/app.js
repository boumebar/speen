let theWheel = new Winwheel({
    'canvasId': 'canvas',
    'textFontSize': 18,
    'numSegments': 6,
    'responsive': true,
    'pins':
    {
        'fillStyle': '#fff',
        'outerRadius': 5,
        'margin': 4,
        'responsive': true,
    },
    'segments':
        [
            { 'fillStyle': '#F05208', 'text': 'ABI' },
            { 'fillStyle': '#F0E108', 'text': 'OUMI' },
            { 'fillStyle': '#79F008', 'text': 'IHSANE' },
            { 'fillStyle': '#08D9F0', 'text': 'AYMANE' },
            { 'fillStyle': '#9508F0', 'text': 'NOUSSAYBA' },
            { 'fillStyle': '#F0088A', 'text': 'SAKINA' },
        ],
    'fillStyle': '#e7706f',
    'lineWidth': 3,
    'animation':                   // Note animation properties passed in constructor parameters.
    {
        'type': 'spinToStop',  // Type of animation.
        'duration': 8,             // How long the animation is to take in seconds.
        'spins': 8,         // The number of complete 360 degree rotations the wheel is to do.
        // Remember to do something after the animation has finished specify callback function.
        'callbackFinished': 'alertPrize()',
    }

});

function alertPrize() {
    // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
    let winningSegment = theWheel.getIndicatedSegment();

    // Basic alert of the segment text which is the prize name.
    Swal.fire({
        title: winningSegment.text + ' A GAGNE',
        width: 600,
        padding: '3em',
        background: '#fff url(/static/image/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/static/image/giphy.gif")
          left top
          no-repeat
        `
    })
    Swal.fire({
        title: winningSegment.text + ' A GAGNE',
        width: 600,
        padding: '3em',
        background: '#fff url(/static/image/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/static/image/giphy.gif")
          left top
          no-repeat
        `
    })
}

async function calculatePrizeOnServer() {
    const response = await fetch('/calculate-prize');
    const segmentNumber = await response.text();

    const stopAt = theWheel.getRandomForSegment(segmentNumber);
    theWheel.animation.stopAngle = stopAt;

    theWheel.startAnimation();
}
