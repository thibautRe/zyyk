import React, { useRef, useEffect } from 'react'
import { css } from 'emotion'
import { useTheme } from '../../utils/theme'
import RollNote, { INote, INotePart } from './rollnote'

const wrapper = css`
  flex: 1;
  position: relative;
`

const svg = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const getNotePartFromPosition = (
  x: number,
  y: number,
  noteHeight: number,
  timeWidth: number,
  levelsPerOctave: number,
): INotePart => {
  const time = x / timeWidth
  const levels = Math.floor(y / noteHeight)
  const level = levels % levelsPerOctave
  const octave = Math.floor(levels / levelsPerOctave)
  return {
    time,
    level,
    octave,
  }
}

interface propTypes {
  noteHeight: number
  timeWidth: number
  octaves: number
  octavePattern: Array<number>
  notes: Array<INote>
  testOnCreateNote: (note: INotePart) => void
}

const Roll = (p: propTypes) => {
  const theme = useTheme()
  const svgRef = useRef((null as unknown) as SVGSVGElement)

  // Set the viewBox to the container's size
  useEffect(
    () => {
      if (!svgRef.current) return
      const { width, height } = svgRef.current.getBoundingClientRect()
      svgRef.current.setAttribute('viewBox', `0 0 ${width} ${height}`)
    },
    [svgRef],
  )

  return (
    <div className={wrapper}>
      {new Array(p.octaves).fill(null).map((_, octaveIndex) => (
        <React.Fragment key={octaveIndex}>
          {p.octavePattern.map((patternType, noteIndex) => (
            <div
              key={noteIndex}
              className={css`
                border-bottom: 1px solid
                  ${noteIndex === p.octavePattern.length - 1
                    ? theme['pianoroll.roll.bg.octaveborder']
                    : theme['pianoroll.roll.bg.noteborder']};
                background-color: ${Boolean(patternType)
                  ? theme['pianoroll.roll.bg.notemain']
                  : theme['pianoroll.roll.bg.notesecondary']};
                height: ${p.noteHeight}px;
              `}
            />
          ))}
        </React.Fragment>
      ))}

      <svg
        className={svg}
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        onClick={(e) => {
          if (!svgRef.current) return
          const { top, left } = svgRef.current.getBoundingClientRect()
          const x = e.clientX - left
          const y = e.clientY - top
          const notePart = getNotePartFromPosition(
            x,
            y,
            p.noteHeight,
            p.timeWidth,
            p.octavePattern.length,
          )
          p.testOnCreateNote(notePart)
        }}
        ref={svgRef}
      >
        {p.notes.map((note, noteIndex) => (
          <RollNote
            key={noteIndex}
            note={note}
            noteHeight={p.noteHeight}
            timeWidth={p.timeWidth}
            levelsPerOctave={p.octavePattern.length}
          />
        ))}
      </svg>
    </div>
  )
}

export default Roll
