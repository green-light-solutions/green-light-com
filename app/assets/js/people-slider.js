import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const options = {
  mobileFirst: true,
  infinite: false,
  variableWidth: true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1249,
      settings: {
        variableWidth: true,
        slidesToScroll: 2,
      },
    },
  ],
};

$('#peopleSlider')
  .slick(options);
