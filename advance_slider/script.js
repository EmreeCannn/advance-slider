const scrollers = document.querySelectorAll(".scroller");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
//  eğer kullanıcı işletim sistemini animasyon istemiyorum şekilde ayarladıysa ve bunu yakalamk istersem 
// window.matchMedia("(prefers-reduced-motion: reduce)").matches ile yakalarım 

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    console.log(scrollerInner);
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
