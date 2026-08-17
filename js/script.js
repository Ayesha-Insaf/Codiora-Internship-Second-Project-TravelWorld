/* =========================================================
   TRAVELWORLD CORE CONTROLLER
   Coordinates interactive features, dynamic filters,
   details modals, image galleries, animations,
   hero slideshow, and utilities.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () =>{

    /* =========================================================
       1. PRELOADER
       ========================================================= */

    window.addEventListener("load", () => {

        const preloader =
            document.getElementById("preloader");

        if (preloader) {

            preloader.classList.add("hide");

        }

    });


    setTimeout(() => {

        const preloader =
            document.getElementById("preloader");

        if (
            preloader &&
            !preloader.classList.contains("hide")
        ) {

            preloader.classList.add("hide");

        }

    }, 1500);


    /* =========================================================
       2. MOBILE MENU
       ========================================================= */

    const hamburger =
        document.getElementById("hamburger");

    const navMenu =
        document.getElementById("navMenu");


    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            hamburger.classList.toggle("active");

            navMenu.classList.toggle("active");

        });


        const navLinks =
            document.querySelectorAll(".nav-link");


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");

                navMenu.classList.remove("active");

            });

        });

    }


    /* =========================================================
       3. HERO SLIDESHOW
       ========================================================= */

    const heroSection =
        document.getElementById("home");


    const heroBgImages = [

        "images/hero-bg.jpg",

        "images/dest-canyon.jpg",

        "images/dest-cappadocia.jpg",

        "images/dest-alps.jpg",

        "images/dest-amazon.jpg"

    ];


    let heroIndex = 0;


    if (heroSection) {

        setInterval(() => {

            heroIndex =
                (heroIndex + 1) %
                heroBgImages.length;


            heroSection.style.backgroundImage =
                `url('${heroBgImages[heroIndex]}')`;

        }, 5000);

    }


    /* =========================================================
       4. CATEGORY COUNTS
       ========================================================= */

    const categoryCards =
        document.querySelectorAll(
            ".category-card"
        );


    categoryCards.forEach(card => {

        const cat =
            card.dataset.category;


        const count =
            destinations.filter(
                destination =>
                    destination.category === cat
            ).length;


        const countElem =
            card.querySelector(
                ".category-count"
            );


        if (countElem) {

            countElem.textContent =
                `${count} Destinations`;

        }

    });


    /* =========================================================
       5. FILTER + SEARCH
       ========================================================= */

    let activeFilter = "all";

    let searchQuery = "";


    const destinationsGrid =
        document.getElementById(
            "destinationsGrid"
        );


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const noResults =
        document.getElementById(
            "noResults"
        );


    /* =========================================================
       DESTINATION CARD BUILDER
       ========================================================= */

    function createCard(dest) {

        const card =
            document.createElement("div");


        card.className =
            "destination-card";


        card.dataset.category =
            dest.category;


        card.dataset.name =
            `${dest.name} ${dest.country} ${dest.category}`
                .toLowerCase();


        card.setAttribute(
            "data-animate",
            "fade-up"
        );


        card.innerHTML = `

            <div
                class="card-image"
                style="cursor: pointer;"
            >

                <img
                    src="${dest.images[0]}"
                    alt="${dest.name}"
                    loading="lazy"
                >


                <span
                    class="card-badge ${dest.category}-badge"
                >
                    ${dest.category}
                </span>


                <div
                    class="card-rating"
                >

                    <i
                        class="fa-solid fa-star"
                    ></i>

                    <span>
                        ${dest.rating}
                    </span>

                </div>

            </div>


            <div class="card-content">

                <div
                    class="card-location"
                >

                    <i
                        class="fa-solid fa-location-dot"
                    ></i>

                    <span>
                        ${dest.country}
                    </span>

                </div>


                <h3
                    class="card-title"
                >
                    ${dest.name}
                </h3>


                <p
                    class="card-description"
                >
                    ${dest.short}
                </p>


                <div
                    class="card-footer"
                >

                    <span
                        class="card-price"
                    >

                        From
                        <strong>
                            $${dest.price}
                        </strong>

                    </span>


                    <button
                        class="card-btn"
                    >

                        Explore

                        <i
                            class="fa-solid fa-arrow-right"
                        ></i>

                    </button>

                </div>

            </div>

        `;


        /* Open modal */

        const openAction = () => {

            openModal(dest.id);

        };


        const cardImage =
            card.querySelector(
                ".card-image"
            );


        const cardButton =
            card.querySelector(
                ".card-btn"
            );


        if (cardImage) {

            cardImage.addEventListener(
                "click",
                openAction
            );

        }


        if (cardButton) {

            cardButton.addEventListener(
                "click",
                openAction
            );

        }


        return card;

    }


    /* =========================================================
       FILTER DESTINATIONS
       ========================================================= */

    function filterDestinations() {

        if (!destinationsGrid) {

            return;

        }


        destinationsGrid.innerHTML = "";


        const query =
            searchQuery
                .trim()
                .toLowerCase();


        const filtered =
            destinations.filter(dest => {

                const matchesCategory =
                    activeFilter === "all" ||
                    dest.category === activeFilter;


                const matchesSearch =
                    !query ||

                    dest.name
                        .toLowerCase()
                        .includes(query) ||

                    dest.country
                        .toLowerCase()
                        .includes(query) ||

                    dest.category
                        .toLowerCase()
                        .includes(query);


                return (
                    matchesCategory &&
                    matchesSearch
                );

            });


        filtered.forEach(dest => {

            destinationsGrid.appendChild(
                createCard(dest)
            );

        });


        if (noResults) {

            if (filtered.length === 0) {

                noResults.classList.add("show");

            } else {

                noResults.classList.remove("show");

            }

        }


        initScrollAnimations();

    }


    /* =========================================================
       SEARCH INPUT
       ========================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            (e) => {

                searchQuery =
                    e.target.value;


                filterDestinations();

            }
        );

    }


    /* =========================================================
       FILTER BUTTONS
       ========================================================= */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );


    filterButtons.forEach(btn => {

        btn.addEventListener(
            "click",
            () => {

                filterButtons.forEach(b => {

                    b.classList.remove("active");

                });


                btn.classList.add("active");


                activeFilter =
                    btn.dataset.filter;


                filterDestinations();

            }
        );

    });


    /* =========================================================
       CATEGORY CARDS
       ========================================================= */

    categoryCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const cat =
                    card.dataset.category;


                activeFilter =
                    cat;


                filterButtons.forEach(button => {

                    if (
                        button.dataset.filter === cat
                    ) {

                        button.classList.add(
                            "active"
                        );

                    } else {

                        button.classList.remove(
                            "active"
                        );

                    }

                });


                filterDestinations();


                const destSection =
                    document.getElementById(
                        "destinations"
                    );


                if (destSection) {

                    destSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


    /* =========================================================
       6. MODAL CONTROLLER
       ========================================================= */

    let currentDest = null;

    let modalGalleryIndex = 0;


    const modalOverlay =
        document.getElementById(
            "modalOverlay"
        );


    const modalClose =
        document.getElementById(
            "modalClose"
        );


    const modalImg =
        document.getElementById(
            "modalImg"
        );


    /* =========================================================
       OPEN MODAL
       ========================================================= */

    window.openModal = function(id) {

        currentDest =
            destinations.find(
                destination =>
                    destination.id === id
            );


        if (!currentDest) {

            return;

        }


        modalGalleryIndex = 0;


        const modalBadge =
            document.getElementById(
                "modalBadge"
            );


        const modalLocation =
            document.getElementById(
                "modalLocation"
            );


        const modalTitle =
            document.getElementById(
                "modalTitle"
            );


        const modalRating =
            document.querySelector(
                "#modalRating span"
            );


        const modalDesc =
            document.getElementById(
                "modalDesc"
            );


        const modalBestTime =
            document.getElementById(
                "modalBestTime"
            );


        const modalDuration =
            document.getElementById(
                "modalDuration"
            );


        const modalEntry =
            document.getElementById(
                "modalEntry"
            );


        const modalPrice =
            document.getElementById(
                "modalPrice"
            );


        const modalHighlightsList =
            document.getElementById(
                "modalHighlightsList"
            );


        /* Main image */

        if (modalImg) {

            modalImg.src =
                currentDest.images[0];


            modalImg.alt =
                currentDest.name;

        }


        /* Category */

        if (modalBadge) {

            modalBadge.textContent =
                currentDest.category;


            modalBadge.className =
                `modal-badge ${currentDest.category}-badge`;

        }


        /* Location */

        if (modalLocation) {

            modalLocation.innerHTML =
                `<i class="fa-solid fa-location-dot"></i>
                 ${currentDest.country}`;

        }


        /* Title */

        if (modalTitle) {

            modalTitle.textContent =
                currentDest.name;

        }


        /* Rating */

        if (modalRating) {

            modalRating.textContent =
                currentDest.rating;

        }


        /* Description */

        if (modalDesc) {

            modalDesc.textContent =
                currentDest.desc;

        }


        /* Best time */

        if (modalBestTime) {

            modalBestTime.textContent =
                currentDest.bestTime;

        }


        /* Duration */

        if (modalDuration) {

            modalDuration.textContent =
                currentDest.duration;

        }


        /* Entry requirement */

        if (modalEntry) {

            modalEntry.textContent =
                currentDest.entryReq;

        }


        /* Price */

        if (modalPrice) {

            modalPrice.textContent =
                `$${currentDest.price}`;

        }


        /* Highlights */

        if (modalHighlightsList) {

            modalHighlightsList.innerHTML =
                currentDest.highlights
                    .map(
                        highlight =>
                            `<li>${highlight}</li>`
                    )
                    .join("");

        }


        /* Show modal */

        if (modalOverlay) {

            modalOverlay.classList.add(
                "active"
            );

        }


        document.body.classList.add(
            "modal-open"
        );

    };


    /* =========================================================
       CLOSE MODAL
       ========================================================= */

    window.closeModal = function() {

        if (modalOverlay) {

            modalOverlay.classList.remove(
                "active"
            );

        }


        document.body.classList.remove(
            "modal-open"
        );


        currentDest = null;

    };


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            (e) => {

                if (
                    e.target === modalOverlay
                ) {

                    closeModal();

                }

            }
        );

    }


    /* =========================================================
       ESC KEY
       ========================================================= */

    document.addEventListener(
        "keydown",
        (e) => {

            if (e.key === "Escape") {

                closeModal();

            }

        }
    );


    /* =========================================================
       MODAL IMAGE GALLERY
       Click image to show next image
       ========================================================= */

    if (modalImg) {

        modalImg.addEventListener(
            "click",
            () => {

                if (
                    !currentDest ||
                    currentDest.images.length <= 1
                ) {

                    return;

                }


                modalGalleryIndex =
                    (
                        modalGalleryIndex + 1
                    ) %
                    currentDest.images.length;


                modalImg.src =
                    currentDest.images[
                        modalGalleryIndex
                    ];

            }
        );

    }


    /* =========================================================
       7. FEATURED CARDS
       ========================================================= */

    const featuredLarge =
        document.getElementById(
            "featuredLarge"
        );


    const featuredSmall1 =
        document.getElementById(
            "featuredSmall1"
        );


    const featuredSmall2 =
        document.getElementById(
            "featuredSmall2"
        );


    if (featuredLarge) {

        featuredLarge.addEventListener(
            "click",
            () => openModal("maldives")
        );

    }


    if (featuredSmall1) {

        featuredSmall1.addEventListener(
            "click",
            () => openModal("cappadocia")
        );

    }


    if (featuredSmall2) {

        featuredSmall2.addEventListener(
            "click",
            () => openModal("rome")
        );

    }


    /* =========================================================
       8. BACK TO TOP
       ========================================================= */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 300) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================================================
       9. SCROLL ANIMATIONS
       ========================================================= */

    function initScrollAnimations() {

        const animatedElements =
            document.querySelectorAll(
                "[data-animate]"
            );


        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    });

                },
                {
                    threshold: 0.05
                }
            );


        animatedElements.forEach(
            element => {

                observer.observe(element);

            }
        );

    }


    /* =========================================================
       10. NAVBAR ACTIVE STATES
       ========================================================= */

    const sections =
        document.querySelectorAll(
            "section"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    window.addEventListener(
        "scroll",
        () => {

            let current = "";


            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 85;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            });


            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }
    );


    /* =========================================================
       INITIALIZE
       ========================================================= */

    filterDestinations();

});