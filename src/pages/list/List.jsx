import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Tên chỗ nghỉ / điểm đến:</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Ngày nhận phòng</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"dd/MM/yyyy")} đến ${format(
                date[0].endDate, 
                "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                onChange={item=>setDate([item.selection])} 
                minDate={new Date()} 
                ranges={date}
                />}
            </div>
            <div className="lsItem">
              <label>Lựa Chọn</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá thấp nhất<small>mỗi đêm</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Giá cao nhất <small>mỗi đêm</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Người Lớn 
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.Người_Lớn} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Trẻ Em 
                  </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.Trẻ_Em} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Phòng
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.Phòng} />
                </div>
              </div>
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className="listKq">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
