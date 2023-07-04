import React, { useEffect, useState } from 'react'
import { galleryPhotos, galleryVideos } from '../../data/Gallery';
import TextTranslate from '../../translate/TextTranslate';
import loader from '../../image/loader.svg'
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

function GalleryContainer() {
    const [galleryItems, setGalleryItems] = useState([]);
    const [galleryStatus, setGalleryStatus] = useState('foto');

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [])

    useEffect(() => {
        let photos = galleryPhotos.slice()
        let videos = galleryVideos.slice()
        if (galleryStatus === 'video') {
            setGalleryItems([...videos])
        } else {
            setGalleryItems([...photos])
        }
    }, [galleryStatus])
    const handleGalleryButton = (value) => {
        setGalleryStatus(value)
        if(loading === false){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 300)
        }
    }
    return (
        <>
            {
                galleryItems.length > 0 ? (
                    <div className='gallery-container'>
                        <div className="row">
                            <div className="col-12">
                                <div className="gallery-buttons">
                                    <button className={galleryStatus === 'foto' ? 'active' : ''} onClick={() => handleGalleryButton('foto')}><TextTranslate text='Şəkillər' /></button>
                                    <button className={galleryStatus === 'video' ? 'active' : ''} onClick={() => handleGalleryButton('video')}><TextTranslate text='Videolar' /></button>
                                </div>
                                <div className="col-12 p-0">
                                    <div className="row">
                                        {
                                            galleryItems.map((item, index) => (
                                                <div className="col-12 col-md-6 col-lg-4" key={index}>
                                                    {
                                                        loading ? (
                                                            <img src={loader} alt="loader" />
                                                        ) : (
                                                            <div className={`gallery-item ${galleryStatus}`}>
                                                                <img src={item} alt="gallery" />
                                                                <a data-fancybox='gallery' href={item}>
                                                                    <i className={`fa-solid ${galleryStatus === 'foto' ? 'fa-magnifying-glass' : 'fa-play'}`}></i>
                                                                </a>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default GalleryContainer
