/*圖片版*/
document.addEventListener('DOMContentLoaded', function () {
    const peopleHoverIcon = document.querySelector('.peopleHoverIcon');
    const contentBox = document.querySelector('.content_box9');
    const quoteText = document.querySelector('.quoteText');

    // 當滑鼠滑過色塊時
    peopleHoverIcon.addEventListener('mouseenter', function () {
        quoteText.innerHTML = '（躺平人生似乎也是個好選擇...）';
    });

    // 當滑鼠移開色塊時
    peopleHoverIcon.addEventListener('mouseleave', function () {
        quoteText.innerHTML = '當主管後才發現什麼都要管，反而更常加班!';
    });
});
