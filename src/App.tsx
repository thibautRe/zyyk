import React, { useState } from 'react'

import PianoRoll from './components/piano'
import ThemePicker from './components/theme-picker'

import { useThemeConfig, Provider } from './utils/theme'

const App = () => {
  const {
    setThemeID,
    themeID,
    theme,
    availableThemes,
    isLoading,
  } = useThemeConfig('default')
  return (
    <Provider value={theme}>
      <ThemePicker
        setThemeId={setThemeID}
        themeID={themeID}
        availableThemes={availableThemes}
        isLoading={isLoading}
      />
      <PianoRoll />
    </Provider>
  )
}

export default App
