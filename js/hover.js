

const indicators = document.querySelectorAll('.colorIndicators div');

const screenshotImages = {
    '1': './assets/mediaplatform_1.png',
    '2': './assets/mediaplatform_2.png',
    '3': './assets/mediaplatform_3.png',
    '4': './assets/mediaplatform_4.png'
};
const screenshotImage = document.querySelector('.screenshotImage');

// 記錄當前圖片的變數
let currentImage = './assets/mediaplatform_1.png';

indicators.forEach(indicator => {
    indicator.addEventListener('mouseover', (event) => {
        const id = event.target.getAttribute('data-id');
        if (screenshotImages[id]) {
            screenshotImage.src = screenshotImages[id];
            // 更新當前圖片的變數
            currentImage = screenshotImages[id];
        }
    });

    indicator.addEventListener('mouseout', () => {
        // 保持在最後一次懸停的圖片
        screenshotImage.src = currentImage;
    });
});


//展開中的人物對應內容
function changeContentOnHover(person) {
    const insightQuestion = document.querySelector('.insightQuestion');
    const insightAnswer = document.querySelector('.insightAnswer');

    if (person === 'amy') {
        insightQuestion.textContent = '如何讓遠端工作的同事也能接觸到公司文化?  ';
        insightAnswer.textContent = '從招募流程開始，就可以向求職者說明公司希望這職位所具備的特質，以及公司在乎的價值是什麼，利用新人入職期間，透過訓練、活動等傳遞價值觀，並舉辦更多面對面的活動，讓遠端同事也能感受團隊的氛圍，打破電腦螢幕的隔閡。';
    } else if (person === 'jason') {
        insightQuestion.textContent = '如何有效管理遠距上班員工?';
        insightAnswer.textContent = '身為部門主管，會期望能夠掌握團隊成員的工作進度；若團隊因為某些事情耽擱了進度，主管需要去了解並想辦法幫助他們排除這些問題。投入時間、人力、質化量化成效、是否加班等都會是身為主管需掌握的。';
    }
}

// 設定滑鼠移開時重置內容的函數
function resetContent() {
    const insightQuestion = document.querySelector('.insightQuestion');
    const insightAnswer = document.querySelector('.insightAnswer');

    insightQuestion.textContent = '聽聽他們說';
    insightAnswer.textContent = '移動滑鼠到對應人物上';
}

// 將事件監聽器附加到對應的圖像上
document.getElementById('amy').addEventListener('mouseover', () => changeContentOnHover('amy'));
document.getElementById('jason').addEventListener('mouseover', () => changeContentOnHover('jason'));
document.getElementById('amy').addEventListener('mouseout', resetContent);
document.getElementById('jason').addEventListener('mouseout', resetContent);


let currentCtaImage = './assets/aboutus_team_1.png'

// 關於我們按鈕互動效果
const getStartedBtn = document.getElementById('cta2');
const aboutusImg = document.querySelector('.aboutusImg');
const partnerDescription = document.querySelector('.partnerDescription_box');
const partnerNameWrapper = document.querySelector('.partnerNameWrapper');

getStartedBtn.addEventListener('mouseover', () => {
    partnerNameWrapper.classList.add('hover-effect');
    partnerDescription.classList.add('hover-effect');
    aboutusImg.src = './assets/aboutus_team_2.png'; // 換成想要的圖片路徑
});

getStartedBtn.addEventListener('mouseout', () => {
    partnerNameWrapper.classList.remove('hover-effect');
    partnerDescription.classList.remove('hover-effect');
    aboutusImg.src = currentCtaImage;
});

const getStartedBtn1 = document.getElementById('cta1');
const companyDescription = document.querySelector('.companyDescription_box');
const companyNameWrapper = document.querySelector('.companyNameWrapper');

getStartedBtn1.addEventListener('mouseover', () => {
    companyNameWrapper.classList.add('hover-effect');
    companyDescription.classList.add('hover-effect');
});

getStartedBtn1.addEventListener('mouseout', () => {
    companyNameWrapper.classList.remove('hover-effect');
    companyDescription.classList.remove('hover-effect');
});
