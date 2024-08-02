import React from 'react'

export default function RootLayout ({
  children,
  team,
  analytics,
} : {
  children: React.ReactNode,
  team: React.ReactNode,
  analytics: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {team}
        {analytics}
      </body>
    </html>
  )
}