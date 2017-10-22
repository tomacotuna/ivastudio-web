import React, { Component } from 'react'
import './ContactPage.sass'

class Contact extends Component {
  render () {
    return (
      <div>
        <div className='background'>
          <div className='background-image' />
        </div>
        <div className='contact-page'>
          <div className='contact-title'>Contact</div>
          <div className='contact-container'>
            <div className='contact-row'>
              <i className='fa fa-envelope contact-icon' aria-hidden='true'></i>
              <a className='contact-text' href='#'>
                maria_cotuna@yahoo.com
              </a>
            </div>
            <div className='contact-row'>
              <i className='fa fa-phone contact-icon' aria-hidden='true'></i>
              <a className='contact-text' href='#'>
                +44 07510906171
              </a>
            </div>
            <div className='contact-row'>
              <i className='fa fa-instagram contact-icon' aria-hidden='true'></i>
              <a href='https://www.instagram.com/mariacotuna/?hl=en' className='contact-text'>
                @maria_cotuf8c0
              </a>
            </div>
            <div className='contact-row'>
              <i className='fa fa-facebook contact-icon' aria-hidden='true'></i>
              <a href='https://www.facebook.com/maria.cotuna.7' className='contact-text'>
                @maria.cotuna
              </a>
            </div>
            <div className='contact-row'>
              <i className='fa fa-behance contact-icon' aria-hidden='true'></i>
              <a href='https://www.behance.net/maria_cotuf8c0' className='contact-text'>
                @maria_cotuf8c0
              </a>
            </div>
            {/*<div className='contact-column'>
              <i className="fa fa-envelope social-icon" aria-hidden="true"></i>
              <i className="fa fa-mobile social-icon" aria-hidden="true"></i>
              <i className="fa fa-instagram social-icon" aria-hidden="true"></i>
              <i className="fa fa-facebook social-icon" aria-hidden="true"></i>
              <i className="fa fa-behance social-icon" aria-hidden="true"></i>
            </div>

            <div className='contact-column'>
              <a className='social-link' href='#'>
                maria_cotuna@yahoo.com
              </a>
              <a className='social-link' href='#'>
                +44 07510906171
              </a>
              <a href="https://www.instagram.com/mariacotuna/?hl=en" className='social-link'>
                @maria_cotuf8c0
              </a>
              <a href='https://www.facebook.com/maria.cotuna.7' className='social-link'>
                @maria.cotuna
              </a>
              <a href="https://www.behance.net/maria_cotuf8c0" className='social-link'>
                @maria_cotuf8c0
              </a>
            </div>*/}
          </div>
          <div className='contact-footer'>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
