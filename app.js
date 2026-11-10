const residentialAreas = [
  "Adams Arcade", "Airbase", "Ambassador", "Baba Dogo", "Buruburu", "CBD", "Dandora",
  "Donholm", "Eastleigh", "Embakasi", "Fedha", "Githurai", "Gigiri", "Garden Estate",
  "Gikomba", "Highridge", "Hurlingham", "Huruma", "Imara Daima", "Industrial Area",
  "Jamhuri", "Kahawa West", "Kangemi", "Kariobangi", "Kariobangi North",
  "Kariobangi South", "Karen", "Kasarani", "Kawangware", "Kayole", "Kibera",
  "Kileleshwa", "Kilimani", "Kitisuru", "Komarock", "Langata", "Lavington", "Loresho",
  "Lucky Summer", "Madaraka", "Mathare", "Mbagathi", "Mukuru",
  "Mountain View", "Muthangari", "Muthaiga", "Muthaiga North", "Mwiki", "Nairobi West",
  "Ngara", "Nyayo Estate", "Parklands", "Pipeline", "Pangani", "Pumwani", "Ridgeways",
  "Riverside", "Roysambu", "Ruaraka", "Runda", "Ruai", "Shauri Moyo", "South B",
  "South C", "Spring Valley", "Tassia", "Thome", "Umoja", "Upper Hill", "Utawala",
  "Uthiru", "Valley Arcade", "Waithaka", "Westlands", "Zimmerman"
].sort((a, b) => a.localeCompare(b));

const properties = [
  {
    id: "mansion-karen",
    title: "A quieter kind of grandeur",
    type: "House",
    location: "Karen",
    address: "Ngong Road, Karen",
    price: 45000000,
    beds: 5,
    baths: 4,
    area: 420,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
    alt: "Spacious contemporary home with warm timber finishes",
    tag: "JUST LISTED",
    description: "Set within a leafy Karen neighbourhood, this beautiful family home is made for slow mornings, lively dinners, and everything in between. Generous living spaces open onto a landscaped garden, while thoughtful finishes bring warmth to every room.",
    features: ["Swimming pool", "Landscaped garden", "Secure parking", "Staff quarters", "Solar water heating", "Gated community"],
    agent: "Angela Wambui",
    agentRole: "Your Karen neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "apartment-westlands",
    title: "A little above the everyday",
    type: "Apartment",
    location: "Westlands",
    address: "Brookside Drive, Westlands",
    price: 18500000,
    beds: 3,
    baths: 2,
    area: 168,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    alt: "Bright apartment living room with modern furnishings",
    tag: "CITY FAVOURITE",
    description: "A calm, light-filled apartment with the best of Westlands just around the corner. Open-plan living gives you room to host, unwind, and make the space your own.",
    features: ["Rooftop pool", "Gym", "Backup generator", "CCTV security", "Two parking bays", "Close to shopping"],
    agent: "David Mwangi",
    agentRole: "Your Westlands neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "villa-runda",
    title: "Room to grow in Runda",
    type: "Villa",
    location: "Runda",
    address: "Runda Grove, Runda",
    price: 62000000,
    beds: 6,
    baths: 5,
    area: 510,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
    alt: "Modern villa with expansive windows and garden views",
    tag: "A RARE FIND",
    description: "Tucked into a peaceful, tree-lined setting, this welcoming villa pairs generous proportions with an easy indoor-outdoor rhythm. There’s space for everyone to find their own favourite corner.",
    features: ["Private swimming pool", "Mature garden", "Double garage", "Staff quarters", "Family room", "24-hour security"],
    agent: "Wanjiku Njeri",
    agentRole: "Your Runda neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "home-kilimani",
    title: "Easy living, Kilimani",
    type: "Apartment",
    location: "Kilimani",
    address: "Dennis Pritt Road, Kilimani",
    price: 12500000,
    beds: 2,
    baths: 2,
    area: 112,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
    alt: "Comfortable modern apartment with neutral decor",
    tag: "MOVE-IN READY",
    description: "Thoughtfully laid out and ready to make your own, this apartment brings a little breathing room to the heart of Kilimani. Cafes, shops, and everyday essentials are all close by.",
    features: ["Balcony", "Lift access", "Full backup generator", "Borehole", "Secure parking", "Near local amenities"],
    agent: "Angela Wambui",
    agentRole: "Your Kilimani neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "garden-lavington",
    title: "A garden of your own",
    type: "House",
    location: "Lavington",
    address: "Lavington Green, Lavington",
    price: 38500000,
    beds: 4,
    baths: 3,
    area: 310,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
    alt: "Elegant family home opening onto a green garden",
    tag: "GARDEN LIVING",
    description: "A warm family home with a generous garden and room to gather. Light-filled living spaces, a relaxed dining area, and a leafy setting make this one easy to settle into.",
    features: ["Private garden", "Fireplace", "Covered patio", "Staff quarters", "Secure parking", "Quiet cul-de-sac"],
    agent: "David Mwangi",
    agentRole: "Your Lavington neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "family-karen",
    title: "The long-weekend feeling",
    type: "House",
    location: "Karen",
    address: "Marula Lane, Karen",
    price: 29500000,
    beds: 4,
    baths: 3,
    area: 285,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
    alt: "Relaxed family home with a leafy outdoor setting",
    tag: "OPEN HOUSE",
    description: "A welcoming home designed for a slower pace. Spend afternoons in the garden, gather around the kitchen island, and enjoy the quiet of one of Karen’s most loved pockets.",
    features: ["Garden", "Covered veranda", "Fireplace", "Borehole", "Staff quarters", "Gated estate"],
    agent: "Wanjiku Njeri",
    agentRole: "Your Karen neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "single-room-kawangware",
    title: "Simple, sunny single room",
    listing: "rent",
    type: "Single room",
    roomCategory: "single-room",
    location: "Kawangware",
    address: "Kawangware, Nairobi",
    price: 5000,
    beds: 0,
    baths: 1,
    area: 12,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85",
    alt: "Bright compact single room with a window",
    tag: "BUDGET-FRIENDLY",
    description: "A clean, secure single room with a window and shared washroom facilities. Close to local shops and public transport, making everyday errands easy.",
    features: ["Shared washroom", "Water included", "Secure compound", "Near public transport"],
    agent: "Angela Wambui",
    agentRole: "Your Kawangware neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "single-room-githurai",
    title: "A fresh start in Githurai",
    listing: "rent",
    type: "Single room",
    roomCategory: "single-room",
    location: "Githurai",
    address: "Githurai 45, Nairobi",
    price: 6000,
    beds: 0,
    baths: 1,
    area: 14,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85",
    alt: "Neat, naturally lit single room",
    tag: "AVAILABLE NOW",
    description: "A neat single room in a convenient Githurai location. Everyday shops and matatu routes are within easy reach.",
    features: ["Shared washroom", "Secure entry", "Water available", "Near shops"],
    agent: "David Mwangi",
    agentRole: "Your Githurai neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "bedsitter-umoja",
    title: "Cosy bedsitter in Umoja",
    listing: "rent",
    type: "Bedsitter",
    roomCategory: "bedsitter",
    location: "Umoja",
    address: "Umoja Innercore, Nairobi",
    price: 8000,
    beds: 0,
    baths: 1,
    area: 22,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    alt: "Compact, airy studio-style bedsitter",
    tag: "GREAT VALUE",
    description: "A well-kept bedsitter with a private washroom, a bright living space, and easy access to local shops and transport.",
    features: ["Private washroom", "Prepaid electricity", "Secure building", "Near public transport"],
    agent: "Wanjiku Njeri",
    agentRole: "Your Umoja neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "bedsitter-kayole",
    title: "Easy living in Kayole",
    listing: "rent",
    type: "Bedsitter",
    roomCategory: "bedsitter",
    location: "Kayole",
    address: "Kayole Junction, Nairobi",
    price: 10000,
    beds: 0,
    baths: 1,
    area: 25,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
    alt: "Bright studio-style bedsitter with a private washroom",
    tag: "MOVE-IN READY",
    description: "A comfortable bedsitter with its own washroom and a practical layout. Conveniently located close to shops and daily transport.",
    features: ["Private washroom", "Water available", "Secure compound", "Near shops"],
    agent: "Angela Wambui",
    agentRole: "Your Kayole neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "bedsitter-kasarani",
    title: "A little space of your own",
    listing: "rent",
    type: "Bedsitter",
    roomCategory: "bedsitter",
    location: "Kasarani",
    address: "Kasarani Seasons, Nairobi",
    price: 12000,
    beds: 0,
    baths: 1,
    area: 27,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    alt: "Modern, tidy bedsitter interior",
    tag: "AVAILABLE NOW",
    description: "A tidy, self-contained bedsitter in a handy Kasarani location, with a bright interior and room for both sleeping and relaxing.",
    features: ["Private washroom", "Borehole", "Secure building", "Near shops and matatus"],
    agent: "David Mwangi",
    agentRole: "Your Kasarani neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "one-bedroom-embakasi",
    title: "One-bedroom, made easy",
    listing: "rent",
    type: "Apartment",
    roomCategory: "1",
    location: "Embakasi",
    address: "Embakasi, Nairobi",
    price: 18000,
    beds: 1,
    baths: 1,
    area: 45,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
    alt: "Comfortable one-bedroom apartment living area",
    tag: "GREAT VALUE",
    description: "A practical one-bedroom apartment with a separate living area and a private kitchen. Shops and transport links are close by.",
    features: ["Separate bedroom", "Private kitchen", "Water available", "Secure entry"],
    agent: "Wanjiku Njeri",
    agentRole: "Your Embakasi neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "one-bedroom-roysambu",
    title: "Room to settle in Roysambu",
    listing: "rent",
    type: "Apartment",
    roomCategory: "1",
    location: "Roysambu",
    address: "Roysambu, Nairobi",
    price: 20000,
    beds: 1,
    baths: 1,
    area: 52,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
    alt: "Light-filled one-bedroom apartment with a modern interior",
    tag: "AVAILABLE NOW",
    description: "Settle into this bright one-bedroom apartment, with a separate bedroom and a welcoming living space in a well-connected neighbourhood.",
    features: ["Separate bedroom", "Balcony", "Secure parking", "Near TRM and transport"],
    agent: "Angela Wambui",
    agentRole: "Your Roysambu neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "one-bedroom-south-b",
    title: "A comfortable South B home",
    listing: "rent",
    type: "Apartment",
    roomCategory: "1",
    location: "South B",
    address: "South B, Nairobi",
    price: 25000,
    beds: 1,
    baths: 1,
    area: 58,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
    alt: "Modern one-bedroom apartment with comfortable furnishings",
    tag: "CITY CONNECTED",
    description: "A welcoming one-bedroom apartment in South B, with easy access to the city, shopping, and main transport routes.",
    features: ["Separate bedroom", "Lift access", "Backup generator", "Secure parking"],
    agent: "David Mwangi",
    agentRole: "Your South B neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85"
  },
  {
    id: "bedsitter-kilimani",
    title: "A city-side bedsitter",
    listing: "rent",
    type: "Bedsitter",
    roomCategory: "bedsitter",
    location: "Kilimani",
    address: "Kilimani, Nairobi",
    price: 25000,
    beds: 0,
    baths: 1,
    area: 32,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
    alt: "Well-finished city bedsitter with a light interior",
    tag: "CITY FAVOURITE",
    description: "A well-finished self-contained bedsitter in the heart of Kilimani, close to cafes, shops, and public transport.",
    features: ["Private washroom", "Lift access", "Backup generator", "Near shopping and cafes"],
    agent: "Wanjiku Njeri",
    agentRole: "Your Kilimani neighbourhood guide",
    agentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85"
  }
];

const page = document.body.dataset.page;
const currency = new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 });
const bedroomLabels = { "single-room": "Single room", bedsitter: "Bedsitter", "1": "1 bedroom" };
const salePriceOptions = [
  ["sale-max:20000000", "Under KES 20M"],
  ["sale-range:20000000:40000000", "KES 20M–40M"],
  ["sale-range:40000000:60000000", "KES 40M–60M"],
  ["sale-min:60000000", "KES 60M and above"]
];
const rentPriceOptions = [
  ["rent-min:5000", "KES 5,000 and above"],
  ["rent-min:10000", "KES 10,000 and above"],
  ["rent-min:15000", "KES 15,000 and above"],
  ["rent-min:20000", "KES 20,000 and above"],
  ["rent-min:30000", "KES 30,000 and above"],
  ["rent-min:50000", "KES 50,000 and above"]
];
const navigationEntry = performance.getEntriesByType("navigation")[0];
const isReload = navigationEntry
  ? navigationEntry.type === "reload"
  : performance.navigation && performance.navigation.type === 1;

if (isReload) {
  history.scrollRestoration = "manual";
}

if (isReload && page !== "home") {
  window.location.replace("index.html#home");
} else if (isReload) {
  window.scrollTo(0, 0);
}

function formatPrice(price) {
  return `KES ${currency.format(price)}`;
}

function renderShell() {
  const navItems = [
    ["home", "Home", "index.html"],
    ["properties", "Properties", "properties.html"],
    ["about", "About", "about.html"],
    ["contact", "Contact", "contact.html"]
  ];
  const header = document.querySelector("#site-header");
  if (header) {
    header.innerHTML = `
      <header class="site-header page-width">
        <a class="brand" href="index.html" aria-label="DreamHomes home">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="brand-name">dream<span>homes</span><small>REAL ESTATE, THOUGHTFULLY.</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
        <nav class="main-nav" aria-label="Main navigation">
          ${navItems.map(([key, label, href]) => `<a href="${href}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
          <a class="nav-cta" href="contact.html">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>`;
    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".main-nav");
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
      nav.classList.toggle("nav-open", !isOpen);
    });
  }
  const footer = document.querySelector("#site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="page-width footer-main">
          <div class="footer-brand"><a class="brand brand-light" href="index.html"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="brand-name">dream<span>homes</span><small>REAL ESTATE, THOUGHTFULLY.</small></span></a><p>Good homes. Good living.<br>Right here in Nairobi.</p></div>
          <div class="footer-column"><span class="footer-label">EXPLORE</span><a href="properties.html">Properties</a><a href="about.html">Our story</a><a href="contact.html">Get in touch</a></div>
          <div class="footer-column"><span class="footer-label">SAY HELLO</span><a href="tel:0710495490">0710495490</a><a href="mailto:Kyalos766@gmail.com">Kyalos766@gmail.com</a><span>Westlands, Nairobi</span></div>
          <div class="footer-note">Make yourself<br><em>at home.</em><span>↗</span></div>
        </div>
        <div class="page-width footer-bottom"><span>© ${new Date().getFullYear()} DreamHomes Real Estate</span><span>Made for finding your place.</span><a href="https://www.instagram.com/" aria-label="Instagram">Instagram ↗</a></div>
      </footer>`;
  }
}

function populateLocations() {
  document.querySelectorAll("[data-location-options]").forEach((select) => {
    const placeholder = select.options[0];
    select.replaceChildren(placeholder);
    residentialAreas.forEach((area) => {
      const option = document.createElement("option");
      option.value = area;
      option.textContent = area;
      select.append(option);
    });
  });
}

function updatePriceOptions(select, listing) {
  const selectedValue = select.value;
  select.replaceChildren(new Option("Any price", ""));
  if (listing === "rent") {
    rentPriceOptions.forEach(([value, label]) => select.add(new Option(label, value)));
  } else if (listing === "sale") {
    salePriceOptions.forEach(([value, label]) => select.add(new Option(label, value)));
  } else {
    const saleGroup = document.createElement("optgroup");
    saleGroup.label = "For sale";
    salePriceOptions.forEach(([value, label]) => saleGroup.append(new Option(label, value)));
    const rentGroup = document.createElement("optgroup");
    rentGroup.label = "For rent";
    rentPriceOptions.forEach(([value, label]) => rentGroup.append(new Option(label, value)));
    select.append(saleGroup, rentGroup);
  }
  if ([...select.options].some((option) => option.value === selectedValue)) {
    select.value = selectedValue;
  }
}

function propertyCard(property) {
  const bedroomLabel = bedroomLabels[property.roomCategory] || `${property.beds} ${property.beds === 1 ? "bed" : "beds"}`;
  const priceSuffix = property.listing === "rent" ? " / month" : "";
  return `
    <article class="property-card">
      <a class="property-photo" href="property.html?id=${encodeURIComponent(property.id)}" aria-label="View ${property.title}">
        <img src="${property.image}" alt="${property.alt}" loading="lazy">
        <span class="property-tag">${property.tag}</span>
        <span class="photo-arrow" aria-hidden="true">↗</span>
      </a>
      <div class="property-card-content">
        <div class="property-card-top"><span class="property-location"><span aria-hidden="true">⌖</span> ${property.location}, Nairobi</span><span class="property-type">${property.type}</span></div>
        <h3><a href="property.html?id=${encodeURIComponent(property.id)}">${property.title}</a></h3>
        <div class="property-specs"><span>${bedroomLabel}</span><i></i><span>${property.baths} ${property.baths === 1 ? "bath" : "baths"}</span><i></i><span>${property.area} m²</span></div>
        <div class="property-card-bottom"><strong>${formatPrice(property.price)}${priceSuffix}</strong><a href="property.html?id=${encodeURIComponent(property.id)}">View home <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>`;
}

function renderHome() {
  const container = document.querySelector("#featured-properties");
  if (container) container.innerHTML = properties.slice(0, 3).map(propertyCard).join("");
  const form = document.querySelector("#home-search");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new URLSearchParams(new FormData(form));
      window.location.href = `properties.html?${query.toString()}`;
    });
  }
}

function renderListings() {
  const form = document.querySelector("#property-filters");
  const listing = document.querySelector("#all-properties");
  if (!form || !listing) return;
  const params = new URLSearchParams(window.location.search);
  ["listing", "location", "type", "bedrooms"].forEach((key) => {
    if (params.has(key)) form.elements.namedItem(key).value = params.get(key);
  });
  const priceSelect = form.elements.namedItem("price");
  updatePriceOptions(priceSelect, form.elements.namedItem("listing").value);
  if (params.has("price")) priceSelect.value = params.get("price");
  const update = () => {
    const values = new FormData(form);
    const listingType = values.get("listing");
    const priceValue = values.get("price") || "";
    const [priceMode, firstBound, secondBound] = priceValue.split(":");
    const priceListing = priceMode.startsWith("rent-") ? "rent" : priceMode.startsWith("sale-") ? "sale" : "";
    const effectiveListing = listingType || priceListing;
    const lowerPrice = priceMode.endsWith("-min") ? Number(firstBound) : priceMode.endsWith("-range") ? Number(firstBound) : 0;
    const upperPrice = priceMode.endsWith("-max") ? Number(firstBound) : priceMode.endsWith("-range") ? Number(secondBound) : Infinity;
    const bedroomFilter = values.get("bedrooms");
    let matches = properties.filter((property) =>
      (!effectiveListing || (property.listing || "sale") === effectiveListing) &&
      (!values.get("location") || property.location === values.get("location")) &&
      (!values.get("type") || property.type === values.get("type")) &&
      (!bedroomFilter ||
        (bedroomFilter === "single-room" && property.roomCategory === "single-room") ||
        (bedroomFilter === "bedsitter" && property.roomCategory === "bedsitter") ||
        (bedroomFilter === "1" && property.beds === 1) ||
        (Number(bedroomFilter) >= 2 && property.beds >= Number(bedroomFilter))) &&
      property.price >= lowerPrice &&
      property.price <= upperPrice
    );
    switch (values.get("sort")) {
      case "price-low": matches.sort((a, b) => a.price - b.price); break;
      case "price-high": matches.sort((a, b) => b.price - a.price); break;
      case "beds": matches.sort((a, b) => b.beds - a.beds); break;
      default: matches.sort((a, b) => properties.indexOf(a) - properties.indexOf(b));
    }
    listing.innerHTML = matches.map(propertyCard).join("");
    document.querySelector("#results-count").textContent = `${matches.length} ${matches.length === 1 ? "place" : "places"} to explore`;
    document.querySelector("#empty-state").hidden = matches.length > 0;
  };
  form.elements.namedItem("listing").addEventListener("change", () => {
    updatePriceOptions(priceSelect, form.elements.namedItem("listing").value);
    update();
  });
  form.addEventListener("change", update);
  document.querySelector("#clear-filters").addEventListener("click", () => {
    form.reset();
    update();
  });
  update();
}

function renderDetail() {
  const container = document.querySelector("#property-detail");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const property = properties.find((item) => item.id === params.get("id")) || properties[0];
  const listingType = property.listing || "sale";
  const bedroomLabel = bedroomLabels[property.roomCategory] || `${property.beds} ${property.beds === 1 ? "Bedroom" : "Bedrooms"}`;
  document.title = `${property.title} | DreamHomes Real Estate`;
  container.innerHTML = `
    <section class="detail-top page-width"><a class="back-link" href="properties.html">← Back to properties</a><div class="detail-heading"><div><p class="eyebrow"><span class="eyebrow-dot"></span>${property.location}, Nairobi</p><h1>${property.title}</h1></div><div class="detail-price"><span>${listingType === "rent" ? "For rent" : "For sale"}</span><strong>${formatPrice(property.price)}${listingType === "rent" ? " / month" : ""}</strong></div></div>
      <div class="detail-gallery"><img class="gallery-main" src="${property.image}" alt="${property.alt}"><div class="gallery-side"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" alt="Bright and comfortable interior" loading="lazy"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85" alt="Home and garden" loading="lazy"><span class="gallery-count">01 / 03</span></div></div>
    </section>
    <section class="detail-layout page-width">
      <div class="detail-main">
        <div class="detail-facts"><span><strong>${bedroomLabel}</strong></span><i></i><span><strong>${property.baths}</strong> ${property.baths === 1 ? "Bathroom" : "Bathrooms"}</span><i></i><span><strong>${property.area}</strong> m²</span><i></i><span>${property.type}</span></div>
        <div class="detail-block"><p class="eyebrow">A little about this place</p><h2>Room to make<br><em>it your own.</em></h2><p class="body-copy">${property.description}</p><p class="body-copy">Located at ${property.address}, this home offers the comfort and convenience that make settling in feel easy.</p></div>
        <div class="detail-block"><p class="eyebrow">The good stuff</p><h2>Thoughtful <em>details.</em></h2><ul class="amenity-list">${property.features.map((feature) => `<li><span>✳</span>${feature}</li>`).join("")}</ul></div>
        <div class="detail-block location-block"><p class="eyebrow">A place on the map</p><h2>Get to know <em>${property.location}.</em></h2><p class="body-copy">${property.address}, ${property.location}, Nairobi</p><iframe title="Map showing ${property.location}, Nairobi" src="https://maps.google.com/maps?q=${encodeURIComponent(property.location + ", Nairobi, Kenya")}&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
      <aside class="inquiry-card"><p class="eyebrow">Make this your next move</p><h2>Let’s take<br><em>a look.</em></h2><div class="agent-profile"><img src="${property.agentPhoto}" alt="${property.agent}" loading="lazy"><div><strong>${property.agent}</strong><span>${property.agentRole}</span></div></div><a class="agent-phone" href="tel:0710495490">↗ &nbsp; 0710495490</a>      <form id="inquiry-form"><input type="hidden" name="property" value="${property.title}"><label>Your name<input name="name" type="text" placeholder="Your name" autocomplete="name" required></label><label>Email address<input name="email" type="email" placeholder="you@example.com" autocomplete="email" required></label><label>Your message<textarea name="message" rows="3" placeholder="I’d love to know more..." required></textarea></label><button class="button button-dark" type="submit">Ask about this ${listingType === "rent" ? "rental" : "home"} <span aria-hidden="true">↗</span></button><p class="form-note" id="inquiry-feedback" aria-live="polite">Submitting opens your email app with your message addressed to our team.</p></form></aside>
    </section>
    <section class="detail-related page-width"><div class="section-heading"><div><p class="eyebrow">There’s more to explore</p><h2>A few more <em>good places.</em></h2></div><a class="text-link" href="properties.html">All properties <span aria-hidden="true">↗</span></a></div><div class="property-grid">${properties.filter((item) => item.id !== property.id).slice(0, 3).map(propertyCard).join("")}</div></section>`;
}

function setupForms() {
  const forms = [
    ["contact-form", "contact-feedback"],
    ["inquiry-form", "inquiry-feedback"]
  ];
  forms.forEach(([formId, feedbackId]) => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const subject = formId === "inquiry-form" ? `Enquiry: ${data.property}` : `Website enquiry: ${data.interest}`;
      const body = formId === "inquiry-form"
        ? `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
        : `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nInterested in: ${data.interest}\n\n${data.message}`;
      const link = document.createElement("a");
      link.href = `mailto:Kyalos766@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      link.click();
      document.getElementById(feedbackId).textContent = "Your email app should open with this message. If it doesn’t, email Kyalos766@gmail.com.";
    });
  });
}

populateLocations();
renderShell();
renderHome();
renderListings();
renderDetail();
setupForms();
