import React from 'react'
import { useTheme, ITheme } from '../../utils/theme'
import { css } from 'emotion'

const marker = (theme: ITheme) => css`
  fill: ${theme['pianoroll.roll.marker.inner']};
  stroke: ${theme['pianoroll.roll.marker.outer']};
  stroke-width: 1px;
  cursor: grab;
  z-index: 2;

  transition: 0.15s ease-out;

  &:hover {
    fill: ${theme['pianoroll.roll.marker.inner:hover']};
    stroke: ${theme['pianoroll.roll.marker.inner:hover']};
    stroke-width: 4px;
  }
`

const getPosition = (
  note: INotePart,
  noteHeight: number,
  timeWidth: number,
  levelsPerOctave: number,
): INotePosition => ({
  x: note.time * timeWidth,
  y: (note.level + note.octave * levelsPerOctave) * noteHeight + noteHeight / 2,
})

interface INotePart {
  octave: number
  level: number
  time: number
}

export type INote = Array<INotePart>

interface propTypes {
  note: INote
  noteHeight: number
  timeWidth: number
  levelsPerOctave: number
}

interface INotePosition {
  x: number
  y: number
}

const RollNote = (p: propTypes) => {
  const theme = useTheme()

  const notesPositions = p.note.map((notePart) =>
    getPosition(notePart, p.noteHeight, p.timeWidth, p.levelsPerOctave),
  )

  return (
    <g>
      {/* Link paths */}
      {notesPositions.map(
        ({ x, y }, index) =>
          index < p.note.length - 1 && (
            <path
              key={index}
              className={css`
                stroke-width: 2px;
              `}
              style={{ stroke: theme['pianoroll.roll.note'] }}
              d={`M${x} ${y} L${notesPositions[index + 1].x} ${
                notesPositions[index + 1].y
              }`}
            />
          ),
      )}
      {notesPositions.map(({ x, y }, index) => (
        <circle cx={x} cy={y} r={4} className={marker(theme)} key={index} />
      ))}
    </g>
  )
}

export default RollNote
