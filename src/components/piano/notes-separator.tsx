import React from 'react'
import { css } from 'emotion'
import { useTheme } from '../../utils/theme'

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
}

const NotesSeparator = (props: propTypes) => {
  const theme = useTheme()
  return (
    <>
      {new Array(props.octaves).fill(null).map((_, octaveIndex) => (
        <React.Fragment key={octaveIndex}>
          {props.octavePattern.map((patternType, noteIndex) => (
            <div
              key={noteIndex}
              className={css`
                width: 50px;
                border-bottom: 1px solid
                  ${theme['pianoroll.notesleft.noteborder']};
                background-color: ${Boolean(patternType)
                  ? theme['pianoroll.notesleft.notemain']
                  : theme['pianoroll.notesleft.notesecondary']};
                height: ${props.noteHeight}px;
              `}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  )
}

export default NotesSeparator
