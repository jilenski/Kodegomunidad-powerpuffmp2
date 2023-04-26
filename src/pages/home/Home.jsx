import Header from "../../components/header/Header"
import "./home.css"
import Community from "../../components/community/Community"
import Slider from "./slider/Slider"
import Careers from "../../components/careers/Careers"
import Events from "../../components/events/Events"


export default function Home() {
  return (
<>
      <Slider/>
      <Header/>
      <Community/>
      <Careers/>
      <Events/>

      <div className ="home">
        <br/>

    </div>

</>
  )
}
