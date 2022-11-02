import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import Special from "../../components/special/Special"
import SpecialProperty from "../../components/specialProperty/SpecialProperty"
import "./home.css"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        {/* <h1 className="homeTitle">Lưu trú tại các chỗ nghỉ độc đáo hàng đầu</h1> */}
        <Special/>
        <h1 className="homeTitle">Lưu trú tại các chỗ nghỉ độc đáo hàng đầu</h1>
        <PropertyList/>
        <h1 className="homeTitle">Nhà ở mà khách yêu thích</h1>
        <SpecialProperty/>
      </div>
    </div>
  )
}

export default Home
