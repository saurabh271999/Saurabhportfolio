import React from "react";

const About = () => {
  return (
    <div className="bg-[#131C2F] flex items-center justify-center flex-col">
      <h1 className="text-white text-5xl font-bold mt-10">About ME</h1>
      <p className="text-white text-center mt-10 text-2xl">
        Full-stack developer with 3+ years of experience in building scalable <br />
        web applications. Passionate about creating efficient, maintainable code <br />
        and delivering exceptional user experiences. Expertise in React,
        <br /> and cloud-native architectures.
      </p>
      <div className="text-white relative m-10 flex gap-5 flex-wrap md:flex-col0
      ">
        <p>Location: Noida, India</p>
       <a href=""> <p className="hover:text-blue-600">Email: saurabhpandat27@gmail.com</p></a>
       <a href=""> <p className="hover:text-blue-600">Linkdin</p></a>
       <a href=""> <p className="hover:text-blue-600">Github</p></a>
       <a href=""> <p className="hover:text-blue-600">Twitter</p></a>
      </div>
    </div>
  );
};

export default About;
