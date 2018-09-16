import React from "react";
import PopUp from "./Popup";
import AddressForm from "./AddressForm";

class Addresses extends React.Component {
  constructor(){
    super();
  }
  render() {
    const addrs = this.props.showAddresses()
    return (
      <div>
        ADD ADDRESS:
        <div>{addrs}</div>
        <PopUp trigger={<div className="address_box fleft add_button"> + </div>} content={<AddressForm saveAddress={this.props.saveAddress}/>}/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Addresses;