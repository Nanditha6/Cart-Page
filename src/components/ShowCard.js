import React from 'react';

class ShowAddress extends React.Component {
  render() {
    return (
    <div className="address_box fleft">
        <div className="address_name"> {this.props.cardType} </div>
        <div> {this.props.cardNumber} </div>
    </div>
    );
  }
}

export default ShowAddress;