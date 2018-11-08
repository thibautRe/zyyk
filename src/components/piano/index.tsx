import React, { useState } from 'react'
import { css } from 'emotion'

import OctavesSeparator from './octaves-separator'
import NotesSeparator from './notes-separator'
import Roll from './roll'

const defaultPattern = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1]

const PianoRoll = () => {
  const [noteHeight, setNoteHeight] = useState(10)
  const [octavePattern, setOctavePattern] = useState(defaultPattern)
  const [octaves, setOctaves] = useState(8)

  const commonProps = { noteHeight, octavePattern, octaves }

  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <div>
        <OctavesSeparator {...commonProps} />
      </div>
      <div>
        <NotesSeparator {...commonProps} />
      </div>
      <div style={{ flex: 1 }}>
        <Roll {...commonProps} />
      </div>
    </div>
  )
}

export default PianoRoll
