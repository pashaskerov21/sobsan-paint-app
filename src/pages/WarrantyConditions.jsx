import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import TextTranslate from '../translate/TextTranslate'
import image_1 from '../image/about/warranty-condition.jpg'


function WarrantyConditions() {
  return (
    <PrimarySection className='warranty-conditions' path='warranty-conditions' rootLink='Zəmanət və Geri Qaytarma Siyasəti' sectionTitle='Zəmanət və Geri Qaytarma Siyasəti'>
      <div className="text-container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="text">
              <span className="title"><TextTranslate text='Zəmanət :' /></span>
              <ul>
                <li><TextTranslate text='Məhsulların keyfiyyət və orijinallığına görə şirkət tam şəkildə məsuliyyət daşıyır.' /></li>
                <li><TextTranslate text='Boya məhsulları və quru inşaat qarışıqlarının istifadə və saxlama müddəti qablaşmanın üzərində göstərilmişdir.' /></li>
                <li><TextTranslate text='Məhsulların istifadə və saxlanma təlimatına əməl olunmadığı təqdirdə, istehsalçı şirkət ortaya çıxan qüsur və nəticələrə görə məsuliyyət daşımır !' /></li>
                <li><TextTranslate text='"Online" ödənişlərdə müştərilərin kart təhlükəsizliyi tam yerinə yetirilir və kart sahibinin məxfi  kart məlumatları heç bir şəkildə saxlanılmır.' /></li>
              </ul>
              <span className="title"><TextTranslate text='Geri qaytarma :' /></span>
              <ul>
                <li><TextTranslate text='Məhsul təhvil alındığı anda: Əgər sifariş edilən məhsul müştərini əsaslı səbəblə qane etmirsə, yəni sifarişə uyğun olmayan məhsul göndərilibsə, məhsulun qablaşmasında fiziki qüsur varsa,(açılmış,zədələnmiş və ya məhsul zərər görmüşsə) qaytarıla bilər. Bu halda  geri qaytarma aktı tərtib edilərək, tərəflər təsdiq etdikdən sonra məhsul əməkdaş vasitəsilə geri qaytarılaraq anbara təhvil verilir.' /></li>
                <li><TextTranslate text='Geri qaytarılma nağd alış-verişdə həftə içi 5 gün 09:00- 17:00 arası, “online” ödəmələr bankın müəyyən etdiyi zaman dilimində hesaba qaytarılacaq.' /></li>
                <li><TextTranslate text='Müştəri “online” ödəmə etmişsə, geri qaytarma aktı əsasında əlaqədar banka ödəmənin geri qaytarılması üçün müraciət edilir. Bankın daxili proseduruna uyğun olaraq pul müştərinin hesabına müəyyən olunmuş müddətdə geri ödənilir.' /></li>
                <li><TextTranslate text='Müştəri tərəfindən geri qaytarılacaq olan məhsullar Bakı şəhəri və regionlarda  satış menecerləri vasitəsilə  müştəri ilə  əlaqə saxlanılaraq  uyğun ünvanda təhvil alınır.' /></li>
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

export default WarrantyConditions
