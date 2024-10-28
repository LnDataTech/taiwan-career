let lastIndicator = 'active'; // 保存最後一個指示器的狀態

function changeTextOnHover(indicator) {
    const infoTextContainer = document.getElementById('infoText');
    const learnMoreContainer0 = document.querySelector('.learnMoreContainer_span0');
    const learnMoreContainer1 = document.querySelector('.learnMoreContainer_span1');
    const activeIndicator = document.querySelector('.activeIndicator');
    const inactiveIndicators = document.querySelectorAll('.inactiveIndicator');

    if (indicator === 'inactive') {
        infoTextContainer.innerHTML = '公司可以不給加班費嗎?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '(法律建議)';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer1.innerHTML = '';
        inactiveIndicators[0].style.backgroundColor = '#f0eb47'
        inactiveIndicators[1].style.backgroundColor = '#d9d9d9'
        activeIndicator.style.backgroundColor = '#d9d9d9'; 
        console.log("change inactive")
    } else if (indicator === 'Lndata') {
        infoTextContainer.innerHTML = '加班費怎麼給才合理?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '具有加班的事實以及需求，給予方式確認合法合規（此時透過系統自動加權可大幅降低加班費發放的錯誤率）；於此同時，透過系統後台的數據呈現加班時數的即時總合，了解最近加班或是經常加班員工們的工作情形。';
        learnMoreContainer0.innerHTML = '了解更多：';
        learnMoreContainer1.innerHTML = '如何輕鬆計算與核發加班費？';
        inactiveIndicators[1].style.backgroundColor = '#f0eb47';
        inactiveIndicators[0].style.backgroundColor = '#d9d9d9'
        activeIndicator.style.backgroundColor = '#d9d9d9';
        console.log("change lndata")
    } else if (indicator === 'active') {
        infoTextContainer.innerHTML = '不敢申請? 太難申請?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '如果加班費申報流程複雜，或是採用實體模式，可能導致員工不敢申報或難以申報，甚至產生怨言';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer1.innerHTML = '';
        activeIndicator.style.backgroundColor = '#f0eb47'; 
        inactiveIndicators[1].style.backgroundColor = '#d9d9d9';
        inactiveIndicators[0].style.backgroundColor = '#d9d9d9';
        console.log("change active")
    }

    // 將當前指示器保存為最後狀態
    lastIndicator = indicator;
}

function resetText() {
    changeTextOnHover(lastIndicator);
}


