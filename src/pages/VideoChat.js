import React from 'react'

import '../style/Dashboard.scss'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function VideoChat() {
  return (
    <div className="gridWrapper">
        <Sidebar />
        <main className="thisgame">
          <Topbar text={'Video '} hlightedText={'Chamadas'}/>
        </main>
    </div>
  )
}

export default VideoChat