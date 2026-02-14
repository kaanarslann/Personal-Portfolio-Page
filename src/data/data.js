import HTML5 from "../assets/icons/html5.png";
import JavaScript from "../assets/icons/javascript.png";
import React from "../assets/icons/react.png";
import SpringBoot from "../assets/icons/springboot.png";
import TailwindCSS from "../assets/icons/tailwindcss.png";
import PostgreSQL from "../assets/icons/postgresql.png";
import ECommerce from "../assets/projectThumbnails/ecommerce.png"
import GithubPrj from "../assets/projectThumbnails/github.png"
import Pizza from "../assets/projectThumbnails/pizza.png"


const data = {
    en: {
        headerSection: {
            lightTheme: "Light Theme",
            darkTheme: "Dark Theme",
            language: "English",
            navButtons: [
                {
                    text: "Projects",
                    link: "#projects",
                },
                {
                    text: "About Me",
                    link: "#about-me",
                },
                {
                    text: "Skills",
                    link: "#skills",
                },
                {
                    text: "Contact Me",
                    link: "#contact"
                }
            ]
        },
        heroSection: {
            intro: "Hello, I'm Kaan. I have always been interested in the field of software and computer science. I am actively developing my skills to pursue a career as a Full Stack Developer.",
            heroButton: "Learn More",
            techStack: "Tech Stack I Build With",
        },
        projectsSection: {
            title: "Projects",
            projectView: "View Project",
            projectGithub: "View Github",
            intro: "I completed a six-month intensive full-stack development program, developing projects using modern front-end and back-end technologies. Here are some of the projects:",
            projects: [
                {
                    direction: "flex flex-col-reverse md:flex-row",
                    tagColor: "orange",
                    techs: ["React", "Spring Boot", "PostgreSQL"],
                    title: "E-Commerce",
                    image: ECommerce,
                    buttonType: {
                        size: "project",
                        color: "orange",
                        href: "https://e-commerce-cyan-gamma.vercel.app/"
                    },
                    details: "A functioning e-commerce project. For global state management, Redux with Redux Thunk middleware was used to handle asynchronous data flow. Tackled full stack integration challenges like JWT authentication, CORS configuration, DTO/entity mapping and validation refactoring. Frontend deployed on Vercel, Backend deployed on Render.",
                },
                {
                    direction: "flex flex-col-reverse md:flex-row-reverse",
                    tagColor: "blue",
                    techs: ["React", "Context API", "TailwindCSS"],
                    title: "Personal Portfolio Page",
                    image: GithubPrj,
                    buttonType: {
                        size: "project",
                        color: "blue",
                        href: "https://github.com/kaanarslann/Personal-Portfolio-Page"
                    },
                    details: "A React + Vite project. It uses Context Api to share data between components. It features language and theme change options and stores user choices to Local Storage. Success and error notifications created using Toastify."
                },
                {
                    direction: "flex flex-col-reverse md:flex-row",
                    tagColor: "green",
                    techs: ["Java", "Spring Boot", "PostgreSQL"],
                    title: "Twitter Backend RestAPI",
                    image: GithubPrj,
                    buttonType: {
                        size: "project",
                        color: "green",
                        href: "https://github.com/kaanarslann/Twitter-Backend"
                    },
                    details: "A Spring Boot RestAPI project. It provides access to sources like Tweet, User, Comment via HTTP methods (GET, POST, PATCH, DELETE). It uses JPA/Hibernate to store users, tweets, comments in a relational database. It grants access to users via a token which is given to users after register and login processes.",
                },
                {
                    direction: "flex flex-col-reverse md:flex-row-reverse",
                    tagColor: "red",
                    techs: ["Java", "OOP", "Collections"],
                    title: "Library System",
                    image: GithubPrj,
                    buttonType: {
                        size: "project",
                        color: "red",
                        href: "https://github.com/kaanarslann/Java-Library-OOP"
                    },
                    details: "A Java console application. It’s a library automation system, designed with OOP principles. It follows encapsulation, composition, inheritance, polymorphism rules. It uses Collections to store book, author, reader and librarian data.",
                },
                {
                    direction: "flex flex-col-reverse md:flex-row",
                    tagColor: "yellow",
                    techs: ["JavaScript", "React", "Axios"],
                    title: "Pizza SPA Project",
                    image: Pizza,
                    buttonType: {
                        size: "project",
                        color: "yellow",
                        href: "https://fsweb-s8-challenge-pizza-alpha.vercel.app/"
                    },
                    details: "A React + Vite project. t uses React Router to navigate between components, Axios to post Order Form data and Cypress to test several success and fail scenarios.",
                }
            ]
        },
        aboutSection: {
            title: "About Me",
            intro: " After completing my master's degree, I took several courses and developed projects to broaden my skill set in the software field.",
            infoTitle: "General Info",
            birthday: "Date of Birth",
            date: "14 September 1992",
            address: "Address",
            school: "School",
            university: "İstanbul Aydın University",
            program: "Mechanical Engineering",
            degree: "Master's Degree",
            language: "Language",
            languageEng: "English (Advanced)",
            aboutTitle: "About Me",
            aboutMe: "As a result of my long-standing interest and curiosity in technology, I have decided to pursue a career in software development. After graduating from Istanbul University's Computer Programming program, I completed a six-month intensive full-stack development program, developing projects using modern front-end and back-end technologies. During this process, in addition to my technical knowledge, I also developed my rapid learning, responsibility-taking, and problem-solving skills."
        },
        skillsSection: {
            title: "Skills",
            additional: ["Microsoft Office", "Debugging", "Deployment", "Problem Solving", "Teamwork"],
        },
        contactSection: {
            title: "Contact Me",
        },
        notification: "Dil Türkçe'ye ayarlandı!",
    },
    tr: {
        headerSection: {
            lightTheme: "Aydınlık Tema",
            darkTheme: "Karanlık Tema",
            language: "Türkçe",
            navButtons: [
                {
                    text: "Projeler",
                    link: "#projects",
                },
                {
                    text: "Hakkımda",
                    link: "#about-me",
                },
                {
                    text: "Yetenekler",
                    link: "#skills",
                },
                {
                    text: "İletişim",
                    link: "#contact"
                }
            ]
        },
        heroSection: {
            intro: "Merhaba, ben Kaan. Yazılım ve bilgisayar bilimleri alanına her zaman ilgi duydum. Full Stack Developer olarak bir kariyer sahibi olmak için aktif olarak yeteneklerimi geliştiriyorum. ",
            heroButton: "Daha Fazla",
            techStack: "Kullandığım Teknolojiler",
        },
        projectsSection: {
            title: "Projeler",
            projectView: "Projeye Git",
            projectGithub: "GitHub'a Git",
            intro: "Altı aylık yoğun bir full-stack geliltirme programını tamamladım ve modern front-end ve back-end teknolojileri kullanarak projeler geliştirdim. Projelerden bazıları:",
            projects: [
                {
                    direction: "flex flex-col-reverse md:flex-row",
                    tagColor: "orange",
                    techs: ["React", "Spring Boot", "PostgreSQL"],
                    title: "E-Commerce",
                    image: "",
                    buttonType: {
                        size: "project",
                        color: "orange",
                        href: "#"
                    },
                    details: "İşlevsel bir e-ticaret projesi. Global state yönetimi için, asenkron veri akışını yönetmek üzere Redux Thunk middleware ile Redux kullanıldı. JWT kimlik doğrulaması, CORS yapılandırması, DTO/entity eşlemesi ve doğrulaması gibi full stack entegrasyon zorlujlarının üstesinden gelindi. Front-end Vervel, back-end ise Render üzerinden deploy edildi.",
                },
                {
                    direction: "flex flex-col-reverse md:flex-row-reverse",
                    tagColor: "blue",
                    techs: ["React", "Context API", "TailwindCSS"],
                    title: "Kişisel Portföy Sayfası",
                    image: "",
                    buttonType: {
                        size: "project",
                        color: "blue",
                        href: "#"
                    },
                    details: "Bir React + Vite projesi. Bileşenler arasında veri paylaşımı için Context API kullanılıyor. Dil ve tema değiştirme seçenekleri sunuyor ve kullanıcı tercihlerini Local Storage'a kaydediyor. Başarı ve hata bildirimlerini Toastify ile oluşturuyor."
                },
                {
                    direction: "flex flex-col-reverse md:flex-row",
                    tagColor: "green",
                    techs: ["Java", "Spring Boot", "PostgreSQL"],
                    title: "Twitter Backend RestAPI",
                    image: "",
                    buttonType: {
                        size: "project",
                        color: "green",
                        href: "#"
                    },
                    details: "Bir Spring Boot projesi. HTTP metotları (GET, POST, PATCH, DELETE) aracılığıyla Tweet, User, Comment gibi kaynaklara erişim sağlıyor. Kullanıcıları, tweetleri, yorumları ilişkisel veri tabanında saklamak iin JPA/Hibernate kullanıyor. Kullanıcılara kayıt ve giriş sonrası verilen bir token aracılığıyla erişim izni veriyor.",
                },
                {
                    direction: "flex flex-col-reverse md:flex-row-reverse",
                    tagColor: "red",
                    techs: ["Java", "OOP", "Collections"],
                    title: "Kütüphane Sistemi",
                    image: "",
                    buttonType: {
                        size: "project",
                        color: "red",
                        href: "#"
                    },
                    details: "Bir Java konsol uygulaması. Nesne yönelimli programlama prensipleriyle tasarlanmış bir kütüphane otomasyon sistemidir. Encapsulation, composition, inheritance ve polymorphism kurallarına uyar. Kitap, yazar, okuyucu ve kütüphaneci verilerini depolamak için Koleksiyonlar kullanılıyor.",
                },
                {
                    direction: "flex flex-col-reverse md:flex-row",
                    tagColor: "yellow",
                    techs: ["JavaScript", "React", "Axios"],
                    title: "Pizza SPA Projesi",
                    image: "",
                    buttonType: {
                        size: "project",
                        color: "yellow",
                        href: "#"
                    },
                    details: "Bir React + Vite projesi. Bileşenler arasında dolaşmak için React Router, sipariş formu verilerini göndermek için Axios ve çeşitli başarı / başarısızlık senaryolarını test etmek için Cypress kullanılıyor.",
                }
            ]
        },
        aboutSection: {
            title: "Hakkımda",
            intro: "Yüksek lisansımı tamamladıktan sonra yazılım alanındaki becerilerimi genişletmek için çeşitli kurslara katıldım ve projeler geliştirdim.",
            infoTitle: "Genel Bilgiler",
            birthday: "Doğum Tarihi",
            date: "14 Eylül 1992",
            address: "Adres",
            school: "Okul",
            university: "İstanbul Aydın Üniversitesi",
            program: "Makine Mühendisliği",
            degree: "Yüksek Lisans",
            language: "Dil",
            languageEng: "İngilizce (İleri)",
            aboutTitle: "Hakkımda",
            aboutMe: "Teknolojiye duyduğum uzun soluklu ilgi ve merak sonucu kariyerimi yazılım geliştirme alanında sürdürme kararı aldım. İstanbul Üniversitesi Bilgisayar Programcılığı programından mezun olduktan sonra, altı aylık yoğun bir full-stack geliştirme programını tamamlayarak modern front-end ve back-end teknolojileriyle projeler geliştirdim. Bu süreçte teknik bilgilerin yanı sıra hızlı öğrenme, sorumluluk alma ve sorun çözme becerilerimi de geliştirdim."
        },
        skillsSection: {
            title: "Yetenekler",
            additional: ["Microsoft Office", "Hata Ayıklama", "Dağıtım", "Problem Çözme", "Takım Çalışması"],
        },
        contactSection: {
            title: "İletişim",
        },
        notification: "Language is set to English!",
    },
    base: {
        name: "Kaan Arslan",
        techStack: [
            {
                text: "JavaScript",
                logo: JavaScript,
            },
            {
                text: "React.js",
                logo: React,
            },
            {
                text: "HTML5",
                logo: HTML5,
            },
            {
                text: "TailwindCSS",
                logo: TailwindCSS,
            },
            {
                text: "Spring Boot",
                logo: SpringBoot,
            },
            {
                text: "PorstgreSQL",
                logo: PostgreSQL,
            },
        ],
        address: "Sancaktepe, İstanbul",
        frontEnd: ["JavaScript", "HTML", "CSS", "React.js", "React Redux", "Context API", "Cypress", "Axios", "TailwindCSS", "Toastify"],
        backEnd: ["OOP", "Java", "Spring Boot", "C#", "PostgreSQL", "Microsoft SQL", "RestAPI", "Postman", "Maven", "Mockito"],
    }
}

export default data;