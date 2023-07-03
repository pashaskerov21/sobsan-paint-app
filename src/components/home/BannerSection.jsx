import React from 'react'
import banner_1 from '../../image/banner/banner-1.jpg'
import banner_2 from '../../image/banner/banner-2.jpg'
import banner_3 from '../../image/banner/banner-3.jpg'
import banner_4 from '../../image/banner/banner-4.jpg'
import banner_5 from '../../image/banner/banner-5.jpg'
import banner_6 from '../../image/banner/banner-6.jpg'
import banner_7 from '../../image/banner/banner-7.jpg'
import Slider from 'react-slick'

function BannerSection() {
    const bannerImg = [banner_1, banner_2, banner_3, banner_4, banner_5, banner_6, banner_7]
    var settings = {
        dots: true,
        appendDots: (dots) => (
            <ul>
                {dots.slice(0, 8)}
            </ul>
        ),
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    };
    return (
        <section className="banner-section">
            <Slider {...settings} className='banner-slider'>
                {
                    bannerImg.map((img, index) => (
                        <div className="banner-slide" key={index}>
                            <img src={img} alt="banner" />
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}

export default BannerSection
