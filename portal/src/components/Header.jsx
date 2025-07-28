import logo from '../assets/logo.svg'

function Header() {
  return (
    <div className="flex flex-col items-center space-y-2 py-4">
      <img src={logo} alt="logo" className="w-32 h-32" />
      <h1 className="text-4xl font-title text-dark text-center">Le Compas Olfactif</h1>
    </div>
  )
}

export default Header
