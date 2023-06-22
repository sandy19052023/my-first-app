import { useNavigate } from "react-router-dom";

export default function LoginSample()
{
  const navi =useNavigate();
  const g = () => {
    navi('/a')
  }
    return(
        <>

        <div className="container-fluid back">

<div className="d-flex flex-row ">
            
<div className="container">
                

                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel " >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.csmonitor.com/csmarchives/2010/05/0517-sci-sun.jpg?alias=standard_900x600 " class="d-block  " alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>SUN</h5>
        <p>The Sun is the only star in our solar system. It is the center of our solar system, and its gravity holds the solar system together.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/Sunset-900x600.jpeg" class="d-block  " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>DESERT</h5>
        <p>The four main types of desert include hot and dry deserts, semi-arid deserts, coastal deserts, and cold deserts. In hot and dry deserts, also known as arid deserts, the temperatures are warm and dry year-round.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg " class="d-block " alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>CAMERA</h5>
        <p>A camera is an optical instrument that captures images. Most cameras can capture 2D images, while some more advanced models can capture 3D images.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

                
                </div> 
                <div className="container">    
                

                    <h2 className="text-center mt-5">Login</h2>

                    <form>
                            <h3 className="text-center text-muted ">Welcome to Login Page</h3>
                            <div className="d-flex justify-content-center">
                            <div class="mb-5 mt-5 d-flex flex-column">
  <label for="email" class="form-label text-muted"><h6>User Email or Name</h6></label>
  <input type="email" class=" w-100  border border-top-0 border-end-0 border-start-0 border-dark" id="email" placeholder=""/>

  <label for="Password" class="form-label text-muted mt-3 "><h6>Password</h6></label>
  <input type="Password" class="    w-100  border border-top-0 border-end-0 border-start-0 border-dark" id="Password" placeholder="" />
</div>
</div>
<h6 className="text-end text-muted">Forgot Password?</h6>
<button type="button" class="btn btn-secondary mt-3  mbt">Sign in</button>
<hr />
      <h6 className="text-center mt-5">Sign in with Google</h6> 
     <p className="text-center mt-5">New Account? <a href="" onClick={g}>Create Account</a></p>                  
                    </form>

                
                </div> 

          
            </div>


        </div>
        
        </>
    )
}