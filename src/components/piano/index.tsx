import React, { useState } from 'react'
import { css } from 'emotion'

import OctavesSeparator from './octaves-separator'
import NotesSeparator from './notes-separator'
import Roll from './roll'
import PianoWrapper from './wrapper'

const defaultPattern = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1]

const PianoRoll = () => {
  const [noteHeight, setNoteHeight] = useState(16)
  const [octavePattern, setOctavePattern] = useState(defaultPattern)
  const [octaves, setOctaves] = useState(8)

  const verticalProps = { noteHeight, octavePattern, octaves }

  return (
    <PianoWrapper>
      <OctavesSeparator {...verticalProps} />
      <NotesSeparator {...verticalProps} />
      <Roll {...verticalProps} />
    </PianoWrapper>
  )
}

export default PianoRoll
