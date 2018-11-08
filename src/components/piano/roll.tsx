import React from 'react'
import { css } from 'emotion'
import { useTheme } from '../../utils/theme'

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
}

const Roll = (p: propTypes) => {
  const theme = useTheme()
  return (
    <>
      {new Array(p.octaves).fill(null).map((_, octaveIndex) => (
        <React.Fragment key={octaveIndex}>
          {p.octavePattern.map((patternType, noteIndex) => (
            <div
              key={noteIndex}
              className={css`
                border-bottom: 1px solid
                  ${noteIndex === p.octavePattern.length - 1
                    ? theme['pianoroll.roll.octaveborder']
                    : theme['pianoroll.roll.noteborder']};
                background-color: ${Boolean(patternType)
                  ? theme['pianoroll.roll.notemain']
                  : theme['pianoroll.roll.notesecondary']};
                height: ${p.noteHeight}px;
              `}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  )
}

export default Roll
