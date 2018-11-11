import React from 'react'
import { css } from 'emotion'
import { ITheme, useTheme } from '../../utils/theme'

const wrapper = (theme: ITheme) => css`
  padding: 0 2px;
  background-color: ${theme['pianoroll.octaves.background']};
  font-size: 9px;
  color: ${theme['pianoroll.octaves.text']};
`

const octave = (theme: ITheme) => css`
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid ${theme['pianoroll.octaves.border']};
`

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
}

const OctavesSeparator = (p: propTypes) => {
  const theme = useTheme()
  return (
    <div className={wrapper(theme)}>
      {new Array(p.octaves).fill(0).map((_, index) => (
        <div
          className={octave(theme)}
          key={index}
          style={{ height: p.noteHeight * p.octavePattern.length }}
        >
          #{p.octaves - index}
        </div>
      ))}
    </div>
  )
}

export default React.memo(OctavesSeparator)
