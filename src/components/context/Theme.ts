import React from "react"

export const ThemeContext = React.createContext(
  ["dark", () => {}] as any // default value
)
