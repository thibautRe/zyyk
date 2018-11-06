import React from 'react'
import { css } from 'emotion'
import PianoRoll from './components/piano'

const wrapper = css`
  background-color: red;
`

const App = () => (
  <>
    <div className={wrapper}>hello</div>
    <PianoRoll />
  </>
)

export default App
