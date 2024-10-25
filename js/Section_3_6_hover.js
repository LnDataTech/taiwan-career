function changeTextOnHover3(indicator) {
    const infoTextContainer = document.getElementById('infoText1');
    const learnMoreContainer0 = document.querySelector('.learnMoreContainer_span0');
    const learnMoreContainer1 = document.querySelector('.learnMoreContainer_span1');

    if (indicator === 'inactive') {
        infoTextContainer.innerHTML = '如何合理安排假期？<br />';
        infoTextContainer.nextElementSibling.innerHTML = '(人資觀點)';
        learnMoreContainer0.innerHTML = '了解更多：';
        learnMoreContainer1.innerHTML = '如何優化員工假期管理系統？';
    } else if (indicator === 'active') {
        infoTextContainer.innerHTML = '企業該給多少假?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '根據勞基法規定，企業應給予勞工基本假期';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer1.innerHTML = '';
    }
}

function resetText3() {
    const infoTextContainer = document.getElementById('infoText1');
    const learnMoreContainer0 = document.querySelector('.learnMoreContainer_span0');
    const learnMoreContainer1 = document.querySelector('.learnMoreContainer_span1');

    infoTextContainer.innerHTML = '企業該給多少假?<br />';
    infoTextContainer.nextElementSibling.innerHTML = '根據勞基法規定，企業應給予勞工基本假期';
    learnMoreContainer0.innerHTML = '';
    learnMoreContainer1.innerHTML = '';
}
