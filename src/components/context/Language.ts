import React from "react"

export const LanguageContext = React.createContext(
  ["en", () => {}] as any // default value
)
