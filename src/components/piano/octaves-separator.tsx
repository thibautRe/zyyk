import React from 'react'
import { css } from 'emotion'

const wrapper = css`
  padding: 0 2px;
  background-color: #eee;
  font-size: 9px;
  color: #888;
`

const octave = css`
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid #ddd;
`

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
}

export default (props: propTypes) => (
  <div className={wrapper}>
    {new Array(props.octaves).fill(0).map((_, index) => (
      <div
        className={octave}
        key={index}
        style={{ height: props.noteHeight * props.octavePattern.length }}
      >
        #{props.octaves - index}
      </div>
    ))}
  </div>
)
