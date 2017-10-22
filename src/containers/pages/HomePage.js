import React, { Component } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import './HomePage.sass'

import ColectionItem from '../../components/ColectionItem'

class Home extends Component {

  renderList () {
    return this.props.collections.map((collection) => {
      return (
        <div key={collection.id} style={{marginBottom: '60px'}}>
          <div className='collection-year'> — {collection.year} — </div>
          {
            collection.items.map((item) => {
              return <ColectionItem item={item} key={item.id} year={collection.year} />
            })
          }
        </div>
      )
    })
  }

  render () {
    return (
      <div className='homepage'>
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    collections: state.collections
  }
}

export default connect(mapStateToProps)(Home)
