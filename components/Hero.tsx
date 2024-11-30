import Card from "./Card";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-8 ">
      {/* Row 1 */}
      <div className="flex justify-between gap-6 w-full">
        <Card 
          tital="Design" 
          num={5.0}
          pragarp="Learn the basics of UX/UI design to start your journey in the digital world."
          name="UX/UI Design 201" 
          Image={{ src: "/Design.png", alt: "Start Image" }} 
          button="Enroll Now"
          dolar={400}
        />
        <Card 
          tital="Programming" 
          num={5.0}
          pragarp="Master the fundamentals of Python programming for a solid coding foundation."
          name="Introduction to Python" 
          Image={{ src: "/Programmimg.png", alt: "Center Image" }} 
          button="Enroll Now"
          dolar={400}
        />
        <Card 
          tital="Business" 
          num={5.0}
          pragarp="Learn the art of analyzing data to make informed business decisions."
          name="Data Analysis for Beginners" 
          Image={{ src: "/Image.png", alt: "End Image" }} 
          button="Enroll Now"
          dolar={400}
        />
      </div>

      {/* Row 2 */}
      <div className="flex justify-between gap-6 w-full">
        <Card 
          tital="Design" 
          num={5.0}
          pragarp="Learn the basics of UX/UI design to start your journey in the digital world."
          name="UX/UI Design 201" 
          Image={{ src: "/Design.png", alt: "Start Image" }} 
          button="Enroll Now"
          dolar={400}
        />
        <Card 
          tital="Programming" 
          num={5.0}
          pragarp="Master the fundamentals of Python programming for a solid coding foundation."
          name="Introduction to Python" 
          Image={{ src: "/Programmimg.png", alt: "Center Image" }} 
          button="Enroll Now"
          dolar={400}
        />
        <Card 
          tital="Business" 
          num={5.0}
          pragarp="Learn the art of analyzing data to make informed business decisions."
          name="Data Analysis for Beginners" 
          Image={{ src: "/Image.png", alt: "End Image" }} 
          button="Enroll Now"
          dolar={400}
        />
      </div>
    </div>
  );
};

export default Hero;
