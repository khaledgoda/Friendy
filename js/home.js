// Dark Mode //

let darkMode = document.querySelector(`.dark-mode`);
let header = document.getElementById(`header`);
let dark = document.getElementById(`dark`);
let white = document.getElementById(`white`);
let main = document.getElementById(`main`);
let suggestion = document.querySelector(`.suggestions-side`);
let postColor = document.querySelectorAll(`.post-color`);

darkMode.addEventListener(`click`, () => {

    header.classList.toggle(`darkMode`);

    if (header.classList.contains(`darkMode`)) {

        dark.style.display = `none`;
        white.style.display = `block`;
        darkMode.style.border = `2px solid white`;
        main.style.backgroundColor = `#1f1f1f`;
        suggestion.style.backgroundColor = `#111929`;
        suggestion.style.color = `white`
        postColor.forEach(element => {
            element.style.backgroundColor = `#111929`;
            element.style.color = `white`;
        });

    } else {

        dark.style.display = `block`;
        white.style.display = `none`;
        darkMode.style.border = `2px solid black`;
        main.style.backgroundColor = `#f2f2f2`;
        suggestion.style.backgroundColor = `white`;
        suggestion.style.color = `black`;
        postColor.forEach(element => {
            element.style.backgroundColor = `white`;
            element.style.color = `black`;
        });

    }
});

// Publish Post //

document.addEventListener('DOMContentLoaded', function () {
    let publishButton = document.querySelector('.write-post button');
    let textarea = document.getElementById('textarea');
    let postsContainer = document.querySelector('.posts-container');

    publishButton.addEventListener('click', function () {
        let postContent = textarea.value.trim();

        if (postContent !== '') {
            let newPost = document.createElement('div');
            newPost.classList.add('post', 'post-color');

            let postHead = document.createElement('div');
            postHead.classList.add('post-head');
            newPost.appendChild(postHead);

            let postImg = document.createElement('div');
            postImg.classList.add('post-img');
            postHead.appendChild(postImg);

            let h3 = document.createElement('h3');
            h3.textContent = 'Elias Malik';
            postHead.appendChild(h3);

            let p = document.createElement('p');
            p.textContent = '@eliasmalik2024';
            postHead.appendChild(p);

            let postParagraph = document.createElement('p');
            postParagraph.classList.add('post-p');
            postParagraph.textContent = postContent;
            newPost.appendChild(postParagraph);

            let postSecondImg = document.createElement('div');
            postSecondImg.classList.add('post-secondimg');
            newPost.appendChild(postSecondImg);

            let attachDiv = document.createElement('div');
            attachDiv.classList.add('attach');
            newPost.appendChild(attachDiv);

            let iconsDiv = document.createElement('div');
            iconsDiv.classList.add('icons');
            attachDiv.appendChild(iconsDiv);

            let numbersSpan1 = document.createElement('span');
            numbersSpan1.classList.add('numbers');
            numbersSpan1.textContent = '0';
            iconsDiv.appendChild(numbersSpan1);

            let thumbsUpIcon = document.createElement('i');
            thumbsUpIcon.classList.add('fa-regular', 'fa-thumbs-up');
            iconsDiv.appendChild(thumbsUpIcon);

            let numbersSpan2 = document.createElement('span');
            numbersSpan2.classList.add('numbers');
            numbersSpan2.textContent = '0';
            iconsDiv.appendChild(numbersSpan2);

            let shareIcon = document.createElement('i');
            shareIcon.classList.add('fa-solid', 'fa-share');
            iconsDiv.appendChild(shareIcon);

            let numbersSpan3 = document.createElement('span');
            numbersSpan3.classList.add('numbers');
            numbersSpan3.textContent = '0';
            iconsDiv.appendChild(numbersSpan3);

            let messageIcon = document.createElement('i');
            messageIcon.classList.add('fa-regular', 'fa-message');
            iconsDiv.appendChild(messageIcon);

            let sendTipButton = document.createElement('button');
            sendTipButton.innerHTML = '<i class="fa-solid fa-money-bill"></i> SEND TIP';
            attachDiv.appendChild(sendTipButton);

            postsContainer.insertBefore(newPost, document.querySelector('.write-post').nextSibling);

            textarea.value = '';
        }
    });
});

// Burger Menu 

let nav = document.querySelector(`.nav-side`);
let burger = document.querySelector(`.burger`);

function myFunction(x) {

    x.classList.toggle("change");

    if (burger.classList.contains(`change`)) {
        nav.style.display = `block`;
    } else {
        nav.style.display = `none`;

    };

}