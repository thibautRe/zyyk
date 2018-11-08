import React, { ReactNode } from 'react'
import { css } from 'emotion'

const container = css`
  overflow: scroll;
  height: 500px;
  width: 600px;
`

const wrapper = css`
  display: flex;
  width: 3000px;
`

interface propTypes {
  children: ReactNode
}

const PianoWrapper = (p: propTypes) => (
  <div className={container}>
    <div className={wrapper}>{p.children}</div>
  </div>
)

export default PianoWrapper
