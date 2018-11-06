import React, { useState } from 'react'
import { css } from 'emotion'

import OctavesSeparator from './octaves-separator'
import NotesSeparator from './notes-separator'

const PianoRoll = () => {
  const [noteHeight, setNoteHeight] = useState(10)
  const [pattern, setPattern] = useState([1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1])
  const [octaves, setOctaves] = useState(8)

  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <div>
        <OctavesSeparator
          octaves={octaves}
          octavePattern={pattern}
          noteHeight={noteHeight}
        />
      </div>
      <div>
        <NotesSeparator
          octaves={octaves}
          octavePattern={pattern}
          noteHeight={noteHeight}
        />
      </div>
      <div style={{ flex: 1 }} />
    </div>
  )
}

export default PianoRoll
