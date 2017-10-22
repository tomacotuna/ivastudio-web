import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import './Root.sass'

export default class Root extends Component {
  render () {
    return (
      <div className='root-container'>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
