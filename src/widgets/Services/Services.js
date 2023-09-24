import React from 'react'
import './services.css'

const Services = ()=> {
  const services = [
    {
      title: 'Mobile Application Development',
      description: 
      'Are you in search of a seasoned mobile app developer with expertise in both Flutter and React Native? Look no further! I specialize in the end-to-end creation, management, and optimization of mobile applications using these cutting-edge technologies. With a wealth of experience under my belt, I bring a deep understanding of Flutter and React Native, two of the most versatile frameworks for cross-platform mobile app development. What sets me apart is my commitment to tailoring solutions to your unique project requirements, ensuring that your app not only functions flawlessly but also stands out in terms of design and user experience.'
      ,
      icon: 'https://www.psymbolic.com/wp-content/uploads/2018/10/4.jpg',
    },
    {
      title: 'Web Development',
      description: 'If youre seeking a proficient web developer with expertise in the MERN (MongoDB, Express.js, React, and Node.js) stack, your search ends here. I specialize in delivering comprehensive web development services, harnessing the power of these cutting-edge technologies. With a strong foundation in the MERN stack, I bring a wealth of experience and knowledge to the table, ensuring that your web projects are built to excel.',
      icon: 'https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png',    
    },
    {
      title: 'Internet Of Things',
      description: 'Are you on the hunt for an experienced IoT developer proficient in Arduino and Raspberry Pi technologies? Your search has brought you to the right place. I specialize in crafting innovative IoT solutions, leveraging the power of these versatile platforms. With a solid foundation in Arduino and Raspberry Pi, I bring a wealth of expertise to the realm of IoT development, ensuring your projects are on the cutting edge of technology.',
      icon: 'https://www.apptunix.com/blog/wp-content/uploads/sites/3/2021/05/Banner_IoT.jpg',
    },
  ];

  return (
    <div className="services">
      <h1>Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.icon} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services