import { formatPrice } from "../utils/helpers"

const Navbar = ({ onNavigate }) => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-2">
        <span className="navbar-brand mb-0 fw-bold">Pizzería Mamma Mia!</span>

        <div className="d-flex flex-wrap align-items-center gap-2">
          <button className="btn btn-outline-light btn-sm" onClick={() => onNavigate("home")}>🍕 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm" onClick={() => onNavigate("login")}>🔐 Login</button>
              <button className="btn btn-outline-light btn-sm" onClick={() => onNavigate("register")}>🔐 Register</button>
            </>
          )}

          <button className="btn btn-warning btn-sm fw-semibold" onClick={() => onNavigate("cart")}>
            🛒 Total: ${formatPrice(total)}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
