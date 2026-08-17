/* =========================================================
   TRAVELWORLD DETAILS CONTROLLER
   Parses URL search params, finds the destination from the
   normalized dataset, and renders the detailed layout.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const detailsContent =
        document.getElementById(
            "detailsContent"
        );

    if (!detailsContent) {
        return;
    }


    /* =========================================================
       READ DESTINATION ID FROM URL
       Example:
       details.html?id=maldives
       ========================================================= */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const destId =
        urlParams.get("id");


    if (!destId) {

        showError(
            "No destination ID provided."
        );

        return;
    }


    /* =========================================================
       FIND DESTINATION
       ========================================================= */

    const dest =
        destinations.find(
            destination =>
                destination.id === destId
        );


    if (!dest) {

        showError(
            `Destination "${destId}" could not be found.`
        );

        return;
    }


    /* =========================================================
       RENDER DETAILS
       ========================================================= */

    renderDetails(dest);


    /* =========================================================
       FOOTER YEAR
       ========================================================= */

    const yearElem =
        document.getElementById(
            "year"
        );

    if (yearElem) {

        yearElem.textContent =
            new Date().getFullYear();

    }

});


/* =========================================================
   ERROR MESSAGE
   ========================================================= */

function showError(msg) {

    const detailsContent =
        document.getElementById(
            "detailsContent"
        );


    if (!detailsContent) {
        return;
    }


    detailsContent.innerHTML = `

        <div
            style="
                text-align: center;
                padding: 4rem 2rem;
            "
        >

            <i
                class="fa-solid fa-triangle-exclamation"
                style="
                    font-size: 3rem;
                    color: var(--secondary-color);
                    margin-bottom: 1.5rem;
                "
            ></i>


            <h3
                style="
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                    color: var(--dark-color);
                    margin-bottom: 0.5rem;
                "
            >
                Oops! Something went wrong
            </h3>


            <p
                style="
                    color: var(--gray-color);
                    max-width: 500px;
                    margin: 0 auto 1.5rem;
                "
            >
                ${msg}
            </p>


            <a
                href="index.html"
                class="header-btn"
                style="text-decoration: none;"
            >
                Return to Home
            </a>

        </div>

    `;
}


/* =========================================================
   RENDER DESTINATION DETAILS
   ========================================================= */

function renderDetails(dest) {

    const detailsContent =
        document.getElementById(
            "detailsContent"
        );


    if (!detailsContent) {
        return;
    }


    /* =========================================================
       CREATE HIGHLIGHTS LIST
       ========================================================= */

    const highlightsHTML =
        dest.highlights
            .map(
                highlight => `

                    <div
                        class="details-highlight-item"
                    >

                        <i
                            class="fa-solid fa-circle-check"
                        ></i>

                        <span>
                            ${highlight}
                        </span>

                    </div>

                `
            )
            .join("");


    /* =========================================================
       MAIN DETAILS LAYOUT
       ========================================================= */

    detailsContent.innerHTML = `

        <!-- =====================================================
             DETAILS HERO
             ===================================================== -->

        <div class="details-hero">

            <img
                src="${dest.images[0]}"
                alt="${dest.name}"
            >

            <div
                class="details-hero-overlay"
            ></div>


            <div
                class="details-hero-content"
            >

                <span
                    class="details-badge"
                >
                    ${dest.category}
                </span>


                <h1
                    class="details-title"
                >
                    ${dest.name}
                </h1>


                <div
                    class="details-meta"
                >

                    <div
                        class="details-meta-item"
                    >

                        <i
                            class="fa-solid fa-location-dot"
                        ></i>

                        <span>
                            ${dest.country}
                        </span>

                    </div>


                    <div
                        class="details-meta-item"
                    >

                        <i
                            class="fa-solid fa-star"
                        ></i>

                        <span>
                            ${dest.rating} Rating
                        </span>

                    </div>

                </div>

            </div>

        </div>


        <!-- =====================================================
             DETAILS GRID
             ===================================================== -->

        <div class="details-grid">


            <!-- =================================================
                 MAIN CONTENT
                 ================================================= -->

            <div class="details-main">

                <h3>
                    About ${dest.name}
                </h3>


                <p>
                    ${dest.desc}
                </p>


                <!-- =============================================
                     FEATURES
                     ============================================= -->

                <div
                    class="details-features-grid"
                >

                    <div
                        class="details-feature-card"
                    >

                        <i
                            class="fa-solid fa-calendar-days"
                        ></i>

                        <div>

                            <h4>
                                Best Time
                            </h4>

                            <p>
                                ${dest.bestTime}
                            </p>

                        </div>

                    </div>


                    <div
                        class="details-feature-card"
                    >

                        <i
                            class="fa-solid fa-clock"
                        ></i>

                        <div>

                            <h4>
                                Suggested Stay
                            </h4>

                            <p>
                                ${dest.duration}
                            </p>

                        </div>

                    </div>


                    <div
                        class="details-feature-card"
                    >

                        <i
                            class="fa-solid fa-camera"
                        ></i>

                        <div>

                            <h4>
                                Highlights
                            </h4>

                            <p>
                                ${dest.highlights.length}
                                Featured Spots
                            </p>

                        </div>

                    </div>


                    <div
                        class="details-feature-card"
                    >

                        <i
                            class="fa-solid fa-passport"
                        ></i>

                        <div>

                            <h4>
                                Entry Req.
                            </h4>

                            <p>
                                ${dest.entryReq}
                            </p>

                        </div>

                    </div>

                </div>


                <!-- =============================================
                     DESTINATION GALLERY
                     ============================================= -->

                <div
                    class="details-gallery"
                    style="
                        display: grid;
                        grid-template-columns:
                            repeat(3, 1fr);
                        gap: 1rem;
                        margin-top: 2rem;
                    "
                >

                    ${dest.images
                        .map(
                            (image, index) => `

                                <div
                                    class="details-gallery-card"
                                    style="
                                        overflow: hidden;
                                        border-radius: 12px;
                                    "
                                >

                                    <img
                                        src="${image}"
                                        alt="${dest.name} gallery image ${index + 1}"
                                        style="
                                            width: 100%;
                                            height: 180px;
                                            object-fit: cover;
                                            display: block;
                                        "
                                    >

                                </div>

                            `
                        )
                        .join("")}

                </div>

            </div>


            <!-- =================================================
                 SIDEBAR
                 ================================================= -->

            <div
                class="details-sidebar"
            >

                <h3
                    class="details-sidebar-title"
                >
                    Trip Highlights
                </h3>


                <div
                    class="details-highlights-list"
                >

                    ${highlightsHTML}

                </div>


                <!-- =============================================
                     BOOKING BOX
                     ============================================= -->

                <div
                    class="details-booking-box"
                >

                    <div
                        class="details-price-tag"
                    >

                        Estimated Cost

                        <strong>
                            $${dest.price}
                        </strong>

                    </div>


                    <button
                        class="header-btn details-btn-book"
                        onclick="alert('Booking feature coming soon for ${dest.name}!')"
                    >

                        Book This Trip

                        <i
                            class="fa-solid fa-plane"
                        ></i>

                    </button>

                </div>

            </div>

        </div>

    `;
}