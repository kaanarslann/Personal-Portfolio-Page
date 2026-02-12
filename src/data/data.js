


const data = {
    en: {
        headerSection: {
            lightTheme: "Light Theme",
            darkTheme: "Dark Theme",
            english: "English",
            turkish: "Türkçe",
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
        projectsSecction: {
            title: "Projects",
            intro: "I completed a six-month intensive full-stack development program, developing projects using modern front-end and back-end technologies. Here are some of the projects:",
            projects: [
                {
                    techs: ["React", "Spring Boot", "PostgreSQL"],
                    title: "E-Commerce",
                    image: "",
                    details: "A functioning e-commerce project. For global state management, Redux with Redux Thunk middleware was used to handle asynchronous data flow. Tackled full stack integration challenges like JWT authentication, CORS configuration, DTO/entity mapping and validation refactoring. Frontend deployed on Vercel, Backend deployed on Render.",
                },
                {
                    techs: ["React", "Context API", "TailwindCSS"],
                    title: "Personal Portfolio Page",
                    image: "",
                    details: "A React + Vite project. It uses Context Api to share data between components. It features language and theme change options and stores user choices to Local Storage. Success and error notifications created using Toastify."
                },
                {
                    techs: ["Java", "Spring Boot", "PostgreSQL"],
                    title: "Twitter Backend RestAPI",
                    image: "",
                    details: "A Spring Boot RestAPI project. It provides access to sources like Tweet, User, Comment via HTTP methods (GET, POST, PATCH, DELETE). It uses JPA/Hibernate to store users, tweets, comments in a relational database. It grants access to users via a token which is given to users after register and login processes.",
                },
                {
                    techs: ["Java"],
                    title: "Library System",
                    image: "",
                    details: "A Java console application. It’s a library automation system, designed with OOP principles. It follows encapsulation, composition, inheritance, polymorphism rules. It uses Collections to store book, author, reader and librarian data.",
                },
                {
                    techs: ["JavaScript", "React", "Axios"],
                    title: "Pizza SPA Project",
                    image: "",
                    details: "A React + Vite project. t uses React Router to navigate between components, Axios to post Order Form data and Cypress to test several success and fail scenarios.",
                }
            ]
        },
        aboutSection: {
            title: "About Me",
            intro: " After completing my master's degree, I took several courses and developed projects to broaden my skill set in the software field.",
            university: "İstanbyl Aydın University",
            program: "Mechanical Engineering",
            degree: "Master's Degree",
            language: "English (Advanced)",
            aboutMe: "As a result of my long-standing interest and curiosity in technology, I have decided to pursue a career in software development. After graduating from Istanbul University's Computer Programming program, I completed a six-month intensive full-stack development program, developing projects using modern front-end and back-end technologies. During this process, in addition to my technical knowledge, I also developed my rapid learning, responsibility-taking, and problem-solving skills."
        },
        skillsSection: {
            title: "Skills",
        },
        contactSection: {
            title: "Contact Me",
        },
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
        projectsSecction: {
            title: "Projeler",
            intro: "Altı aylık yoğun bir full-stack geliltirme programını tamamladım ve modern front-end ve back-end teknolojileri kullanarak projeler geliştirdim. Projelerden bazıları:",
            projects: [
                {
                    techs: ["React", "Spring Boot", "PostgreSQL"],
                    title: "E-Commerce",
                    image: "",
                    details: "İşlevsel bir e-ticaret projesi. Global state yönetimi için, asenkron veri akışını yönetmek üzere Redux Thunk middleware ile Redux kullanıldı. JWT kimlik doğrulaması, CORS yapılandırması, DTO/entity eşlemesi ve doğrulaması gibi full stack entegrasyon zorlujlarının üstesinden gelindi. Front-end Vervel, back-end ise Render üzerinden deploy edildi.",
                },
                {
                    techs: ["React", "Context API", "TailwindCSS"],
                    title: "Kişisel Portföy Sayfası",
                    image: "",
                    details: "Bir React + Vite projesi. Bileşenler arasında veri paylaşımı için Context API kullanılıyor. Dil ve tema değiştirme seçenekleri sunuyor ve kullanıcı tercihlerini Local Storage'a kaydediyor. Başarı ve hata bildirimlerini Toastify ile oluşturuyor."
                },
                {
                    techs: ["Java", "Spring Boot", "PostgreSQL"],
                    title: "Twitter Backend RestAPI",
                    image: "",
                    details: "Bir Spring Boot projesi. HTTP metotları (GET, POST, PATCH, DELETE) aracılığıyla Tweet, User, Comment gibi kaynaklara erişim sağlıyor. Kullanıcıları, tweetleri, yorumları ilişkisel veri tabanında saklamak iin JPA/Hibernate kullanıyor. Kullanıcılara kayıt ve giriş sonrası verilen bir token aracılığıyla erişim izni veriyor.",
                },
                {
                    techs: ["Java"],
                    title: "Kütüphane Sistemi",
                    image: "",
                    details: "Bir Java konsol uygulaması. Nesne yönelimli programlama prensipleriyle tasarlanmış bir kütüphane otomasyon sistemidir. Encapsulation, composition, inheritance ve polymorphism kurallarına uyar. Kitap, yazar, okuyucu ve kütüphaneci verilerini depolamak için Koleksiyonlar kullanılıyor.",
                },
                {
                    techs: ["JavaScript", "React", "Axios"],
                    title: "Pizza SPA Projesi",
                    image: "",
                    details: "Bir React + Vite projesi. Bileşenler arasında dolaşmak için React Router, sipariş formu verilerini göndermek için Axios ve çeşitli başarı / başarısızlık senaryolarını test etmek için Cypress kullanılıyor.",
                }
            ]
        },
        aboutSection: {
            title: "About Me",
            intro: "Yüksek lisansımı tamamladıktan sonra yazılım alanındaki becerilerimi genişletmek için çeşitli kurslara katıldım ve projeler geliştirdim.",
            university: "İstanbyl Aydın Üniversitesi",
            program: "Makine Mühendisliği",
            degree: "Yüksek Lisans",
            language: "İngilizce (İleri)",
            aboutMe: "Teknolojiye duyduğum uzun soluklu ilgi ve merak sonucu kariyerimi yazılım geliştirme alanında sürdürme kararı aldım. İstanbul Üniversitesi Bilgisayar Programcılığı programından mezun olduktan sonra, altı aylık yoğun bir full-stack geliştirme programını tamamlayarak modern front-end ve back-end teknolojileriyle projeler geliştirdim. Bu süreçte teknik bilgilerin yanı sıra hızlı öğrenme, sorumluluk alma ve sorun çözme becerilerimi de geliştirdim."
        },
        skillsSection: {
            title: "Yetenekler",
        },
        contactSection: {
            title: "İletişim",
        },
    }
}

export default data;