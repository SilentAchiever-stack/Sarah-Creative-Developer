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
        screenshot: "https://res.cloudinary.com/doqevvxhi/image/upload/v1780247783/WhatsApp_Image_2026-05-31_at_4.58.52_PM_vrmzpb.jpg"
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
/* window.addEventListener('load', () => {
    document.querySelectorAll('.front').forEach(video => {
        video.play().catch(error => {
            console.log('Video not playing:', error)
        })
    })
}) */
