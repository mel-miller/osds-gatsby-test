import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="https://assets.osu.edu/osds/v0.x/js/osds.min.js"
    />
  ])
}
