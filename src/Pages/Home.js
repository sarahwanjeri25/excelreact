import Header from "../Components/Header";
import Footer from "../Components/Footer";


const Home = () => {

    const styles={
header:{
    fontsize:"30px",
    fontFamily:"Times New Roman, Times, serif",

}
    }
    return (  

        <>
        <Header/>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://excelglobalcollege.com/images/banner/slide1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://excelglobalcollege.com/images/banner/slide2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://excelglobalcollege.com/images/banner/slide3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div>
     <h2 className="header" style={styles.header}>Welcome to Excel Global College</h2>
     <p>Best ACCA, ABE, Microsoft Office, Tally Courses, Quickbooks, ICDL, Computer packages College in Nairobi, Kenya. Apply now for basic and advanced courses for higher education in Excel Global College. The college provides training for professional qualifications and computer based courses</p>
     <p>Learn more about Excel Global College</p> <a href="https://studyinkenya.co.ke/institutions/excel-global-college">Study In Kenya - Excel Global College .</a>
</div>
<Footer/>
        </>
    );
}
 
export default Home;