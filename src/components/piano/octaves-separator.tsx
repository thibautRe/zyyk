import React from 'react'
import { css } from 'emotion'

interface propTypes {
  notesPerOctave: number
  noteHeight: number
  octaves: number
}

const wrapper = css`
  background-color: #eee;
`

const octave = css`
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid #ddd;
`

export default (props: propTypes) => (
  <div className={wrapper}>
    {new Array(props.octaves).fill(0).map((_, index) => (
      <div
        className={octave}
        key={index}
        // -1 because border-bottom
        style={{ height: props.noteHeight * props.notesPerOctave }}
      >
        #{index + 1}
      </div>
    ))}
  </div>
)
