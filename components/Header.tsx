import * as React from "react"
import { ReactElement } from "react"

const Header = (): ReactElement => {
  return (
    <header className="site-header">
      <h1 className="site-title">
        cd ~/<a href="https://diego.earth">diego</a>/<a href="https://media.diego.earth">media</a>/<a href="https://rome.diego.earth/">italy</a><span className="cursor" />
      </h1>
    </header>
  )
}

export default Header