import React from 'react';

class AddressForm extends React.Component {
  render() {
    return (
        <div className="container">
          <form id="addressForm" method="POST">
            <div className="fleft add_box_half_width">
              <label className="addressLabel">First Name</label>
              <input type="text" className="field" name="firstName" maxLength="40" id="firstName"/>
            </div>
            <div className="fleft add_box_half_width">
              <label className="addressLabel">Last Name</label>
              <input type="text" className="field" name="lastName" maxLength="40" id="lastName"/>
            </div>
            <div className="fleft add_box_full_width">
              <label className="addressLabel">Address</label>
              <input type="text" className="field" name="address" maxLength="40" id="address"/>
            </div>
            <div className="fleft add_box_full_width">
              <label className="addressLabel">Address 2</label>
              <input type="text" className="field" name="address2" maxLength="40" id="address2"/>
            </div>
            <div className="fleft add_box_half_width">
              <label className="addressLabel">City</label>
              <input type="text" className="field" name="city" maxLength="40" id="city"/>
            </div>
            <div className="fleft add_box_half_width">
              <div className="fleft add_box_half_width">
                <label className="addressLabel">State</label>
                <select className="field" id="select">
                  <option>Select a state</option>
                  <option>A</option>
                </select>
              </div>
              <div className="fleft add_box_half_width">
                <label className="addressLabel">Zip Code</label>
                <input type="text" className="field" name="zipcode" maxLength="40" id="zipcode"/>
              </div>
            </div>
            <div className="actions">
              <input type="button" className="action_button save_button" value="SAVE" id="save" onClick={this.props.saveAddress}/>
              <input type="button" className="action_button" value="CANCEL" id="cancel"/>
            </div>
          </form>
        </div>
    );
  }
}

export default AddressForm;
