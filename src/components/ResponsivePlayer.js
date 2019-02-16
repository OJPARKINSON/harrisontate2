import React from 'react'
import ReactPlayer from 'react-player'
import "../components/layout.css"

class ResponsivePlayer extends React.Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            preload='true'
            playing='true'
            muted
            controls={true}
            autoplay
            url={require('../images/Flare2.mp4')}
            width='100%'
            height='100%'
            />
        </div>
        )
    }
}
export default ResponsivePlayer