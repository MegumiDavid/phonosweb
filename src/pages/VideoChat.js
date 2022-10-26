import React from 'react'

import '../style/Dashboard.scss'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function VideoChat() {
  return (
    <div class="gridWrapper">
        <Sidebar />
        <main class="thisgame">
          <Topbar text={'Video '} hlightedText={'Chamadas'}/>
        </main>
    </div>
  )
}

export default VideoChat