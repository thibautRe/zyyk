import React, { useContext, useMemo, useState, useEffect } from 'react'
import defaultTheme from '../theme.default.json'

export interface ITheme {
  [key: string]: string
}

// Resolve one key from the theme to its corresponding value
const resolveKey = (
  theme: ITheme,
  themeKey: string,
  recursivityCheck = 0,
): string => {
  // Make sure there is no recursivity in keys resolution
  if (recursivityCheck > 30) {
    throw new Error(`Detected recursivity in theme for key ${themeKey}`)
  }

  if (theme[themeKey].includes('.')) {
    return resolveKey(theme, theme[themeKey], recursivityCheck + 1)
  }
  return theme[themeKey]
}

const resolveTheme = (theme: ITheme): ITheme =>
  Object.keys(theme)
    .map((themeKey) => ({ [themeKey]: resolveKey(theme, themeKey) }))
    .reduce((a, b) => ({ ...a, ...b }), {})

const ThemeContext = React.createContext({})

// Memoize the resolveTheme function manually
let previousTheme = {}
let memoizeResolvedTheme = {}
const resolveAndMemoizeTheme = (theme: ITheme): ITheme => {
  if (previousTheme === theme) return memoizeResolvedTheme

  previousTheme = theme
  memoizeResolvedTheme = resolveTheme(theme)
  return memoizeResolvedTheme
}

// React hook to access theme
export const useTheme = (): ITheme => useContext(ThemeContext)

// React hook to access theme config
export const useThemeConfig = (defaultThemeID: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [themeID, setThemeID] = useState(defaultThemeID)
  const [theme, setTheme] = useState(defaultTheme as ITheme)
  const availableThemes = ['default', 'bluemoon']

  useEffect(
    () => {
      setIsLoading(true)
      import(/* webpackMode: "lazy" */ /* webpackInclude: /\.json$/ */ /* webpackChunkName: "theme-[request]" */
      `../theme.${themeID}.json`)
        .then((theme) => {
          setTheme(
            resolveAndMemoizeTheme({ ...defaultTheme, ...theme.default }),
          )
          setIsLoading(false)
        })
        .catch((err) => console.error(err))
    },
    [themeID],
  )

  return { themeID, theme, setThemeID, availableThemes, isLoading }
}

export const Provider = ThemeContext.Provider
