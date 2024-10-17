
const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center py-4 px-4">
            <div>
            <h1 className="text-2xl font-semibold text-gray-800">Logo</h1>
            </div>
            <div>
            <ul className="flex gap-6">
                <li>
                <a href="/" className="text-gray-800">Home</a>
                </li>
                <li>
                <a href="/recipes" className="text-gray-800">Recipes</a>
                </li>
                <li>
                <a href="/about" className="text-gray-800">About</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar