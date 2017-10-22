import React, { Component } from 'react'
import { Link } from 'react-router'
import './ColectionItem.sass'

export default class ColectionItem extends Component {
  render () {
    return (
      <Link to={`/home/${this.props.year}/${this.props.item.id}`}>
        <div className='collection-item-container'>
          <img
            src={this.props.item.thumbnail}
            alt=''
            className='collection-item-thumbnail'
          />
          <div className='collection-item-details'>
            {this.props.item.name}
            <div className='materials'>
              {this.props.item.materials}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
