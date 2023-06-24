import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo.svg'
import SocialMedia from '../SocialMedia'
import { useSelector } from 'react-redux'
import { productCategories } from '../../data/ProductData'

function Footer() {
  const language = useSelector(state => state.language.language)
  const text = require(`../../lang/${language}.json`);
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-12 col-xl-2">
              <div className="logo-col">
                <Link className='logo' to='/'><img src={logo} alt="logo" /></Link>
                <SocialMedia />
              </div>
            </div>
            <div className="col-12 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-links">
                    <h4 className='title'>{text['menu']}</h4>
                    <Link to='/about-us'>{text['about-us']}</Link>
                    <Link to='catalogs'>{text['catalogs']}</Link>
                    <Link to='/media/actions'>{text['actions']}</Link>
                    <Link to='/media/news'>{text['news']}</Link>
                    <Link to='/media/gallery'>{text['gallery']}</Link>
                    <Link to='/payment-and-delivery'>{text['payment-and-delivery']}</Link>
                    <Link to='/warranty-conditions'>{text['warranty-conditions']}</Link>
                    <Link to='/contact-us'>{text['contact-us']}</Link>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-links">
                    <h4 className="title">{text['categories']}</h4>
                    {
                      productCategories.map(category => (
                        <Link key={category.id} to={`/${category.path}`}>{text[`${category.name}`]}</Link>
                      ))
                    }
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-links">
                    <h4 className="title">{text['addresses']}</h4>
                    <Link>{text['head-office']}</Link>
                    <Link>{text['factory-address']}</Link>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-links">
                    <h4 className="title">{text['useful-links']}</h4>
                    <Link>{text['faq']}</Link>
                    <Link>{text['career']}</Link>
                    <Link>{text['service-network']}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left">
            <div>{text['all-rights-reserved']}</div>
            <div>{text['powered-by']}: <a target='_blank' rel="noreferrer" href="https://alipashaskerov.netlify.app/">Pasha</a></div>
          </div>
          <div className="right">
            <div><Link>(+994 12) 404 45 45</Link> / <Link>*4545</Link></div>
            <div><Link>sobsan@sobsan.com</Link></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
