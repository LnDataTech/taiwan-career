const indicators = document.querySelectorAll('.colorIndicators div');

const screenshotImages = {
    '1': './assets/mediaplatform_1.png',
    '2': './assets/mediaplatform_2.png',
    '3': './assets/mediaplatform_3.png',
    '4': './assets/mediaplatform_4.png'
};
const screenshotImage = document.querySelector('.screenshotImage');

indicators.forEach(indicator => {
    indicator.addEventListener('mouseover', (event) => {
        const id = event.target.getAttribute('data-id');
        if (screenshotImages[id]) {
            screenshotImage.src = screenshotImages[id];
        }
    });

    indicator.addEventListener('mouseout', () => {
        screenshotImage.src = './assets/mediaplatform_1.png';
    });
});
