import React from 'react';

class CardForm extends React.Component {
  render() {
    return (
        <div className="card_container">
          <form id="cardForm" method="POST">
            <div>
              <label className="addressLabel">Card Type</label>
              <select className="field" id="cardType">
                <option>Visa</option>
                <option>MasterCard</option>
                <option>Amex</option>
              </select>
            </div>
            <div>
                <label className="addressLabel">Card Number</label>
                <input type="text" className="field" name="lastName" maxLength="40" id="cardNumber"/>
            </div>
            <div className="actions">
                <input type="button" className="action_button save_button" value="SAVE" onClick={this.props.saveCard}/>
                <input type="button" className="action_button" value="CANCEL"/>
            </div>
            </form>
        </div>
    );
  }
}

export default CardForm;
