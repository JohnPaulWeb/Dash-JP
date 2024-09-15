import React from 'react'
import { Outlet } from 'react-router-dom';
import { BaseLayoutWrap } from './BaseLayout.styles';
import SideBar from '../sideBar/SideBar';
import AppBar from '../appBar/AppBar';

const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
     <SideBar />
     <div className='main-content-wrapper'>
      <AppBar />
      <Outlet />
     </div>
    </BaseLayoutWrap>
  )
}

export default BaseLayout