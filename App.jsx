import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Pause,
  Phone,
  Play,
  Search,
  X,
} from "lucide-react";

import "./index.css";

gsap.registerPlugin(ScrollTrigger);
const kitchenImages = [
  "/images/scenes/kitchen-01.jpg",
  "/images/scenes/kitchen-02.jpg",
  "/images/scenes/kitchen-03.jpg",
  "/images/scenes/kitchen-04.jpg",
  "/images/scenes/kitchen-05.jpg",
  "/images/scenes/kitchen-06.jpg",
  "/images/scenes/kitchen-07.jpg",
  "/images/scenes/kitchen-08.jpg",
  "/images/scenes/kitchen-09.jpg",
  "/images/scenes/kitchen-10.jpg",
  "/images/scenes/kitchen-11.jpg",
  "/images/scenes/kitchen-12.jpg",
];

const productImages = [
  "/images/products/food-truck.jpg",
  "/images/products/train-theme-restaurant.jpg",
  "/images/products/cooking-range.jpg",
  "/images/products/refrigerator-range.jpg",
  "/images/products/display-range.jpg",
  "/images/products/table-trolley-range.jpg",
  "/images/products/washing-range.jpg",
  "/images/products/dining-range.jpg",
  "/images/products/bakery-range.jpg",
  "/images/products/storage-range.jpg",
  "/images/products/food-serving-range.jpg",
  "/images/products/bar-range.jpg",
  "/images/products/site-work.jpg",
  "/images/products/miscellaneous.jpg",
];

const products = [
  {
    id: 1,
    name: "Food Truck",
    category: "Food Truck",
  },
  {
    id: 2,
    name: "Train Theme Restaurant",
    category: "Train Theme Restaurant",
  },
  {
    id: 3,
    name: "Cooking Range",
    category: "Cooking",
  },
  {
    id: 4,
    name: "Refrigerator Range",
    category: "Refrigeration",
  },
  {
    id: 5,
    name: "Display Range",
    category: "Display",
  },
  {
    id: 6,
    name: "Table & Trolley Range",
    category: "Tables & Trolleys",
  },
  {
    id: 7,
    name: "Washing Range",
    category: "Washing",
  },
  {
    id: 8,
    name: "Dining Range",
    category: "Dining",
  },
  {
    id: 9,
    name: "Bakery Range",
    category: "Bakery",
  },
  {
    id: 10,
    name: "Storage Range",
    category: "Storage",
  },
  {
    id: 11,
    name: "Food Serving Range",
    category: "Food Serving",
  },
  {
    id: 12,
    name: "Bar Range",
    category: "Bar",
  },
  {
    id: 13,
    name: "Site Work",
    category: "Site Work",
  },
  {
    id: 14,
    name: "Miscellaneous",
    category: "Miscellaneous",
  },

].map((product) => ({
  ...product,
  image: productImages[product.id - 1],
}));

const productCategories = [
  ...new Set(products.map((product) => product.category)),
];

const industries = [
  {
    name: "Sweet Shops",
    type: "01 / FOOD RETAIL",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72tSA8-Y049hqWEpmxQvXfYo6_AVyiZeBzWUC9aIVIw6BmqsMLFfn8sY9XujK2O7z_5nGy0fl38BE8gHg0yR9qlUh2zhJVcYbv-ZbF38t2OfbWdN-1msvrgxEwzyVZrFjBtma-d3P1cdPvsnpGInhTm2nefr-Kw0rz7elLNhVqNg1fN0O5pfHuv0vWYZYPjwM1BGM5Jyo6PEp5TEV9rKHkp5kHQd7IQQwXTjzbdl6MY=w1280",
  },
  {
    name: "Bakeries",
    type: "02 / BAKING",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72sqKdlTV2TJzcCohQLA2SWxn7Qxg87uaS21tWCwhLResmyCd7pCn_BgNGVEemGrqwp_TvmXFp_XFMGy2X6OJ7pGHIE4b8778nz30__KF1vUgawQkfNZPfPaSyZqtrUjvzNDoFSx3mddIewuOfjIkUZqiQln_YGE3zDlZA3tXHDKBgqgFZ-PKtdoqXNzLFvxL3aMuDOdGhfOwDbJbdXcRRewhr-erKr_57mKGuFe=w1280",
  },
  {
    name: "Restaurants",
    type: "03 / FOOD SERVICE",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72twQzZKuG6ZqGg8QBDFNYkc0HDe4b7YeY7uAOzUhrle75yiMm20X9JnOiPZXMaFGacHOH3jTJfmey4swVuGt3F9Z5K-YVRlzCHCyb61foDla3fMCEpcEoPQLKqo5GH0mvINm1yI1SILDA5De9LeOsI2XXaWqmiCbSSwqD1GCf22zpyykUvqkj5AUiuMYq_nzIakMv17QDfudUy0bwFvbjuMhf9rxU3X9GZd0sj4xvE=w1280",
  },
  {
    name: "Food Courts",
    type: "04 / HOSPITALITY",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72vtmrzq7AlE7vjHfOwmbSp28fCePwEPXtcj-gOzQg_yYktdp1HdR710B318reAh8euMQmnLn4-mlDGRpQoNvFw9K0x-EZoJcuMG_kX2tNDZl-EsDtfvlndGUD-aBlMcSxaIBIyOkTX9_fB_fd6TQ0pTY4wjGMo6ZD3EkSXLhJoCnxqo9hTW6XrB6NT0fpH0N1HgFibBJGAb-62sxLroEuswgDvCSzFEVgldnFuvqTs=w1280",
  },
  {
    name: "Industrial Canteens",
    type: "05 / INDUSTRIAL",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72skXL8dMCzD68T6vdlytRNGej9abTrcRjXfYs5U5ti8SRJBzBNjEXIBvF96_CGVnOeLTmE_y2tFCUDGh8r8l66zPDlsFExI5g0_zrCQMQqCaNhbl6et5cOzSWXAGwTpO_UbfiqPaSjp9ugDGWO8JqJ8wI4_86WKpjsdgOQNW-Mw7KHpTGvVBbMi8uB0sb5vDCvOkmxHhI0tDFPW-2Jt8lB929f8rRT7NrgclwEFMuc=w1280",
  },
  {
    name: "Fast Food Outlets",
    type: "06 / QUICK SERVICE",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72sd3Rs2Wjg6hwZaz9Fmv33pJml2QE1MhmFN6vbz8VstQJ0khlINeCsZcrveEZQuV3NTYGtp6DzHKisLEF5SxVFZDLFRll-TlrOf-DGJKwfbD7hSlwEo2X2DJwb_D_TPGpro2gP0r2U9fYoRDgYMY_GhfFNuHCeIEnOMXus0uYejqNSqvtrZFslSgOj9UvLG9ot1yZupQ3vCEd65eaB7JWpHFAhwUpl_EoCyTKuWKBA=w1280",
  },
  {
    name: "Hotels",
    type: "07 / HOSPITALITY",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72v0ZRS9JOFrp4mTfZWdX6FU66zbWerk3msEpJZBDz3DssmLjBcRG-LCiYFu7_eXVEwdeW75bKmVYAx1kbEBIjiiinpMNZp5eh0qKc8zwHU3_5XYjmNo2gtxEFV_d9tj-g7NrYekkbhsh-8W2IHYlwU04ha1Lj3tbWxvAUdkrWhJnYPs3Lo4gdyujK_Omodnfb_Ll-fkhWl2fT7jCGNH7eoCr8s36G8z7iCUgalJfzU=w1280",
  },
  {
    name: "Hospitals",
    type: "08 / HEALTHCARE",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72s79Oe75UeuZc5uEJWu__Sa8egEHysbokJch9MI8T6IU2mTf_3IVWpIO0WeSFAoUVbP8Zrv98KdINZksA2eWpi8auor5kWmU21p7zbRiuOcZjOr1sSdZlnGPUpFg9RclgGP2oz9MHzam2bW4m3l6pHbI0gVBb64NeXcbfKYbzj3RwRn_F752cKtxlNim8gnPYPsZXwjdjW1SZoC6UuhyJ2wzZ9c2GaoDHhtkJ8Ikxs=w1280",
  },
  {
    name: "Institutional Canteens",
    type: "09 / INSTITUTIONAL",
    image:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72tO6269of8XNNrrS60HalC3tYqBb9LiDfjN3xMOAJ8g0zkBjm_zb06y1hatDRte0anbj2PxY_tTJiq4hCC4dyXeqqFZGF2prodgHTB0dSoA3UCXvH_yskuS6qveZuJfLMIO1X4-RNb-A-dcKFEK5GJ2rZlJ6IOGeOgBytbE0UGc9mbo_PfhqNvTecP=w1280",
  },
];

const swmProductImage = "/images/products/swm.png";

const moreSolutions = [
  {
    name: "Ice Cream Machine Setup",
    description:
      "Glycole freezers, churners, lolly tanks, trolleys, E-karts, and freezer carts for ice cream operations.",
    image: "/images/products/ice-cream-machine.jpg",
    href: "https://www.kitchkraft.in/ice-cream-machine",
  },
  {
    name: "Industrial Machinery",
    description:
      "Browse machinery for food processing, packaging, and other industrial applications.",
    image: "/images/products/industrial-machinery.jpg",
    href: "https://www.kitchkraft.in/industrial-machinery",
  },
];

const projectSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Discuss your space, requirements, and goals with the Kitchkraft team.",
  },
  {
    number: "02",
    title: "Design & planning",
    description:
      "Plan a functional layout that makes the best use of your available space and workflow.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Build custom equipment to the approved design using suitable materials and machinery.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Coordinate delivery, setup, testing, and commissioning at your site.",
  },
  {
    number: "05",
    title: "Training & support",
    description:
      "Get guidance on equipment operation and maintenance, with ongoing support.",
  },
  {
    number: "06",
    title: "Continuous improvement",
    description:
      "Keep improving functionality and performance as technology and needs evolve.",
  },
];

const credentials = [
  "ISO 9001",
  "MSME / Udyam",
  "GeM Government Seller",
  "Trademark",
  "Startup India",
  "Startup Bihar",
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(false);
  const heroVideoRef = useRef(null);
  const heroVideoManuallyPausedRef = useRef(false);
  const productModalRef = useRef(null);
  const modalCloseButtonRef = useRef(null);
  const restoreModalFocusRef = useRef(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [productSearch, setProductSearch] = useState("");
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const searchTerm = productSearch.trim().toLowerCase();
    const matchesSearch =
      !searchTerm ||
      `${product.name} ${product.category}`.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setIsScrolled(window.scrollY > 24);
        setScrollProgress(
          scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0,
        );
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!selectedProduct) {
      return undefined;
    }

    const previouslyFocusedElement = document.activeElement;
    restoreModalFocusRef.current = true;
    modalCloseButtonRef.current?.focus();

    const handleModalKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = productModalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleModalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleModalKeyDown);
      if (
        restoreModalFocusRef.current &&
        previouslyFocusedElement instanceof HTMLElement
      ) {
        previouslyFocusedElement.focus();
      }
      restoreModalFocusRef.current = true;
    };
  }, [selectedProduct]);

  // GSAP Animation

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const animation = gsap.context(() => {
      // About Heading Animation

      gsap.from(".about h2", {
        y: 100,
        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
        },
      });

      // About Paragraph Animation

      gsap.from(".about-right p", {
        x: 100,
        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
        },
      });

      // Contact Animation

      // Industries Animation

      gsap.from(".industry-card", {
        y: 100,

        opacity: 0,

        duration: 1,

        stagger: 0.2,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".industries-grid",

          start: "top 80%",
        },
      });

      gsap.from(".contact-heading", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-inner",
          start: "top 75%",
        },
      });

      gsap.from(".contact-form", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-inner",
          start: "top 75%",
        },
      });
    });

    return () => animation.revert();
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) {
      return undefined;
    }

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const syncVideoMotion = () => {
      if (
        motionPreference.matches ||
        heroVideoManuallyPausedRef.current
      ) {
        video.pause();
        return;
      }

      video.play().catch((error) => {
        if (error.name !== "NotAllowedError") {
          console.error("Unable to play the hero background video.", error);
        }
      });
    };

    motionPreference.addEventListener("change", syncVideoMotion);
    syncVideoMotion();

    return () => {
      motionPreference.removeEventListener("change", syncVideoMotion);
    };
  }, []);

  const whatsappNumber = "919304383612";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I want to know more about your commercial kitchen products.",
  )}`;

  return (
    <div className="website">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      {/* NAVBAR */}

      <nav className={`navbar${isScrolled ? " is-scrolled" : ""}`}>
        <a href="/" className="logo">
          KITCH<span>KRAFT</span>
        </a>

        <div
          className={`nav-links${mobileMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)}>
            Our Process
          </a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>
            Products
          </a>
          <a href="#swm" onClick={() => setMobileMenuOpen(false)}>
            SWM Solutions
          </a>
          <a href="#more" onClick={() => setMobileMenuOpen(false)}>
            More
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </div>

        <a
          href={whatsappLink}
          className="nav-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Talk
          <MoveUpRight size={16} />
        </a>

        <button
          className="mobile-menu"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {/* HERO SECTION */}

      <section className="hero" id="home">
        <video
          ref={heroVideoRef}
          className="hero-background"
          poster="/kitchen-commercial-oven.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onPlay={() => setIsHeroVideoPlaying(true)}
          onPause={() => setIsHeroVideoPlaying(false)}
          onError={() =>
            console.error("Unable to load the commercial kitchen hero video.")
          }
        >
          <source
            src="/kitchen-commercial-oven.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>
        <span className="hero-video-label" aria-hidden="true">
          COMMERCIAL KITCHEN / IN MOTION
        </span>
        <a
          className="hero-video-credit"
          href="https://www.pexels.com/video/person-putting-pizza-in-the-oven-7008576/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Footage: Anna Tarazevich / Pexels
        </a>

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="hero-tag">
            <span className="dot"></span>
            COMMERCIAL KITCHEN SOLUTIONS
          </div>

          <h1>
            BUILT FOR
            <br />
            <span>PERFORMANCE.</span>
          </h1>

          <p>
            Designing, fabricating, installing, and supporting commercial
            kitchens shaped around your space and service.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-button">
              Explore Solutions
              <ArrowRight size={18} />
            </a>

            <a href="#about" className="secondary-button">
              Discover Our Story
            </a>
          </div>
        </motion.div>

        <div className="hero-proof">
          <span>ONE PARTNER</span>
          <span aria-hidden="true">/</span>
          <span>FROM DESIGN TO INSTALLATION</span>
          <span aria-hidden="true">/</span>
          <span>SUPPORT ACROSS INDIA</span>
        </div>

        <button
          className="hero-video-toggle"
          type="button"
          aria-label={
            isHeroVideoPlaying
              ? "Pause commercial kitchen background video"
              : "Play commercial kitchen background video"
          }
          onClick={() => {
            const video = heroVideoRef.current;
            if (!video) {
              return;
            }

            if (video.paused) {
              heroVideoManuallyPausedRef.current = false;
              video.play().catch((error) => {
                if (error.name !== "NotAllowedError") {
                  console.error("Unable to play the hero background video.", error);
                }
              });
            } else {
              heroVideoManuallyPausedRef.current = true;
              video.pause();
            }
          }}
        >
          {isHeroVideoPlaying ? (
            <Pause size={14} aria-hidden="true" />
          ) : (
            <Play size={14} aria-hidden="true" />
          )}
          <span>{isHeroVideoPlaying ? "Pause video" : "Play video"}</span>
        </button>

        <div className="hero-bottom">
          <div className="hero-location">
            <span>01 / 04</span>

            <span>PRECISION. QUALITY. PERFORMANCE.</span>
          </div>

          <a href="#about" className="scroll-down">
            SCROLL TO EXPLORE
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="about" id="about">
        <div className="about-visual">
          <img
            src={kitchenImages[0]}
            alt="A thoughtfully designed professional kitchen"
            loading="lazy"
          />
          <div className="about-visual-caption">
            <span>BUILT AROUND YOUR WORKFLOW</span>
            <strong>Professional kitchens, made practical.</strong>
          </div>
          <span className="about-visual-index" aria-hidden="true">
            01
          </span>
        </div>

        <div className="about-right">
          <span className="section-label">ABOUT KITCHKRAFT</span>
          <h2>
            WHERE <span>INNOVATION</span> MEETS CRAFT.
          </h2>
          <p className="about-description">
            Kitchkraft Industries designs, fabricates, installs, and maintains
            commercial kitchen equipment for hotels, restaurants, hospitals,
            institutions, cafeterias, bakeries, food outlets, bars, train
            restaurants, and food carts. The team works with clients to make
            the best use of available space and deliver solutions across India.
            Product ranges include cooking and preparation equipment,
            refrigeration, display counters, bain-maries, tables and trolleys,
            sink units, and exhaust hoods.
          </p>
          <div className="about-principles">
            <div>
              <span>01</span>
              <strong>Thoughtful planning</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Professional equipment</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Pan-India project support</strong>
            </div>
          </div>
          <a href="#contact" className="text-link">
            Discover Our Expertise
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      {
        <section className="industries" id="industries">
          <div className="industries-heading">
            <div>
              <span className="section-label">INDUSTRIES WE SERVE</span>

              <h2>
                BUILT FOR
                <br />
                <span>EVERY INDUSTRY.</span>
              </h2>
            </div>

            <p>
              From sweet shops and bakeries to hospitals and institutional
              kitchens, we tailor commercial kitchen solutions to the way each
              team works.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <article className="industry-card" key={industry.name}>
                <img
                  className="industry-image"
                  src={kitchenImages[(index + 3) % kitchenImages.length]}
                  alt={`${industry.name} commercial kitchen`}
                  loading="lazy"
                />
                <div className="industry-content">
                  <span>{industry.type}</span>
                  <h3>{industry.name}</h3>
                  <a
                    href="#contact"
                    className="industry-arrow"
                    aria-label={`Enquire about ${industry.name} kitchens`}
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      }

      <section className="process-section" id="process">
        <div className="process-inner">
          <div className="process-heading">
            <div>
              <span className="section-label">TURNKEY KITCHEN SOLUTIONS</span>
              <h2>
                FROM FIRST PLAN
                <br />
                <span>TO FIRST SERVICE.</span>
              </h2>
            </div>
            <p>
              One coordinated process—from understanding your space to getting
              your team ready to use the equipment.
            </p>
          </div>

          <div className="process-grid">
            {projectSteps.map((step, index) => (
              <motion.article
                className="process-card"
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index % 3 * 0.08,
                  ease: "easeOut",
                }}
              >
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="purpose-grid">
            <article className="purpose-card">
              <span className="section-label">OUR MISSION</span>
              <p>
                Design, manufacture, and deliver equipment that brings the best
                to our clients.
              </p>
            </article>
            <article className="purpose-card">
              <span className="section-label">OUR VISION</span>
              <p>
                Set a standard for innovative, high-quality commercial kitchen
                solutions and help kitchens operate better.
              </p>
            </article>
          </div>

          <div className="credentials">
            <span className="credentials-label">CERTIFICATIONS & REGISTRATIONS</span>
            <div className="credentials-list">
              {credentials.map((credential) => (
                <span key={credential}>{credential}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}

      {/* PRODUCTS SECTION */}
      {/* PRODUCT DETAILS MODAL */}

      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            ref={productModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              ref={modalCloseButtonRef}
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ×
            </button>

            <img
              className="modal-product-image"
              src={selectedProduct.image}
              alt={`${selectedProduct.name} equipment`}
            />

            <div className="modal-product-content">
              <span className="section-label">{selectedProduct.category}</span>

              <h2 id="product-modal-title">{selectedProduct.name}</h2>

              <p>
                Discover our professional {selectedProduct.name.toLowerCase()},
                designed for commercial kitchens and demanding work
                environments.
              </p>

              <a
                href="#contact"
                className="modal-inquiry-button"
                onClick={() => {
                  restoreModalFocusRef.current = false;
                  setSelectedProduct(null);
                }}
              >
                Enquire About This Product
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="products" id="products">
        <div className="products-heading">
          <div>
            <span className="section-label">OUR PRODUCTS</span>

            <h2>
              ENGINEERED
              <br />
              <span>TO PERFORM.</span>
            </h2>
          </div>

          <p>
            Discover our range of professional commercial kitchen equipment.
          </p>
        </div>

        <div className="product-discovery">
          <label className="product-search">
            <Search size={17} aria-hidden="true" />
            <span className="visually-hidden">Search products</span>
            <input
              type="search"
              value={productSearch}
              onChange={(event) => setProductSearch(event.target.value)}
              placeholder="Search equipment"
            />
            {productSearch && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setProductSearch("")}
                aria-label="Clear product search"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </label>

          <p className="product-result-count" aria-live="polite">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "solution" : "solutions"}
          </p>
        </div>

        <div
          className="product-filters"
          aria-label="Filter products by category"
        >
          {["All", ...productCategories].map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                layout
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <span className="product-category">{product.category}</span>
                </div>

                <div className="product-info">
                  <span>PRODUCT / {product.id}</span>

                  <h3>{product.name}</h3>

                  <button
                    className="product-details-button"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="product-empty-state" role="status">
            <span>NO MATCHING EQUIPMENT</span>
            <p>Try another search or browse all product categories.</p>
            <button
              type="button"
              onClick={() => {
                setProductSearch("");
                setActiveCategory("All");
              }}
            >
              Reset product filters
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* VIEW ALL BUTTON */}

        <div className="products-footer">
          <a href="#contact" className="view-all-button">
            Explore All Products
            <ArrowRight size={18} />
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1M24fwRoAgHkWbaxCDIb7DRHlsBzZdbPk"
            className="catalogue-button"
            target="_blank"
            rel="noreferrer"
          >
            Download Catalogue
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="swm-section" id="swm">
        <div className="swm-inner">
          <div className="swm-copy">
            <span className="section-label">BEYOND THE KITCHEN</span>
            <h2>
              SOLID WASTE
              <br />
              <span>MANAGEMENT.</span>
            </h2>
            <p>
              Kitchkraft also provides waste management and water treatment
              solutions, including solid and liquid waste management, sewage
              cleaning, and wastewater treatment equipment.
            </p>
            <div className="swm-actions">
              <a
                href="https://www.kitchkraft.in/swm-products"
                className="swm-primary-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore SWM Solutions
                <ArrowRight size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1MvgAK6wtJciezFNKGw1f2POnK-sJRmxH/view?usp=drive_link"
                className="swm-secondary-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Govt. Products
                <MoveUpRight size={16} />
              </a>
            </div>
          </div>
          <a
            className="swm-image-link"
            href="https://www.kitchkraft.in/swm-products"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Kitchkraft SWM products"
          >
            <img
              className="swm-image"
              src={swmProductImage}
              alt="Kitchkraft solid waste management product"
              loading="lazy"
            />
            <span className="swm-image-label">SWM / GOVT. PRODUCTS</span>
          </a>
        </div>
      </section>

      <section className="more-section" id="more">
        <div className="more-inner">
          <div className="more-heading">
            <div>
              <span className="section-label">MORE FROM KITCHKRAFT</span>
              <h2>
                MORE
                <br />
                <span>SOLUTIONS.</span>
              </h2>
            </div>
            <p>
              Discover our ice cream equipment and industrial machinery
              offerings.
            </p>
          </div>

          <div className="more-grid">
            {moreSolutions.map((solution) => (
              <article className="more-card" key={solution.name}>
                <a
                  className="more-card-image-link"
                  href={solution.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${solution.name} on Kitchkraft`}
                >
                  <img
                    className="more-card-image"
                    src={solution.image}
                    alt={`${solution.name} from Kitchkraft`}
                    loading="lazy"
                  />
                </a>
                <div className="more-card-content">
                  <span>KITCHKRAFT / MORE</span>
                  <h3>{solution.name}</h3>
                  <p>{solution.description}</p>
                  <a
                    className="more-card-link"
                    href={solution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore {solution.name}
                    <ArrowRight size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-heading">
            <span className="section-label">A FEW QUICK ANSWERS</span>
            <h2>
              GOOD TO
              <br />
              <span>KNOW.</span>
            </h2>
            <p>
              Have another question? Tell us about your project and our team
              will help you figure out the next step.
            </p>
            <a href="#contact" className="faq-contact-link">
              Talk to our team
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="faq-list">
            <details>
              <summary>Can you plan a kitchen around my available space?</summary>
              <p>
                Yes. The process starts with understanding your site and
                requirements, then planning equipment and workflow to make the
                best use of your available space.
              </p>
            </details>
            <details>
              <summary>What kinds of businesses do you work with?</summary>
              <p>
                Kitchkraft serves food-service and institutional settings
                including restaurants, hotels, hospitals, bakeries, cafeterias,
                food outlets, bars, train restaurants, and food carts.
              </p>
            </details>
            <details>
              <summary>Do you handle fabrication and installation?</summary>
              <p>
                Kitchkraft’s stated services include design, fabrication,
                installation, and maintenance of commercial kitchen equipment.
                Share your requirements to discuss the right scope for your
                project.
              </p>
            </details>
            <details>
              <summary>Do you work on projects outside Bihar?</summary>
              <p>
                Kitchkraft serves customers across India. Contact the team with
                your city and project details to discuss coordination.
              </p>
            </details>
            <details>
              <summary>How do I get a recommendation or quotation?</summary>
              <p>
                Use the project inquiry form with your contact details and
                requirements. It opens a pre-filled message in WhatsApp so you
                can send the inquiry directly to the team.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      {/* CONTACT SECTION */}

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-heading">
            <span className="section-label">LET'S TALK BUSINESS</span>

            <h2>
              START YOUR
              <br />
              <span>PROJECT.</span>
            </h2>

            <p className="contact-intro">
              Share a few details about your kitchen. Our team will help you
              plan the right equipment and layout for your space.
            </p>

            <div className="contact-assurance">
              <span className="contact-assurance-mark" aria-hidden="true">
                ✓
              </span>
              <p>
                <strong>Personalised guidance</strong>
                <span>We’ll get back to you to discuss your requirements.</span>
              </p>
            </div>

            <div className="contact-details">
              <a href="tel:+919304383612">
                <Phone size={17} />
                <span>+91 93043 83612</span>
              </a>
              <a href="tel:+919431892177">
                <Phone size={17} />
                <span>+91 94318 92177</span>
              </a>
              <a href="mailto:info@kitchkraft.in">
                <Mail size={17} />
                <span>info@kitchkraft.in</span>
              </a>
              <a href="mailto:kitchkraftindustries@gmail.com">
                <Mail size={17} />
                <span>kitchkraftindustries@gmail.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=Near+Aayushveda+Hospital%2C+Shipara+Bridge%2C+Patna%2C+Bihar+800020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={17} />
                <span>Corporate office · Shipara Bridge, Patna, Bihar 800020</span>
              </a>
              <a
                href="https://maps.google.com/?q=Vijay+Chowk%2C+Harprasad%2C+Jandaha%2C+Vaishali%2C+Bihar+844505"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={17} />
                <span>Unit I · Vijay Chowk, Harprasad, Jandaha, Vaishali, Bihar 844505</span>
              </a>
              <a
                href="https://maps.google.com/?q=Near+Mundka+Metro+Station%2C+Kalewa+Restaurant%2C+New+Delhi+110005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={17} />
                <span>Unit II · Near Mundka Metro Station, New Delhi 110005</span>
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            aria-label="Project inquiry form"
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const name = String(formData.get("name") ?? "").trim();
              const email = String(formData.get("email") ?? "").trim();
              const phone = String(formData.get("phone") ?? "").trim();
              const project = String(formData.get("project") ?? "").trim();
              const message = String(formData.get("message") ?? "").trim();

              const whatsappMessage = `Hello KitchKraft, I have a project inquiry from your website.

Project details:
Project type: ${project}
Requirements: ${message}

Contact details:
Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone}`;

              const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage,
              )}`;

              window.open(whatsappURL, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="contact-form-heading">
              <span>PROJECT INQUIRY</span>
              <p>Tell us what you’re looking to build.</p>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="form-field">
                <span>Work email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="form-field">
                <span>Type of project</span>
                <select name="project" required defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Hospital or institution">
                    Hospital or institution
                  </option>
                  <option value="Bakery or food outlet">
                    Bakery or food outlet
                  </option>
                  <option value="Ice cream equipment">
                    Ice cream equipment
                  </option>
                  <option value="SWM or water treatment">
                    SWM or water treatment
                  </option>
                  <option value="Industrial machinery">
                    Industrial machinery
                  </option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            <label className="form-field">
              <span>How can we help?</span>
              <textarea
                name="message"
                placeholder="Tell us about your space, requirements, or timeline..."
                rows="4"
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Send project inquiry
              <ArrowRight size={18} />
            </button>

            <p className="contact-form-note">
              Your inquiry will open in WhatsApp so our team can follow up with
              you.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <a href="/" className="logo">
          KITCH<span>KRAFT</span>
        </a>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#swm">SWM Solutions</a>
          <a href="#more">More</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social" aria-label="Kitchkraft social media">
          <a
            className="footer-social-instagram"
            href="https://www.instagram.com/kitchkraftindustries/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kitchkraft Industries on Instagram"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
          <a
            className="footer-social-facebook"
            href="https://www.facebook.com/KitchKraftIndustries/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kitchkraft Industries on Facebook"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V13h2.8v8h3.4Z" />
            </svg>
            <span>Facebook</span>
          </a>
          <a
            className="footer-social-whatsapp"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Kitchkraft Industries on WhatsApp"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.03L2.2 21.8l4.88-1.28A9.9 9.9 0 1 0 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.9.76.78-2.82-.2-.31a8.12 8.12 0 1 1 6.75 3.68Zm4.46-6.08c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Kitchkraft Industries Pvt. Ltd.</p>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kitchkraft on WhatsApp"
      >
        <span className="floating-whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.03L2.2 21.8l4.88-1.28A9.9 9.9 0 1 0 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.9.76.78-2.82-.2-.31a8.12 8.12 0 1 1 6.75 3.68Zm4.46-6.08c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </span>
        <span className="floating-whatsapp-label">Let’s talk</span>
      </a>

      <button
        className={`back-to-top${isScrolled ? " is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        tabIndex={isScrolled ? 0 : -1}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

export default App;
