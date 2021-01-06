import React from "react"

function Accordion(props) {
  const Heading = props.headingLevel || "h3";
  return (
    <div className="osds-accordion">
      {props.items.map(item => (
        <React.Fragment key={item.id}>
          <Heading className="osds-accordion__heading">
            <button id={`osds-accordion__trigger--${item.id}`} className="osds-accordion__trigger" aria-controls={`osds-accordion__panel--${item.id}`} aria-expanded="false">
              <span className="osds-accordion__icon" aria-hidden="true"></span>
              <span className="osds-accordion__title">
                {item.title}
              </span>
            </button>
          </Heading>
          <div id={`osds-accordion__panel--${item.id}`} className="osds-accordion__panel" role="region" aria-labelledby={`osds-accordion__trigger--${item.id}`} hidden>
            {item.content}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Accordion
