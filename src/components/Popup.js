import React from "react";
import Popup from "reactjs-popup";

class PopUp extends React.Component {
  render() {
    return (
        <Popup trigger={this.props.trigger} modal>
            {close => (
            <div className="modal">
                <a className="close popup_close" onClick={close} id="close">
                <img src="images/cross.png" alt="close button"/>
                </a>
                <div className="popup_inner">
                    {this.props.content}
                </div>
            </div>
            )}
        </Popup>
    );
  }
};


export default PopUp;