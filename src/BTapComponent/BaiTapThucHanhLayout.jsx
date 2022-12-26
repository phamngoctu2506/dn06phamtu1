import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default function BaiTapThucHanhLayout() {
  return (
    <>
    <Header/>
    <div className='container text-center'>
      <Body/>
    </div>
    <Footer/>
    </>
  )
}

