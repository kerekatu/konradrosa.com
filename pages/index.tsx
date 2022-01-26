import Container from '@/components/Container'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  const { data: repos } = useSWR('https://api.github.com/users/kerekatu/repos')

  if (!repos) return <></>

  return (
    <Container showGrid={true}>
      <Hero />
    </Container>
  )
}

export default Home
