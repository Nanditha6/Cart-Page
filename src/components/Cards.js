import React from "react";
import PopUp from "./Popup";
import CardForm from "./CardForm";

class Cards extends React.Component {
  constructor(){
    super();
  }
  render() {
    const cards = this.props.showCards()
    return (
      <div>
        ADD CARD:
        <div>{cards}</div>
        <PopUp trigger={<div className="address_box fleft add_button"> + </div>} content={<CardForm saveCard={this.props.saveCard}/>}/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Cards;