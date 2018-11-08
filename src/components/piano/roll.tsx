import React, { useRef, useEffect } from 'react'
import { css } from 'emotion'
import { useTheme } from '../../utils/theme'

const canvasClassName = css`
  align-self: stretch;
  flex: 1;
`

const pixelRatio = Math.round(window.devicePixelRatio) || 1

// Make sure the canvas has a HTML width and height that corresponds to its real size
// This is in order to avoid blurry and scale issues
const useResizeCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    if (!canvasRef.current) return
    const { width, height } = canvasRef.current.getBoundingClientRect()
    canvasRef.current.height = height * pixelRatio
    canvasRef.current.width = width * pixelRatio
  }, [])
}

interface INote {
  octave: number
  note: number
}

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
  notes: Array<INote>
}

const Roll = (p: propTypes) => {
  const theme = useTheme()
  const canvasRef = useRef((null as any) as HTMLCanvasElement)

  useResizeCanvas(canvasRef)

  useEffect(
    () => {
      if (!canvasRef.current) return
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return
      const { width, height } = canvasRef.current.getBoundingClientRect()

      // Double loop : octaves/notes background
      new Array(p.octaves).fill(0).forEach((_, octave) => {
        p.octavePattern.forEach((noteType, note) => {
          // Note band
          ctx.fillStyle = Boolean(noteType)
            ? theme['pianoroll.roll.bg.notemain']
            : theme['pianoroll.roll.bg.notesecondary']
          ctx.fillRect(
            0,
            (octave * p.octavePattern.length + note) *
              p.noteHeight *
              pixelRatio,
            width * pixelRatio,
            p.noteHeight * pixelRatio,
          )

          // Note border
          const lineVerticalPos =
            (octave * p.octavePattern.length + note + 1) * p.noteHeight

          ctx.strokeStyle =
            note === p.octavePattern.length - 1
              ? theme['pianoroll.roll.bg.octaveborder']
              : theme['pianoroll.roll.bg.noteborder']
          ctx.beginPath()
          ctx.moveTo(0, pixelRatio * lineVerticalPos - 0.5)
          ctx.lineTo(width * pixelRatio, pixelRatio * lineVerticalPos - 0.5)
          ctx.stroke()
        })
      })

      // Notes
      const noteHeight = 2
      p.notes.forEach((note) => {
        ctx.fillStyle = theme['pianoroll.roll.note']
        ctx.fillRect(
          0,
          ((note.octave * p.octavePattern.length + note.note + 0.5) *
            p.noteHeight -
            noteHeight) *
            pixelRatio,
          200,
          noteHeight * pixelRatio,
        )
      })
    },
    [p.noteHeight, p.octavePattern, p.octaves, p.notes, theme],
  )
  return <canvas ref={canvasRef} className={canvasClassName} />
}

export default Roll
