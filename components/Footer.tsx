const Footer = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      {isVisible && (
        <footer>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Kontakt</h2>
          </div>
        </footer>
      )}
    </>
  )
}

export default Footer
