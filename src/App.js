import React from "react";
import Addresses from "./components/Addresses";
import Cards from "./components/Cards";
import ShowAddress from "./components/ShowAddress";
import ShowCard from "./components/ShowCard";
import Product from "./components/Product";
import Address from "./JSON/Address.json";
import Card from "./JSON/Card.json";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      addresses : Address.shipAddress.length? Address.shipAddress : [],
      cards : Card.creditCard.length? Card.creditCard : []
    }
    this.renderAddresses = this.renderAddresses.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.pushValues = this.pushValues.bind(this);
  }

  pushValues(formSelector, stateName){
    var formData = document.querySelectorAll(formSelector), i , obj = {}, stateList = this.state[stateName];
    for(i = 0; i < formData.length; i++){
      obj[formData[i].id] = formData[i].value;
    }
    stateList.push(obj)
    this.setState({ stateName : stateList });
    document.getElementById("close").click()
    return obj;
  }

  addAddress(){
    this.pushValues("#addressForm .field", "addresses")    
  }

  addCard(){
    this.pushValues("#cardForm .field","cards")   
  }

  renderAddresses(){
    var temp = []
    this.state.addresses.map( (addressObj,key) => { temp.push(<ShowAddress key={key} fname={addressObj.firstName} lname={addressObj.lastName} addrs={addressObj.address} addrs2={addressObj.address2} city={addressObj.city} state={addressObj.state} zcode={addressObj.zipcode}/>)})
    return temp;
  }

 renderCards (){
    var temp = []
    this.state.cards.map( (cardObj,key) => { temp.push(<ShowCard key={key} cardType={cardObj.cardType} cardNumber={cardObj.cardNumber}/>)});
    return temp;
  }

  render() {
    return (
      <div>
        <Addresses showAddresses = {this.renderAddresses.bind(this)} saveAddress = {this.addAddress.bind(this)}/>
        <Cards showCards = {this.renderCards.bind(this)} saveCard = {this.addCard.bind(this)}/>
        <div className="products-container">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    );
  }
};


export default App;
