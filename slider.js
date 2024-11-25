const testimonial = new Swiper(".testimonial-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSldes:true,
    loop: true,
    autoHeight:true,
    autoplay: {
        delay: 5000,
      },
    navigation: {
        nextEl: '.tslide-next',
        prevEl: '.tslide-prev',
      },
      pagination: {
        el: '.tslide-pagination',
        type: 'bullets',
        renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet"></span>`;
          },
      },
      breakpoints: {
      640: {
        slidesPerView: "auto",
    spaceBetween: 30,
      },

      249: {
        slidesPerView: 1,
    spaceBetween: 30,
    centeredSldes:false,
      }
    }
    
})
