import "./aboutus.css";
import aboutUs1 from "../../Images/About-us-1.png";
import aboutUs2 from "../../Images/About-us-2.png";
import aboutUs3 from "../../Images/About-us-3.png";
import aboutUs4 from "../../Images/About-us-4.png";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs__secion-1">
        <div className="container-fluid">
          <div className="row row-1 px-5 d-flex">
            <div className="col-lg-8">
              <div className="aboutUs__content ps-5 py-5">
                <div className="text-light ps-1 title fs-1">About Us</div>
                <p className="text-light ps-1 fs-4">
                  Welcome to Clio, where timeless elegance meets modern
                  sophistication. Our brand embodies the essence of luxury,
                  offering exquisitely crafted jewelry that is designed to make
                  a statement. At Clio, we believe that every piece of jewelry
                  should be a reflection of individuality and personal style,
                  transforming ordinary moments into extraordinary memories.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aboutUs__image">
                <img
                  src={aboutUs4}
                  alt="About Us"
                  className="img-fluid d-block mx-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutUs__section-2">
        <div className="container-fluid">
          <div className="row row2">
            <div className="col-sm-5">
              <div className="ourStory__images ps-5">
                <img
                  src={aboutUs3}
                  alt="About Us"
                  className="img-fluid d-block mx-auto "
                />
                <img
                  src={aboutUs2}
                  alt="About Us"
                  className="img-fluid d-block mx-auto "
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ourStory pe-5 py-5">
                <div className="text-dark title fs-1 ">Our Story</div>
                <p className="text-dark w-80">
                  Founded with a passion for perfection, Clio was born out of a
                  desire to create jewelry that transcends trends and speaks to
                  the heart. Our journey began with a simple yet profound
                  mission: to design and produce jewelry that combines
                  unparalleled craftsmanship with the finest materials. Each
                  piece in our collection is meticulously handcrafted by skilled
                  artisans who share our dedication to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutUs__section-3">
        <div className="container-fluid p-5">
          <div className="row row3">
            <div className="col-lg-6">
              <div className="ourPhilosophy ps-5 py-5 ">
                <div className="text-dark title fs-1">Our Philosophy</div>
                <p className="text-dark w-100">
                  Luxury is not just about the materials we use or the designs
                  we create; it is about the experience we offer. At Clio, we
                  are committed to providing exceptional customer service and
                  creating a personalized experience for each of our clients. We
                  believe that the journey to finding the perfect piece of
                  jewelry should be as memorable as the moments it commemorates.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ourPhilosophy__image">
                <img
                  src={aboutUs1}
                  alt="About Us"
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
