import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="https://assets.osu.edu/osds/develop/js/osds.min.js"
    />
  ])
}
