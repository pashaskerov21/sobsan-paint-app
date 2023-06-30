import React, { useEffect, useRef, useState } from 'react'
import TextTranslate from '../../translate/TextTranslate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import "swiper/css/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { saveCatalogColor, sendCatalogColor } from '../../redux/actions/CatalogColorAction';



function CatalogModal({ product, catalogName, activeCatalog, activeCatalogColors }) {
    const language = useSelector(state => state.language.language);
    const text = require(`../../lang/${language}.json`);



    // modal
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);



    const [selectedSobmatikColor, setSelectedSobmatikColor] = useState();
    const [selectedCatalogColor, setSelectedCatalogColor] = useState();
    useEffect(() => {
        if (activeCatalogColors.length > 0) {
            setSelectedSobmatikColor(activeCatalogColors[0].hexCode)
            setSelectedCatalogColor(activeCatalogColors[0].id)
        }
    }, [activeCatalogColors])

    //color swiper
    const swiperRef = useRef(null);
    const [activeColorIndex, setActiveColorIndex] = useState(0);

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const newIndex = swiperRef.current.swiper.realIndex;
            setActiveColorIndex(newIndex);
        }
    };
    const handleColorButtonClick = (index) => {
        setActiveColorIndex(index);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };
    const handlePrevButton = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const newIndex = swiperRef.current.swiper.realIndex;
            setActiveColorIndex(newIndex);
        }
    }
    const handleNextButton = () => {

        if (swiperRef.current && swiperRef.current.swiper) {
            const newIndex = swiperRef.current.swiper.realIndex;
            setActiveColorIndex(newIndex);
        }
    }

    useEffect(() => {
        if (activeCatalogColors.length > 0 && catalogName === 'sobmatik') {
            setSelectedSobmatikColor(activeCatalogColors[activeColorIndex].hexCode)
        }
        if (activeCatalogColors.length > 0 && catalogName !== 'sobmatik') {
            setSelectedCatalogColor(activeCatalogColors[activeColorIndex].id)
        }
    }, [activeColorIndex, activeCatalogColors, catalogName])



    const [colorSelectionStatus, setColorSelectionStatus] = useState(false);

    const dispatch = useDispatch()



    const [catalogColorActive, setCatalogColorActive] = useState()

    const catalogColor = useSelector(state => state.colorState.catalogColor)
    const [catalogColorID, setCatalogColorID] = useState()
    useEffect(() => {
        if (catalogColor) {
            setCatalogColorID(catalogColor.colorID)
        }

    }, [catalogColor])


    const handleSelecCatalogColor = async () => {
        setShowModal(false)
        setColorSelectionStatus(true)
        if (catalogName === 'sobmatik') {
            let colorObj = activeCatalogColors.filter((color) => color.hexCode === selectedSobmatikColor);
            let mainColorObj = {
                colorID: colorObj[0].id,
                name: '',
                code: '',
                catalogName: 'Sobmatik',
                hexCode: colorObj[0].hexCode,
            }
            if (colorObj[0].mainColor === undefined) {
                mainColorObj.name = colorObj[0].name;
                mainColorObj.code = colorObj[0].code;
            } else {
                mainColorObj.name = colorObj[0].mainColor;
                mainColorObj.code = colorObj[0].name;
            }
            setCatalogColorActive(mainColorObj)
            if (mainColorObj.colorID !== catalogColorID) {

                dispatch(sendCatalogColor(mainColorObj))
                dispatch(saveCatalogColor(mainColorObj))
            }

        } else {
            let colorObj = activeCatalogColors.filter((color) => color.id === selectedCatalogColor)
            let mainColorObj = {
                colorID: colorObj[0].id,
                name: colorObj[0].name,
                code: '',
                catalogName: product.colors,
                img: colorObj[0].img
            }
            setCatalogColorActive(mainColorObj)
            if (mainColorObj.colorID !== catalogColorID) {
                dispatch(sendCatalogColor(mainColorObj))
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
                            <div className="color-block">
                                <div className={`catalog-modal-button ${catalogColorActive ? 'active' : ''}`} onClick={handleModalShow}
                                    style={
                                        catalogColorActive && catalogName === 'sobmatik'
                                            ? { backgroundColor: catalogColorActive.hexCode }
                                            : catalogColorActive && catalogName !== 'sobmatik'
                                                ? { backgroundImage: `url(${catalogColorActive.img})` }
                                                : null
                                    }>
                                    <span><TextTranslate text='Kataloqa bax' /></span>
                                </div>
                                {
                                    colorSelectionStatus && catalogColorActive ? (
                                        <div className="selected-color-info">
                                            <span><TextTranslate text={catalogColorActive.name} /></span>
                                            <span>{catalogColorActive.code}</span>
                                            <span><TextTranslate text={catalogColorActive.catalogName} /></span>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div onClick={handleModalClose} className={`catalog-modal-backdrop ${showModal ? '' : 'd-none'}`}></div>
                            <div className={`catalog-modal ${showModal ? '' : 'd-none'}`}>
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
                                    <div className="catalog-name"><TextTranslate text={activeCatalog.name}/></div>
                                    <div className='catalog-modal-bottom'>
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
                                                                    <input type="checkbox" value={color.id} onChange={(e) => setSelectedCatalogColor(e.target.value)} />
                                                                    <div className={`color ${selectedCatalogColor === color.id ? 'active' : null}`}>
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
                                        <button onClick={handleSelecCatalogColor} className='submit-button' type='button'><TextTranslate text='Rəngi seç' /></button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null
                ) : null
            }
        </>
    )
}

export default CatalogModal
