import React from 'react'

const Topbar = ({text, hlightedText}) => {
  return (
    <div className="topbar">
        <h1 className="h1">{text}<span className="highlight"> {hlightedText}</span> </h1>
        <div className="dsline"></div>
    </div>
  )
}

export default Topbar