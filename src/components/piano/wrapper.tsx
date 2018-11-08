import React, { ReactNode } from 'react'
import { css } from 'emotion'

interface propTypes {
  children: ReactNode
}

const PianoWrapper = (p: propTypes) => (
  <div
    className={css`
      overflow: scroll;
      height: 500px;
      width: 600px;
    `}
  >
    <div
      className={css`
        display: flex;
        width: 3000px;
      `}
    >
      {p.children}
    </div>
  </div>
)

export default PianoWrapper
