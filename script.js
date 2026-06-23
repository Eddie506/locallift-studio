const header = document.querySelector(".site-header");
const switcherButtons = document.querySelectorAll(".switcher-button");
const leadForm = document.querySelector(".lead-form");
const formNote = document.querySelector(".form-note");

const modes = {
  restaurant: {
    bodyClass: "",
    category: "Neighborhood bistro",
    title: "Juniper Table",
    copy:
      "Seasonal dining, online reservations, event nights, and a mobile-first menu that is easy to scan from the sidewalk.",
    metricOneValue: "42",
    metricOneLabel: "weekly bookings",
    metricTwoValue: "4.8",
    metricTwoLabel: "review score",
    cta: "Reserve a table",
    kicker: "Tonight's special",
    previewTitle: "Citrus salmon with herb risotto",
    previewButton: "Order Ahead",
    list: [
      ["Weekend brunch", "Sat-Sun, 9 AM to 2 PM"],
      ["Private events", "Patio and dining room bookings"],
      ["Gift cards", "Digital cards delivered instantly"],
    ],
  },
  salon: {
    bodyClass: "mode-salon",
    category: "Boutique salon",
    title: "Olive & Rose",
    copy:
      "A calm booking path for haircuts, color, bridal styling, membership offers, and recurring self-care appointments.",
    metricOneValue: "31",
    metricOneLabel: "appointments this week",
    metricTwoValue: "22%",
    metricTwoLabel: "rebook lift",
    cta: "Book a service",
    kicker: "Featured treatment",
    previewTitle: "Gloss, cut, and style package",
    previewButton: "Book Online",
    list: [
      ["Color consults", "Match tone, budget, and timing"],
      ["Membership perks", "Monthly blowout and treatment plans"],
      ["Bridal calendar", "Trials, parties, and event styling"],
    ],
  },
  services: {
    bodyClass: "mode-services",
    category: "Home service company",
    title: "Summit Repair Co.",
    copy:
      "Fast quote requests, service-area pages, review proof, emergency calls, financing prompts, and clean project galleries.",
    metricOneValue: "18",
    metricOneLabel: "new quote requests",
    metricTwoValue: "6",
    metricTwoLabel: "service areas",
    cta: "Request an estimate",
    kicker: "Popular service",
    previewTitle: "Same-week repair appointments",
    previewButton: "Get Estimate",
    list: [
      ["Emergency calls", "Priority contact for urgent repairs"],
      ["Project gallery", "Before-after proof for homeowners"],
      ["Service zones", "City pages for local search"],
    ],
  },
};

function setHeaderState() {
  header.dataset.elevated = window.scrollY > 24 ? "true" : "false";
}

function setMode(modeName) {
  const mode = modes[modeName];
  if (!mode) return;

  document.body.classList.remove("mode-salon", "mode-services");
  if (mode.bodyClass) {
    document.body.classList.add(mode.bodyClass);
  }

  document.querySelector("#demo-category").textContent = mode.category;
  document.querySelector("#demo-title").textContent = mode.title;
  document.querySelector("#demo-copy").textContent = mode.copy;
  document.querySelector("#metric-one-value").textContent = mode.metricOneValue;
  document.querySelector("#metric-one-label").textContent = mode.metricOneLabel;
  document.querySelector("#metric-two-value").textContent = mode.metricTwoValue;
  document.querySelector("#metric-two-label").textContent = mode.metricTwoLabel;
  document.querySelector("#demo-cta").textContent = mode.cta;
  document.querySelector("#preview-kicker").textContent = mode.kicker;
  document.querySelector("#preview-title").textContent = mode.previewTitle;
  document.querySelector("#preview-button").textContent = mode.previewButton;

  const previewList = document.querySelector("#preview-list");
  previewList.innerHTML = mode.list
    .map(([title, description]) => `<div><strong>${title}</strong><span>${description}</span></div>`)
    .join("");

  switcherButtons.forEach((button) => {
    const isActive = button.dataset.mode === modeName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

switcherButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Demo brief drafted. Connect this form to email, CRM, or booking software when you launch.";
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
