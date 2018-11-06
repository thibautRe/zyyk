import React from 'react'
import { css } from 'emotion'

type octave = number
type note = number

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
}

const getBgcolorFromPattern = (patternType: number): string => {
  if (patternType) return '#FFF'
  return 'black'
}

const NotesSeparator = (props: propTypes) => (
  <>
    {new Array(props.octaves).fill(null).map((_, octaveIndex) => (
      <React.Fragment key={octaveIndex}>
        {props.octavePattern.map((patternType, noteIndex) => (
          <div
            key={noteIndex}
            className={css`
              width: 50px;
              border-bottom: 1px solid #ddd;
              background-color: ${getBgcolorFromPattern(patternType)};
              height: ${props.noteHeight}px;
            `}
          />
        ))}
      </React.Fragment>
    ))}
  </>
)

export default NotesSeparator
