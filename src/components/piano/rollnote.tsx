import React from 'react'
import { useTheme, ITheme } from '../../utils/theme'
import { css } from 'emotion'

const marker = (theme: ITheme) => css`
  fill: ${theme['pianoroll.roll.marker.inner']};
  stroke: ${theme['pianoroll.roll.marker.outer']};
  stroke-width: 1px;
  cursor: grab;

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

  const { x: x0, y: y0 } = getPosition(
    p.note[0],
    p.noteHeight,
    p.timeWidth,
    p.levelsPerOctave,
  )

  const { x: x1, y: y1 } = getPosition(
    p.note[1],
    p.noteHeight,
    p.timeWidth,
    p.levelsPerOctave,
  )

  return (
    <>
      <path
        className={css`
          stroke-width: 2px;
        `}
        style={{ stroke: theme['pianoroll.roll.note'] }}
        d={`M${x0} ${y0} L${x1} ${y1}`}
      />
      <circle cx={x0} cy={y0} r={4} className={marker(theme)} />
      <circle cx={x1} cy={y1} r={4} className={marker(theme)} />
    </>
  )
}

export default RollNote
