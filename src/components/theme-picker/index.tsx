import React from 'react'
import { css } from 'emotion'
import { useTheme } from '../../utils/theme'

interface propTypes {
  themeID: string
  availableThemes: Array<string>
  isLoading: Boolean
  setThemeId: (id: string) => void
}

const ThemePicker = (p: propTypes) => {
  const theme = useTheme()

  return (
    <div
      className={css`
        margin: 10px;
      `}
    >
      <select
        value={p.themeID}
        onChange={(event) => p.setThemeId(event.target.value)}
        className={css`
          appearance: none;
          background-color: ${theme['main.shade.6']};
          border: 1px solid ${theme['main.shade.4']};
          padding: 8px 20px;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
        `}
      >
        {p.availableThemes.map((themeID) => (
          <option key={themeID} value={themeID}>
            {themeID}
          </option>
        ))}
      </select>
      {p.isLoading && (
        <span
          className={css`
            color: ${theme['main.shade.3']};
          `}
        >
          Loading...
        </span>
      )}
    </div>
  )
}

ThemePicker.defaultProps = {
  availableThemes: [],
  isLoading: false,
  setThemeId: () => {},
}

export default ThemePicker
