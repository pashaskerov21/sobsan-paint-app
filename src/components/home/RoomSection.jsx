import React from 'react'
import TextTranslate from '../../translate/TextTranslate'
import room_1 from '../../image/room/img-1.jpg'
import room_2 from '../../image/room/img-2.png'
import room_3 from '../../image/room/img-3.jpg'
import room_4 from '../../image/room/img-4.jpg'
import room_5 from '../../image/room/img-5.jpg'
import room_6 from '../../image/room/img-6.jpg'

function RoomSection() {
    return (
        <section className="room-section">
            <div className="container">
                <h2 className="section-title mb-3">
                    <TextTranslate text='Daxili rəngləndirmə təklifi' />
                </h2>
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-6">
                        <div className="room-item">
                            <div className="image">
                                <img src={room_1} alt="room" />
                            </div>
                            <div className="heading">
                                <span className="subtitle"><TextTranslate text='Daxili rəngləndirmə təklifləri' /></span>
                                <span className="title"><TextTranslate text='Qonaq otağı' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="room-item">
                            <div className="image">
                                <img src={room_2} alt="room" />
                            </div>
                            <div className="heading">
                                <span className="subtitle"><TextTranslate text='Daxili rəngləndirmə təklifləri' /></span>
                                <span className="title"><TextTranslate text='Hamam otağı' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="room-item">
                            <div className="image">
                                <img src={room_3} alt="room" />
                            </div>
                            <div className="heading">
                                <span className="subtitle"><TextTranslate text='Daxili rəngləndirmə təklifləri' /></span>
                                <span className="title"><TextTranslate text='Yataq otağı' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="room-item">
                            <div className="image">
                                <img src={room_4} alt="room" />
                            </div>
                            <div className="heading">
                                <span className="subtitle"><TextTranslate text='Daxili rəngləndirmə təklifləri' /></span>
                                <span className="title"><TextTranslate text='Uşaq otağı' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="room-item">
                            <div className="image">
                                <img src={room_5} alt="room" />
                            </div>
                            <div className="heading">
                                <span className="subtitle"><TextTranslate text='Daxili rəngləndirmə təklifləri' /></span>
                                <span className="title"><TextTranslate text='Dəhliz otağı' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-6">
                        <div className="room-item">
                            <div className="image">
                                <img src={room_6} alt="room" />
                            </div>
                            <div className="heading">
                                <span className="subtitle"><TextTranslate text='Daxili rəngləndirmə təklifləri' /></span>
                                <span className="title"><TextTranslate text='Mətbəx otağı' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomSection
