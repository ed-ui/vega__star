$(function(){

  $('.carousel-head__inner').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    /* slidesToScroll: 4, */
    fade: true,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  })

  $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    //slidesToScroll: 3,
    fade: false,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  })
  
  $('.carousel-1__inner').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    //slidesToScroll: 3,
    fade: true,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  })

  $('.carousel-2__inner').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    //slidesToScroll: 3,
    fade: true,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          //centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  })
  
  }
  
  );