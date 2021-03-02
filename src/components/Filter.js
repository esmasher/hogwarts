import React from 'react';

class Filter extends React.Component{
    render(){
        return(
            <div className='filterWrapper'>
        <div className='ui menu'>


          <div className='item'>
            <label>Greased Pigs Only?</label>
          </div>
          <div className='item'>
            <input
              className='ui toggle checkbox'
              onChange={this.props.handleGreased}
              type='checkbox'
            />
          </div>
        </div>
      </div>
        )
    }
}

export default Filter;
