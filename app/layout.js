import { open_sans } from "./fonts"
import StyledComponentsRegistry from "./lib/styled-components/registry"

export default function RootLayout({ children }) {
 return (
    <html lang="en" className={open_sans.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
