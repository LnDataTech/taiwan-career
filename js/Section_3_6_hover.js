let lastTextState = 'active'; // 初始化最後狀態為 'active'

function changeTextOnHover3(state) {
    const infoText1 = document.getElementById('infoText1');
    const learnMoreContainer0 = document.getElementById('learnMoreContainer1');
    const learnMoreContainer1 = document.querySelector('.learnMoreContainer_span1');
    const indicators = document.querySelectorAll('.indicatorRow div'); // 取得所有指示器

    if (state === 'inactive') {
        infoText1.innerHTML = '公司該給多少假?<br />';
        infoText1.nextElementSibling.innerHTML = '優於勞基法的休假制度可增加員工幸福感，搭配特殊假的設置，除了也能在招募上提供額外的誘因以吸引求職者，更可配合企業文化，進一步打造雇主品牌。';
        learnMoreContainer0.innerHTML = '了解更多：';
        learnMoreContainer0.nextElementSibling.innerHTML = '如何合法保障勞工的假期權益';
        lastTextState = 'inactive'; // 更新最後狀態

        // 指示器變色邏輯
        indicators.forEach(indicator => {
            if (indicator.classList.contains('inactiveIndicator')) {
                indicator.style.backgroundColor = '#f0eb47'; // 指示器變色
            } else {
                indicator.style.backgroundColor = ''; // 重置其他指示器顏色
            }
        });
    } else if (state === 'active') {
        infoText1.innerHTML = '企業該給多少假?<br />';
        infoText1.nextElementSibling.innerHTML = '根據勞基法規定，企業應給予勞工基本假期';
        learnMoreContainer0.innerHTML = '知道更多：';
        learnMoreContainer0.nextElementSibling.innerHTML = '如何輕鬆管理員工';
        lastTextState = 'active'; // 更新最後狀態

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

function resetText3() {
    // 根據最後的狀態設置內容，而不是重置為初始值
    changeTextOnHover3(lastTextState);
}