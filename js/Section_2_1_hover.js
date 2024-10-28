let lastTextState2 = 'active'; // 初始化最後狀態為 'active'

function changeTextOnHover2(state) {
    const infoText2 = document.getElementById('infoText2');
    const learnMoreContainer0 = document.getElementById('learnMoreContainer2');
    const indicators = document.querySelectorAll('.indicatorRow div'); // 取得所有指示器

    if (state === 'inactive') {
        infoText2.innerHTML = '天花板?<br />';
        infoText2.nextElementSibling.innerHTML = '如果加班費申報流程複雜，或是採用實體模式，可能導致員工不敢申報或難以申報，';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer0.nextElementSibling.innerHTML = '';
        lastTextState2 = 'inactive'; // 更新最後狀態

        // 指示器變色邏輯
        indicators.forEach(indicator => {
            if (indicator.classList.contains('inactiveIndicator')) {
                indicator.style.backgroundColor = '#f0eb47'; // 指示器變色
            } else {
                indicator.style.backgroundColor = ''; // 重置其他指示器顏色
            }
        });
    } else if (state === 'active') {
        infoText2.innerHTML = 'DEI?<br />';
        infoText2.nextElementSibling.innerHTML = '根據勞基法規定，企業應給予勞工基本假期';
        learnMoreContainer0.innerHTML = '知道更多：';
        learnMoreContainer0.nextElementSibling.innerHTML = '如何輕鬆管理員工';
        lastTextState2 = 'active'; // 更新最後狀態

        // 指示器變色邏輯
        indicators.forEach(indicator => {
            if (indicator.classList.contains('activeIndicator')) {
                indicator.style.backgroundColor = '#f0eb47'; // 指示器變色
            } else {
                indicator.style.backgroundColor = ''; // 重置其他指示器顏色
            }
        });
    }
}

function resetText2() {
    // 根據最後的狀態設置內容，而不是重置為初始值
    changeTextOnHover2(lastTextState2);
}