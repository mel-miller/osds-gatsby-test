import React from "react"

function Button(props) {
  var classes = (function (buttonType) {
    return (buttonType ? `osds-button osds-button--${buttonType}` : "osds-button");
  })(props.buttonType);

  return (
    <button className={classes}>{props.buttonText}</button>
  )
}

export default Button
