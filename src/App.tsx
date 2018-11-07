import React, { useState } from 'react'

import PianoRoll from './components/piano'
import ThemeContext, { useThemeConfig } from './utils/theme'

const App = () => {
  const { setThemeID, themeID, theme, isLoading } = useThemeConfig('default')
  return (
    <ThemeContext.Provider value={theme}>
      <p>Is loading: {isLoading.toString()}</p>
      <p>
        <button onClick={() => setThemeID('bluemoon')}>Go Bluemoon</button>
      </p>
      {/* <ThemePicker setTheme={setTheme} /> */}
      <PianoRoll />
    </ThemeContext.Provider>
  )
}

export default App
