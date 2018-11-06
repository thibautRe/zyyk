import React from 'react'
import { css } from 'emotion'

interface propTypes {
  notesPerOctave: number
  noteHeight: number
  octaves: number
  pattern: Array<number>
}

const getBgcolorFromPattern = (patternType: number): string => {
  if (patternType) return '#FFF'
  return 'black'
}

const NotesSeparator = (props: propTypes) => (
  <>
    {new Array(props.octaves).fill(null).map((_, octaveIndex) => (
      <div key={octaveIndex}>
        {props.pattern.map((patternType, noteIndex) => (
          <div
            key={noteIndex}
            className={css`
              border-bottom: 1px solid #ddd;
              background-color: ${getBgcolorFromPattern(patternType)};
              height: ${props.noteHeight}px;
            `}
          />
        ))}
      </div>
    ))}
  </>
)

export default NotesSeparator
