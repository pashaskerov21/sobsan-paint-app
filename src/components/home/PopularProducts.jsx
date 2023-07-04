import React from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { productsArr } from '../../data/ProductData'
import Slider from 'react-slick'
import ProductCard from '../product/ProductCard';

function PopularProducts() {
    const popularProducts = productsArr.filter((product) => product.price > 25);
    var settings = {
        dots: true,
        appendDots: (dots) => (
            <ul>
                {dots.slice(0, 8)}
            </ul>
        ),
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
  return (
    <section className="popular-products-section">
        <div className="container">
            <h2 className="section-title mb-3">
                <TextTranslate text='Popular məhsullar'/>
            </h2>
            <Slider {...settings}>
                {
                    popularProducts.map((product) => (
                        <div className="product-slide" key={product.id}>
                            <ProductCard product={product}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </section>
  )
}

export default PopularProducts
