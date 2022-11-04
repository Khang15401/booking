import {
  faBed,
  faCalendarDays,
  faCar,
  faEarthAmerica,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import {useNavigate} from "react-router-dom"

const Header = ({type}) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    Người_Lớn: 1,
    Trẻ_Em:0,
    Phòng:1,
  });

  const navigate = useNavigate()

  const handleOption = (ten, hoatdong) =>{
    setOptions(prev=>{return{
      ...prev, [ten]: hoatdong === "i" ? options[ten] + 1 : options[ten] - 1,
    }})
  };

  const handleSearch = ()=>{
    navigate("hotels", {state:{ destination, date, options }})
  }
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer" }>
        <div className="headerList">
          <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Lưu trú</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Chuyến bay</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Thuê Xe</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faEarthAmerica} />
              <span>Địa điểm tham quan</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Taxi sân bay</span>
            </div>
        </div>
        { type !== "list" &&
          <><h1 className="headerTitle">
              Luôn luôn giảm giá, mang lại trải nghiệm tốt nhất cho khách hàng.
            </h1>
            <p className="headerDesc">
              Đăng ký thành viên sớm để nhận được ưu đãi lớn từ tài khoản kiawbooking - Giảm giá tới 10%
            </p>
            <button className="headerBtn">Đăng nhập / Đăng Ký</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input 
                  type="text" placeholder="Nơi bạn muốn đến ?" 
                  className="headerSearchInput" 
                  onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faCalendarDays} />
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format
                (date[0].startDate, "dd/MM/yyyy")} 
                đến ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faPerson}  />
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.Người_Lớn} Người Lớn . ${options.Trẻ_Em} Trẻ Em . ${options.Phòng} Phòng `}</span>
                  {openOptions && <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Người Lớn</span>
                      <div className="optionCounter">

                        <button disabled = {options.Người_Lớn <= 1} className="optionCounterButton" onClick={()=>handleOption("Người_Lớn", "d")}>-</button>
                        <span className="optionCounterNumber">{options.Người_Lớn}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Người_Lớn", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Trẻ Em</span>
                      <div className="optionCounter">
                        <button disabled = {options.Trẻ_Em <= 0} className="optionCounterButton" onClick={()=>handleOption("Trẻ_Em", "d")}>-</button>
                        <span className="optionCounterNumber">{options.Trẻ_Em}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Trẻ_Em", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Phòng</span>
                      <div className="optionCounter"> 
                        <button disabled = {options.Phòng <= 1} className="optionCounterButton" onClick={()=>handleOption("Phòng", "d")}>-</button>
                        <span className="optionCounterNumber">{options.Phòng}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Phòng", "i")}>+</button>
                      </div>
                    </div>
                  </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Tìm kiếm</button>
              </div>
            </div></>}
      </div>
    </div>
  )
}

export default Header
