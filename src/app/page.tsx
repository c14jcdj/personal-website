import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SelectedWork from '../components/SelectedWork'
import About from '../components/About'
import Leadership from '../components/Leadership'
import StatsBar from '../components/StatsBar'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Leadership />
        <StatsBar />
      </main>
      <Contact />
    </>
  )
}
