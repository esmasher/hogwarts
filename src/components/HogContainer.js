import React from 'react';
import HogTile from './HogTile.js'

class HogContainer extends React.Component {

    render() {
        return(
            <div className='ui three cards'>
                {this.props.hogs.map(hogObj => {
               return <HogTile hogs={hogObj} key={hogObj.name}/> })}
            </div>
        )
    }
}

export default HogContainer
