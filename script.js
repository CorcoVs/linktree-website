document.addEventListener("DOMContentLoaded", function () {
  const linkList = document.getElementById("link-list");
  const modeToggle = document.getElementById("mode-toggle-btn");
  const modeLabel = document.getElementById("mode-label");

  modeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    updateModeLabel();
  });

  const updateModeLabel = () => {
    modeLabel.textContent = document.body.classList.contains("dark-mode")
      ? "Dark Mode"
      : "Light Mode";
  };

  const links = [
    {
      name: "Facebook",
      title: "Connect with me on Facebook",
      url: "https://www.facebook.com/IttAndrei/",
      icon: "fab fa-facebook",
      gradient: "linear-gradient(135deg, #3b5998 0%, #192f6a 100%)",
    },
    {
      name: "Instagram",
      title: "Follow me on Instagram",
      url: "https://www.instagram.com/andrei.itt/",
      icon: "fab fa-instagram",
      gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%)",
    },
    {
      name: "GitHub",
      title: "Check out my projects on GitHub",
      url: "https://github.com/CorcoVs",
      icon: "fab fa-github",
      gradient: "linear-gradient(135deg, #24292e 0%, #121417 100%)",
    },
    {
      name: "LinkedIn",
      title: "Connect with me on LinkedIn",
      url: "https://www.linkedin.com/in/andrei-eugen-itt-98a110221/",
      icon: "fab fa-linkedin",
      gradient: "linear-gradient(135deg, #0077b5 0%, #004e7c 100%)",
    },
    {
      name: "Nutri Savvy",
      title: "Explore Nutri Savvy App",
      url: "https://corcovs.github.io/NutriSavvy/",
      icon: "fas fa-apple-alt", // Changed icon for Nutri Savvy
      gradient: "linear-gradient(135deg, #3498db 0%, #2c3e50 100%)",
    },
    {
      name: "YouTube",
      title: "Subscribe to my YouTube channel",
      url: "https://www.youtube.com/channel/UCoeioz3J9dGkXZRnF9vM0Pg",
      icon: "fab fa-youtube",
      gradient: "linear-gradient(135deg, #ff0000 0%, #c31432 100%)",
    },
    {
      name: "Contact",
      title: "Send me an email",
      url: "mailto:ittandrei14@gmail.com",
      icon: "far fa-envelope",
      gradient: "linear-gradient(135deg, #16a085 0%, #2ecc71 100%)",
    },
    {
      name: "Restaurant List App",
      title: "Explore Restaurant List App",
      url: "https://corcovs.github.io/Restaurant-List/",
      icon: "fas fa-utensils", // Changed icon for Restaurant List App
      gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    },
  ];

  links.forEach((link) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.background = link.gradient;

    const icon = document.createElement("i");
    icon.className = link.icon;

    const title = document.createElement("span");
    title.textContent = link.title;

    const anchor = document.createElement("a");
    anchor.href = link.url;

    // Append icon, line break, and title to the anchor before appending it to the card
    anchor.appendChild(icon);
    anchor.appendChild(document.createElement("br"));
    anchor.appendChild(title);

    card.appendChild(anchor);
    linkList.appendChild(card);

    // Add event listener to make the entire card clickable
    card.addEventListener("click", function () {
      window.location.href = link.url;
    });
  });

  // Initialize mode label based on the current mode
  updateModeLabel();
});
