import React, { useState } from 'react'
import { css } from 'emotion'

import OctavesSeparator from './octaves-separator'
import NotesSeparator from './notes-separator'

const PianoRoll = () => {
  const [notesPerOctave, setNotesPerOctaves] = useState(12)
  const [pattern, setPattern] = useState([1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1])
  const [octaves, setOctaves] = useState(5)
  const [noteHeight, setNoteHeight] = useState(10)

  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <div style={{ width: 30 }}>
        <OctavesSeparator
          notesPerOctave={notesPerOctave}
          octaves={octaves}
          noteHeight={noteHeight}
        />
      </div>
      <div style={{ width: 60 }}>
        <NotesSeparator
          notesPerOctave={notesPerOctave}
          octaves={octaves}
          pattern={pattern}
          noteHeight={noteHeight}
        />
      </div>
    </div>
  )
}

export default PianoRoll
