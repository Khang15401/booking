import "./special.css"

const Special = () => {
  return (
    <div className="special">
      <div className="specialItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x500/688849.jpg?k=c1f2770a0c096aeb09a6956a9754abbb61b946a932601a4a02bb6aa42d7fa74a&o=" alt="" className="specialImg" />
        <div className="specialTitles">
            <h1>Hà Nội</h1>
            <h2>50 địa điểm</h2>
        </div>
      </div>

      <div className="specialItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x500/688892.webp?k=ab98c6d1cae80333bbd3129cfeb692f9fd1b17caa359d2fb4fdf35a4160e5ccf&o="
          alt=""
          className="specialImg"
        />
        <div className="specialTitles">
          <h1>TP. Hồ Chí Minh</h1>
          <h2>231 địa điểm</h2>
        </div>
      </div>

      <div className="specialItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x500/688906.webp?k=6b660c5d295f53392879d35893e48b7cf96be8311cca62eb903eaaed02090ad2&o="
          alt=""
          className="specialImg"
        />
        <div className="specialTitles">
          <h1>Nha Trang</h1>
          <h2>78 địa điểm</h2>
        </div>
      </div>
    </div>
    
  )
}

export default Special
