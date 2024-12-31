import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "Reactjs", percentage: 85 },
    { name: "CodeIgniter", percentage: 85 },
    { name: "laravel", percentage: 80 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Tailwind", percentage: 82 },
    { name: "Javascript", percentage: 84 },
    { name: "MYSQL", percentage: 85 },
    { name: "Firebase", percentage: 75 },
    { name: "NodeJS", percentage: 75 },
    { name: "Midtrans", percentage: 76 },
  ];

  // Custom Arrows
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div
        className="custom-arrow custom-left-arrow"
        onClick={onClick}
        style={{
          position: "absolute",
          left: "10px", // Atur posisi di dalam carousel
          top: "60%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1000, // Pastikan muncul di atas elemen lain
        }}
      >
        <FaArrowLeft size={30} color="black" /> {/* Warna panah cerah */}
      </div>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <div
        className="custom-arrow custom-right-arrow"
        onClick={onClick}
        style={{
          position: "absolute",
          right: "10px", // Atur posisi di dalam carousel
          top: "60%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1000, // Pastikan muncul di atas elemen lain
        }}
      >
        <FaArrowRight size={30} color="black" />
      </div>
    );
  };

  return (
    <section
      className="skill"
      id="skills"
      style={{ backgroundColor: "rgb(171, 126, 58)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="skill-bx wow zoomIn"
              style={{ backgroundColor: "rgb(235, 220, 197)" }}
            >
              <h2>Skills</h2>
              <p>
                Some skills that I have. And I am still improving this skills.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <h5>{skill.name}</h5>
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={{
                        root: { width: "100px", height: "100px" },
                        path: { stroke: "#5d1049" },
                        text: { fill: "#5d1049", fontSize: "16px" },
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
