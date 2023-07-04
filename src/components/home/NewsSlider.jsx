import React from 'react'
import news_1 from '../../image/news/img-1.jpg'
import news_2 from '../../image/news/img-2.png'
import news_3 from '../../image/news/img-3.jpg'
import Slider from 'react-slick'
import TextTranslate from '../../translate/TextTranslate'

function NewsSlider() {
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div className="news-slide">
                <div className="news-item">
                    <div className="image">
                        <img src={news_1} alt="news" />
                    </div>
                    <h4 className="title"><TextTranslate text='Dekorativ boya təlimi' /></h4>
                </div>
            </div>
            <div className="news-slide">
                <div className="news-item">
                    <div className="image">
                        <img src={news_2} alt="news" />
                    </div>
                    <h4 className="title"><TextTranslate text='20 Yanvar' /></h4>
                </div>
            </div>
            <div className="news-slide">
                <div className="news-item">
                    <div className="image">
                        <img src={news_3} alt="news" />
                    </div>
                    <h4 className="title"><TextTranslate text='Ustalar üçün asan qeydiyyat' /></h4>
                </div>
            </div>
        </Slider>
    )
}

export default NewsSlider
