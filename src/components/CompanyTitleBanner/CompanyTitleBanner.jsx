import './CompanyTitleBanner.scss'
import mobileImage from '@/assets/images/ban-section/companyMobileBannerImage.png';
import desktopImage from '@/assets/images/ban-section/companyBannerImage.png';

const CompanyTitleBanner = () => {

    return (
        <section
            className='company-present'
            aria-labelledby='company-title'
        >
            <div className='company-present__inner container'>
              <div className='company-present__banner'>
                  <h1 className="main-title">Раковарня <span>Красный панцирь</span></h1>
                  <picture>
                    <source srcSet={mobileImage} media="(max-width: 768px)"/>

                    <img src={desktopImage} loading="lazy" alt="Изображение блока баннера названия компании" className="company-title-banner__image"/>
                  </picture>
              </div>
            </div>
        </section>
    )
}

export default CompanyTitleBanner