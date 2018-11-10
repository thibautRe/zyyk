import React, { useState, useEffect } from 'react'

import OctavesSeparator from './octaves-separator'
import NotesSeparator from './notes-separator'
import Roll from './roll'
import PianoWrapper from './wrapper'

const defaultPattern = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1]

const generateNote = () => {
  const octave = Math.floor(Math.random() * 8)
  const level = Math.floor(Math.random() * defaultPattern.length)
  const levelShift = Math.round((Math.random() - 0.5) * 6)
  const startTime = Math.round((Math.random() * 2900) / 50)
  const duration = Math.random() * 5

  return [
    { octave, level, time: startTime },
    {
      octave,
      level: Math.max(0, Math.min(level + levelShift, defaultPattern.length)),
      time: startTime + duration,
    },
    { octave, level, time: startTime + (1 + Math.random() * 2) * duration },
  ]
}

const PianoRoll = () => {
  const [noteHeight, setNoteHeight] = useState(16)
  const [timeWidth, setTimeWidth] = useState(50)
  const [octavePattern, setOctavePattern] = useState(defaultPattern)
  const [octaves, setOctaves] = useState(8)
  const [notes, setNotes] = useState(new Array(100).fill(0).map(generateNote))

  const verticalProps = { noteHeight, octavePattern, octaves }
  const horizontalProps = { timeWidth }

  return (
    <PianoWrapper>
      <OctavesSeparator {...verticalProps} />
      <NotesSeparator {...verticalProps} />
      <Roll {...verticalProps} {...horizontalProps} notes={notes} />
    </PianoWrapper>
  )
}

export default PianoRoll
