import Container from '@/components/Container'
import type { NextPage } from 'next'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const Home: NextPage = () => {
  return (
    <Container showGrid={true}>
      <Hero />
      <Projects />
    </Container>
  )
}

export default Home
