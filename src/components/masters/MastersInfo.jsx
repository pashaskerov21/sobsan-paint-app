import React from 'react'
import banner_1 from '../../image/masters/banner-1.jpg'
import banner_2 from '../../image/masters/banner-2.jpg'
import Slider from 'react-slick'
import TextTranslate from '../../translate/TextTranslate';

function MastersInfo() {
    const bannerImages = [banner_1, banner_2];
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    };
    return (
        <div className='master-info'>
            <Slider {...settings} className='pb-3'>
                {
                    bannerImages.map((image, index) => (
                        <div className="banner-slide" key={index}>
                            <img src={image} alt="banner" />
                        </div>
                    ))
                }
            </Slider>
            <div className="content">
                <h4 className="title"><TextTranslate text='Sobsan ustalar birliyi'/></h4>
                <div className="text">
                    <TextTranslate text='Sobsan Ustalar Birliyi boya və kafel-metlax sahəsində öz işləri ilə seçilən və daim özünü təkmilləşdirməyə çalışan ustaların inkişaf platformasıdır. Məqsədimiz - bütün boya və kafel-metlax ustalarını birliyə cəlb edərək praktiki təlimlərlə onların bacarıqlarını daha da inkişaf etdirmək və sahələri üzrə ən son yeniliklərdən xəbərdar etməkdir. Boya və kafel-metlax yapışdırıcılarından istifadə edən hər bir usta Sobsan Ustalar Birliyinə üzv ola bilər. Birliyə üzv olan ustalar il ərzində təşkil olunan təlim və seminarlarda iştirak edərək ixtisaslaşmış mütəxəssislərdən bu peşənin sirlərinə dair bütün incəlikləri öyrənə bilərlər. Həmçinin platforma üzərindən təcrübə, bilik və bacarıqlarını həmkarları ilə paylaşa bilər, maraqlı müzakirə və söhbətlərə qatıla bilərlər. Platforma sözün əsl mənasında həm öyrədir, həm də qazandırır.'/>
                </div>
            </div>
        </div>
    )
}

export default MastersInfo
