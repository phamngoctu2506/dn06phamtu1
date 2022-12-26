import React, { Component } from 'react'
import Card from './Card'

export default class Item extends Component {
  render() {
    return (
      <> 
      <div className="row">
        <div className="col-4  w-100">
          <Card hinhIcon="fab fa-angular" title="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
        </div>
        <div className="col-4  w-100">
          <Card hinhIcon="fa fa-cloud-download-alt" title="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
        </div>
        <div className="col-4  w-100">
          <Card hinhIcon="fa fa-address-card" title="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
        </div>
        <div className="col-4  w-100">
          <Card hinhIcon="fab fa-bootstrap" title="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
        </div>
        <div className="col-4  w-100">
          <Card hinhIcon="fa fa-code" title="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
        </div>
        <div className="col-4  w-100">
          <Card hinhIcon="fa fa-archway" title="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
        </div>
      </div>
      </>
    )
  }
}
