import React from 'react'
import Slider from 'react-slick'
import TextTranslate from '../../translate/TextTranslate'
import { Link } from 'react-router-dom'
import add_1 from '../../image/banner/banner-add-1.png'
import add_2 from '../../image/banner/banner-add-2.png'
import TiltComponent from './TiltComponent'

function BannerAddSection() {

    const addContent = [
        {
            id: 1,
            title: 'La Kreos',
            img: add_1,
            text: 'Daxili divar və tavanlarda istifadə üçün hazırlanmış təbii tərkibli, qumaş effektli dekorativ boyadır. Müasir interyer üçün əvəzsiz məhsuldur. Toxunma qumaşların klassikdən modernə doğru estetik görüntüsünü özündə əks etdirir.'
        },
        {
            id: 2,
            title: 'Crystal Boya',
            img: add_2,
            text: 'Tərkibindəki metallik piqmentlər və xüsusi qatqılar sayəsində istifadə olunduğu səthdə olduqca gözoxşayan, zərif və dekorativ görünüş yaradır. Eyni zamanda səthdəki xırda qüsurları ustalıqla örtür. Parlaqlığını və rəngini uzun müddət qoruyur.'
        },

    ]

    var settings = {
        dots: true,
        appendDots: (dots) => (
            <ul>
                {dots.slice(0, 8)}
            </ul>
        ),
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    };



    return (
        <section className="banner-add-section">
            <div className="container">
                <div className="add-container">
                    <div className="top">
                        <Slider {...settings} className='add-banner-slider'>
                            {
                                addContent.map(item => (
                                    <div className="add-slider" key={item.id}>
                                        <div className="row">
                                            <div className="col-12 col-lg-6">
                                                <div className="content">
                                                    <h3 className="title"><TextTranslate text={item.title} /></h3>
                                                    <div className="text">
                                                        <p>
                                                            <TextTranslate text={item.text} />
                                                        </p>
                                                    </div>
                                                    <Link>
                                                        <span><TextTranslate text='Sifariş et' /></span>
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <TiltComponent>
                                                    <div className="add-image">
                                                        <img src={item.img} alt="banner" />
                                                    </div>
                                                </TiltComponent>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="bottom">
                        <div className="row">
                            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                <div className="text">
                                    <TextTranslate text='Peşəkar bir məsləhətçinin məsləhətinə ehtiyacınız var?' />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="right">
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <span>(+994 12) 404 45 45</span>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fa-solid fa-question"></i>
                                        </div>
                                        <span><TextTranslate text='Bizə yazın' /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerAddSection
