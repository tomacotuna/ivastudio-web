import React, { Component } from 'react'
import './ItemSection.sass'

export default class ItemSection extends Component {
  render () {
    return (
      <div className='item-section-container'>
        <div className='item-section-image'>
            <img
            src={this.props.src}
            alt=''
            className='product-image'
          />
        </div>
        <div className='item-section-details'>
          <div className='product-details'>
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}
