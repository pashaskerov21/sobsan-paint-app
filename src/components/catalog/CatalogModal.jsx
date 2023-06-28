import React, { useEffect, useRef, useState } from 'react'
import TextTranslate from '../../translate/TextTranslate';
import { catalogSobmatik } from '../../data/color-catalog/Sobmatik';
import { colorCatalog } from '../../data/color-catalog/Catalog';
import { Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import "swiper/css/pagination";
import { useSelector } from 'react-redux';



function CatalogModal({ product, setSelectedModalCatalogColor }) {
    const language = useSelector(state => state.language.language);
    const text = require(`../../lang/${language}.json`);

    const [catalogName, setCatalogName] = useState('');
    useEffect(() => {
        if (product.colorStatus === 'catalog') {
            setCatalogName(product.colors)
        }
    }, [product])

    const [activeCatalog, setActiveCatalog] = useState();
    const [activeCatalogColors, setActiveCatalogColors] = useState([])

    useEffect(() => {
        let sobmatik = catalogSobmatik

        if (catalogName !== '') {
            if (catalogName === 'sobmatik') {
                setActiveCatalog(sobmatik)
                const sobmatikMergedArray = [];
                sobmatik.colors.forEach((color) => {
                    sobmatikMergedArray.push(color);
                    sobmatikMergedArray.push(...color.shades);
                });
                setActiveCatalogColors([...sobmatikMergedArray])
            } else {
                let newCatalog = colorCatalog.filter((catalog) => catalog.name === catalogName)
                setActiveCatalog(newCatalog[0])
                setActiveCatalogColors([...newCatalog[0].colors])
            }
        }
    }, [catalogName])

    // modal
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);
    const [activeColorIndex, setActiveColorIndex] = useState(0);

    //color swiper
    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          const newIndex = swiperRef.current.swiper.realIndex;
          setActiveColorIndex(newIndex);
        }
      };

    const [selectedSobmatikColor, setSelectedSobmatikColor] = useState();
    const [selectedCatalogColor, setSelectedCatalogColor] = useState();
    useEffect(() => {
        if (activeCatalogColors.length > 0) {
            setSelectedSobmatikColor(activeCatalogColors[0].hexCode)
            setSelectedCatalogColor(activeCatalogColors[0].name)
        }
    }, [activeCatalogColors])


    const handleColorButtonClick = (index) => {
        setActiveColorIndex(index);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };
    const handlePrevButton = () => {
        if (activeColorIndex !== 0) {
            setActiveColorIndex(activeColorIndex - 1)
        }
    }
    const handleNextButton = () => {
        if (activeColorIndex !== activeCatalogColors.length) {
            setActiveColorIndex(activeColorIndex + 1)
        }
    }

    useEffect(() => {
        if(activeCatalogColors.length > 0 && catalogName === 'sobmatik'){
            setSelectedSobmatikColor(activeCatalogColors[activeColorIndex].hexCode)
        }
        if(activeCatalogColors.length > 0 && catalogName !== 'sobmatik'){
            setSelectedCatalogColor(activeCatalogColors[activeColorIndex].name)
        }
    }, [activeColorIndex,activeCatalogColors])

    const catalogFormSubmit = (e) => {
        e.preventDefault();
        setShowModal(false)
        if(catalogName === 'sobmatik'){
            if(selectedSobmatikColor){
                setSelectedModalCatalogColor(selectedSobmatikColor)
            }
        }else{
            if(selectedCatalogColor){
                setSelectedModalCatalogColor(selectedCatalogColor)
            }
        }
    }
    
    

    return (
        <>
            {
                activeCatalogColors ? (
                    activeCatalogColors.length > 0 ? (
                        <>
                            <h5 className="title"><TextTranslate text='Rəngi seç' /></h5>
                            <div className='catalog-modal-button' onClick={handleModalShow}>
                                <TextTranslate text='Kataloqa bax' />
                            </div>
                            <Modal className='catalog-modal' show={showModal} onHide={handleModalClose} centered size="lg" scrollable>
                                <Modal.Body >
                                    <div className="catalog-modal-inner">
                                        <div className="close-button" onClick={handleModalClose}><i className="fa-solid fa-xmark"></i></div>
                                        <Swiper ref={swiperRef} className='color-swiper'
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            navigation={{
                                                prevEl: '.swiper-button-prev',
                                                nextEl: '.swiper-button-next'
                                            }}
                                            pagination={{
                                                type: "fraction",
                                            }}
                                            onSlideChange={handleSlideChange}
                                            modules={[Navigation, Pagination]}
                                            initialSlide={activeColorIndex}>
                                            {
                                                activeCatalogColors.map(color => (
                                                    <SwiperSlide key={color.id}>
                                                        {
                                                            catalogName === 'sobmatik' ? (
                                                                <div className="color-slide">
                                                                    <div className="color" style={{ backgroundColor: `${color.hexCode}` }}></div>
                                                                </div>
                                                            ) : (
                                                                <div className="color-slide">
                                                                    <img src={color.img} alt="color" />
                                                                </div>
                                                            )
                                                        }
                                                    </SwiperSlide>
                                                ))
                                            }
                                            <div onClick={handlePrevButton} className="swiper-button-prev"><i className="fa-solid fa-chevron-left"></i></div>
                                            <div onClick={handleNextButton} className="swiper-button-next"><i className="fa-solid fa-chevron-right"></i></div>
                                        </Swiper>
                                        <div className="catalog-name">{text[`${activeCatalog.name}`]}</div>
                                        <form onSubmit={catalogFormSubmit}>
                                            <div className="color-checkbox-wrapper">
                                                {
                                                    activeCatalogColors.map((color, index) => (
                                                        <div className="color-checkbox" onClick={() => handleColorButtonClick(index)} key={color.id}>
                                                            {
                                                                catalogName === 'sobmatik' ? (
                                                                    <>
                                                                        <input type="checkbox" value={color.hexCode} onChange={(e) => setSelectedSobmatikColor(e.target.value)} />
                                                                        <div className={`color ${selectedSobmatikColor === color.hexCode ? 'active' : null}`}>
                                                                            <span style={{ backgroundColor: `${color.hexCode}` }}></span>
                                                                        </div>
                                                                        <div className="name">
                                                                            <span><TextTranslate text={color.name} /></span>
                                                                            {
                                                                                color.code && <span>{color.code}</span>
                                                                            }
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <input type="checkbox" value={color.name} onChange={(e) => setSelectedCatalogColor(e.target.value)} />
                                                                        <div className={`color ${selectedCatalogColor === color.name ? 'active' : null}`}>
                                                                            <img src={color.img} alt="color" />
                                                                        </div>
                                                                        <div className="name">
                                                                            <span><TextTranslate text={color.name} /></span>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="note">
                                                <TextTranslate text='Qeyd: Ekrandakı kataloq rəngləri monitor, planşet, noutbuk və smartfonların ekran kalibrasiya fərqlərinə və işığın düşməsinə görə tətbiq olunacaq orijinal rənglərindən fərqli görünə bilər. Dəqiq nəticə üçün rəng kataloqumuza ən yaxın satış ünvanlarında baxa bilərsiniz. Həmçinin seçdiyiniz rəngi tətbiq edərkən, boyanın rəngi otağa təbii günəş işığının düşməsinə, istifadə etdiyiniz aydınlatma cihazlarının lampa rənginə (məs: sarı, led və s.) görə də fərqli görünə bilər.' />
                                            </div>
                                            <button className='submit-button' type='submit'><TextTranslate text='Rəngi seç' /></button>
                                        </form>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </>
                    ) : null
                ) : null
            }
        </>
    )
}

export default CatalogModal
