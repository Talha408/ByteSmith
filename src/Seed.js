import Web from "./Assets/Icons/web.png";
import SEO from "./Assets/Icons/SEO.png";
import ECommerce from "./Assets/Icons/ECommerce.png";
import UI from "./Assets/Icons/UI.png";
import Apps from "./Assets/Icons/app.png";

let CompanyName = "ByteSmith";
export let pages = [
  ["Home", "About", "Projects", "Contact"],
  ["/ByteSmith/", "/ByteSmith/about", "/ByteSmith/projects", "/ByteSmith/contact"],
];
export let services = [
  {
    title: "Web Development",
    description: `${CompanyName} crafts responsive, scalable, and secure websites tailored to your business needs. `,
    img: Web,
  },
  {
    title: "SEO Optimization",
    description: `${CompanyName} boosts your online presence with advanced SEO strategies.`,
    img: SEO,
  },
  {
    title: "E-Commerce",
    description: `${CompanyName} transforms your business with comprehensive e-commerce solutions.`,
    img: ECommerce,
  },
  {
    title: "UI/UX",
    description: `${CompanyName} enhances user experience with innovative UI/UX design services.`,
    img: UI,
  },
  {
    title: "Mobile Apps",
    description: `${CompanyName} brings your ideas to life with custom mobile apps.`,
    img: Apps,
  },
];
const aboutUsContent = {
  about:
    "Welcome to ByteSmith where innovation meets functionality. We are a dedicated team of developers and designers passionate about creating impactful digital solutions. Our diverse portfolio reflects our commitment to excellence and our ability to tackle complex challenges across various domains.",
  projects: [
    {
      title: "Punjabi Cuisine",
      description:
        "Dive into the vibrant world of Punjabi flavors with our user-centric platform that brings traditional dishes to your table. Our project showcases our expertise in combining rich culinary experiences with modern web practices, ensuring a seamless and engaging customer experience.",
    },
    {
      title: "HealthTechSport",
      description:
        "Addressing the challenges of sedentary lifestyles in the digital age, HealthTechSport is our holistic approach to promoting physical well-being through technology. Our platform integrates fitness solutions with job creation opportunities, showcasing our commitment to enhancing quality of life and supporting economic development.",
    },
    {
      title: "Mughal Labs",
      description:
        "Revolutionizing healthcare diagnostics, Mughal Labs stands as a testament to our ability to merge technology with healthcare. With features like online reports and home sampling, our project emphasizes user convenience and transparency, reflecting our dedication to improving patient care.",
    },
    {
      title: "TaskTrek",
      description:
        "Streamline your project management with TaskTrek, our innovative solution for team collaboration and task tracking. Designed with modern technology and responsive design principles, TaskTrek highlights our focus on enhancing productivity and efficiency in dynamic work environments.",
    },
    {
      title: "HospitalRun",
      description:
        "We have contributed in an Open-source hospital management system is tailored for resource-limited settings, providing essential tools for medical facilities to manage operations and patient care efficiently. HospitalRun demonstrates the commitment to making healthcare management accessible and effective, even in challenging environments.",
    },
    {
      title: "Hotel Tourists Inn",
      description:
        "Experience a virtual stay at Hotel Tourists Inn with our immersive and interactive platform. By showcasing the hotel's offerings through engaging design and intuitive navigation, this project underscores our ability to create compelling digital experiences that enhance user engagement and brand presence.",
    },
  ],
  closing:
    "At CodeCrafters, we leverage a modern tech stack and innovative design principles to build solutions that not only meet but exceed client expectations. Our projects reflect our dedication to quality, user experience, and technological excellence. We are excited to explore new opportunities and collaborate on projects that drive meaningful impact. Thank you for visiting us. We invite you to explore our work and connect with us to discuss how we can bring your vision to life.",
};

export default aboutUsContent;