// ==UserScript==
// @name         Skip bilibili player electric panel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skip bilibili player electric panel
// @author       SmileYik
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // you can find a class named
    // bilibili-player-electric-panel-jump-time
    // it is a button to skip bilibili player electric panel.
    const checkedClass = "bilibili-player-electric-panel-jump-time";
    // bilibili-player-iconfont-next
    // this is a class name of next part video button
    const nextButtonClass = "bilibili-player-iconfont-next";

    let id = 0;

    function tick() {
        const result = document.getElementsByClassName(checkedClass);
        if (result && result.length > 0) {
            console.log("start skip electric panel...");
            const nextButton = document.getElementsByClassName(nextButtonClass);
            if (nextButton && nextButton.length > 0) {
                console.log("find next button, skipping...");
                nextButton[0].click();
            }
        }
    }

    id = setInterval(tick, 1000);
})();