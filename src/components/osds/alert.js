import React from "react"

function Alert(props) {
  var alertIcon = (function(alertType) {
  switch(alertType) {
    case 'info':
      return 'fas fa-info-circle';
    case 'success':
      return 'fas fa-check-circle';
    case 'warning':
      return 'fas fa-exclamation-triangle';
    case 'danger':
      return 'fas fa-times-circle';
    default:
      return 'no-icon';
    }
  })(props.alertType);

  return (
    <div className={`osds-alert osds-alert--${props.alertType}`} role="alert">
      <div className="osds-alert__icon">
        <span className={alertIcon}></span>
      </div>
      <div className="osds-alert__message">{props.alertMessage}</div>
    </div>
  )
}

export default Alert
