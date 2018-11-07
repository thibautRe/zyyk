import React from 'react'
import { css } from 'emotion'
import { themeInterface, useTheme } from '../../utils/theme'

const wrapper = (theme: themeInterface) => css`
  padding: 0 2px;
  background-color: ${theme['pianoroll.octaves.background']};
  font-size: 9px;
  color: ${theme['pianoroll.octaves.text']};
`

const octave = (theme: themeInterface) => css`
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid ${theme['pianoroll.octaves.border']};
`

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
}

export default (props: propTypes) => {
  const theme = useTheme()
  return (
    <div className={wrapper(theme)}>
      {new Array(props.octaves).fill(0).map((_, index) => (
        <div
          className={octave(theme)}
          key={index}
          style={{ height: props.noteHeight * props.octavePattern.length }}
        >
          #{props.octaves - index}
        </div>
      ))}
    </div>
  )
}
