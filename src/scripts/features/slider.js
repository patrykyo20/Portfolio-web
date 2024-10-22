import { getElement } from "../extensions/getElements.js";

export function slider(section, left, right, signals) {
  const slider = getElement(section);
  const leftArrow = getElement(left);
  const rightArrow = getElement(right);
  const sliderSignals = getElement(signals);
  const slides = Array.from(slider.children);

  const gap = 804;

  let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0;

  const slideWidth = slides[0].getBoundingClientRect().width;

  slides.forEach((slide, index) => {
    const slideImage = slide.querySelector("img");
    slideImage.dragStart((e) => e.preventDefault());

    slide.touchStart(handleTouchStart(index));
    slide.touchEnd(handleTouchEnd);
    slide.touchMove(handleTouchMove);

    slide.mouseDown(handleTouchStart(index));
    slide.mouseUp(handleTouchEnd);
    slide.mouseLeave(handleTouchEnd);
    slide.mouseMove(handleTouchMove);
  });

  if (leftArrow && rightArrow) {
    leftArrow.onClick(() => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        setPositionByIndex();
      }
    });

    rightArrow.onClick(() => {
      if (currentIndex < slides.length - 1) {
        currentIndex += 1;
        setPositionByIndex();
      }
    });
  }

  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  function handleTouchStart(index) {
    return function (event) {
      currentIndex = index;
      startPos = getPositionX(event);
      isDragging = true;

      animationID = requestAnimationFrame(animation);
      slider.classAdd("grabbing");
    };
  }

  function updateSignals() {
    const signals = Array.from(sliderSignals.children);
    const signalsArray = signals.slice(1, signals.length - 1);
    signalsArray.forEach((signal, index) => {
      if (currentIndex === index) {
        signal.classAdd("signals__item--active");
      } else {
        signal.classRemove("signals__item--active");
      }
    });
  }

  function handleTouchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex();
    slider.classRemove("grabbing");
  }

  function handleTouchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  }

  function getPositionX(event) {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex() {
    currentTranslate = currentIndex * -(slideWidth + gap);
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateSignals();
  }

  updateSignals()
}
