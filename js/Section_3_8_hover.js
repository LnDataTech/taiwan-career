const testimonialData = {
    'HoverIcon1': {
        imgSrc: '../assets/theme3_Rectangle.png',
        content: `
            <div class="testimonialContent1">
                <p class="testimonialAuthor1">OOO, NUEIP</p>
                <p class="testimonialQuote1">勞基法的假實在太少了，以NUEIP來說，會鼓勵員工去休息、充電。常見的特殊假包含不補班、自主連假、生日假、週五提早下班、全薪病假、心情假、旅遊假....等等。
                </p>
            </div>
        `
    },
    'HoverIcon2': {
        imgSrc: '../assets/theme3_Rectangle1.png',
        content: `
            <div class="testimonialContent1">
                <p class="testimonialAuthor1">David, LnData 數據科學家</p>
                <p class="testimonialQuote1">在數據公司上班，應該放一個「數據淨空假」！</p>
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
