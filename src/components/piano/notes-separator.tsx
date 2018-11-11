import React from 'react'
import { css } from 'emotion'
import { useTheme } from '../../utils/theme'

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
}

const NotesSeparator = (p: propTypes) => {
  const theme = useTheme()
  return (
    <div>
      {new Array(p.octaves).fill(null).map((_, octaveIndex) => (
        <React.Fragment key={octaveIndex}>
          {p.octavePattern.map((patternType, noteIndex) => (
            <div
              key={noteIndex}
              className={css`
                width: 50px;
                border-bottom: 1px solid
                  ${noteIndex === p.octavePattern.length - 1
                    ? theme['pianoroll.notesleft.octaveborder']
                    : theme['pianoroll.notesleft.noteborder']};
                background-color: ${Boolean(patternType)
                  ? theme['pianoroll.notesleft.notemain']
                  : theme['pianoroll.notesleft.notesecondary']};
                height: ${p.noteHeight}px;
              `}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default React.memo(NotesSeparator)
