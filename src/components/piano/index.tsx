import React, { useState } from 'react'
import { css } from 'emotion'

import OctavesSeparator from './octaves-separator'
import NotesSeparator from './notes-separator'
import Roll from './roll'

const defaultPattern = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1]

const PianoRoll = () => {
  const [noteHeight, setNoteHeight] = useState(16)
  const [octavePattern, setOctavePattern] = useState(defaultPattern)
  const [octaves, setOctaves] = useState(8)

  const verticalProps = { noteHeight, octavePattern, octaves }

  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <div>
        <OctavesSeparator {...verticalProps} />
      </div>
      <div>
        <NotesSeparator {...verticalProps} />
      </div>
      <div style={{ flex: 1 }}>
        <Roll {...verticalProps} />
      </div>
    </div>
  )
}

export default PianoRoll
