import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
     <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" 
     alt="" 
     className="siImg" 
     />
     <div className="siDesc">
     <h1 className="siTitle">Haco Home</h1>
        <span className="siDistance">Cách trung tâm 2.4km</span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siSubtitle">
        Studio Có Máy Điều Hòa
        </span>
        <span className="siFeatures">
        1 studio nguyên căn • 1 phòng tắm • 1 phòng bếp • 27m²
        1 giường đôi lớn
        </span>
        <span className="siHuyPhong">Miễn phí hủy</span>
        <span className="siTdeHuyPhong">
        Bạn có thể hủy sau, nên hãy đặt ngay hôm nay để có giá tốt.
        </span>
     </div>
     <div className="siChiTiet">
        <div className="siRating">
            <span>Tuyệt hảo</span>
            <button>8.5</button>
        </div>
        <div className="siChiTietVb">
            <span className="siGia">2.052.000 VND</span>
            <span className="siThue">Đã bao gồm thuế và phí</span>
            <button className="siNutKTra">Xem chỗ trống</button>
        </div>
     </div>
    </div>
  )
}

export default SearchItem
