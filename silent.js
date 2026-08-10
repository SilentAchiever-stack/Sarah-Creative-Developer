// 1. Navbar Scroll Effect
// 1. Navbar Transformation
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Intersection Observer (Reveal on Scroll)
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Select elements to reveal
document.querySelectorAll('.skill-card, .project-card, .section-title').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    
    // Add a simple class switch
    const animate = () => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    };
    
    // Watch them
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) animate(); });
    });
    scrollObserver.observe(el);
});

const menu = document.getElementById("nav-menu");
const btn = document.getElementById("menu-icon");

btn.onclick = () => {
    menu.classList.toggle("active");
};

const projects = {

    news: {
        tag: "Personal Project",
        title: "Sarah's Perspective News",
        subtitle: "A women's rights awareness platform covering child marriage, FGM, domestic violence, and sexual assault — built to educate and advocate for vulnerable communities globally.",
        problem: "There was no single, well-designed platform bringing together awareness content on the four most critical women's rights issues in one place. Most existing sites were either outdated or hard to navigate for general audiences.",
        contribution: "Designed and built the entire platform from scratch — a hero carousel, four dedicated issue pages, a live news feed integrated via external API, and a fully responsive layout. Every page, component, and API call was written by me.",
        challenge: "Integrating a third-party news API and filtering content by topic in real time while keeping the UI clean and fast. I had to handle API rate limits and gracefully manage empty or delayed responses without breaking the layout.",
        tech: ["HTML", "CSS", "JavaScript", "News API"],
        liveUrl: "https://perspective-news-six.vercel.app/",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247781/perspective_voiuhw.jpg"
    },

    medicare: {
        tag: "Personal Project",
        title: "MediCare Hospital",
        subtitle: "A hospital web application featuring a full multi-step appointment booking system — browse specialists, select a time slot, and walk through a simulated checkout experience.",
        problem: "Most hospital websites are static and outdated, offering no real way to book appointments online. MediCare solves this by providing a guided, user-friendly booking flow that mirrors what a real system would feel like.",
        contribution: "Built the complete multi-step booking system — patient info, specialist selection, time slot picker, and a mock payment UI with card, PayPal, and insurance options. This is a UI/UX simulation; no real payment gateway is integrated. Also built the doctor profiles section, the services grid, and the contact form.",
        challenge: "Managing state across a multi-step form without a framework — keeping the user's selections persistent across steps in vanilla JS, validating each step independently, and rendering the appointment summary dynamically before the final confirmation.",
        tech: ["HTML", "CSS", "JavaScript", "Mock Payment UI"],
        liveUrl: "https://medi-care-hospital-flax.vercel.app/",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247848/WhatsApp_Image_2026-05-31_at_4.58.50_PM_1_k64jdl.jpg"
    },

    luxlab: {
        tag: "Full-Stack Project",
        title: "LuxLab",
        subtitle: "A full-stack luxury barbershop platform where heritage barbering meets modern tech — complete with authentication, appointment booking, and a MongoDB-backed client management system.",
        problem: "Premium barbershops have no digital infrastructure beyond Instagram. LuxLab provides a brand-worthy web presence with an actual booking and client management system — something most high-end barbershops in Lagos lack entirely.",
        contribution: "Built end-to-end: React frontend, Node.js/Express REST API, MongoDB database, and JWT-based user authentication. Users can register, log in, browse services, book appointments, and upload profile images. The backend handles all auth, image storage, and booking logic.",
        challenge: "Implementing image uploads securely — users needed to be able to upload and view profile photos without exposing storage credentials. I integrated cloud-based image hosting and handled upload validation, file size limits, and URL persistence in the database.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API", "Image Upload"],
        liveUrl: "https://react-luxlab-frontend.vercel.app/",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247780/WhatsApp_Image_2026-05-31_at_4.58.50_PM_2_rj3rwe.jpg"
    },

    trendverse: {
        tag: "Personal Project",
        title: "Trendverse",
        subtitle: "A premium fashion e-commerce frontend with category browsing, a curated product catalogue, and a fully functional cart — designed to deliver a high-end retail experience.",
        problem: "Building a fashion store that feels genuinely luxurious in vanilla HTML/CSS/JS — most tutorial e-commerce projects look generic. Trendverse was a challenge to create a polished, brand-worthy shopping UI without any framework.",
        contribution: "Designed and built the full UI from scratch — hero section, category grid, product cards with filtering and sorting, a working cart with quantity management and total calculation, and a responsive layout across all screen sizes.",
        challenge: "Building a fully functional cart system with real-time total updates, quantity controls, and item removal — all in vanilla JS without any state management library. Every interaction had to feel smooth and instant.",
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://trend-verse-umber.vercel.app/",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247782/WhatsApp_Image_2026-05-31_at_4.58.51_PM_fohzaq.jpg"
    },

    africana: {
        tag: "Client Work",
        title: "Africana-Swallow",
        subtitle: "A full-stack African cuisine restaurant platform built for a real client — online menu, food ordering, table reservations, and JWT-secured order management.",
        problem: "The client needed a digital presence beyond word-of-mouth — a platform where customers could browse their full menu, place orders, and book tables online. There was nothing in place before this.",
        contribution: "Built the entire platform — frontend in HTML/CSS/JS, backend in Node.js and Express, database in MongoDB, with JWT authentication securing customer accounts and order routes. Delivered a complete, client-ready product.",
        challenge: "This was client work, so requirements changed mid-build. Managing scope, communicating technical constraints clearly to a non-technical client, and still delivering a clean, functional product on time was the real test.",
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
        liveUrl: "https://african-frontend.vercel.app/africana-swallow.html",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247782/WhatsApp_Image_2026-05-31_at_4.58.51_PM_1_l727sn.jpg"
    },

    agrotech: {
        tag: "Personal Project",
        title: "AgroTech",
        subtitle: "A React agri-commerce platform connecting urban consumers directly with local farmers — browse organic produce by category, add to cart, and order for home delivery.",
        problem: "Urban Nigerians struggle to access fresh, locally-grown food. AgroTech bridges the gap between local farmers and city buyers, cutting out middlemen and making organic produce more accessible.",
        contribution: "Built the full React application — product browsing by category, cart management with React state, a clean checkout UI, and a responsive layout. Designed the component architecture to keep the app modular and easy to extend.",
        challenge: "Structuring React components to handle both the product catalogue and cart state without prop-drilling becoming unmanageable. I organised shared state cleanly to keep the app scalable as features were added.",
        tech: ["React", "CSS", "JavaScript"],
        liveUrl: "https://react-agro-tech.vercel.app/",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247781/WhatsApp_Image_2026-05-31_at_4.58.51_PM_2_uaa9fk.jpg"
    },

    music: {
        tag: "Personal Project",
        title: "Music Catalog",
        subtitle: "A React music discovery app with real-time API data — search songs, browse by genre, and enjoy a clean player UI delivering a Spotify-like experience.",
        problem: "Music discovery apps are either too complex or too plain. This project was about building a genuinely enjoyable listening and browsing experience using real API data, without a bloated tech stack.",
        contribution: "Built the full React app — API integration for live song/album/artist data, a search feature, genre-based filtering, and a music player UI. Handled async data fetching, loading states, and error boundaries throughout.",
        challenge: "Managing API response delays without the UI feeling broken — implementing proper loading skeletons and error states so the app always felt responsive, even when the data took a moment to arrive.",
        tech: ["React", "CSS", "JavaScript", "Music API"],
        liveUrl: "https://react-music-ecru.vercel.app/",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247782/WhatsApp_Image_2026-05-31_at_4.58.51_PM_3_sxlone.jpg"
    },

    calculator: {
        tag: "Personal Project",
        title: "Calculator",
        subtitle: "A clean, fully functional vanilla JS calculator — fast, minimal, and accurate, with keyboard support and proper handling of edge cases.",
        problem: "A calculator sounds simple, but building one correctly — handling operator chaining, decimal precision, division by zero, and keyboard input — requires a solid understanding of JavaScript logic and DOM manipulation.",
        contribution: "Built entirely from scratch in vanilla JS — all arithmetic logic, keyboard event listeners, display formatting, and edge case handling. No libraries, no shortcuts.",
        challenge: "Getting operator chaining right — when a user hits 5 + 3 × 2, ensuring the order of operations works correctly and that consecutive operations chain cleanly without resetting unexpectedly.",
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://calculator-ten-tan-13.vercel.app/",
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780251455/WhatsApp_Image_2026-05-31_at_7.17.12_PM_vuiogx.jpg"
    },
    
    interviewApi: {
    tag: "Personal Project",
    title: "Interview Prep Question API",
    subtitle: "A backend-only REST API powering an interview preparation platform, stores and serves a curated bank of interview questions, with role-based access so any user can browse while only admins can manage content.",
    problem: "Interview prep content is often scattered or unmoderated. This project needed a structured, secure backend where questions could be organized by topic and difficulty, browsable by any user, but only editable by trusted admin accounts — with no risk of unverified or low-quality content being added by the public.",
    contribution: "Designed and built the entire backend from scratch : authentication with email OTP verification, JWT-based login stored as httpOnly cookies, a full CRUD question bank with topic and difficulty filtering, and a dedicated role-based access control layer so write operations are restricted to admins only. Every route, middleware, and controller was written by me, then containerized and deployed independently.",
    challenge: "Keeping validation, authentication, and authorization as separate middleware layers instead of bundling role checks into each controller meant more upfront structure, but made every route easy to reason about. Deployment also surfaced issues invisible in local development — a dependency installed locally but never recorded in package.json broke on a fresh deploy, and a not-yet-finished feature file excluded via .gitignore was still being imported elsewhere, crashing the server on startup until both sides of that relationship were fixed together.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "Docker", "Render"],
    liveUrl: "https://interview-api-dd6a.onrender.com",
    githubUrl: "https://github.com/SilentAchiever-stack/Interview_Api",
    screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1786276502/interview-api-architecture-gold_tmnetg.png",
    note: "Backend-only API — no visual interface. Live URL returns raw JSON. See Postman demo video for a full walkthrough."
},

    chatApi: {
    tag: "Personal Project",
    title: "Real-Time Chat Backend API",
    subtitle: "A backend-only chat engine handling authentication, real-time messaging over WebSockets, and file sharing — the infrastructure a chat app's screen would be built on top of.",
    problem: "Building a chat feature requires more than just sending text back and forth — it needs secure authentication, instant delivery to the right recipients, and reliable file sharing, all working together without the page constantly refreshing. This project focused purely on getting that backend engine right, independent of any specific frontend.",
    contribution: "Designed and built the entire backend from scratch — email OTP-verified registration, JWT-based login via httpOnly cookies, real-time group and private messaging with typing indicators and online/offline presence over WebSockets, and file uploads (images, videos, documents) stored through a cloud file service. Containerized the app with Docker and deployed it independently.",
    challenge: "Authenticating a persistent WebSocket connection works differently from a normal HTTP request — the token has to be validated once, at the connection handshake, rather than per-request. Getting that working meant tracing a mismatch between how the client sent its token and the exact field name the server-side middleware expected. Deployment also surfaced issues invisible locally: a hardcoded port that worked on localhost broke on the hosting platform's dynamic port assignment, missing CORS configuration silently blocked requests from a separate frontend origin, and a single unhandled null value in a database lookup was enough to crash the server for every connected user — fixed by adding defensive checks throughout the real-time event handlers rather than assuming every database call succeeds.",
    tech: ["Node.js", "Express", "Socket.io", "MongoDB", "Mongoose", "JWT", "bcrypt", "Cloudinary", "Docker", "Render"],
    liveUrl: "https://chat-app-zjqi.onrender.com",
    githubUrl: "https://github.com/SilentAchiever-stack/Chat-App",
    screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1786276946/architecture-diagram-gold_wtvflk.png",
    note: "Backend-only API — no visual interface. Live URL returns raw JSON. See Postman demo video for a full walkthrough."
},
hsmApi: {
    tag: "Personal Project",
    title: "Hotel System Management API",
    subtitle: "A backend-only API modeling a full hotel operations workflow — room booking, payments, guest check-in, and admin management — with role-based access across guests, receptionists, and admins.",
    problem: "Hotel operations involve several distinct roles working together — guests booking rooms, receptionists confirming payments and checking guests in, and admins managing rooms and resolving issues. This needed a single backend that enforces who can do what, prevents double bookings, and keeps every role's data properly connected without a relational database.",
    contribution: "Designed and built the entire backend, including guest room search and booking with automatic date-overlap checking, a payment flow tied to booking status, receptionist check-in and guest lookup, and admin tools for managing hotels, rooms, and reported issues. Originally built with Prisma and PostgreSQL, then fully converted to MongoDB and Mongoose — redesigning every relationship between users, rooms, bookings, and payments to work as document references instead of foreign keys.",
    challenge: "Migrating from a relational database to MongoDB meant losing built-in relational guarantees. Preventing double bookings, for example, could no longer rely on a database constraint — it had to be checked explicitly in code, querying existing bookings for a room and comparing date ranges before confirming a new one. Every query that previously used Prisma's include for related data also had to be rewritten using Mongoose's populate, including cases where related records live in entirely separate collections.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "Cloudinary", "Docker", "Render"],
    liveUrl: "https://hsm-api.onrender.com",
    githubUrl: "",
    screenshot: "",
    note: "Backend-only API — no visual interface. Live URL returns raw JSON. See Postman demo video for a full walkthrough."
}
};

function openModal(key) {
    const p = projects[key];
    if (!p) return;

    document.getElementById('modal-tag').textContent = p.tag;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-subtitle').textContent = p.subtitle;
    document.getElementById('modal-problem').textContent = p.problem;
    document.getElementById('modal-contribution').textContent = p.contribution;
    document.getElementById('modal-challenge').textContent = p.challenge;
    document.getElementById('modal-live-btn').href = p.liveUrl;

    const techEl = document.getElementById('modal-tech');
    techEl.innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');

    const img = document.getElementById('modal-img');
    const placeholder = document.getElementById('modal-img-placeholder');
    if (p.screenshot) {
        img.src = p.screenshot;
        img.alt = p.title + ' screenshot';
        img.style.display = 'block';
        placeholder.style.display = 'none';
    } else {
        img.style.display = 'none';
        placeholder.style.display = 'flex';
    }

    document.getElementById('project-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function closeModalOutside(e) {
    if (e.target === document.getElementById('project-modal')) {
        closeModal();
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

function handleContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const note = document.getElementById('form-note');

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:olatunjisarahmorenikeji@gmail.com?subject=${subject}&body=${body}`;

    note.textContent = 'Opening your email client...';
    setTimeout(() => { note.textContent = ''; }, 4000);
}
/* window.addEventListener('load', () => {
    document.querySelectorAll('.front').forEach(video => {
        video.play().catch(error => {
            console.log('Video not playing:', error)
        })
    })
}) */
