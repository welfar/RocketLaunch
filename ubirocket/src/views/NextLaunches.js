import { Link } from "react-router-dom"

import Upcoming from "../components/Upcoming"

import "../styles/Upcoming.css"

function NextLaunches() {
  return(
    <>
      <div>
        <Upcoming />
      </div>
      <div>
        <Link to="/" className="link-navigation">
          Countdown
        </Link>
      </div>
    </>
  )
}

export default NextLaunches
