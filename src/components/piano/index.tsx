import React, { useState, useEffect } from 'react'

import OctavesSeparator from './octaves-separator'
import NotesSeparator from './notes-separator'
import Roll from './roll'
import PianoWrapper from './wrapper'

const defaultPattern = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1]

const PianoRoll = () => {
  const [noteHeight, setNoteHeight] = useState(16)
  const [octavePattern, setOctavePattern] = useState(defaultPattern)
  const [octaves, setOctaves] = useState(8)
  const [notes, setNotes] = useState([
    { octave: 4, note: 6 },
    { octave: 2, note: 3 },
  ])

  useEffect(() => {
    setTimeout(() => setNotes([...notes, { octave: 3, note: 1 }]), 2000)
  }, [])

  const verticalProps = { noteHeight, octavePattern, octaves }

  return (
    <PianoWrapper>
      <OctavesSeparator {...verticalProps} />
      <NotesSeparator {...verticalProps} />
      <Roll {...verticalProps} notes={notes} />
    </PianoWrapper>
  )
}

export default PianoRoll
