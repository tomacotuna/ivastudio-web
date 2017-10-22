import React, { Component } from 'react'
import { connect } from 'react-redux'
import './DesignPage.sass'

import Button from '../../components/Button'

// import SlideShow from 'react-image-slideshow'

class Design extends Component {
  constructor (props) {
    super(props) 
    this.state = { size: 4 }
  }

  renderSketches () {
    return this.props.sketches.map((sketch, i) => {
      if(i < this.state.size) {
        return (
          <img
            key={i}
            src={sketch}
            className='design-img'
            alt=''
          />
        )
      }
    })
  }

  onButtonClick () {
    this.setState ({ size: this.state.size + 3 })
  }

  render () {
    return (
      <div className='design-page'>
        <div className='design-title'>Sketches</div>
        <div className='design-container'>
          {this.renderSketches()}
        </div>
        <div className='design-loader'>
          {
            this.props.sketches.length >= this.state.size 
            ?
            <div onClick={() => this.onButtonClick()}>
              <Button title='Load more' width='80px' background='white' color='black' full='false' />
            </div>
            :
            <div />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    sketches: state.sketches
  }
}

export default connect(mapStateToProps)(Design)
