/*圖片版*/
document.addEventListener('DOMContentLoaded', function () {
    const peopleHoverIcon = document.querySelector('.peopleHoverIcon');
    const contentBox = document.querySelector('.content_box9');

    // 當滑鼠滑過色塊時
    peopleHoverIcon.addEventListener('mouseenter', function () {
        contentBox.style.display = 'block'; // 顯示內容區域
    });

    // 當滑鼠移開色塊時
    peopleHoverIcon.addEventListener('mouseleave', function () {
        contentBox.style.display = 'none'; // 隱藏內容區域
    });
});
