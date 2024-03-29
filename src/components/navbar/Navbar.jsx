import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span  className="logo">Kiawbooking</span>
        <div className="navItems">
            <button className="navButton">Đăng Ký</button>
            <button className="navButton"> Đăng Nhập</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
