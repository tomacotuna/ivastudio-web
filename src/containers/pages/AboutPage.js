import React, { Component } from 'react'
import './AboutPage.sass'

class About extends Component {
  render () {
    return (
      <div className='about-page'>
        <div className='about-text'>
          <div className='about-title'> About Me </div>
          <spam className='highlight'>Maria Cotuna</spam> is a recent graduate, with a degree in Jewellery Design from Central Saint Martins. She has an interest in all areas of design and culture, yet focuses her energy on creating fashion-art jewellery pieces. She is a designer who focuses predominantly on materials and techniques, yet who places great value on concept and storytelling. Her pieces are often informed by the every day, since the dynamics of the surrounding social structure are of great interest to her.
          She is launching herself into the creative business with eagerness for exciting projects, fruitful collaborations and promise for new and exciting opportunities.
        </div>
        <iframe 
          src="https://giphy.com/embed/127VhjHH1mlFXW" 
          frameBorder="0" 
          className="gif"
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}

export default About
