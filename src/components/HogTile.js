import React from 'react';


class HogTile extends React.Component {
    constructor (){
        super()
        this.state={
            showDetails: false
        }
    }

    toggleDetails= () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
        console.log(this.state)
    }

    renderDetails = () => {
        const {name, speciality, weight, ['highest medal achieved'] : medal} = this.props.hogs

        return (
            <div>
                <p>{speciality}</p>
                <p>{medal}</p>
                <p>{weight}</p>
            </div>
        )
    }


    render(){
        const {name} = this.props.hogs
        const pigName= name.toLowerCase().split(' ').join('_')

        const styles = { margin: 'auto' }
        let pigImage = require(`../hog-imgs/${pigName}.jpg`)

        return(
            <div className='ui card pigTile'>
                <img src={pigImage} style={styles} height={'100px'} width={'100px'} alt='pig' />
                <p>{name}</p>
                {this.state.showDetails ? this.renderDetails() : null}
                <button onClick={this.toggleDetails}>See Details</button>

            </div>
        )
    }
}

export default HogTile
