// Create variables that store css style change
let backgroundColor = "#FFFBF6"; 
let fontColor = "#FFFFFF"; 
let titleFontSize = "3.7vw"; 
let sloganFontSize = "1.9vw";
let textFontSize = "1.77vw"; 
let imagePadding = "0vw"; 

// Create variables that store html content
let messageNav0 = "关于";
let messageNav1 = "产品";
let messageNav2 = "手机程序";

let messageOne = "本项目以现有的月经互助盒为起点，旨在设计一个更加系统化、更加注重用户体验的智能公共设施，支持可持续运营，为女性提供更多便利。";
let messageTwo = "每一次月经都是月亮和潮汐对你的牵引。<br>——予她同行";
let messageTwo1 = "每一次月经都是月亮和潮汐对你的牵引。<br>——予她同行";

let messageThree0 = "产品介绍";
let messageThree = "该互助盒旨在打破月经耻辱，并为有需要的女性提供卫生巾。它承载着诗意的设计语义，试图从外观设计上表达对女性群体的支持和关怀。它提供了更好的用户体验，消除了用户对卫生和过敏问题的担忧，并解决了不可持续运营的问题。";
let messageThree1 = "I.<br>可持续运营";
let messageThree2 = "II.<br>更好的用户体验";
let messageThree3 = "III.<br>保障卫生和质量";

let messageFour0 = "手机程序介绍";
let messageFour = "该平台的功能主要是告诉用户有关互助盒和卫生巾的基本信息。它并不是一个只有这些简单功能的应用程序。为了丰富应用程序的内容，我们添加了更多有用的模块，旨在提高用户的参与度和粘性，使她们愿意为消除耻辱感和创造社会影响做出贡献。";

let messageFive0 = "如何使用我们的产品？"
let messageFive1 = "1.(通过App)找到互助盒。"
let messageFive2 = "2.将手机靠近“月亮”(扫描二维码或NFC)。"
let messageFive3 = "3.从“潮汐”中取出卫生巾。"
let messageFive4 = "4.稍后在App上支付或在App上参加活动“支付”。"

// Access elements by ID and change their css in javascript using the variables
// change the font color of nav
let navLinks = document.querySelectorAll(".nav-overlay a");
navLinks.forEach(function(link) {
    link.style.color = fontColor;
});
// change the font color of overview-text
document.querySelector("#TIDE-overview .overview-text").style.color = fontColor;
// change the font size of slogan
document.querySelector("#slogan1").style.fontSize = sloganFontSize;
// change the font size of overview-text
document.querySelector("#TIDE-overview .overview-text").style.fontSize = textFontSize;
// change the padding of Using Scenario
document.querySelector("#Using-scenario .US1-4").style.padding = imagePadding;


// Access elements by CLASS and change their css in javascript using the variables
// change the font size of all titles
document.querySelectorAll(".product-title, .US-title, .app-title").forEach(element => {
    element.style.fontSize = titleFontSize;
});
// change the font size of all descriptions
document.querySelectorAll(".product-description, .app-description").forEach(element => {
    element.style.fontSize = textFontSize;
});
// change the font color of all descriptions
fontColor = "#BB7B71";
document.querySelectorAll(".product-description, .app-description").forEach(element => {
    element.style.color = fontColor;
});
// change the padding of all product images
document.querySelectorAll(".product-image1, .product-image2").forEach(element => {
    element.style.padding = imagePadding;
});
// change the background color
document.body.style.backgroundColor = backgroundColor;
document.querySelectorAll("#TIDE-overview, #TIDE-Product, #Using-scenario, #TIDE-APP").forEach(element => {
    element.style.backgroundColor = backgroundColor;
});


// Access elements by ID and change their innerHTML in javascript using the variables
// Access elements by CLASS and change their innerHTML using the variables
// Add 5 clickable functions
// ！！！
// Switch the Language to Chinese
let isChinese = false; 

document.addEventListener('DOMContentLoaded', function() {
    const languageIcon = document.querySelector('.language-icon');
    languageIcon.addEventListener('click', function() {
        if (!isChinese) {
            var image1 = document.querySelector('.product-image1');
            image1.src = 'images/Product1 Chinese.png';
            
            document.querySelector("#TIDE-overview .a-about").innerHTML = messageNav0;
            document.querySelector("#TIDE-overview .a-product").innerHTML = messageNav1;
            document.querySelector("#TIDE-overview .a-app").innerHTML = messageNav2;

            document.querySelector("#TIDE-overview .overview-text").innerHTML = messageOne;
            document.querySelector("#slogan1").innerHTML = messageTwo;
            document.querySelector("#TIDE-APP .overlay7").innerHTML = messageTwo;

            document.querySelector("#TIDE-Product .product-title").innerHTML = messageThree0;
            document.querySelector("#TIDE-Product .product-description").innerHTML = messageThree;
            document.querySelector("#TIDE-Product .I-text").innerHTML = messageThree1;
            document.querySelector("#TIDE-Product .II-text").innerHTML = messageThree2;
            document.querySelector("#TIDE-Product .III-text").innerHTML = messageThree3;

            document.querySelector("#TIDE-APP .app-title").innerHTML = messageFour0;
            document.querySelector("#TIDE-APP .app-description").innerHTML = messageFour;

            document.querySelector("#Using-scenario .US-title").innerHTML = messageFive0;
            document.querySelector("#Using-scenario .step1").innerHTML = messageFive1;
            document.querySelector("#Using-scenario .step2").innerHTML = messageFive2;
            document.querySelector("#Using-scenario .step3").innerHTML = messageFive3;
            document.querySelector("#Using-scenario .step4").innerHTML = messageFive4;

            isChinese = true;
        } else {
            location.reload();
        }
    });
});
// document.addEventListener('keydown', function(event) {
//     if(event.key === 'l' || event.key === 'L') {
//         var image1 = document.querySelector('.product-image1');
//         image1.src = 'images/Product1 Chinese.png';
//         if (!isChinese) {
//         document.querySelector("#TIDE-overview .a-about").innerHTML = messageNav0;
//         document.querySelector("#TIDE-overview .a-product").innerHTML = messageNav1;
//         document.querySelector("#TIDE-overview .a-app").innerHTML = messageNav2;

//         document.querySelector("#TIDE-overview .overview-text").innerHTML = messageOne;
//         document.querySelector("#slogan1").innerHTML = messageTwo;
//         document.querySelector("#TIDE-APP .overlay7").innerHTML = messageTwo;

//         document.querySelector("#TIDE-Product .product-title").innerHTML = messageThree0;
//         document.querySelector("#TIDE-Product .product-description").innerHTML = messageThree;
//         document.querySelector("#TIDE-Product .I-text").innerHTML = messageThree1;
//         document.querySelector("#TIDE-Product .II-text").innerHTML = messageThree2;
//         document.querySelector("#TIDE-Product .III-text").innerHTML = messageThree3;
//         document.querySelector("#TIDE-APP .app-title").innerHTML = messageFour0;
//         document.querySelector("#TIDE-APP .app-description").innerHTML = messageFour;

//         document.querySelector("#Using-scenario .US-title").innerHTML = messageFive0;
//         document.querySelector("#Using-scenario .step1").innerHTML = messageFive1;
//         document.querySelector("#Using-scenario .step2").innerHTML = messageFive2;
//         document.querySelector("#Using-scenario .step3").innerHTML = messageFive3;
//         document.querySelector("#Using-scenario .step4").innerHTML = messageFive4;

//         isChinese = true;
//         } else {location.reload();}
//     }
// });


// const colors = ["#FFFBF6", "#FFF2E3", "#FFF3F3", "#FFE4E4"];
// let currentColorIndex = 0;
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'c' || event.key === 'C') { 
//         const currentColor = colors[currentColorIndex];
//         document.body.style.backgroundColor = currentColor;
//         document.querySelectorAll("#TIDE-overview, #TIDE-Product, #Using-scenario, #TIDE-APP").forEach(element => {
//         element.style.backgroundColor = currentColor;
//     });
//     currentColorIndex = (currentColorIndex + 1) % colors.length;}
// });


// Click icon to change the palette
document.addEventListener('DOMContentLoaded', function() {
    const colors = ["#FFFBF6", "#FFF2E3", "#FFF3F3", "#FFE4E4"];
    let currentColorIndex = 0;
    const paletteIcon = document.querySelector(".palette-icon");
    paletteIcon.addEventListener('click', function() {
        const currentColor = colors[currentColorIndex];
        document.body.style.backgroundColor = currentColor;
        document.querySelectorAll("#TIDE-overview, #TIDE-Product, #Using-scenario, #TIDE-APP").forEach(element => {
            element.style.backgroundColor = currentColor;
        });
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Click the title to show/hide the overview description
    let isTextVisible = false;
    document.getElementsByClassName("title-image")[0].addEventListener("click", function() {
        let texts = document.getElementsByClassName("overview-text");
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.opacity = isTextVisible ? 0 : 1;
        }
        //isTextVisible = !isTextVisible;
    });

    // Click KeyN/M to scale the slogan
    let dynamicText = document.getElementById("slogan1");
    let fontSize = 28; 
    document.addEventListener('keydown', function(event) {
        if (event.code === "KeyM") {
            if (fontSize < 43) {
                fontSize++;
                dynamicText.style.fontSize = fontSize + 'px';
            }
        } else if (event.code === "KeyN") {
            if (fontSize > 14) { 
                fontSize--;
                dynamicText.style.fontSize = fontSize + 'px';
            }
        }
    });

    // Click US title to show show/hide 4 steps
    let isUSTextVisible = false;
    document.getElementsByClassName("US-title")[0].addEventListener("click", function() {
        let texts = document.getElementsByClassName("US-text-overlay");
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.opacity = isUSTextVisible ? 0 : 1;
        }
        //isUSTextVisible = !isUSTextVisible;
    });

    // Click mockup to see more mockups
    const images = ['images/Mock up1.png', 'images/Mock up4.png','images/Mock up5.png'];
    let currentIndex = 0;
    const mockUp1 = document.querySelector('.mock-up1');
    mockUp1.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        this.src = images[currentIndex];
    });
});

