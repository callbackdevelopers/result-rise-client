/* eslint-disable jsx-a11y/anchor-is-valid */
import TeamCard from "./TeamCard";

function OurTeam() {
    const cardData = [
        {
            id: 1,
            name: "Mahbubur Rahman",
            title: "Team Leader",
            image: "https://i.ibb.co/rfXmXbX/mahbub.jpg",
            description:
                " I am a MERN Stack Developer with builds and maintains responsive websites in the recruiting industry. Proficient in JavaScript, HTML, CSS, Bootstrap, React Bootstrap, Tailwind CSS, React.js, Node.js, Express.js, MongoDB; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of MERN Stack Development. ",
            icon: 'https://www.facebook.com/mahbubur.rahman.dev',
            linkedin: 'https://www.linkedin.com/in/mahbubur-rahman-1003121b8/',
            bgClass: "bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900",
        },
        {
            id: 2,
            name: "Shakeebul Islam",
            title: "Team Member",
            image: "https://i.ibb.co/61X6KfV/shakeb.jpg",
            description:
                "I am a recent CSE graduate with expertise in JavaScript, React, MongoDB, and Express, complemented by a web development course. I aspire to utilize my skills and knowledge to contribute to dynamic projects and grow as a professional. ",
            icon: 'https://www.facebook.com/mdshakeebltd/',
            linkedin: 'https://www.linkedin.com/in/mdshakeeb/?fbclid=IwAR0yE7Remf6daiRI3kjYxepycn_7ayA313By6F-AOzzmo2fhwJVqQjqOhss',
            bgClass: "bg-gray-600  hover:bg-gray-800",
        },
        {
            id: 3,
            name: "Akm Syful Alom",
            title: "Team Member",
            image: " https://i.ibb.co/tDyc4Lm/syful.jpg",
            description:
                "Dedicated and efficient Full-stack Web Applications Developer with 2-year experience in Web Applications Developer.So much passionate about coding, designing, and developing. I always love coding.Working with Reactjs, Nodejs, MongoDB, Express js, and various different technologies.I am always excited to explore new technologies which help to enrich my knowledge",
            icon: 'https://www.facebook.com/akmsyful',
            linkedin: 'https://www.linkedin.com/in/akmsyful/?fbclid=IwAR3kEUxDPBMVgNUSMmwD9l7sMh0QUW-MJcq9nqGmIfRtL-ODayo9y4ByNsQ',
            bgClass: "bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-600",
        },
        {
            id: 4,
            name: "Md. Rajikul Islam",
            title: "Team Member",
            image: "https://i.ibb.co/yNZfQhG/rajikul-2.jpg",
            description:
                "Dedicated And Efficient Frontend Developer Working With Javascript, Node Js, and React Js. I`m a fast learner and Can Quickly integrate into the team so I can provide valuecompanyand the customers..",
            icon: 'https://www.facebook.com/rajikul.is.rajib',
            linkedin: 'https://www.linkedin.com/in/md-junaidul-islam/?fbclid=IwAR2E_-WUhXS7Jk1WVCr22BBmlOrJxa5AyAol1u0IGooj_hU6NbDImKrxKI0',
            bgClass: "bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900",
        },
        {
            id: 5,
            name: "Jahirul Islam",
            title: "Team Member",
            image: "https://i.ibb.co/4wbPzWz/jahirul.jpg",
            description:
                "Am a Front-end Developer. I have knowledge & experience on JavaScript, React, HTML5, CSS3, Bootstrap 5, Tailwind CSS, daisyUI, WordPress, JWT, google firebase, GitHub, Figma, and Netlify.",
            icon: 'https://www.facebook.com/jahirulislam200',
            linkedin: 'https://www.linkedin.com/in/dev-jahirul-islam/',
            bgClass: "bg-gray-600  hover:bg-gray-800",
        },
        {
            id: 6,
            name: "Md. Junaidul Islam",
            title: "Team Member",
            image: "https://i.ibb.co/x6V9X12/junaidul.jpg",
            description:
                "Throughout my academic career, I spent the majority of my time learning technological skills. I developed analytical and creative thinking skills while working on academic and extracurricular activities which I hope will help me do things more efficiently, and I enjoy learning new technology.",
            icon: 'https://www.facebook.com/junaaid96/',
            linkedin: 'https://www.linkedin.com/in/md-junaidul-islam/?fbclid=IwAR2E_-WUhXS7Jk1WVCr22BBmlOrJxa5AyAol1u0IGooj_hU6NbDImKrxKI0',
            bgClass: "bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-600",
        },
    ];


    return (
        <div className="p-10 bg-white">
            <h1 className="text-center text-3xl font-bold">Our Team</h1>
            <p className="text-center mt-1">The callback developers' team</p>

            <div className="flex justify-center">
                <div className="grid mt-8 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card) => (
                        <TeamCard key={card.id} card={card}></TeamCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurTeam;





