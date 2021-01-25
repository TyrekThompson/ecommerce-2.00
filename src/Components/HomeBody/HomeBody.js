import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  '/HomepagePics/jordan-baby.jpeg',
  '/HomepagePics/jordan 1.00.jpeg',
  '/HomepagePics/jordan-offwhite-1.0.jpeg',
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
       
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        
        </div>
      </Fade>
    </div>
  )}

export default Slideshow;





// // import React from "react";
// // import Slider from "react-slick";
// // import { Link } from "react-router-dom";

// // const photos = [
// //   {
// //     name: "Photo 1",
// //     url: "/HomepagePics/Charger-Kendall-Dodge-1024xp576.jpg"
// //   },
// //   {
// //     name: "Photo 2",
// //     url: "/HomePagePics/Lamborghini-28.jpg"
// //   },
// //   {
// //     name: "Photo 3",
// //     url: "/HomePagePics/2020.jpg"
// //   },
// //   {
// //     name: "Photo 4",
// //     url: "/HomePagePics/2020-challenger-50th-anniversary-1.webp"
// //   },
// //   {
// //     name: "Photo 5",
// //     url: "/HomePagepics/photo-15551603929-6a0ccf5c91f2.webp"
// //   }
// // ]


// class HomeBody extends React.Component {
//   render() {
//     const settings = {
//       autoplay: true,
//       dots: false,
//       infinite: true,
//       fade: true,
//       speed: 500,
//       slidesToShow: 1,
//       arrows: false,
//       slidesToScroll: 1,
//       className: "slide"
//     };
//     return (
//       <div>
//         <section className="container">
//         {/* <Slider {...settings}>
//           {photos.map((photos) => {
//             return(
//               <div>
//                 <img className="slide-img" src={photos.url} alt="photos" />
//               </div>
//             )
//           })}
//         </Slider> */}
//         </section>

//    <div className="about-section">
//       <div className="inner-container">
//       <h1>About us</h1>
//         <p className="text"> Tyrek's Extoic cars !</p>
//         <Link className="homeButton" to="/Products">Products</Link>
//       </div>
//     </div>

//     <div className="contact-section">
//       <div className="inner-container">
//       <h1>Contact us</h1>
//         <p className="text">If you have any questions, feel free to contact Me !</p>
//        <Link className="homeButton" to="/Contact">Contact Us</Link>
//      </div>
//     </div>
//      </div>
//     );
//   }
// }

// export default HomeBody;
