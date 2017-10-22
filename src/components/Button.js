import React, { Component } from 'react'
import './Button.sass'

export default class Button extends Component {
  constructor (props) {
    super(props)
    this.state = { isHovered: true }
  }

  toggleHover () {
    this.setState({ isHovered: !this.state.isHovered })
  }

  render () {
    let buttonStyle = this.state.isHovered
    ? {
      width: this.props.width,
      border: `2px solid ${this.props.background}`,
      color: this.props.backgroud
    }
    : {
      width: this.props.width,
      border: `2px solid ${this.props.background}`,
      background: this.props.background,
      color: this.props.color,
      fontWeight: '800'
    }
    return (
      <div
        className='button'
        style={buttonStyle}
        onMouseEnter={() => this.toggleHover()}
        onMouseLeave={() => this.toggleHover()}
            >
        {this.props.title}
      </div>
    )
  }
}
