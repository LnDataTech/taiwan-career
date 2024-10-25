function changeTextOnHover(indicator) {
    const infoTextContainer = document.getElementById('infoText');
    const learnMoreContainer0 = document.querySelector('.learnMoreContainer_span0');
    const learnMoreContainer1 = document.querySelector('.learnMoreContainer_span1');

    if (indicator === 'inactive') {
        infoTextContainer.innerHTML = '公司可以不給加班費嗎?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '(法律建議)';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer1.innerHTML = '';
        console.log("change inactive")
    } else if (indicator === 'Lndata') {
        infoTextContainer.innerHTML = '加班費怎麼給才合理?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '(人資觀點)';
        learnMoreContainer0.innerHTML = '了解更多：';
        learnMoreContainer1.innerHTML = '如何輕鬆計算與核發加班費？';
        console.log("change lndata")
    } else if (indicator === 'active') {
        infoTextContainer.innerHTML = '不敢申請? 太難申請?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '如果加班費申報流程複雜，或是採用實體模式，可能導致員工不敢申報或難以申報，甚至產生怨言';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer1.innerHTML = '';
        console.log("change active")
    }
}

function resetText() {
    const infoTextContainer = document.getElementById('infoText');
    const learnMoreContainer0 = document.querySelector('.learnMoreContainer_span0');
    const learnMoreContainer1 = document.querySelector('.learnMoreContainer_span1');

    infoTextContainer.innerHTML = '不敢申請? 太難申請?<br />';
    infoTextContainer.nextElementSibling.innerHTML = '如果加班費申報流程複雜，或是採用實體模式，可能導致員工不敢申報或難以申報，甚至產生怨言';
    learnMoreContainer0.innerHTML = '';
    learnMoreContainer1.innerHTML = '';
}


