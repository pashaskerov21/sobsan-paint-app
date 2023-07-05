import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import image_1 from '../image/about/payment-delivery.jpg'
import TextTranslate from '../translate/TextTranslate'

function PaymentDelivery() {
  return (
    <PrimarySection className='payment-delivery' path='payment-and-delivery' rootLink='Ödəniş və Çatdırılma' sectionTitle='Ödəniş və Çatdırılma'>
      <div className="text-container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="text">
              <span className="title"><TextTranslate text='Ödəniş üsulları :'/></span>
              <ul>
                <li><TextTranslate text='Təhvil alarkən NAĞD şəklində ödəyə bilərsiniz.'/></li>
                <li><TextTranslate text='"Online" olaraq bank  vasitəsilə;'/></li>
                <li><TextTranslate text='Təhvil nöqtəsində POS terminal vasitəsilə;'/></li>
              </ul>
              <span className="title"><TextTranslate text='Çatdırılma Qaydaları :'/></span>
              <ul>
                <li><TextTranslate text='Çatdırılma bütün ölkə daxilində həyata keçirilir.'/></li>
                <li><TextTranslate text='Sifariş olunan məhsulun və ya məhsulların ümumi dəyəri 200 AZN-dən çox olarsa, çatdırılma  pulsuz olunur. Sifariş olunan məhsul və ya məhsulların ümumi dəyəri 200 AZN-dən aşağı olduqda 10 AZN ödəniş tələb olunur.'/></li>
                <li><TextTranslate text='Bakı şəhəri üzrə sifariş olunan məhsullar 1(bir )iş günü müddətində müştərilərə çatdırılır.'/></li>
                <li><TextTranslate text='Regionlara çatdırılma 5(beş) iş günü ərzində müştərilərə çatdırılır.'/></li>
                <li><TextTranslate text='Sifarişlər fərdi yaşayış evləri istisna olmaqla, binaların girişinə qədər çatdırılır. Məhsulun  boşaldılması və ya mərtəbəyə qaldırılması çatdırılma xidmətinə daxil deyildir.'/></li>
                <li><TextTranslate text='Təhvil zamanı məhsullar fiziki qaydada həm alıcı tərəfindən yoxlanılaraq təhvil alınır, həm də əməkdaş tərəfindən yoxlanaraq təhvil verilir. Məhsulu aldığınız zaman xarici görünüşünə diqqət yetirin və heç bir texniki zədələnmə olmadığından əmin olun. Əməkdaşdan qaimə tələb edin və imzalayın.'/></li>
                <li><TextTranslate text='İstirahət və bayram günlərində sifarişlərdə gecikmələr ola bilər.'/></li>
                <li><TextTranslate text='Bəzi məhsullar sifariş əsasında hazırlandığı üçün ( anbarda hazır şəkildə stokda mövcud olmadığına görə) hazırlanıb çatdırılmasında gecikmə ola bilər.'/></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="image">
              <img src={image_1} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  )
}

export default PaymentDelivery
