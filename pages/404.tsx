import Container from '@/components/Container'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <Container showFooter={false}>
      <section className="flex flex-col gap-12 pt-12 items-center">
        <span className="bg-neutral-800 px-12 py-2 rounded-md text-neutral-900 text-[15vw] leading-snug font-bold">
          404
        </span>
        <h1 className="flex flex-col text-3xl items-center gap-12">
          Przykro mi, podana strona nie istnieje...
        </h1>
        <Link href="/">
          <a className="bg-neutral-800 py-4 px-8 rounded-md text-neutral-400 text-2xl transition-opacity hover:opacity-70">
            Wróć na stronę główną
          </a>
        </Link>
      </section>
    </Container>
  )
}

export default ErrorPage
