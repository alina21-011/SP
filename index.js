
    let sliderPosition = 0; // начальная позиция дорожки
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItemNum = document.querySelectorAll('.slider-item').length;
    const sliderItem = document.querySelector('.slider-item');
    const sliderItemWidth = sliderItem.clientWidth;
    const sliderContainerWidth = sliderContainer.clientWidth;
    // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
    // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
    const sliderTrackWidth = sliderItemNum * sliderItemWidth - sliderContainerWidth; 
    const sliderButtonPrev = document.querySelector('.arrow-left');
    const sliderButtonNext = document.querySelector('.arrow-right');
console.log(sliderItem);
console.log(sliderTrackWidth);
    sliderButtonPrev.addEventListener('click', function(){
        sliderPosition += sliderItemWidth; // увеличиваем отступ при нажатии назад

        // поскольку отступ будет всегда отрицательный, нужно сравнивать с нулем, 
        // чтобы исключить пустые прокрутки
        if (sliderPosition > 0) {
            sliderPosition = 0;
        }
        sliderTrack.style.setProperty('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });

    sliderButtonNext.addEventListener('click', function(){
        sliderPosition -= sliderItemWidth;

        // так как отступы отрицательные, нужно сравнить с отрицательной длинной дорожки, 
        // чтобы исключить пустые прокрутки
        if (sliderPosition < -sliderTrackWidth) {
            sliderPosition = -sliderTrackWidth;
        }
        sliderTrack.style.setProperty('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });


    // скрываем кнопки prev/next, когда нельзя больше крутить
    const sliderButtons = () => {
        if (sliderPosition == 0) {
          
            sliderButtonPrev.style.display = 'none';
        } else {
            sliderButtonPrev.style.display = 'block';
        }
        if (sliderPosition == -sliderTrackWidth) {
            sliderButtonNext.style.display = 'none';
        } else {
            sliderButtonNext.style.display = 'block';
        }
    };
    sliderButtons();



