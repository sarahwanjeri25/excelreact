const Footer = () => {

    const styles={
       main:{
        backgroundColor:"#00008B",
        color:"white",
        
       },

       icon:{
        wordSpacing:"2rem"
       },
       
       flex:{
        display:"flex"
       },

    }
    return (  
        <>
   <div className="main" style={styles.main}>
    <div className="flex" style={styles.flex}>
     <h4>Excel Global College</h4>
        <ul className="cursor" style={styles.cursor}>
           
             <p><i class="fa fa-arrow-right" aria-hidden="true"></i>About Us<br></br>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>Gallery<br></br>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>Job Placements<br></br>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>Blog<br></br>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>Contact Us<br></br>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>Follow Us</p>
        </ul>

        <h4>School of Business</h4>
        <ul className="cursor" style={styles.cursor}>
            <p><i class="fa fa-arrow-right" aria-hidden="true"></i>ABE<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Business Startup<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>CISOM<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Business English</p>
        </ul>

        <h4>School of Accounting</h4>
        <ul className="cursor" style={styles.cursor}>
            <p><i class="fa fa-arrow-right" aria-hidden="true"></i>ACCA<br></br>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>Accounting Packages</p>
        </ul>

   <h4>School of ICT</h4>
        <ul className="cursor" style={styles.cursor}>
            <p><i class="fa fa-arrow-right" aria-hidden="true"></i>Microsoft Office Specialist<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Adobe Certified Courses<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Graphic Design<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Web Design<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Programming<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Networking<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Software Development<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>Computer Package<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>ABMA Diploma<br></br>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>ICDL</p>
        </ul>
        </div>

        <h3>Follow Us</h3>
        <i class="fa fa-facebook-square icon" aria-hidden="true" style={styles.icon}></i>
        <i class="fa fa-linkedin-square icon" aria-hidden="true" style={styles.icon}></i>
        <i class="fa fa-instagram icon" aria-hidden="true" style={styles.icon}></i>
        <i class="fa fa-youtube icon" aria-hidden="true" style={styles.icon}></i>
      
      <p>© 2023 Excel Global College. All rights reserved.</p>
   <p>Website designed by VLION</p>


      
      
      
       </div>

        </>
    );
}
 
export default Footer;