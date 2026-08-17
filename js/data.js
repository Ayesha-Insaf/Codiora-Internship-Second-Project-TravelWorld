const destinations = [

    /* =========================================================
       BEACH — 3 DESTINATIONS
       ========================================================= */

    {
        id: "maldives",
        name: "Maldives",
        country: "Maldives",
        category: "beach",
        rating: 4.9,
        price: 950,
        entryReq: "Visa Free",
        short: "Pristine beaches, turquoise waters, and peaceful tropical island scenery.",
        desc: "The Maldives is a tropical paradise famous for its white-sand beaches, crystal-clear turquoise waters, swaying palm trees, and peaceful island atmosphere. It is an ideal destination for relaxing by the sea, enjoying water activities, and experiencing unforgettable tropical scenery.",
        highlights: [
            "White-sand tropical beaches",
            "Crystal-clear turquoise water",
            "Tropical island scenery",
            "Relaxing beach experiences"
        ],
        bestTime: "Nov – Apr",
        duration: "4–7 days",
        images: [
            "images/dest-tropical-beach.jpg",
            "images/hero-bg.jpg",
            "images/dest-phiphi.jpg"
        ]
    },
    {
        id: "tropical-beach",
        name: "Tropical Beach Escape",
        country: "Maldives",
        category: "beach",
        rating: 4.8,
        price: 780,
        entryReq: "Visa on Arrival",
        short: "Palm-lined white sand, clear turquoise water, and a peaceful island shoreline.",
        desc: "Unwind on a palm-fringed Maldives beach with soft white sand, warm turquoise water, and calm island views. This beach escape is ideal for swimming, relaxing, and sunset walks by the sea.",
        highlights: [
            "Palm-lined white-sand beach",
            "Swimming in turquoise water",
            "Relaxed island atmosphere",
            "Sunset beach walks"
        ],
        bestTime: "Nov - Apr",
        duration: "3-5 days",
        images: [
            "images/dest-tropical-beach.jpg",
            "images/hero-bg.jpg",
            "images/dest-phiphi.jpg"
        ]
    },

    {
        id: "phiphi",
        name: "Phi Phi Islands",
        country: "Thailand",
        category: "beach",
        rating: 4.7,
        price: 450,
        entryReq: "Visa Free",
        short: "Limestone cliffs framing some of Southeast Asia's clearest water.",
        desc: "The Phi Phi Islands combine turquoise water, dramatic limestone cliffs, hidden lagoons, and beautiful tropical beaches. Long-tail boats are perfect for exploring the surrounding islands.",
        highlights: [
            "Maya Bay from the water",
            "Snorkeling coral reefs",
            "Viewpoint hike",
            "Long-tail boat island hopping"
        ],
        bestTime: "Nov – Apr",
        duration: "3–5 days",
        images: [
            "images/dest-phiphi.jpg",
            "images/hero-bg.jpg",
            "images/dest-santorini.jpg"
        ]
    },


    /* =========================================================
       MOUNTAINS — 3 DESTINATIONS
       ========================================================= */

    {
        id: "alps",
        name: "The Alps",
        country: "Switzerland",
        category: "mountains",
        rating: 4.9,
        price: 1200,
        entryReq: "Visa Free",
        short: "Snow-capped peaks, alpine villages, and trails that never run out of view.",
        desc: "The Swiss Alps offer spectacular mountain scenery, glacier-fed valleys, alpine villages, and hiking trails. Summer brings wildflower meadows while winter transforms the slopes into a world-class skiing destination.",
        highlights: [
            "Cable-car rides above the clouds",
            "Alpine village hopping",
            "Glacier and lake viewpoints",
            "World-class hiking trails"
        ],
        bestTime: "Jun – Sep, Dec – Mar",
        duration: "5–7 days",
        images: [
            "images/dest-alps.jpg",
            "images/dest-banff.jpg",
            "images/dest-mountain-everest.jpg"
        ]
    },

    {
        id: "banff",
        name: "Banff National Park",
        country: "Canada",
        category: "mountains",
        rating: 4.8,
        price: 650,
        entryReq: "eTA Required",
        short: "Glacial lakes and jagged peaks in Canada's Rocky Mountains.",
        desc: "Banff's turquoise lakes, dramatic peaks, forests, and alpine landscapes make it one of Canada's most spectacular mountain destinations.",
        highlights: [
            "Moraine Lake",
            "Canoeing on glacial lakes",
            "Wildlife spotting",
            "Mountain hiking trails"
        ],
        bestTime: "Jun – Sep",
        duration: "4–6 days",
        images: [
            "images/dest-banff.jpg",
            "images/dest-alps.jpg",
            "images/dest-mountain-everest.jpg"
        ]
    },

    {
        id: "everest",
        name: "Mount Everest",
        country: "Nepal",
        category: "mountains",
        rating: 4.9,
        price: 1300,
        entryReq: "Visa Required",
        short: "The world's highest mountain surrounded by the spectacular Himalayas.",
        desc: "Mount Everest rises dramatically above the Himalayan landscape and attracts trekkers and mountain lovers from around the world. The surrounding region offers breathtaking views and unforgettable trekking experiences.",
        highlights: [
            "Everest mountain viewpoints",
            "Himalayan trekking routes",
            "Sherpa villages",
            "High-altitude mountain scenery"
        ],
        bestTime: "Mar – May, Sep – Nov",
        duration: "7–14 days",
        images: [
            "images/dest-mountain-everest.jpg",
            "images/dest-alps.jpg",
            "images/dest-banff.jpg"
        ]
    },


    /* =========================================================
       HISTORICAL — 3 DESTINATIONS
       ========================================================= */

    {
        id: "rome",
        name: "Rome",
        country: "Italy",
        category: "historical",
        rating: 4.8,
        price: 750,
        entryReq: "Visa Free",
        short: "Two thousand years of history built into every street corner.",
        desc: "Few cities layer history as densely as Rome. The Colosseum and Roman Forum sit minutes from Renaissance piazzas, while historic streets and monuments tell stories from across centuries.",
        highlights: [
            "The Colosseum and Roman Forum",
            "Vatican Museums",
            "Trevi Fountain",
            "Spanish Steps"
        ],
        bestTime: "Apr – Jun, Sep – Oct",
        duration: "3–5 days",
        images: [
            "images/dest-rome.jpg",
            "images/dest-taj.jpg",
            "images/dest-lahore.jpg"
        ]
    },

    {
        id: "taj",
        name: "Taj Mahal",
        country: "India",
        category: "historical",
        rating: 4.9,
        price: 500,
        entryReq: "eVisa",
        short: "A marble mausoleum built as a monument to eternal love.",
        desc: "Built by Emperor Shah Jahan for his wife Mumtaz Mahal, the Taj Mahal is one of the world's most recognizable historical monuments.",
        highlights: [
            "Sunrise at the Taj Mahal",
            "Intricate marble inlay work",
            "Reflecting pool photography",
            "Agra Fort nearby"
        ],
        bestTime: "Oct – Mar",
        duration: "1–2 days",
        images: [
            "images/dest-taj.jpg",
            "images/dest-lahore.jpg",
            "images/dest-rome.jpg"
        ]
    },

    {
        id: "lahore",
        name: "Badshahi Mosque",
        country: "Pakistan",
        category: "historical",
        rating: 4.7,
        price: 400,
        entryReq: "Visa Required",
        short: "A magnificent Mughal-era mosque in the heart of Lahore.",
        desc: "Commissioned by Emperor Aurangzeb, the Badshahi Mosque remains one of the most impressive examples of Mughal architecture and historical heritage in Pakistan.",
        highlights: [
            "Mughal-era architecture",
            "Large historic courtyard",
            "Lahore Fort nearby",
            "Old Lahore heritage area"
        ],
        bestTime: "Oct – Mar",
        duration: "1 day",
        images: [
            "images/dest-lahore.jpg",
            "images/dest-taj.jpg",
            "images/dest-rome.jpg"
        ]
    },


    /* =========================================================
       ADVENTURE — 3 DESTINATIONS
       ========================================================= */

    {
        id: "canyon",
        name: "Horseshoe Bend",
        country: "United States",
        category: "adventure",
        rating: 4.6,
        price: 350,
        entryReq: "ESTA Required",
        short: "A dramatic canyon landscape carved by the Colorado River.",
        desc: "Horseshoe Bend offers dramatic desert scenery, canyon viewpoints, hiking opportunities, and unforgettable outdoor adventures.",
        highlights: [
            "Canyon overlook",
            "Antelope Canyon",
            "Colorado River activities",
            "Desert photography"
        ],
        bestTime: "Mar – May, Sep – Nov",
        duration: "2–3 days",
        images: [
            "images/dest-canyon.jpg",
            "images/dest-adventure-rafting.jpg",
            "images/dest-cappadocia.jpg"
        ]
    },

    {
        id: "cappadocia",
        name: "Cappadocia",
        country: "Turkey",
        category: "adventure",
        rating: 4.9,
        price: 800,
        entryReq: "eVisa",
        short: "Fairy chimneys and hundreds of hot air balloons at sunrise.",
        desc: "Cappadocia's surreal rock formations, valleys, underground cities, and hot air balloons make it an unforgettable adventure destination.",
        highlights: [
            "Hot air balloon ride",
            "Underground cities",
            "Valley hiking",
            "Sunset viewpoints"
        ],
        bestTime: "Apr – Jun, Sep – Oct",
        duration: "3–4 days",
        images: [
            "images/dest-cappadocia.jpg",
            "images/dest-canyon.jpg",
            "images/dest-adventure-rafting.jpg"
        ]
    },

    {
        id: "rafting",
        name: "White Water Rafting",
        country: "United States",
        category: "adventure",
        rating: 4.7,
        price: 600,
        entryReq: "Visa Required",
        short: "An exciting white-water rafting experience surrounded by nature.",
        desc: "White-water rafting combines outdoor exploration with exciting river adventures. Rapids, forest landscapes, and dramatic scenery make it ideal for adventurous travelers.",
        highlights: [
            "White-water rafting",
            "River adventure",
            "Forest exploration",
            "Outdoor photography"
        ],
        bestTime: "May – Sep",
        duration: "2–4 days",
        images: [
            "images/dest-adventure-rafting.jpg",
            "images/dest-canyon.jpg",
            "images/dest-cappadocia.jpg"
        ]
    },


    /* =========================================================
       CULTURAL — 3 DESTINATIONS
       ========================================================= */

    {
        id: "marrakech",
        name: "Marrakech",
        country: "Morocco",
        category: "cultural",
        rating: 4.8,
        price: 700,
        entryReq: "Visa Required",
        short: "Traditional markets, architecture, crafts, and Moroccan culture.",
        desc: "Marrakech is famous for its traditional markets, historic architecture, colorful streets, local crafts, and vibrant cultural atmosphere.",
        highlights: [
            "Traditional Moroccan markets",
            "Historic medina",
            "Local crafts and spices",
            "Traditional Moroccan architecture"
        ],
        bestTime: "Mar – May, Sep – Nov",
        duration: "3–5 days",
        images: [
            "images/dest-marrakech-cultural.jpg",
            "images/dest-india-cultural.jpg",
            "images/dest-cultural-festival.jpg"
        ]
    },

    {
        id: "india-cultural",
        name: "Rajasthan",
        country: "India",
        category: "cultural",
        rating: 4.8,
        price: 650,
        entryReq: "eVisa",
        short: "Traditional clothing, music, festivals, and colorful Indian heritage.",
        desc: "Rajasthan offers a rich cultural experience through traditional clothing, music, performances, architecture, festivals, and centuries-old traditions.",
        highlights: [
            "Traditional Indian clothing",
            "Cultural performances",
            "Local music and festivals",
            "Traditional architecture"
        ],
        bestTime: "Oct – Mar",
        duration: "4–6 days",
        images: [
            "images/dest-india-cultural.jpg",
            "images/dest-marrakech-cultural.jpg",
            "images/dest-cultural-festival.jpg"
        ]
    },

    {
        id: "cultural-festival",
        name: "Cultural Festival",
        country: "Worldwide",
        category: "cultural",
        rating: 4.7,
        price: 550,
        entryReq: "Visa Required",
        short: "Traditional celebrations, clothing, performances, and local heritage.",
        desc: "Cultural festivals provide travelers with opportunities to experience traditional clothing, celebrations, music, performances, and local customs.",
        highlights: [
            "Traditional cultural clothing",
            "Local festivals",
            "Traditional performances",
            "Local heritage and customs"
        ],
        bestTime: "Year Round",
        duration: "2–4 days",
        images: [
            "images/dest-cultural-festival.jpg",
            "images/dest-india-cultural.jpg",
            "images/dest-marrakech-cultural.jpg"
        ]
    },


    /* =========================================================
       NATURE & WILDLIFE — 3 DESTINATIONS
       ========================================================= */

    {
        id: "amazon",
        name: "Amazon Rainforest",
        country: "Brazil",
        category: "nature",
        rating: 4.7,
        price: 1100,
        entryReq: "Visa Free",
        short: "The world's largest rainforest, alive at every layer of the canopy.",
        desc: "The Amazon holds more species than almost anywhere on Earth. Guided river trips, rainforest walks, and wildlife experiences reveal a natural world full of life.",
        highlights: [
            "River canoe trips",
            "Wildlife observation",
            "Rainforest walks",
            "Canopy viewpoints"
        ],
        bestTime: "Jun – Nov",
        duration: "4–7 days",
        images: [
            "images/dest-amazon.jpg",
            "images/dest-amazon-rainforest.jpg",
            "images/dest-nature-wildlife.jpg"
        ]
    },

    {
        id: "amazon-rainforest",
        name: "Amazon Rainforest Falls",
        country: "Brazil",
        category: "nature",
        rating: 4.8,
        price: 1050,
        entryReq: "Visa Free",
        short: "Dense rainforest, waterfalls, rivers, and incredible natural scenery.",
        desc: "Dense tropical forests, waterfalls, rivers, and rich vegetation make the Amazon rainforest one of the world's most extraordinary natural environments.",
        highlights: [
            "Rainforest waterfalls",
            "Dense jungle trails",
            "Tropical vegetation",
            "Natural scenery"
        ],
        bestTime: "Jun – Nov",
        duration: "4–7 days",
        images: [
            "images/dest-amazon-rainforest.jpg",
            "images/dest-amazon.jpg",
            "images/dest-nature-wildlife.jpg"
        ]
    },

    {
        id: "nature-wildlife",
        name: "Forest Wildlife",
        country: "Worldwide",
        category: "nature",
        rating: 4.6,
        price: 700,
        entryReq: "Visa Required",
        short: "Peaceful forests filled with natural beauty and wildlife.",
        desc: "Forest destinations offer a peaceful escape into nature, with tall trees, wildlife, walking trails, and beautiful natural landscapes.",
        highlights: [
            "Forest hiking trails",
            "Wildlife observation",
            "Natural landscapes",
            "Peaceful outdoor experiences"
        ],
        bestTime: "Mar – Oct",
        duration: "3–5 days",
        images: [
            "images/dest-nature-wildlife.jpg",
            "images/dest-amazon-rainforest.jpg",
            "images/dest-amazon.jpg"
        ]
    }
];