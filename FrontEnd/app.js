const faqContentContainer = document.querySelectorAll(
    ".faq-image-row-container"
);
const bodyHeight = document.getElementsByTagName("BODY")[0];
const scrollConatiner = document.querySelector(".main-container");

faqContentContainer.forEach((item) => {
    item.addEventListener("click", (e) => {
        let faqDesc = e.target.querySelector(".hover-change");
        let faqDescText = e.target.querySelector(".faq-text");
        faqDesc.classList.toggle("faq-desc-container");
        faqDesc.classList.toggle("faq-desc-container-change");
        faqDescText.classList.toggle("faq-desc-text-change");
        faqDescText.classList.toggle("faq-desc-text-2");
    });
});

$(window).on("scroll", function () {
    $(".main-container").css("bottom", $(window).scrollTop() * -1);
});

document.body.style.height = document.body.scrollHeight + "px";

console.log(document.body.style.height);
