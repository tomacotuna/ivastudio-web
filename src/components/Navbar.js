import React from 'react'
import { Link } from 'react-router'
import './Navbar.sass'

import MdMenu from 'react-icons/lib/md/menu'

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)

    this.state = { visible: true }
  }

  onMenuClick () {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    let menuClass = this.state.visible ? 'navbar-bottom active' : 'navbar-bottom'

    return (
      <div className='navbar'>
        <div className='navbar-top' />
        <div className='navbar-middle'>
          <div className='navbar-logo' />
          <MdMenu className='navbar-hamburger' onClick={() => this.onMenuClick()} />
        </div>
        <div className={menuClass}>
          <div className='navbar-menu'>
            <Link to='home' className='navbar-item' activeClassName='selected' onClick={() => this.onMenuClick()}> Jewellery </Link>
            <Link to='design' className='navbar-item' activeClassName='selected' onClick={() => this.onMenuClick()}> Design </Link>
            <Link to='about' className='navbar-item' activeClassName='selected' onClick={() => this.onMenuClick()}> About me </Link>
            <Link to='contact' className='navbar-item' activeClassName='selected' onClick={() => this.onMenuClick()}> Contact </Link>
          </div>
        </div>
      </div>
    )
  }
}
