import React from "react"

function Accordion() {
  return (
    <div class="osds-accordion" data-allow-multiple>
    <h3 class="osds-accordion__heading">
        <button id="osds-accordion__trigger--1" class="osds-accordion__trigger" aria-controls="osds-accordion__panel--1" aria-expanded="false">
            <span class="osds-accordion__icon" aria-hidden="true"></span>
            <span class="osds-accordion__title">
                Test Title 1
            </span>
        </button>
    </h3>
    <div id="osds-accordion__panel--1" class="osds-accordion__panel" role="region" aria-labelledby="osds-accordion__trigger--1" hidden>
        I'm baby authentic mixtape franzen beard tumblr prism.
    </div>

    <h3 class="osds-accordion__heading">
        <button id="osds-accordion__trigger--2" class="osds-accordion__trigger" aria-controls="osds-accordion__panel--2" aria-expanded="false">
            <span class="osds-accordion__icon" aria-hidden="true"></span>
            <span class="osds-accordion__title">
                Test Title 2
            </span>
        </button>
    </h3>
    <div id="osds-accordion__panel--2" class="osds-accordion__panel" role="region" aria-labelledby="osds-accordion__trigger--2" hidden>
        Ennui waistcoat chicharrones hot chicken everyday carry four dollar toast.
    </div>

    <h3 class="osds-accordion__heading">
        <button id="osds-accordion__trigger--3" class="osds-accordion__trigger" aria-controls="osds-accordion__panel--3" aria-expanded="false">
            <span class="osds-accordion__icon" aria-hidden="true"></span>
            <span class="osds-accordion__title">
                Test Title 3
            </span>
        </button>
    </h3>
    <div id="osds-accordion__panel--3" class="osds-accordion__panel" role="region" aria-labelledby="osds-accordion__trigger--3" hidden>
        Activated charcoal helvetica fanny pack meh, butcher chartreuse fingerstache subway tile.
    </div>
</div>
  )
}

export default Accordion
