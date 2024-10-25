function toggleFeedback(button) {
    const feedbackBox = document.querySelector('.feedbackBox');
    if (feedbackBox.style.display === 'none') {
        feedbackBox.style.display = 'block';
        button.style.display = 'none'; // 隱藏開啟按鈕
    }
}

function closeFeedback() {
    const feedbackBox = document.querySelector('.feedbackBox');
    const feedbackBtn = document.querySelector('.feedbackBtn');
    feedbackBox.style.display = 'none'; // 隱藏展開頁面
    feedbackBtn.style.display = 'block'; // 顯示開啟按鈕
}
