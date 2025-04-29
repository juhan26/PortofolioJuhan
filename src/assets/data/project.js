import { jumovie, todoapp, bookshelf, midtrans, rentalmobil, perpus, kontrakan, desa, sinargemilang, btix, charity, organizerBtix} from ".."

export const project = [
    {
        name: "Btix - Plaform Ticketing Online",
        img: btix,
        desc: "A modern web-based ticketing platform that allows Event Organizers to create and manage events, while Buyers can easily browse, book, and pay for tickets. The platform includes QR code e-ticket generation and seamless payment integration.",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Midtrans API",
            "QR Code Generator"
        ],
        github: "", 
        web: "https://btix.co.id/"
    },
    {
        name: "Btix Organizer - Event Management Panel",
        img: organizerBtix, 
        desc: "An intuitive dashboard interface for Event Organizers on the Btix platform. This admin panel allows organizers to create, edit, and monitor events, manage ticket types and quotas, view sales analytics, and scan attendee tickets using QR code verification.",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Midtrans API",
            "QR Code Scanner",
        ],
        github: "", 
        web: "https://organizer.btix.co.id/" // ganti jika URL-nya berbeda
    },    
    {
        "name": "NBDCHARITY - Donation Management System",
        "img": charity,
        "desc": "A charitable initiative supporting orphans through community-based programs, providing essential resources and educational support to improve their quality of life and future opportunities.",
        "tech": [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Payment Gateway Integration",
            "Donation Management System"
        ],
        "github": "https://github.com/juhan26/image-uploader", 
        "web": "https://sender.juhndaa.my.id/" // Replace with your actual website if available
    },    
    // {
    //     name: "E-Commerce Distribution Product",
    //     img: sinargemilang,
    //     desc: "This web application features a landing page that includes Ecommerce and can integration to Whatsapp with Messages. The messages bring item, item price and Link for the Product Item. The web applications also includes a Home (Beranda) page & Product (Product) page. And also this web application using WordPress with Woocommerce plugin, and a little code concoction to integrate via Whatsapp.",
    //     tech: [
    //         "Wordpress",
    //         "PHP",
    //         "Corpiva Template",
    //         "Woocommerce Plugin",
    //         "Responsive Design",
    //         "Whatsapp Integration with Messages"
    //     ],
    //     github: "https://github.com/juhan26/cvsinargemilanglombok", 
    //     web: "https://www.cvsinargemilanglombok.my.id/"
    // },
    {
        name: "Manajemen Kontrakan (Mini Project)",
        img: kontrakan,
        desc: "This web application features a landing page that includes sections for Properties Page, an About Us page, and feedback from tenants who have an account. The web application also includes a CMS to manage the content on the landing page, along with a feature to pay rent from the start date to the end date of the contract.",
        tech: [
            "Laravel",
            "PHP",
            "Bootstrap",
            "Tailwind",
            "TiltJS",
            "GeoCode",
            "Google MAPS",
            "Blade",
            "DropzoneJS",
            "Javascript",
            "HTML5",
            "CSS3",
        ],
        github: "https://github.com/juhan26/miniKontrakan", 
        web: ""
    },
    {
        name: "Desa Genggelang (PlayIT Competition)",
        img: desa,
        desc: "This website contains information about Ganggelang Village, starting from location, culture, MSMEs, tourist attractions, village potential, village profile and history.",
        tech: [
            "React JS",
            "Tailwind",
            "Framer Motion",
            "Aceternity UI",
        ],
        github: "https://github.com/juhan26/playit-competition", 
        web: "https://desa-genggelang.vercel.app"
    },
    {
        name: "Sistem Perpustakaan",
        img: perpus,
        desc: "This web application allows you to create, manage, and save your library data effortlessly, all while enjoying a beautiful user interface design.",
        tech: [
            "Laravel",
            "PHP",
            "Bootstrap",
            "Javascript",
            "HTML5",
            "CSS3",
        ],
        github: "https://github.com/juhan26/LaravelPerpus", 
        web: ""
    },
    {
        name: "Rental Mobil",
        img: rentalmobil,
        desc: "This web application allows you to create, manage, and save your rental data effortlessly, all while enjoying a beautiful user interface design.",
        tech: [
            "PHP",
            "Bootstrap",
            "Javascript",
            "HTML5",
            "CSS3",
        ],
        github: "https://github.com/juhan26/RentalMobil", 
        web: "" 
    },
    {
        name: "Todoapp",
        img: todoapp,
        desc: "This Webapps allows users to create, manage, and save todos, all while enjoying a beautiful user interface design.",
        tech: [
            "HTML5",
            "Tailwind",
            "Javascript",
            "Local Storage",
        ],
        github: "https://github.com/juhan26/todo-app", 
        web: "https://jutodo-app.vercel.app/" 
    },
    {
        name: "Bookshelf Apps",
        img: bookshelf,
        desc: "This Webapps allows users to create, manage, and save books.",
        tech: [
            "HTML5",
            "CSS3",
            "Javascript",
            "Local Storage",
        ],
        github: "https://github.com/juhan26/bookshelf-apps", 
        web: "https://jubookshelf-apps.vercel.app/" 
    },
    {
        name: "Jumovie",
        img: jumovie,
        desc: "This is my website and I developed during our study at SMKN 2 Mataram as Member. It can be used to search for searching Movie, Rating.",
        tech: [
            "React JS",
            "OMDB API",
        ],
        github: "https://github.com/juhan26/Jumovie", 
        web: "https://jumovie.vercel.app/" 
    },
    {
        name: "Payment Gateway Midtrans",
        img: midtrans,
        desc: "Can be used to create 'testing' transactions (usually performed from your development/testing environment). All transaction made within this environment mode is not 'real', and does not require 'real paymentfund'. You can simulate a test-payment via Sandbox Simulator to change the payment status, as if it has been paid. This environment is created automatically when you are signing up, and free to use.",
        tech: [
            "NextJS",
            "NodeJS",
            "Javascript",
        ],
        github: "https://github.com/juhan26/paymentgateway-midtrans", 
        web: "" 
    },
]