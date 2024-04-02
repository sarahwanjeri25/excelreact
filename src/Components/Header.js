const Header = () => {
    const styles={
        header:{
            backgroundColor:"#00008B",
            color:"white",
            display:"flex",
        },

        btn1:{
            backgroundColor:"#00BFFF",
            color:"white",
            paddingLeft:"10px",
            marginLeft:"10px",


        },

        btn2:{
            backgroundColor:"red",
            color:"white",
            textAlign:"right",
        },
        icon:{
            
        },
    }
    return ( 
        <>
        <div className="main">
            < div className="header" style={styles.header}>
                <p ><i class="fa fa-envelope-open-o icon" aria-hidden="true" style={styles.icon}> </i>excelglobalcollege@gmail.com       <i class="fa fa-phone icon" aria-hidden="true" style={styles.icon}></i>    +254(0) 714 800 900</p>
                <p></p>
                <button className="btn1" style={styles.btn1}>Application Form</button>
                <button className="btn2" style={styles.btn2}>Online Fees Payment</button>
            </div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="https://excelglobalcollege.com/images/logo.jpg"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </>
     );
}
 
export default Header;

//className="icon bg-blue mr-2 d-flex justify-content-center align-items-center"