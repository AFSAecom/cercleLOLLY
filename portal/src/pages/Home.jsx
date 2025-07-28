import Header from '../components/Header.jsx'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 space-y-8">
      <Header />
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-md justify-center">
        <button className="flex-1 py-2 px-4 bg-accent text-white rounded">Espace Client</button>
        <button className="flex-1 py-2 px-4 bg-accent text-white rounded">Espace Conseillère</button>
        <button className="flex-1 py-2 px-4 bg-accent text-white rounded">Espace Admin</button>
      </div>
    </div>
  )
}

export default Home
