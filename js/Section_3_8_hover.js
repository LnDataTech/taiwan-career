const testimonialData = {
    'HoverIcon1': {
        imgSrc: '../assets/theme3_Rectangle.png',
        content: `
            <div class="testimonialContent1">
                <p class="testimonialAuthor1">Jaie 執行長, DataLn</p>
                <p class="testimonialQuote1">我們公司有「心情不好假」</p>
            </div>
        `
    },
    'HoverIcon2': {
        imgSrc: '../assets/theme3_Rectangle1.png',
        content: `
            <div class="testimonialContent1">
                <p class="testimonialAuthor1">Jaie 執行長, DataLn</p>
                <p class="testimonialQuote1">我們公司有「心情不好假」</p>
            </div>
        `
    }
};

// 取得 testimonialCard1 元素
const testimonialCard = document.getElementById('testimonialCard1');

// 取得 HoverIcon1 和 HoverIcon2 元素
const hoverIcons = document.querySelectorAll('.colorAccents img');

// 為每個 hover icon 註冊事件監聽器
hoverIcons.forEach(icon => {
    icon.addEventListener('mouseenter', (event) => {
        const iconId = event.target.id;
        console.log(`Hovering over: ${iconId}`); // 日誌輸出
        if (testimonialData[iconId]) {
            console.log('Data found for:', iconId); // 日誌輸出
            testimonialCard.style.setProperty('--src', `url(${testimonialData[iconId].imgSrc})`);
            testimonialCard.innerHTML = testimonialData[iconId].content;
            testimonialCard.style.opacity = '100%' // 顯示 testimonialCard1
        }
    });

    icon.addEventListener('mouseleave', () => {
        testimonialCard.style.opacity = '0'; // 滑鼠離開時隱藏 testimonialCard1
    });
});
