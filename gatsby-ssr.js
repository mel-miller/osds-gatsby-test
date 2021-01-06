import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://assets.osu.edu/osds/develop/js/osds.min.js"
      src="https://assets.osu.edu/osds/develop/js/osds.min.js"
    />
  ])
}
