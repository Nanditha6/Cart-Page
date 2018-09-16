import React from 'react';

class ShowAddress extends React.Component {
  render() {
    return (
    <div className="address_box fleft">
        <div className="address_name"> {this.props.fname} {this.props.lname} </div>
        <div> {this.props.addrs} </div>
        <div> {this.props.addrs2} </div>
        <div> {this.props.city},{this.props.state} {this.props.zcode} </div>
    </div>
    );
  }
}

export default ShowAddress;
