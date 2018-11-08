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

interface propTypes {
  noteHeight: number
  octaves: number
  octavePattern: Array<number>
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

      // Double loop : octaves/notes
      new Array(p.octaves).fill(0).forEach((_, octave) => {
        p.octavePattern.forEach((noteType, note) => {
          // Note band
          ctx.fillStyle = Boolean(noteType)
            ? theme['pianoroll.roll.notemain']
            : theme['pianoroll.roll.notesecondary']
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
              ? theme['pianoroll.roll.octaveborder']
              : theme['pianoroll.roll.noteborder']
          ctx.beginPath()
          ctx.moveTo(0, pixelRatio * lineVerticalPos - 0.5)
          ctx.lineTo(width * pixelRatio, pixelRatio * lineVerticalPos - 0.5)
          ctx.stroke()
        })
      })
    },
    [p.noteHeight, p.octavePattern, p.octaves, theme],
  )
  return <canvas ref={canvasRef} className={canvasClassName} />
}

export default Roll
