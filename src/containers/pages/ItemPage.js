import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemSection from '../../components/ItemSection'
import './ItemPage.sass'

class ItemPage extends Component {
  constructor (props) {
    super(props)

    this.state = { item: {} }
  }

  componentWillMount () {
    let item = this.renderItem(this.props.params.year, this.props.params.id)
    this.setState({item})
  }

  renderItem (year, id) {
    return this.props.collections.filter((collection) => {
      if (parseInt(year) === collection.year) {
        return true
      }
    })[0].items.filter((item) => {
      if (parseInt(id) === item.id) {
        return true
      }
    })[0]
  }

  renderSections () {
    return this.state.item.images.map((image, i) => {
      switch (i) {
        case 0:
          return <ItemSection src={image} text={this.state.item.author} />
        case 1:
          return <ItemSection src={image} text={this.state.item.materials} />
        case 2:
          return <ItemSection src={image} text={this.state.item.description} />
        default:
          return <ItemSection text={this.state.item.description} />
      }
    })
  }

  render () {
    console.log(this.state.item)
    return (
      <div className='item-page'>
        <div className='item-headline'> {this.state.item.name} </div>
        {/* <ItemSection src={this.state.item.images[0]} text={this.state.item.author} />
        <ItemSection src={this.state.item.images[1]} text={this.state.item.materials} />
        <ItemSection src={this.state.item.images[2]} text={this.state.item.description} /> */}
        <div style={{marginBottom: '0px'}}>
          {this.renderSections()}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    collections: state.collections
  }
}

export default connect(mapStateToProps)(ItemPage)
