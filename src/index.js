const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>zeqqe.dev – Portfolio</title>
  <link rel="icon" href="https://www.kernel.org/theme/images/logos/favicon.png" type="image/png" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <style>
    :root {
      --bg: #f7f3e9;
      --text: #2a2a2a;
      --header-bg: #f1e9d9;
      --link: #9c7b46;
      --link-hover: #b8925a;
      --card-bg: #ffffff;
      --border: #ddd2c2;
    }
    body.dark {
      --bg: #181a1f;
      --text: #d1d5db;
      --header-bg: #1e1f24;
      --link: #5865f2;
      --link-hover: #7289da;
      --card-bg: #20222b;
      --border: #2a2d35;
    }
    body {
      font-family: "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 0;
      transition: background-color 0.3s, color 0.3s;
      line-height: 1.6;
    }
    header, footer {
      background-color: var(--header-bg);
      border-bottom: 1px solid var(--border);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header h1 {
      margin: 0;
      font-size: 1.6rem;
    }
    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1.5rem;
    }
    nav a {
      text-decoration: none;
      color: var(--link);
      font-weight: 500;
      transition: color 0.2s;
    }
    nav a:hover {
      color: var(--link-hover);
    }
    #mode-toggle {
      background: none;
      border: 1px solid var(--border);
      border-radius: 6px;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0.4rem 0.6rem;
      color: var(--link);
      transition: background 0.2s, color 0.2s, border 0.2s;
    }
    #mode-toggle:hover {
      background: rgba(0,0,0,0.05);
    }
    body.dark #mode-toggle:hover {
      background: rgba(255,255,255,0.05);
    }
    main {
      padding: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }
    section {
      margin-bottom: 3rem;
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--border);
      transition: background 0.3s, border 0.3s;
    }
    section h2 {
      font-size: 1.3rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.3rem;
      margin-bottom: 1rem;
    }
    a {
      color: var(--link);
      transition: color 0.2s;
    }
    a:hover {
      text-decoration: underline;
      color: var(--link-hover);
    }
    .project-list li {
      margin-bottom: 1.2rem;
      padding: 0.8rem;
      border-left: 3px solid var(--link);
      background: rgba(156, 123, 70, 0.1);
      border-radius: 4px;
    }
    body.dark .project-list li {
      background: rgba(88, 101, 242, 0.08);
    }
    footer {
      text-align: center;
      padding: 1rem;
      font-size: 0.85rem;
      color: #666;
      border-top: 1px solid var(--border);
    }
    body.dark footer {
      color: #999;
    }
    footer a {
      color: inherit;
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body class="dark">
  <header>
    <div>
      <h1>zeqqe.dev</h1>
      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="copyleft.html">COPYLEFT</a></li>
        </ul>
      </nav>
    </div>
    <button id="mode-toggle" aria-label="Toggle Dark Mode">
      <i class="fas fa-sun"></i>
    </button>
  </header>
  <main>
    <section id="about">
      <h2>ABOUT</h2>
      <p>
        This is an open-source portfolio documenting my projects and development principles. It showcases curated work reflecting clarity and structure, both in code and interface.
      </p>
    </section>
    <section id="projects">
      <h2>PROJECTS</h2>
      <ul id="project-list" class="project-list">
        <li>Loading projects...</li>
      </ul>
      <p>
        <em>Site source code:</em>
        <a href="https://github.com/Zeqqqe/zeqqe.github.io" target="_blank">Zeqqqe/zeqqe.github.io</a>
      </p>
    </section>
    <section id="contact">
      <h2>CONTACT</h2>
      <ul>
        <li>Email: <a href="mailto:contact@zeqqe.dev">contact@zeqqe.dev</a></li>
        <li>GitHub: <a href="https://github.com/zeqqqe" target="_blank">zeqqqe</a></li>
        <li>Alternate GitHub: <a href="https://github.com/Zalgoo" target="_blank">Zalgoo</a></li>
        <li>Bluesky: <a href="https://bsky.app/profile/zeqqe.dev" target="_blank">zeqqe.dev</a></li>
        <li>Ko-fi: <a href="https://ko-fi.com/zeqqqe" target="_blank">zeqqe</a></li>
      </ul>
    </section>
  </main>
  <footer>
    <small>
      <a href="copyleft.html">🄯 2025 zeqqe — All content on my GitHub is open source.</a>
    </small>
  </footer>
  <script>
    const reposToShow = [
      "Zalgoo/Zoidberg",
      "Zalgoo/Python-Text-To-Speech",
      "Zalgoo/ASCII"
    ];
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "<li>Loading projects...</li>";
    Promise.all(
      reposToShow.map(repo =>
        fetch(\`https://api.github.com/repos/\${repo}\`).then(res => res.json())
      )
    )
      .then(repos => {
        projectList.innerHTML = "";
        repos.forEach(repo => {
          const li = document.createElement("li");
          li.innerHTML = \`
            <strong><a href="\${repo.html_url}" target="_blank">\${repo.full_name}</a></strong><br />
            \${repo.description || "No description."}
          \`;
          projectList.appendChild(li);
        });
      })
      .catch(err => {
        console.error(err);
        projectList.innerHTML = "<li>Error loading projects.</li>";
      });
    const toggleBtn = document.getElementById("mode-toggle");
    const icon = toggleBtn.querySelector("i");
    function setDarkMode(enabled) {
      document.body.classList.toggle("dark", enabled);
      icon.className = enabled ? "fas fa-sun" : "fas fa-moon";
      localStorage.setItem("darkMode", enabled);
    }
    toggleBtn.addEventListener("click", () => {
      const enabled = !document.body.classList.contains("dark");
      setDarkMode(enabled);
    });
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(true);
    }
  </script>
</body>
</html>
`;
const copyleftContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>zeqqe.dev – Copyleft</title>

  <link rel="icon" href="https://www.kernel.org/theme/images/logos/favicon.png" type="image/png" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <style>
    :root {
      --bg: #f7f3e9;
      --text: #2a2a2a;
      --header-bg: #f1e9d9;
      --link: #9c7b46;
      --link-hover: #b8925a;
      --card-bg: #ffffff;
      --border: #ddd2c2;
    }

    body.dark {
      --bg: #181a1f;
      --text: #d1d5db;
      --header-bg: #1e1f24;
      --link: #5865f2;
      --link-hover: #7289da;
      --card-bg: #20222b;
      --border: #2a2d35;
    }

    body {
      font-family: "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 0;
      transition: background-color 0.3s, color 0.3s;
      line-height: 1.6;
    }

    header, footer {
      background-color: var(--header-bg);
      border-bottom: 1px solid var(--border);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      margin: 0;
      font-size: 1.6rem;
    }

    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1.5rem;
    }

    nav a {
      text-decoration: none;
      color: var(--link);
      font-weight: 500;
      transition: color 0.2s;
    }
    nav a:hover {
      color: var(--link-hover);
    }

    #mode-toggle {
      background: none;
      border: 1px solid var(--border);
      border-radius: 6px;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0.4rem 0.6rem;
      color: var(--link);
      transition: background 0.2s, color 0.2s, border 0.2s;
    }
    #mode-toggle:hover {
      background: rgba(0,0,0,0.05);
    }
    body.dark #mode-toggle:hover {
      background: rgba(255,255,255,0.05);
    }

    main {
      padding: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }

    section {
      margin-bottom: 3rem;
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--border);
      transition: background 0.3s, border 0.3s;
    }

    section h2 {
      font-size: 1.3rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.3rem;
      margin-bottom: 1rem;
    }

    a {
      color: var(--link);
      transition: color 0.2s;
    }
    a:hover {
      text-decoration: underline;
      color: var(--link-hover);
    }

    footer {
      text-align: center;
      padding: 1rem;
      font-size: 0.85rem;
      color: #666;
      border-top: 1px solid var(--border);
    }
    body.dark footer {
      color: #999;
    }
    footer a {
      color: inherit;
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body class="dark">
  <header>
    <div>
      <h1>zeqqe.dev</h1>
      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="">HOME</a></li>
        </ul>
      </nav>
    </div>
    <button id="mode-toggle" aria-label="Toggle Dark Mode">
      <i class="fas fa-sun"></i>
    </button>
  </header>

  <main>
    <section>
      <h2>Copyleft Notice</h2>
      <p>
        <span aria-hidden="true">🄯</span> 2025 zeqqe.  
        This website and all associated code and content are open source.
      </p>
      <p>
        <strong>Content License:</strong>  
        All text and media are licensed under 
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a>.
      </p>
      <p>
        <strong>Code License:</strong>  
        All source code is licensed under 
        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GPL-3.0-or-later</a>.
      </p>
      <p>
        You are free to copy, modify, and share this work, provided derivative works preserve the same freedoms.  
      </p>
      <p>
        Source: <a href="https://github.com/Zeqqqe/zeqqe.github.io" target="_blank">GitHub Repository</a>
      </p>
    </section>
  </main>

  <footer>
    <small>
      <a href="">🄯 2025 zeqqe — Return to main site</a>
    </small>
  </footer>

  <script>
    const toggleBtn = document.getElementById("mode-toggle");
    const icon = toggleBtn.querySelector("i");

    function setDarkMode(enabled) {
      document.body.classList.toggle("dark", enabled);
      icon.className = enabled ? "fas fa-sun" : "fas fa-moon";
      localStorage.setItem("darkMode", enabled);
    }

    toggleBtn.addEventListener("click", () => {
      const enabled = !document.body.classList.contains("dark");
      setDarkMode(enabled);
    });

    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(true);
    }
  </script>
</body>
</html>`;

const fundingContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>zeqqe.dev – Funding</title>

  <link rel="icon" href="https://www.kernel.org/theme/images/logos/favicon.png" type="image/png" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  
  <style>
    :root {
      --bg: #f7f3e9;
      --text: #2a2a2a;
      --header-bg: #f1e9d9;
      --link: #9c7b46;
      --link-hover: #b8925a;
      --card-bg: #ffffff;
      --border: #ddd2c2;
      --footer-text: #666;
      --footer-text-hover: #9c7b46; /* Brown highlight for light mode */
      --iframe-bg-light: #f7f3e9; /* Light mode background for iframe */
      --iframe-bg-dark: #20222b; /* Dark mode background for iframe */
    }

    body.dark {
      --bg: #181a1f;
      --text: #d1d5db;
      --header-bg: #1e1f24;
      --link: #5865f2;
      --link-hover: #7289da;
      --card-bg: #20222b;
      --border: #2a2d35;
      --footer-text: #999;
      --footer-text-hover: #5865f2; /* Blue text hover in dark mode */
      --iframe-bg-light: #20222b; /* Dark mode background for iframe */
      --iframe-bg-dark: #20222b; /* Same for dark mode */
    }

    body {
      font-family: "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 0;
      transition: background-color 0.3s, color 0.3s;
      line-height: 1.6;
    }

    header, footer {
      background-color: var(--header-bg);
      border-bottom: 1px solid var(--border);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      margin: 0;
      font-size: 1.6rem;
    }

    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1.5rem;
    }

    nav a {
      text-decoration: none;
      color: var(--link);
      font-weight: 500;
      transition: color 0.2s;
    }
    nav a:hover {
      color: var(--link-hover);
    }

    #mode-toggle {
      background: none;
      border: 1px solid var(--border);
      border-radius: 6px;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0.4rem 0.6rem;
      color: var(--link);
      transition: background 0.2s, color 0.2s, border 0.2s;
    }
    #mode-toggle:hover {
      background: rgba(0,0,0,0.05);
    }

    main {
      padding: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }

    /* Custom styling for Ko-Fi iframe container */
    #kofi-container {
      background-color: var(--iframe-bg-light);  /* Default to light mode background */
      border-radius: 8px;
      padding: 10px;
      transition: background-color 0.3s ease;
    }

    /* Footer Styling */
    footer {
      text-align: center;
      padding: 1rem;
      font-size: 0.85rem;
      color: var(--footer-text);
      border-top: 1px solid var(--border);
    }

    footer a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s;
    }

    footer a:hover {
      color: var(--footer-text-hover); /* Brown for light mode, blue for dark mode */
      text-decoration: underline;
    }

  </style>
</head>

<body>
  <header>
    <div>
      <h1>zeqqe.dev</h1>
      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="copyleft.html">COPYLEFT</a></li>
        </ul>
      </nav>
    </div>
    <button id="mode-toggle" aria-label="Toggle Dark Mode">
      <i class="fas fa-sun"></i>
    </button>
  </header>

  <main>
    <section id="ko-fi">
      <h2>SUPPORT</h2>
      <div id="kofi-container">
        <iframe
          id="kofiframe"
          src="https://ko-fi.com/zeqqqe/?hidefeed=true&widget=true&embed=true&preview=true"
          title="zeqqqe Ko-fi"
          style="border:none;width:100%;height:712px;"
        ></iframe>
      </div>
    </section>
  </main>

  <footer>
    <small>
      <a href="copyleft.html">🄯 2025 zeqqe — All content on my GitHub is open source.</a>
    </small>
  </footer>

  <script>
    const toggleBtn = document.getElementById("mode-toggle");
    const icon = toggleBtn.querySelector("i");
    const kofiContainer = document.getElementById("kofi-container");

    function setDarkMode(enabled) {
      document.body.classList.toggle("dark", enabled);
      icon.className = enabled ? "fas fa-sun" : "fas fa-moon";
      localStorage.setItem("darkMode", enabled);

      // Update the iframe container background when the theme changes
      kofiContainer.style.backgroundColor = enabled ? "var(--iframe-bg-dark)" : "var(--iframe-bg-light)";
    }

    toggleBtn.addEventListener("click", () => {
      const enabled = !document.body.classList.contains("dark");
      setDarkMode(enabled);
    });

    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(true); // Default to dark mode if no preference is stored
    }
  </script>
</body>
</html>`;

// The new link object
const linktreeLinks = {
    "GitHub": "https://github.com/Zeqqqe",
    "Discord": "@zeqqqe / https://discord.com/users/1265057708587880458",
    "Email": "mailto:contact@zeqqe.dev",
    "Bluesky": "https://bsky.app/profile/zeqqe.dev",
    "Ko-fi": "https://ko-fi.com/zeqqqe",
};

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const userAgent = request.headers.get("user-agent") || "";
    const url = new URL(request.url);

    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = String(currentTime.getMonth() + 1).padStart(2, '0');
    const day = String(currentTime.getDate()).padStart(2, '0');
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


    if (url.pathname === '/robots.txt') {
        const robotsTxt = `
User-agent: *
Allow: /
Disallow: /copyleft.html
Disallow: /funding.html
Sitemap: ${url.origin}/sitemap.xml
`;
        return new Response(robotsTxt, {
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    } else if (url.pathname === '/sitemap.xml') {
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zeqqe.dev/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zeqqe.dev/copyleft.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://zeqqe.dev/funding.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

        return new Response(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    }

    // New /linktree endpoint
    if (url.pathname === "/linktree") {
        const longestName = Object.keys(linktreeLinks).reduce(
            (max, name) => Math.max(max, name.length), 0);
        
        const longestLink = Object.values(linktreeLinks).reduce(
            (max, link) => Math.max(max, link.length), 0);
        
        const contentWidth = longestName + longestLink + 3; // +3 for " — "
        const totalWidth = contentWidth + 2; // +2 for the "|" borders

        const horizontalLine = `\x1b[36m┌${"─".repeat(totalWidth - 0)}┐\x1b[0m`; 
        const bottomLine = `\x1b[36m└${"─".repeat(totalWidth - 0)}┘\x1b[0m`;

        let asciiArt = `       "\e[49m             \e[38;2;39;39;39;49m▄\e[38;2;19;19;19;49m▄\e[38;2;20;20;20;49m▄\e[38;2;16;16;16;49m▄\e[49m        \e[38;2;26;26;26;49m▄\e[38;2;21;21;21;49m▄\e[38;2;14;14;14;49m▄▄\e[38;2;16;16;16;48;2;32;32;32m▄\e[38;2;109;75;79;48;2;14;14;14m▄\e[38;2;19;19;19;48;2;17;17;17m▄\e[38;2;101;70;73;48;2;20;20;20m▄\e[38;2;97;67;71;48;2;19;19;19m▄\e[38;2;93;65;68;49m▄\e[38;2;30;30;30;49m▄\e[49m              \e[m     /linktree
\e[49m           \e[38;2;18;18;18;49m▄\e[38;2;249;4;25;48;2;17;17;17m▄▄\e[48;2;249;4;25m \e[38;2;26;26;26;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;20;20;20m▄\e[38;2;52;52;52;48;2;94;94;94m▄\e[38;2;97;97;97;49m▄\e[49m   \e[38;2;19;19;19;49m▄\e[38;2;136;92;97;48;2;12;12;12m▄\e[38;2;132;90;95;48;2;105;83;86m▄\e[38;2;28;28;28;48;2;126;86;91m▄\e[38;2;19;19;19;48;2;10;10;10m▄\e[38;2;121;82;87;48;2;10;10;10m▄\e[38;2;117;80;84;48;2;115;82;86m▄\e[38;2;113;77;81;48;2;14;14;14m▄\e[38;2;109;75;79;48;2;38;38;38m▄\e[38;2;23;23;23;48;2;103;71;75m▄\e[38;2;101;70;73;48;2;99;69;72m▄\e[38;2;97;67;71;48;2;95;66;69m▄\e[38;2;93;65;68;48;2;91;64;67m▄\e[38;2;90;62;65;48;2;27;27;27m▄\e[38;2;25;25;25;49m▄\e[49m            \e[m
\e[49m           \e[38;2;249;4;25;48;2;42;42;42m▄\e[38;2;20;20;20;48;2;249;4;25m▄\e[38;2;249;4;25;48;2;22;22;22m▄\e[38;2;75;75;75;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;50;50;50;48;2;46;46;46m▄\e[48;2;249;4;25m  \e[38;2;249;4;25;48;2;22;22;22m▄\e[38;2;18;18;18;49m▄\e[49m \e[38;2;19;19;19;49m▄\e[38;2;25;25;25;48;2;108;87;90m▄\e[38;2;14;14;14;48;2;136;92;98m▄\e[38;2;9;9;9;48;2;97;85;86m▄\e[38;2;251;224;176;48;2;15;15;15m▄\e[38;2;251;224;176;48;2;251;223;176m▄\e[38;2;24;24;24;48;2;122;84;88m▄\e[38;2;121;82;87;48;2;20;20;20m▄\e[38;2;98;81;83;48;2;115;79;83m▄\e[38;2;113;78;82;48;2;111;76;80m▄\e[38;2;109;75;79;48;2;107;74;78m▄\e[38;2;105;72;76;48;2;25;25;25m▄\e[38;2;29;29;29;48;2;99;69;72m▄\e[38;2;98;67;71;48;2;96;66;70m▄\e[38;2;94;65;68;48;2;92;64;67m▄\e[38;2;22;22;22;48;2;88;61;64m▄\e[38;2;21;21;21;49m▄\e[49m           \e[m
\e[49m          \e[38;2;85;85;85;48;2;83;83;83m▄\e[48;2;249;4;25m \e[38;2;133;56;63;48;2;28;28;28m▄\e[48;2;249;4;25m \e[48;2;255;255;255m \e[38;2;219;219;219;48;2;26;26;26m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;16;16;16m▄\e[38;2;19;19;19;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;36;36;36m▄\e[38;2;30;30;30;49m▄\e[49;38;2;27;27;27m▀\e[38;2;22;22;22;49m▄\e[48;2;255;255;255m  \e[38;2;26;26;26;48;2;23;23;23m▄\e[38;2;29;29;29;48;2;250;229;180m▄\e[38;2;249;204;161;48;2;29;29;29m▄\e[38;2;17;17;17;48;2;15;15;15m▄\e[38;2;12;12;12;48;2;119;81;86m▄\e[38;2;117;80;84;48;2;115;79;83m▄\e[38;2;113;78;82;48;2;111;76;80m▄\e[38;2;109;75;79;48;2;107;74;78m▄\e[38;2;106;73;76;48;2;103;71;75m▄\e[38;2;102;70;74;48;2;38;38;38m▄\e[38;2;98;68;71;48;2;96;66;70m▄\e[38;2;94;65;68;48;2;92;64;67m▄\e[38;2;33;33;33;48;2;23;23;23m▄\e[38;2;34;34;34;48;2;75;75;75m▄\e[49m          \e[m
\e[49m           \e[38;2;24;24;24;48;2;38;38;38m▄\e[48;2;249;4;25m \e[38;2;17;17;17;48;2;249;4;25m▄\e[38;2;2;2;2;48;2;12;12;12m▄\e[38;2;245;246;254;48;2;255;255;255m▄\e[38;2;243;244;254;48;2;20;20;20m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;21;21;21m▄\e[38;2;36;36;36;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;23;23;23m▄\e[49m \e[38;2;34;34;34;48;2;15;15;15m▄\e[38;2;255;255;255;48;2;78;78;78m▄\e[48;2;255;255;255m \e[38;2;14;14;14;48;2;94;94;94m▄\e[38;2;18;18;18;48;2;11;11;11m▄\e[38;2;16;16;16;48;2;12;12;12m▄\e[38;2;25;25;25;48;2;14;14;14m▄\e[38;2;22;22;22;48;2;17;17;17m▄\e[38;2;251;232;182;48;2;13;13;13m▄\e[38;2;26;26;26;48;2;115;79;83m▄\e[38;2;114;78;82;48;2;111;76;80m▄\e[38;2;51;51;51;48;2;54;54;54m▄\e[38;2;20;20;20;48;2;104;71;75m▄\e[38;2;102;70;74;48;2;100;69;72m▄\e[38;2;98;68;71;48;2;96;66;70m▄\e[38;2;94;65;68;48;2;92;64;67m▄\e[38;2;90;63;66;48;2;35;35;35m▄\e[38;2;86;60;63;48;2;19;19;19m▄\e[38;2;45;45;45;48;2;48;48;48m▄\e[38;2;31;31;31;49m▄\e[49m       \e[m
\e[49m  \e[38;2;23;23;23;49m▄\e[38;2;255;255;255;49m▄\e[38;2;255;255;255;48;2;21;21;21m▄\e[38;2;255;255;255;48;2;23;23;23m▄\e[38;2;255;255;255;48;2;83;88;96m▄\e[38;2;255;255;255;48;2;212;216;223m▄\e[38;2;255;255;255;48;2;23;23;23m▄\e[38;2;255;255;255;48;2;25;25;25m▄\e[38;2;47;47;47;48;2;96;96;96m▄\e[38;2;14;14;14;48;2;26;26;26m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;26;26;26m▄\e[38;2;50;50;50;48;2;249;4;25m▄\e[38;2;0;0;0;48;2;227;230;253m▄\e[38;2;208;212;251;48;2;226;228;253m▄\e[38;2;34;34;34;48;2;23;23;23m▄\e[48;2;249;4;25m \e[38;2;36;36;36;48;2;17;17;17m▄\e[48;2;249;4;25m  \e[38;2;17;17;17;48;2;33;33;33m▄\e[38;2;84;79;75;48;2;16;16;16m▄\e[38;2;248;173;138;48;2;18;18;18m▄\e[38;2;247;173;139;48;2;248;183;146m▄\e[38;2;247;179;143;48;2;248;175;141m▄\e[38;2;134;114;100;48;2;247;180;143m▄\e[38;2;249;213;168;48;2;248;197;157m▄\e[38;2;250;231;181;48;2;19;19;19m▄\e[38;2;251;240;188;48;2;45;45;45m▄\e[38;2;27;27;27;48;2;250;238;186m▄\e[38;2;60;60;60;48;2;251;233;183m▄\e[38;2;18;18;18;48;2;22;22;22m▄\e[38;2;249;192;153;48;2;62;62;62m▄\e[38;2;31;31;31;48;2;34;34;34m▄\e[38;2;106;73;77;48;2;19;19;19m▄\e[38;2;102;70;74;48;2;100;69;72m▄\e[38;2;98;68;71;48;2;96;67;70m▄\e[38;2;94;65;69;48;2;30;30;30m▄\e[38;2;84;81;81;48;2;29;29;29m▄\e[38;2;26;26;26;48;2;84;59;62m▄\e[38;2;83;58;61;48;2;34;34;34m▄\e[38;2;23;23;23;48;2;31;31;31m▄\e[38;2;68;68;68;49m▄\e[49m     \e[m
\e[49m \e[38;2;10;10;10;49m▄\e[38;2;255;255;255;48;2;252;252;252m▄\e[38;2;10;10;10;48;2;13;13;13m▄\e[38;2;11;11;11;48;2;237;239;242m▄\e[38;2;9;9;9;48;2;189;189;189m▄\e[38;2;11;11;11;48;2;20;20;20m▄\e[38;2;255;255;255;48;2;20;20;20m▄\e[38;2;97;98;100;48;2;255;255;255m▄\e[38;2;25;25;25;48;2;255;255;255m▄\e[48;2;255;255;255m  \e[38;2;252;253;254;48;2;17;17;17m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;23;23;23m▄\e[38;2;38;38;38;48;2;249;4;25m▄\e[38;2;0;0;0;48;2;189;196;250m▄\e[38;2;169;178;249;48;2;188;194;250m▄\e[38;2;17;17;17;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;29;29;29;48;2;234;15;33m▄\e[38;2;18;18;18;48;2;243;6;26m▄\e[38;2;248;175;139;48;2;151;127;112m▄\e[38;2;247;161;130;48;2;247;166;134m▄\e[38;2;247;169;136;48;2;247;165;133m▄\e[38;2;248;192;153;48;2;247;175;140m▄\e[38;2;250;218;172;48;2;248;196;156m▄\e[38;2;251;235;184;48;2;30;30;30m▄\e[38;2;251;236;185;48;2;251;232;182m▄\e[38;2;220;209;167;48;2;251;240;188m▄\e[38;2;119;91;94;48;2;42;42;42m▄\e[38;2;130;88;93;48;2;127;87;91m▄\e[38;2;126;86;90;48;2;32;32;32m▄\e[38;2;122;83;87;48;2;120;86;89m▄\e[38;2;118;81;85;48;2;23;23;23m▄\e[38;2;45;45;45;48;2;248;181;145m▄\e[38;2;16;16;16;48;2;14;14;14m▄\e[38;2;18;18;18;48;2;104;72;75m▄\e[38;2;25;25;25;48;2;100;69;73m▄\e[38;2;98;68;71;48;2;47;47;47m▄\e[38;2;94;66;69;48;2;92;64;67m▄\e[38;2;90;63;66;48;2;90;64;67m▄\e[38;2;43;43;43;48;2;87;66;68m▄\e[38;2;83;58;61;48;2;81;57;59m▄\e[38;2;79;55;58;48;2;22;22;22m▄\e[38;2;22;22;22;49m▄\e[49m    \e[m
\e[49m \e[38;2;201;208;220;48;2;12;12;12m▄\e[38;2;0;0;0;48;2;15;15;15m▄\e[48;2;0;0;0m \e[38;2;16;16;16;48;2;0;0;0m▄\e[48;2;0;0;0m  \e[38;2;0;0;0;48;2;13;13;13m▄\e[38;2;13;13;13;48;2;25;25;25m▄\e[38;2;27;27;27;48;2;255;255;255m▄\e[38;2;26;26;26;48;2;68;69;71m▄\e[48;2;255;255;255m \e[38;2;248;250;254;48;2;250;252;254m▄\e[38;2;234;241;251;48;2;26;26;26m▄\e[38;2;31;31;31;48;2;249;4;25m▄\e[38;2;249;4;25;48;2;32;32;32m▄\e[38;2;15;15;15;48;2;249;4;25m▄\e[38;2;249;4;25;48;2;0;0;0m▄\e[48;2;14;14;14m \e[48;2;249;4;25m \e[48;2;16;16;16m \e[38;2;248;179;143;48;2;248;188;150m▄\e[38;2;247;167;134;48;2;247;169;135m▄\e[38;2;248;175;140;48;2;247;166;134m▄\e[38;2;248;196;156;48;2;248;185;147m▄\e[38;2;251;223;176;48;2;250;211;167m▄\e[38;2;251;233;183;48;2;251;230;181m▄\e[38;2;251;227;178;48;2;251;232;182m▄\e[38;2;250;222;175;48;2;251;229;180m▄\e[38;2;16;16;16;48;2;22;22;22m▄\e[38;2;136;92;98;48;2;135;92;97m▄\e[38;2;134;91;96;48;2;132;89;94m▄\e[38;2;130;88;93;48;2;128;87;92m▄\e[38;2;126;86;90;48;2;124;84;89m▄\e[38;2;122;83;88;48;2;91;84;85m▄\e[38;2;17;17;17;48;2;116;79;84m▄\e[38;2;208;3;3;48;2;197;7;7m▄\e[38;2;181;5;5;48;2;108;11;11m▄\e[48;2;196;3;3m \e[38;2;188;3;3;48;2;21;21;21m▄\e[38;2;181;3;3;48;2;19;19;19m▄\e[38;2;173;3;3;48;2;93;64;67m▄\e[38;2;20;20;20;48;2;89;62;65m▄\e[38;2;88;82;83;48;2;32;32;32m▄\e[38;2;34;34;34;48;2;81;57;59m▄\e[38;2;79;56;58;48;2;77;54;57m▄\e[38;2;75;53;56;48;2;25;25;25m▄\e[49m   \e[m
\e[49m \e[38;2;211;225;247;48;2;224;234;250m▄\e[38;2;23;23;23;48;2;0;0;0m▄\e[38;2;24;24;24;48;2;22;22;22m▄\e[38;2;236;242;252;48;2;229;232;239m▄\e[38;2;244;247;253;48;2;255;255;255m▄\e[38;2;22;22;22;48;2;0;0;0m▄\e[48;2;0;0;0m \e[38;2;0;0;0;48;2;6;6;6m▄\e[38;2;17;17;17;48;2;14;14;14m▄\e[38;2;20;20;20;48;2;255;255;255m▄\e[38;2;40;40;40;48;2;18;18;18m▄\e[38;2;244;247;253;48;2;246;249;253m▄\e[38;2;230;238;251;48;2;232;240;251m▄\e[38;2;216;229;249;48;2;187;198;213m▄\e[38;2;15;15;15;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;22;22;22m▄\e[38;2;33;33;33;48;2;25;25;25m▄\e[38;2;16;16;16;48;2;249;4;25m▄\e[48;2;14;14;14m \e[38;2;247;166;134;48;2;248;172;138m▄\e[38;2;247;160;130;48;2;247;162;131m▄\e[38;2;247;167;134;48;2;248;176;141m▄\e[38;2;248;184;146;48;2;249;200;158m▄\e[38;2;249;200;159;48;2;251;224;176m▄\e[38;2;249;201;160;48;2;251;228;180m▄\e[38;2;249;191;152;48;2;249;215;170m▄\e[38;2;248;192;153;48;2;249;213;168m▄\e[48;2;136;92;98m \e[38;2;136;92;98;48;2;24;24;24m▄\e[38;2;136;92;98;48;2;16;16;16m▄\e[38;2;101;80;82;48;2;25;25;25m▄\e[38;2;21;21;21;48;2;128;87;92m▄\e[38;2;18;17;17;48;2;124;84;89m▄\e[38;2;208;3;3;48;2;209;3;3m▄\e[38;2;91;64;67;48;2;47;32;33m▄\e[38;2;35;35;35;48;2;203;3;3m▄\e[38;2;195;3;3;48;2;196;3;3m▄\e[48;2;188;3;3m \e[38;2;180;3;3;48;2;181;3;3m▄\e[48;2;173;3;3m \e[38;2;165;3;3;48;2;166;3;3m▄\e[48;2;158;3;3m \e[38;2;150;3;3;48;2;23;23;23m▄\e[38;2;26;26;26;48;2;81;57;60m▄\e[38;2;79;56;58;48;2;77;54;57m▄\e[38;2;75;53;56;48;2;23;23;23m▄\e[49m  \e[m
\e[49m \e[38;2;17;17;17;48;2;30;30;30m▄\e[38;2;34;34;34;48;2;17;17;17m▄\e[48;2;0;0;0m \e[38;2;13;13;13;48;2;15;15;15m▄\e[38;2;220;231;249;48;2;231;239;251m▄\e[38;2;227;236;250;48;2;240;245;252m▄\e[38;2;19;19;19;48;2;0;0;0m▄\e[38;2;21;21;21;48;2;0;0;0m▄\e[48;2;0;0;0m \e[38;2;10;10;10;48;2;12;12;12m▄\e[48;2;255;255;255m \e[38;2;22;22;22;48;2;17;17;17m▄\e[38;2;225;235;250;48;2;228;237;250m▄\e[38;2;211;226;248;48;2;213;227;248m▄\e[38;2;197;217;246;48;2;21;21;21m▄\e[38;2;9;9;9;48;2;62;62;62m▄\e[38;2;19;19;19;48;2;9;9;9m▄\e[38;2;196;177;145;48;2;250;225;176m▄\e[38;2;13;13;13;48;2;249;215;170m▄\e[38;2;11;11;11;48;2;15;15;15m▄\e[38;2;22;22;22;48;2;246;172;139m▄\e[38;2;247;163;132;48;2;246;154;125m▄\e[38;2;246;145;118;48;2;246;149;121m▄\e[38;2;245;135;111;48;2;246;152;124m▄\e[38;2;245;136;112;48;2;246;158;129m▄\e[38;2;246;141;116;48;2;247;159;129m▄\e[38;2;246;152;123;48;2;247;162;131m▄\e[38;2;17;17;17;48;2;248;174;140m▄\e[48;2;136;92;98m   \e[38;2;136;92;98;48;2;136;92;97m▄\e[38;2;186;23;23;48;2;15;15;15m▄\e[48;2;208;3;3m \e[38;2;19;19;19;48;2;27;22;22m▄\e[38;2;122;83;88;48;2;120;82;86m▄\e[38;2;118;81;85;48;2;100;84;86m▄\e[48;2;195;3;3m \e[38;2;187;3;3;48;2;188;3;3m▄\e[48;2;180;3;3m \e[38;2;172;3;3;48;2;173;3;3m▄\e[48;2;165;3;3m \e[38;2;157;3;3;48;2;158;3;3m▄\e[48;2;150;3;3m \e[48;2;142;3;3m \e[38;2;135;3;3;48;2;38;38;38m▄\e[38;2;38;38;38;48;2;77;55;57m▄\e[38;2;77;77;77;48;2;20;20;20m▄\e[49m \e[m
\e[49m \e[49;38;2;19;19;19m▀\e[38;2;170;198;242;48;2;182;207;244m▄\e[38;2;67;70;75;48;2;21;21;21m▄\e[38;2;192;213;244;48;2;11;11;11m▄\e[38;2;16;16;16;48;2;206;222;246m▄\e[38;2;18;18;18;48;2;215;228;249m▄\e[38;2;65;65;65;48;2;223;234;250m▄\e[38;2;20;20;20;48;2;231;239;251m▄\e[38;2;11;11;11;48;2;232;240;251m▄\e[38;2;235;241;252;48;2;237;243;251m▄\e[38;2;243;247;253;48;2;255;255;255m▄\e[38;2;251;252;254;48;2;255;255;255m▄\e[38;2;26;26;26;48;2;24;24;24m▄\e[38;2;207;223;247;48;2;209;224;248m▄\e[38;2;193;214;245;48;2;195;215;246m▄\e[38;2;25;25;25;48;2;16;16;16m▄\e[48;2;250;216;171m \e[38;2;251;224;176;48;2;250;220;174m▄\e[38;2;246;228;180;48;2;250;226;177m▄\e[38;2;250;237;185;48;2;249;224;176m▄\e[38;2;39;39;39;48;2;21;21;21m▄\e[38;2;15;15;15;48;2;51;51;51m▄\e[38;2;15;15;15;48;2;245;157;127m▄\e[38;2;55;53;53;48;2;244;144;118m▄\e[38;2;40;40;40;48;2;244;140;116m▄\e[38;2;15;15;15;48;2;246;153;124m▄\e[38;2;136;92;98;48;2;18;18;18m▄\e[48;2;136;92;98m   \e[38;2;0;0;0;48;2;136;92;98m▄\e[38;2;0;0;0;48;2;12;12;12m▄\e[38;2;0;0;0;48;2;211;2;2m▄\e[38;2;0;0;0;48;2;18;18;18m▄\e[38;2;209;3;3;48;2;210;3;3m▄\e[38;2;210;3;3;48;2;69;69;69m▄\e[38;2;14;14;14;48;2;120;82;87m▄\e[38;2;17;17;17;48;2;27;27;27m▄\e[48;2;187;3;3m \e[48;2;180;3;3m \e[48;2;172;3;3m \e[38;2;164;3;3;48;2;165;3;3m▄\e[48;2;157;3;3m \e[48;2;149;3;3m \e[48;2;142;3;3m \e[38;2;134;3;3;48;2;135;3;3m▄\e[38;2;127;3;3;48;2;24;24;24m▄\e[38;2;21;21;21;48;2;49;49;49m▄\e[38;2;67;67;67;49m▄\e[m
\e[49m  \e[38;2;69;69;69;48;2;21;21;21m▄\e[38;2;153;187;239;48;2;165;195;241m▄\e[38;2;161;192;240;48;2;173;201;242m▄\e[38;2;250;250;250;48;2;255;255;255m▄\e[48;2;255;255;255m \e[38;2;255;255;255;48;2;249;249;249m▄\e[38;2;255;255;255;48;2;253;253;253m▄\e[38;2;255;255;255;48;2;13;13;13m▄\e[38;2;16;16;16;48;2;13;13;13m▄\e[38;2;19;19;19;48;2;230;238;251m▄\e[38;2;13;13;13;48;2;238;244;252m▄\e[38;2;234;241;251;48;2;247;249;253m▄\e[38;2;21;21;21;48;2;37;37;37m▄\e[38;2;189;211;245;48;2;191;212;245m▄\e[38;2;21;21;21;48;2;98;93;85m▄\e[38;2;251;234;184;48;2;60;60;60m▄\e[38;2;14;14;14;48;2;255;255;255m▄\e[38;2;15;15;15;48;2;255;255;255m▄\e[38;2;141;136;114;48;2;14;14;14m▄\e[38;2;43;43;43;48;2;250;235;184m▄\e[38;2;250;225;178;48;2;249;220;173m▄\e[38;2;16;16;16;48;2;248;202;160m▄\e[38;2;248;201;159;48;2;19;19;19m▄\e[38;2;249;200;158;48;2;248;195;155m▄\e[38;2;249;209;166;48;2;248;211;166m▄\e[38;2;17;17;17;48;2;18;18;18m▄\e[38;2;37;37;37;48;2;136;92;98m▄\e[38;2;247;3;3;48;2;135;92;98m▄\e[38;2;199;2;2;48;2;42;32;33m▄\e[48;2;0;0;0m     \e[38;2;1;0;0;48;2;202;2;2m▄\e[38;2;159;2;2;48;2;41;41;41m▄\e[38;2;17;17;17;48;2;121;82;87m▄\e[48;2;187;3;3m \e[48;2;179;3;3m \e[38;2;171;3;3;48;2;172;3;3m▄\e[48;2;164;3;3m \e[48;2;157;3;3m \e[48;2;149;3;3m \e[38;2;141;3;3;48;2;142;3;3m▄\e[48;2;134;3;3m \e[38;2;126;3;3;48;2;127;3;3m▄\e[48;2;18;18;18m \e[38;2;31;31;31;48;2;22;22;22m▄\e[m
\e[49m   \e[38;2;30;30;30;48;2;140;179;237m▄\e[38;2;47;47;48;48;2;148;184;239m▄\e[38;2;59;59;59;48;2;255;255;255m▄\e[38;2;248;248;248;48;2;255;255;255m▄\e[38;2;186;186;186;48;2;255;255;255m▄\e[38;2;19;19;19;48;2;255;255;255m▄\e[38;2;157;157;157;48;2;255;255;255m▄\e[38;2;249;249;249;48;2;255;255;255m▄\e[38;2;255;255;255;48;2;163;163;163m▄\e[38;2;18;18;18;48;2;15;15;15m▄\e[38;2;14;14;14;48;2;36;36;36m▄\e[38;2;218;230;249;48;2;230;238;251m▄\e[38;2;18;18;18;48;2;186;209;244m▄\e[38;2;170;199;242;48;2;173;200;242m▄\e[38;2;157;190;240;48;2;234;224;177m▄\e[38;2;171;158;132;48;2;250;239;187m▄\e[38;2;250;227;178;48;2;250;238;186m▄\e[38;2;250;233;183;48;2;50;50;49m▄\e[38;2;250;239;187;48;2;14;14;14m▄\e[38;2;250;233;182;48;2;10;10;10m▄\e[38;2;18;18;18;48;2;250;218;171m▄\e[38;2;248;192;153;48;2;248;200;158m▄\e[38;2;15;15;15;48;2;248;194;154m▄\e[38;2;11;11;11;48;2;18;18;18m▄\e[48;2;247;3;3m  \e[38;2;230;2;2;48;2;247;3;3m▄\e[38;2;0;0;0;48;2;1;0;0m▄\e[48;2;0;0;0m      \e[38;2;3;0;0;48;2;12;0;0m▄\e[38;2;28;0;0;48;2;191;2;2m▄\e[48;2;186;3;3m \e[48;2;179;3;3m \e[48;2;171;3;3m \e[48;2;164;3;3m \e[48;2;156;3;3m \e[38;2;148;3;3;48;2;149;3;3m▄\e[48;2;141;3;3m \e[38;2;133;3;3;48;2;134;3;3m▄\e[48;2;126;3;3m \e[38;2;23;23;23;48;2;17;17;17m▄\e[49m \e[m
\e[49m    \e[38;2;27;27;27;48;2;123;168;235m▄\e[38;2;221;221;221;48;2;255;255;255m▄\e[38;2;17;17;17;48;2;12;12;12m▄\e[38;2;17;17;17;48;2;188;188;188m▄\e[38;2;24;24;24;48;2;255;255;255m▄\e[38;2;255;255;255;48;2;253;253;253m▄\e[38;2;255;255;255;48;2;123;123;123m▄\e[48;2;255;255;255m \e[38;2;255;255;255;48;2;211;211;211m▄\e[38;2;16;16;16;48;2;14;14;14m▄\e[38;2;17;17;17;48;2;205;222;247m▄\e[38;2;200;219;246;48;2;22;22;22m▄\e[38;2;166;196;241;48;2;168;197;242m▄\e[38;2;38;38;38;48;2;154;188;239m▄\e[38;2;249;200;159;48;2;14;14;14m▄\e[38;2;249;207;164;48;2;250;215;170m▄\e[38;2;249;220;173;48;2;250;224;177m▄\e[38;2;248;229;179;48;2;248;234;182m▄\e[38;2;248;208;164;48;2;249;217;171m▄\e[38;2;247;169;136;48;2;247;188;150m▄\e[38;2;245;151;123;48;2;16;16;16m▄\e[38;2;240;148;122;48;2;15;15;15m▄\e[38;2;17;17;17;48;2;247;163;132m▄\e[38;2;13;13;13;48;2;201;23;23m▄\e[38;2;17;3;3;48;2;247;3;3m▄\e[38;2;0;0;0;48;2;13;13;13m▄\e[48;2;0;0;0m      \e[38;2;9;9;9;48;2;0;0;0m▄\e[48;2;0;0;0m   \e[38;2;11;11;11;48;2;179;3;3m▄\e[48;2;171;3;3m \e[48;2;163;3;3m \e[48;2;156;3;3m \e[48;2;148;3;3m \e[38;2;140;3;3;48;2;141;3;3m▄\e[48;2;133;3;3m \e[48;2;126;3;3m \e[48;2;19;19;19m \e[49m \e[m
\e[49m     \e[38;2;25;25;25;48;2;86;93;103m▄\e[38;2;41;41;41;48;2;255;255;255m▄\e[38;2;254;254;254;48;2;255;255;255m▄\e[48;2;255;255;255m \e[38;2;62;62;62;48;2;255;255;255m▄\e[38;2;26;26;26;48;2;255;255;255m▄\e[38;2;18;18;18;48;2;252;252;252m▄\e[38;2;71;80;93;48;2;220;220;220m▄\e[38;2;159;191;240;48;2;18;18;18m▄\e[38;2;167;197;241;48;2;180;205;243m▄\e[38;2;21;21;21;48;2;188;210;245m▄\e[38;2;248;194;155;48;2;13;13;13m▄\e[38;2;248;197;157;48;2;248;195;155m▄\e[38;2;42;42;42;48;2;248;197;157m▄\e[38;2;250;223;175;48;2;250;210;166m▄\e[38;2;249;235;183;48;2;249;226;178m▄\e[38;2;250;236;184;48;2;248;229;180m▄\e[38;2;250;214;168;48;2;248;204;162m▄\e[38;2;247;187;149;48;2;247;170;137m▄\e[38;2;246;177;142;48;2;246;153;124m▄\e[48;2;127;112;112m  \e[38;2;22;22;22;48;2;7;7;7m▄\e[38;2;14;14;14;48;2;211;3;3m▄\e[38;2;17;17;17;48;2;239;239;239m▄\e[38;2;126;111;111;48;2;10;10;10m▄\e[38;2;14;14;14;48;2;0;0;0m▄\e[38;2;13;13;13;48;2;0;0;0m▄\e[48;2;0;0;0m        \e[38;2;0;0;0;48;2;15;15;15m▄\e[38;2;11;11;11;48;2;163;3;3m▄\e[48;2;155;3;3m \e[38;2;147;3;3;48;2;148;3;3m▄\e[48;2;140;3;3m \e[48;2;133;3;3m \e[48;2;125;3;3m \e[38;2;111;4;4;48;2;18;18;18m▄\e[49m \e[m
\e[49m      \e[49;38;2;90;145;230m▀\e[49;38;2;98;151;231m▀\e[38;2;17;17;17;48;2;106;156;232m▄\e[38;2;248;190;152;48;2;15;15;15m▄\e[38;2;248;188;150;48;2;17;17;17m▄\e[38;2;249;195;155;48;2;20;20;20m▄\e[38;2;249;198;158;48;2;23;23;23m▄\e[38;2;249;203;161;48;2;248;194;155m▄\e[38;2;250;207;164;48;2;248;196;156m▄\e[38;2;248;208;164;48;2;248;198;158m▄\e[38;2;248;211;166;48;2;247;201;159m▄\e[38;2;25;25;25;48;2;248;209;165m▄\e[38;2;248;228;178;48;2;14;14;14m▄\e[38;2;250;237;185;48;2;84;82;77m▄\e[38;2;23;23;23;48;2;252;241;189m▄\e[38;2;251;237;186;48;2;250;238;186m▄\e[38;2;251;227;178;48;2;250;225;177m▄\e[38;2;250;218;172;48;2;249;208;165m▄\e[38;2;26;26;26;48;2;249;202;161m▄\e[48;2;127;112;112m    \e[38;2;127;112;112;48;2;9;9;9m▄\e[38;2;127;112;112;48;2;16;16;16m▄\e[48;2;127;112;112m  \e[38;2;101;96;96;48;2;0;0;0m▄\e[48;2;0;0;0m         \e[38;2;0;0;0;48;2;3;3;3m▄\e[38;2;0;0;0;48;2;110;65;65m▄\e[38;2;20;20;20;48;2;140;3;3m▄\e[48;2;132;3;3m \e[48;2;125;3;3m \e[48;2;117;3;3m \e[38;2;26;26;26;49m▄\e[m
\e[49m        \e[38;2;17;17;17;48;2;114;102;91m▄\e[38;2;39;39;39;48;2;249;199;158m▄\e[38;2;255;255;255;48;2;249;200;159m▄\e[38;2;16;16;16;48;2;249;211;167m▄\e[38;2;20;20;20;48;2;250;220;173m▄\e[38;2;250;237;185;48;2;250;223;176m▄\e[38;2;34;34;34;48;2;248;226;178m▄\e[38;2;222;204;163;48;2;248;223;175m▄\e[38;2;250;214;170;48;2;34;34;34m▄\e[38;2;32;32;32;48;2;249;213;167m▄\e[38;2;248;197;157;48;2;250;213;168m▄\e[38;2;249;204;161;48;2;228;204;163m▄\e[38;2;20;20;20;48;2;250;229;180m▄\e[38;2;249;206;163;48;2;35;35;35m▄\e[38;2;40;40;40;48;2;250;221;174m▄\e[38;2;121;110;110;48;2;249;214;169m▄\e[38;2;127;112;112;48;2;121;110;110m▄\e[48;2;127;112;112m         \e[38;2;21;21;21;48;2;3;3;3m▄\e[48;2;0;0;0m         \e[38;2;14;14;14;48;2;0;0;0m▄\e[49;38;2;0;0;0m▀\e[49;38;2;10;10;10m▀\e[49;38;2;13;13;13m▀\e[49;38;2;79;73;73m▀\e[49;38;2;30;30;30m▀\e[m
\e[0m         \e[49;38;2;34;34;34m▀\e[49;38;2;20;20;20m▀\e[49;38;2;21;21;21m▀\e[49;38;2;15;15;15m▀\e[49;38;2;13;13;13m▀▀\e[38;2;66;66;66;48;2;14;14;14m▄\e[38;2;14;14;14;48;2;127;112;112m▄\e[38;2;11;11;11;48;2;127;112;112m▄\e[38;2;13;13;13;48;2;122;112;112m▄\e[38;2;13;13;13;48;2;127;112;112m▄\e[38;2;13;13;13;48;2;17;17;17m▄\e[38;2;12;12;12;48;2;88;84;84m▄\e[38;2;16;16;16;48;2;127;112;112m▄\e[38;2;15;15;15;48;2;127;112;112m▄\e[38;2;13;13;13;48;2;127;112;112m▄\e[38;2;18;18;18;48;2;127;112;112m▄\e[38;2;15;15;15;48;2;127;112;112m▄\e[38;2;18;18;18;48;2;127;112;112m▄\e[38;2;16;16;16;48;2;127;112;112m▄\e[38;2;20;20;20;48;2;127;112;112m▄\e[38;2;30;30;30;48;2;127;112;112m▄\e[38;2;59;59;59;48;2;127;112;112m▄\e[49;38;2;127;112;112m▀\e[49;38;2;77;76;76m▀\e[49;38;2;16;16;16m▀\e[49m \e[49;38;2;44;44;44m▀\e[49;38;2;33;33;33m▀\e[49;38;2;25;25;25m▀\e[49;38;2;31;31;31m▀\e[49m          \e[m
";                                      Time: ${formattedDateTime}
${horizontalLine}
`;

        for (const [name, link] of Object.entries(linktreeLinks)) {
            asciiArt += `\x1b[36m│\x1b[0m ${name.padEnd(longestName)} — ${link.padEnd(longestLink)} \x1b[36m│\x1b[0m\n`;
        }

        asciiArt += `${bottomLine}`;

        return new Response(asciiArt, {
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }

    if (url.pathname === "/") {
        if (userAgent.includes("curl")) {
            const textContent = `                          
\e[0m             \e[38;2;39;39;39;49m▄\e[38;2;19;19;19;49m▄\e[38;2;20;20;20;49m▄\e[38;2;16;16;16;49m▄\e[49m        \e[38;2;26;26;26;49m▄\e[38;2;21;21;21;49m▄\e[38;2;14;14;14;49m▄▄\e[38;2;16;16;16;48;2;32;32;32m▄\e[38;2;109;75;79;48;2;14;14;14m▄\e[38;2;19;19;19;48;2;17;17;17m▄\e[38;2;101;70;73;48;2;20;20;20m▄\e[38;2;97;67;71;48;2;19;19;19m▄\e[38;2;93;65;68;49m▄\e[38;2;30;30;30;49m▄\e[49m              \e[m
\e[0m           \e[38;2;18;18;18;49m▄\e[38;2;249;4;25;48;2;17;17;17m▄▄\e[48;2;249;4;25m \e[38;2;26;26;26;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;20;20;20m▄\e[38;2;52;52;52;48;2;94;94;94m▄\e[38;2;97;97;97;49m▄\e[49m   \e[38;2;19;19;19;49m▄\e[38;2;136;92;97;48;2;12;12;12m▄\e[38;2;132;90;95;48;2;105;83;86m▄\e[38;2;28;28;28;48;2;126;86;91m▄\e[38;2;19;19;19;48;2;10;10;10m▄\e[38;2;121;82;87;48;2;10;10;10m▄\e[38;2;117;80;84;48;2;115;82;86m▄\e[38;2;113;77;81;48;2;14;14;14m▄\e[38;2;109;75;79;48;2;38;38;38m▄\e[38;2;23;23;23;48;2;103;71;75m▄\e[38;2;101;70;73;48;2;99;69;72m▄\e[38;2;97;67;71;48;2;95;66;69m▄\e[38;2;93;65;68;48;2;91;64;67m▄\e[38;2;90;62;65;48;2;27;27;27m▄\e[38;2;25;25;25;49m▄\e[49m            \e[m
\e[0m           \e[38;2;249;4;25;48;2;42;42;42m▄\e[38;2;20;20;20;48;2;249;4;25m▄\e[38;2;249;4;25;48;2;22;22;22m▄\e[38;2;75;75;75;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;50;50;50;48;2;46;46;46m▄\e[48;2;249;4;25m  \e[38;2;249;4;25;48;2;22;22;22m▄\e[38;2;18;18;18;49m▄\e[49m \e[38;2;19;19;19;49m▄\e[38;2;25;25;25;48;2;108;87;90m▄\e[38;2;14;14;14;48;2;136;92;98m▄\e[38;2;9;9;9;48;2;97;85;86m▄\e[38;2;251;224;176;48;2;15;15;15m▄\e[38;2;251;224;176;48;2;251;223;176m▄\e[38;2;24;24;24;48;2;122;84;88m▄\e[38;2;121;82;87;48;2;20;20;20m▄\e[38;2;98;81;83;48;2;115;79;83m▄\e[38;2;113;78;82;48;2;111;76;80m▄\e[38;2;109;75;79;48;2;107;74;78m▄\e[38;2;105;72;76;48;2;25;25;25m▄\e[38;2;29;29;29;48;2;99;69;72m▄\e[38;2;98;67;71;48;2;96;66;70m▄\e[38;2;94;65;68;48;2;92;64;67m▄\e[38;2;22;22;22;48;2;88;61;64m▄\e[38;2;21;21;21;49m▄\e[49m           \e[m
\e[0m          \e[38;2;85;85;85;48;2;83;83;83m▄\e[48;2;249;4;25m \e[38;2;133;56;63;48;2;28;28;28m▄\e[48;2;249;4;25m \e[48;2;255;255;255m \e[38;2;219;219;219;48;2;26;26;26m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;16;16;16m▄\e[38;2;19;19;19;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;36;36;36m▄\e[38;2;30;30;30;49m▄\e[49;38;2;27;27;27m▀\e[38;2;22;22;22;49m▄\e[48;2;255;255;255m  \e[38;2;26;26;26;48;2;23;23;23m▄\e[38;2;29;29;29;48;2;250;229;180m▄\e[38;2;249;204;161;48;2;29;29;29m▄\e[38;2;17;17;17;48;2;15;15;15m▄\e[38;2;12;12;12;48;2;119;81;86m▄\e[38;2;117;80;84;48;2;115;79;83m▄\e[38;2;113;78;82;48;2;111;76;80m▄\e[38;2;109;75;79;48;2;107;74;78m▄\e[38;2;106;73;76;48;2;103;71;75m▄\e[38;2;102;70;74;48;2;38;38;38m▄\e[38;2;98;68;71;48;2;96;66;70m▄\e[38;2;94;65;68;48;2;92;64;67m▄\e[38;2;33;33;33;48;2;23;23;23m▄\e[38;2;34;34;34;48;2;75;75;75m▄\e[49m          \e[m
\e[0m           \e[38;2;24;24;24;48;2;38;38;38m▄\e[48;2;249;4;25m \e[38;2;17;17;17;48;2;249;4;25m▄\e[38;2;2;2;2;48;2;12;12;12m▄\e[38;2;245;246;254;48;2;255;255;255m▄\e[38;2;243;244;254;48;2;20;20;20m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;21;21;21m▄\e[38;2;36;36;36;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;23;23;23m▄\e[49m \e[38;2;34;34;34;48;2;15;15;15m▄\e[38;2;255;255;255;48;2;78;78;78m▄\e[48;2;255;255;255m \e[38;2;14;14;14;48;2;94;94;94m▄\e[38;2;18;18;18;48;2;11;11;11m▄\e[38;2;16;16;16;48;2;12;12;12m▄\e[38;2;25;25;25;48;2;14;14;14m▄\e[38;2;22;22;22;48;2;17;17;17m▄\e[38;2;251;232;182;48;2;13;13;13m▄\e[38;2;26;26;26;48;2;115;79;83m▄\e[38;2;114;78;82;48;2;111;76;80m▄\e[38;2;51;51;51;48;2;54;54;54m▄\e[38;2;20;20;20;48;2;104;71;75m▄\e[38;2;102;70;74;48;2;100;69;72m▄\e[38;2;98;68;71;48;2;96;66;70m▄\e[38;2;94;65;68;48;2;92;64;67m▄\e[38;2;90;63;66;48;2;35;35;35m▄\e[38;2;86;60;63;48;2;19;19;19m▄\e[38;2;45;45;45;48;2;48;48;48m▄\e[38;2;31;31;31;49m▄\e[49m       \e[m
\e[0m  \e[38;2;23;23;23;49m▄\e[38;2;255;255;255;49m▄\e[38;2;255;255;255;48;2;21;21;21m▄\e[38;2;255;255;255;48;2;23;23;23m▄\e[38;2;255;255;255;48;2;83;88;96m▄\e[38;2;255;255;255;48;2;212;216;223m▄\e[38;2;255;255;255;48;2;23;23;23m▄\e[38;2;255;255;255;48;2;25;25;25m▄\e[38;2;47;47;47;48;2;96;96;96m▄\e[38;2;14;14;14;48;2;26;26;26m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;26;26;26m▄\e[38;2;50;50;50;48;2;249;4;25m▄\e[38;2;0;0;0;48;2;227;230;253m▄\e[38;2;208;212;251;48;2;226;228;253m▄\e[38;2;34;34;34;48;2;23;23;23m▄\e[48;2;249;4;25m \e[38;2;36;36;36;48;2;17;17;17m▄\e[48;2;249;4;25m  \e[38;2;17;17;17;48;2;33;33;33m▄\e[38;2;84;79;75;48;2;16;16;16m▄\e[38;2;248;173;138;48;2;18;18;18m▄\e[38;2;247;173;139;48;2;248;183;146m▄\e[38;2;247;179;143;48;2;248;175;141m▄\e[38;2;134;114;100;48;2;247;180;143m▄\e[38;2;249;213;168;48;2;248;197;157m▄\e[38;2;250;231;181;48;2;19;19;19m▄\e[38;2;251;240;188;48;2;45;45;45m▄\e[38;2;27;27;27;48;2;250;238;186m▄\e[38;2;60;60;60;48;2;251;233;183m▄\e[38;2;18;18;18;48;2;22;22;22m▄\e[38;2;249;192;153;48;2;62;62;62m▄\e[38;2;31;31;31;48;2;34;34;34m▄\e[38;2;106;73;77;48;2;19;19;19m▄\e[38;2;102;70;74;48;2;100;69;72m▄\e[38;2;98;68;71;48;2;96;67;70m▄\e[38;2;94;65;69;48;2;30;30;30m▄\e[38;2;84;81;81;48;2;29;29;29m▄\e[38;2;26;26;26;48;2;84;59;62m▄\e[38;2;83;58;61;48;2;34;34;34m▄\e[38;2;23;23;23;48;2;31;31;31m▄\e[38;2;68;68;68;49m▄\e[49m     \e[m
\e[0m \e[38;2;10;10;10;49m▄\e[38;2;255;255;255;48;2;252;252;252m▄\e[38;2;10;10;10;48;2;13;13;13m▄\e[38;2;11;11;11;48;2;237;239;242m▄\e[38;2;9;9;9;48;2;189;189;189m▄\e[38;2;11;11;11;48;2;20;20;20m▄\e[38;2;255;255;255;48;2;20;20;20m▄\e[38;2;97;98;100;48;2;255;255;255m▄\e[38;2;25;25;25;48;2;255;255;255m▄\e[48;2;255;255;255m  \e[38;2;252;253;254;48;2;17;17;17m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;23;23;23m▄\e[38;2;38;38;38;48;2;249;4;25m▄\e[38;2;0;0;0;48;2;189;196;250m▄\e[38;2;169;178;249;48;2;188;194;250m▄\e[38;2;17;17;17;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;29;29;29;48;2;234;15;33m▄\e[38;2;18;18;18;48;2;243;6;26m▄\e[38;2;248;175;139;48;2;151;127;112m▄\e[38;2;247;161;130;48;2;247;166;134m▄\e[38;2;247;169;136;48;2;247;165;133m▄\e[38;2;248;192;153;48;2;247;175;140m▄\e[38;2;250;218;172;48;2;248;196;156m▄\e[38;2;251;235;184;48;2;30;30;30m▄\e[38;2;251;236;185;48;2;251;232;182m▄\e[38;2;220;209;167;48;2;251;240;188m▄\e[38;2;119;91;94;48;2;42;42;42m▄\e[38;2;130;88;93;48;2;127;87;91m▄\e[38;2;126;86;90;48;2;32;32;32m▄\e[38;2;122;83;87;48;2;120;86;89m▄\e[38;2;118;81;85;48;2;23;23;23m▄\e[38;2;45;45;45;48;2;248;181;145m▄\e[38;2;16;16;16;48;2;14;14;14m▄\e[38;2;18;18;18;48;2;104;72;75m▄\e[38;2;25;25;25;48;2;100;69;73m▄\e[38;2;98;68;71;48;2;47;47;47m▄\e[38;2;94;66;69;48;2;92;64;67m▄\e[38;2;90;63;66;48;2;90;64;67m▄\e[38;2;43;43;43;48;2;87;66;68m▄\e[38;2;83;58;61;48;2;81;57;59m▄\e[38;2;79;55;58;48;2;22;22;22m▄\e[38;2;22;22;22;49m▄\e[49m    \e[m
\e[0m \e[38;2;201;208;220;48;2;12;12;12m▄\e[38;2;0;0;0;48;2;15;15;15m▄\e[48;2;0;0;0m \e[38;2;16;16;16;48;2;0;0;0m▄\e[48;2;0;0;0m  \e[38;2;0;0;0;48;2;13;13;13m▄\e[38;2;13;13;13;48;2;25;25;25m▄\e[38;2;27;27;27;48;2;255;255;255m▄\e[38;2;26;26;26;48;2;68;69;71m▄\e[48;2;255;255;255m \e[38;2;248;250;254;48;2;250;252;254m▄\e[38;2;234;241;251;48;2;26;26;26m▄\e[38;2;31;31;31;48;2;249;4;25m▄\e[38;2;249;4;25;48;2;32;32;32m▄\e[38;2;15;15;15;48;2;249;4;25m▄\e[38;2;249;4;25;48;2;0;0;0m▄\e[48;2;14;14;14m \e[48;2;249;4;25m \e[48;2;16;16;16m \e[38;2;248;179;143;48;2;248;188;150m▄\e[38;2;247;167;134;48;2;247;169;135m▄\e[38;2;248;175;140;48;2;247;166;134m▄\e[38;2;248;196;156;48;2;248;185;147m▄\e[38;2;251;223;176;48;2;250;211;167m▄\e[38;2;251;233;183;48;2;251;230;181m▄\e[38;2;251;227;178;48;2;251;232;182m▄\e[38;2;250;222;175;48;2;251;229;180m▄\e[38;2;16;16;16;48;2;22;22;22m▄\e[38;2;136;92;98;48;2;135;92;97m▄\e[38;2;134;91;96;48;2;132;89;94m▄\e[38;2;130;88;93;48;2;128;87;92m▄\e[38;2;126;86;90;48;2;124;84;89m▄\e[38;2;122;83;88;48;2;91;84;85m▄\e[38;2;17;17;17;48;2;116;79;84m▄\e[38;2;208;3;3;48;2;197;7;7m▄\e[38;2;181;5;5;48;2;108;11;11m▄\e[48;2;196;3;3m \e[38;2;188;3;3;48;2;21;21;21m▄\e[38;2;181;3;3;48;2;19;19;19m▄\e[38;2;173;3;3;48;2;93;64;67m▄\e[38;2;20;20;20;48;2;89;62;65m▄\e[38;2;88;82;83;48;2;32;32;32m▄\e[38;2;34;34;34;48;2;81;57;59m▄\e[38;2;79;56;58;48;2;77;54;57m▄\e[38;2;75;53;56;48;2;25;25;25m▄\e[49m   \e[m
\e[0m \e[38;2;211;225;247;48;2;224;234;250m▄\e[38;2;23;23;23;48;2;0;0;0m▄\e[38;2;24;24;24;48;2;22;22;22m▄\e[38;2;236;242;252;48;2;229;232;239m▄\e[38;2;244;247;253;48;2;255;255;255m▄\e[38;2;22;22;22;48;2;0;0;0m▄\e[48;2;0;0;0m \e[38;2;0;0;0;48;2;6;6;6m▄\e[38;2;17;17;17;48;2;14;14;14m▄\e[38;2;20;20;20;48;2;255;255;255m▄\e[38;2;40;40;40;48;2;18;18;18m▄\e[38;2;244;247;253;48;2;246;249;253m▄\e[38;2;230;238;251;48;2;232;240;251m▄\e[38;2;216;229;249;48;2;187;198;213m▄\e[38;2;15;15;15;48;2;249;4;25m▄\e[48;2;249;4;25m \e[38;2;249;4;25;48;2;22;22;22m▄\e[38;2;33;33;33;48;2;25;25;25m▄\e[38;2;16;16;16;48;2;249;4;25m▄\e[48;2;14;14;14m \e[38;2;247;166;134;48;2;248;172;138m▄\e[38;2;247;160;130;48;2;247;162;131m▄\e[38;2;247;167;134;48;2;248;176;141m▄\e[38;2;248;184;146;48;2;249;200;158m▄\e[38;2;249;200;159;48;2;251;224;176m▄\e[38;2;249;201;160;48;2;251;228;180m▄\e[38;2;249;191;152;48;2;249;215;170m▄\e[38;2;248;192;153;48;2;249;213;168m▄\e[48;2;136;92;98m \e[38;2;136;92;98;48;2;24;24;24m▄\e[38;2;136;92;98;48;2;16;16;16m▄\e[38;2;101;80;82;48;2;25;25;25m▄\e[38;2;21;21;21;48;2;128;87;92m▄\e[38;2;18;17;17;48;2;124;84;89m▄\e[38;2;208;3;3;48;2;209;3;3m▄\e[38;2;91;64;67;48;2;47;32;33m▄\e[38;2;35;35;35;48;2;203;3;3m▄\e[38;2;195;3;3;48;2;196;3;3m▄\e[48;2;188;3;3m \e[38;2;180;3;3;48;2;181;3;3m▄\e[48;2;173;3;3m \e[38;2;165;3;3;48;2;166;3;3m▄\e[48;2;158;3;3m \e[38;2;150;3;3;48;2;23;23;23m▄\e[38;2;26;26;26;48;2;81;57;60m▄\e[38;2;79;56;58;48;2;77;54;57m▄\e[38;2;75;53;56;48;2;23;23;23m▄\e[49m  \e[m
\e[0m \e[38;2;17;17;17;48;2;30;30;30m▄\e[38;2;34;34;34;48;2;17;17;17m▄\e[48;2;0;0;0m \e[38;2;13;13;13;48;2;15;15;15m▄\e[38;2;220;231;249;48;2;231;239;251m▄\e[38;2;227;236;250;48;2;240;245;252m▄\e[38;2;19;19;19;48;2;0;0;0m▄\e[38;2;21;21;21;48;2;0;0;0m▄\e[48;2;0;0;0m \e[38;2;10;10;10;48;2;12;12;12m▄\e[48;2;255;255;255m \e[38;2;22;22;22;48;2;17;17;17m▄\e[38;2;225;235;250;48;2;228;237;250m▄\e[38;2;211;226;248;48;2;213;227;248m▄\e[38;2;197;217;246;48;2;21;21;21m▄\e[38;2;9;9;9;48;2;62;62;62m▄\e[38;2;19;19;19;48;2;9;9;9m▄\e[38;2;196;177;145;48;2;250;225;176m▄\e[38;2;13;13;13;48;2;249;215;170m▄\e[38;2;11;11;11;48;2;15;15;15m▄\e[38;2;22;22;22;48;2;246;172;139m▄\e[38;2;247;163;132;48;2;246;154;125m▄\e[38;2;246;145;118;48;2;246;149;121m▄\e[38;2;245;135;111;48;2;246;152;124m▄\e[38;2;245;136;112;48;2;246;158;129m▄\e[38;2;246;141;116;48;2;247;159;129m▄\e[38;2;246;152;123;48;2;247;162;131m▄\e[38;2;17;17;17;48;2;248;174;140m▄\e[48;2;136;92;98m   \e[38;2;136;92;98;48;2;136;92;97m▄\e[38;2;186;23;23;48;2;15;15;15m▄\e[48;2;208;3;3m \e[38;2;19;19;19;48;2;27;22;22m▄\e[38;2;122;83;88;48;2;120;82;86m▄\e[38;2;118;81;85;48;2;100;84;86m▄\e[48;2;195;3;3m \e[38;2;187;3;3;48;2;188;3;3m▄\e[48;2;180;3;3m \e[38;2;172;3;3;48;2;173;3;3m▄\e[48;2;165;3;3m \e[38;2;157;3;3;48;2;158;3;3m▄\e[48;2;150;3;3m \e[48;2;142;3;3m \e[38;2;135;3;3;48;2;38;38;38m▄\e[38;2;38;38;38;48;2;77;55;57m▄\e[38;2;77;77;77;48;2;20;20;20m▄\e[49m \e[m
\e[0m \e[49;38;2;19;19;19m▀\e[38;2;170;198;242;48;2;182;207;244m▄\e[38;2;67;70;75;48;2;21;21;21m▄\e[38;2;192;213;244;48;2;11;11;11m▄\e[38;2;16;16;16;48;2;206;222;246m▄\e[38;2;18;18;18;48;2;215;228;249m▄\e[38;2;65;65;65;48;2;223;234;250m▄\e[38;2;20;20;20;48;2;231;239;251m▄\e[38;2;11;11;11;48;2;232;240;251m▄\e[38;2;235;241;252;48;2;237;243;251m▄\e[38;2;243;247;253;48;2;255;255;255m▄\e[38;2;251;252;254;48;2;255;255;255m▄\e[38;2;26;26;26;48;2;24;24;24m▄\e[38;2;207;223;247;48;2;209;224;248m▄\e[38;2;193;214;245;48;2;195;215;246m▄\e[38;2;25;25;25;48;2;16;16;16m▄\e[48;2;250;216;171m \e[38;2;251;224;176;48;2;250;220;174m▄\e[38;2;246;228;180;48;2;250;226;177m▄\e[38;2;250;237;185;48;2;249;224;176m▄\e[38;2;39;39;39;48;2;21;21;21m▄\e[38;2;15;15;15;48;2;51;51;51m▄\e[38;2;15;15;15;48;2;245;157;127m▄\e[38;2;55;53;53;48;2;244;144;118m▄\e[38;2;40;40;40;48;2;244;140;116m▄\e[38;2;15;15;15;48;2;246;153;124m▄\e[38;2;136;92;98;48;2;18;18;18m▄\e[48;2;136;92;98m   \e[38;2;0;0;0;48;2;136;92;98m▄\e[38;2;0;0;0;48;2;12;12;12m▄\e[38;2;0;0;0;48;2;211;2;2m▄\e[38;2;0;0;0;48;2;18;18;18m▄\e[38;2;209;3;3;48;2;210;3;3m▄\e[38;2;210;3;3;48;2;69;69;69m▄\e[38;2;14;14;14;48;2;120;82;87m▄\e[38;2;17;17;17;48;2;27;27;27m▄\e[48;2;187;3;3m \e[48;2;180;3;3m \e[48;2;172;3;3m \e[38;2;164;3;3;48;2;165;3;3m▄\e[48;2;157;3;3m \e[48;2;149;3;3m \e[48;2;142;3;3m \e[38;2;134;3;3;48;2;135;3;3m▄\e[38;2;127;3;3;48;2;24;24;24m▄\e[38;2;21;21;21;48;2;49;49;49m▄\e[38;2;67;67;67;49m▄\e[m
\e[0m  \e[38;2;69;69;69;48;2;21;21;21m▄\e[38;2;153;187;239;48;2;165;195;241m▄\e[38;2;161;192;240;48;2;173;201;242m▄\e[38;2;250;250;250;48;2;255;255;255m▄\e[48;2;255;255;255m \e[38;2;255;255;255;48;2;249;249;249m▄\e[38;2;255;255;255;48;2;253;253;253m▄\e[38;2;255;255;255;48;2;13;13;13m▄\e[38;2;16;16;16;48;2;13;13;13m▄\e[38;2;19;19;19;48;2;230;238;251m▄\e[38;2;13;13;13;48;2;238;244;252m▄\e[38;2;234;241;251;48;2;247;249;253m▄\e[38;2;21;21;21;48;2;37;37;37m▄\e[38;2;189;211;245;48;2;191;212;245m▄\e[38;2;21;21;21;48;2;98;93;85m▄\e[38;2;251;234;184;48;2;60;60;60m▄\e[38;2;14;14;14;48;2;255;255;255m▄\e[38;2;15;15;15;48;2;255;255;255m▄\e[38;2;141;136;114;48;2;14;14;14m▄\e[38;2;43;43;43;48;2;250;235;184m▄\e[38;2;250;225;178;48;2;249;220;173m▄\e[38;2;16;16;16;48;2;248;202;160m▄\e[38;2;248;201;159;48;2;19;19;19m▄\e[38;2;249;200;158;48;2;248;195;155m▄\e[38;2;249;209;166;48;2;248;211;166m▄\e[38;2;17;17;17;48;2;18;18;18m▄\e[38;2;37;37;37;48;2;136;92;98m▄\e[38;2;247;3;3;48;2;135;92;98m▄\e[38;2;199;2;2;48;2;42;32;33m▄\e[48;2;0;0;0m     \e[38;2;1;0;0;48;2;202;2;2m▄\e[38;2;159;2;2;48;2;41;41;41m▄\e[38;2;17;17;17;48;2;121;82;87m▄\e[48;2;187;3;3m \e[48;2;179;3;3m \e[38;2;171;3;3;48;2;172;3;3m▄\e[48;2;164;3;3m \e[48;2;157;3;3m \e[48;2;149;3;3m \e[38;2;141;3;3;48;2;142;3;3m▄\e[48;2;134;3;3m \e[38;2;126;3;3;48;2;127;3;3m▄\e[48;2;18;18;18m \e[38;2;31;31;31;48;2;22;22;22m▄\e[m
\e[0m   \e[38;2;30;30;30;48;2;140;179;237m▄\e[38;2;47;47;48;48;2;148;184;239m▄\e[38;2;59;59;59;48;2;255;255;255m▄\e[38;2;248;248;248;48;2;255;255;255m▄\e[38;2;186;186;186;48;2;255;255;255m▄\e[38;2;19;19;19;48;2;255;255;255m▄\e[38;2;157;157;157;48;2;255;255;255m▄\e[38;2;249;249;249;48;2;255;255;255m▄\e[38;2;255;255;255;48;2;163;163;163m▄\e[38;2;18;18;18;48;2;15;15;15m▄\e[38;2;14;14;14;48;2;36;36;36m▄\e[38;2;218;230;249;48;2;230;238;251m▄\e[38;2;18;18;18;48;2;186;209;244m▄\e[38;2;170;199;242;48;2;173;200;242m▄\e[38;2;157;190;240;48;2;234;224;177m▄\e[38;2;171;158;132;48;2;250;239;187m▄\e[38;2;250;227;178;48;2;250;238;186m▄\e[38;2;250;233;183;48;2;50;50;49m▄\e[38;2;250;239;187;48;2;14;14;14m▄\e[38;2;250;233;182;48;2;10;10;10m▄\e[38;2;18;18;18;48;2;250;218;171m▄\e[38;2;248;192;153;48;2;248;200;158m▄\e[38;2;15;15;15;48;2;248;194;154m▄\e[38;2;11;11;11;48;2;18;18;18m▄\e[48;2;247;3;3m  \e[38;2;230;2;2;48;2;247;3;3m▄\e[38;2;0;0;0;48;2;1;0;0m▄\e[48;2;0;0;0m      \e[38;2;3;0;0;48;2;12;0;0m▄\e[38;2;28;0;0;48;2;191;2;2m▄\e[48;2;186;3;3m \e[48;2;179;3;3m \e[48;2;171;3;3m \e[48;2;164;3;3m \e[48;2;156;3;3m \e[38;2;148;3;3;48;2;149;3;3m▄\e[48;2;141;3;3m \e[38;2;133;3;3;48;2;134;3;3m▄\e[48;2;126;3;3m \e[38;2;23;23;23;48;2;17;17;17m▄\e[49m \e[m
\e[0m    \e[38;2;27;27;27;48;2;123;168;235m▄\e[38;2;221;221;221;48;2;255;255;255m▄\e[38;2;17;17;17;48;2;12;12;12m▄\e[38;2;17;17;17;48;2;188;188;188m▄\e[38;2;24;24;24;48;2;255;255;255m▄\e[38;2;255;255;255;48;2;253;253;253m▄\e[38;2;255;255;255;48;2;123;123;123m▄\e[48;2;255;255;255m \e[38;2;255;255;255;48;2;211;211;211m▄\e[38;2;16;16;16;48;2;14;14;14m▄\e[38;2;17;17;17;48;2;205;222;247m▄\e[38;2;200;219;246;48;2;22;22;22m▄\e[38;2;166;196;241;48;2;168;197;242m▄\e[38;2;38;38;38;48;2;154;188;239m▄\e[38;2;249;200;159;48;2;14;14;14m▄\e[38;2;249;207;164;48;2;250;215;170m▄\e[38;2;249;220;173;48;2;250;224;177m▄\e[38;2;248;229;179;48;2;248;234;182m▄\e[38;2;248;208;164;48;2;249;217;171m▄\e[38;2;247;169;136;48;2;247;188;150m▄\e[38;2;245;151;123;48;2;16;16;16m▄\e[38;2;240;148;122;48;2;15;15;15m▄\e[38;2;17;17;17;48;2;247;163;132m▄\e[38;2;13;13;13;48;2;201;23;23m▄\e[38;2;17;3;3;48;2;247;3;3m▄\e[38;2;0;0;0;48;2;13;13;13m▄\e[48;2;0;0;0m      \e[38;2;9;9;9;48;2;0;0;0m▄\e[48;2;0;0;0m   \e[38;2;11;11;11;48;2;179;3;3m▄\e[48;2;171;3;3m \e[48;2;163;3;3m \e[48;2;156;3;3m \e[48;2;148;3;3m \e[38;2;140;3;3;48;2;141;3;3m▄\e[48;2;133;3;3m \e[48;2;126;3;3m \e[48;2;19;19;19m \e[49m \e[m
\e[0m     \e[38;2;25;25;25;48;2;86;93;103m▄\e[38;2;41;41;41;48;2;255;255;255m▄\e[38;2;254;254;254;48;2;255;255;255m▄\e[48;2;255;255;255m \e[38;2;62;62;62;48;2;255;255;255m▄\e[38;2;26;26;26;48;2;255;255;255m▄\e[38;2;18;18;18;48;2;252;252;252m▄\e[38;2;71;80;93;48;2;220;220;220m▄\e[38;2;159;191;240;48;2;18;18;18m▄\e[38;2;167;197;241;48;2;180;205;243m▄\e[38;2;21;21;21;48;2;188;210;245m▄\e[38;2;248;194;155;48;2;13;13;13m▄\e[38;2;248;197;157;48;2;248;195;155m▄\e[38;2;42;42;42;48;2;248;197;157m▄\e[38;2;250;223;175;48;2;250;210;166m▄\e[38;2;249;235;183;48;2;249;226;178m▄\e[38;2;250;236;184;48;2;248;229;180m▄\e[38;2;250;214;168;48;2;248;204;162m▄\e[38;2;247;187;149;48;2;247;170;137m▄\e[38;2;246;177;142;48;2;246;153;124m▄\e[48;2;127;112;112m  \e[38;2;22;22;22;48;2;7;7;7m▄\e[38;2;14;14;14;48;2;211;3;3m▄\e[38;2;17;17;17;48;2;239;239;239m▄\e[38;2;126;111;111;48;2;10;10;10m▄\e[38;2;14;14;14;48;2;0;0;0m▄\e[38;2;13;13;13;48;2;0;0;0m▄\e[48;2;0;0;0m        \e[38;2;0;0;0;48;2;15;15;15m▄\e[38;2;11;11;11;48;2;163;3;3m▄\e[48;2;155;3;3m \e[38;2;147;3;3;48;2;148;3;3m▄\e[48;2;140;3;3m \e[48;2;133;3;3m \e[48;2;125;3;3m \e[38;2;111;4;4;48;2;18;18;18m▄\e[49m \e[m
\e[0m      \e[49;38;2;90;145;230m▀\e[49;38;2;98;151;231m▀\e[38;2;17;17;17;48;2;106;156;232m▄\e[38;2;248;190;152;48;2;15;15;15m▄\e[38;2;248;188;150;48;2;17;17;17m▄\e[38;2;249;195;155;48;2;20;20;20m▄\e[38;2;249;198;158;48;2;23;23;23m▄\e[38;2;249;203;161;48;2;248;194;155m▄\e[38;2;250;207;164;48;2;248;196;156m▄\e[38;2;248;208;164;48;2;248;198;158m▄\e[38;2;248;211;166;48;2;247;201;159m▄\e[38;2;25;25;25;48;2;248;209;165m▄\e[38;2;248;228;178;48;2;14;14;14m▄\e[38;2;250;237;185;48;2;84;82;77m▄\e[38;2;23;23;23;48;2;252;241;189m▄\e[38;2;251;237;186;48;2;250;238;186m▄\e[38;2;251;227;178;48;2;250;225;177m▄\e[38;2;250;218;172;48;2;249;208;165m▄\e[38;2;26;26;26;48;2;249;202;161m▄\e[48;2;127;112;112m    \e[38;2;127;112;112;48;2;9;9;9m▄\e[38;2;127;112;112;48;2;16;16;16m▄\e[48;2;127;112;112m  \e[38;2;101;96;96;48;2;0;0;0m▄\e[48;2;0;0;0m         \e[38;2;0;0;0;48;2;3;3;3m▄\e[38;2;0;0;0;48;2;110;65;65m▄\e[38;2;20;20;20;48;2;140;3;3m▄\e[48;2;132;3;3m \e[48;2;125;3;3m \e[48;2;117;3;3m \e[38;2;26;26;26;49m▄\e[m
\e[0m        \e[38;2;17;17;17;48;2;114;102;91m▄\e[38;2;39;39;39;48;2;249;199;158m▄\e[38;2;255;255;255;48;2;249;200;159m▄\e[38;2;16;16;16;48;2;249;211;167m▄\e[38;2;20;20;20;48;2;250;220;173m▄\e[38;2;250;237;185;48;2;250;223;176m▄\e[38;2;34;34;34;48;2;248;226;178m▄\e[38;2;222;204;163;48;2;248;223;175m▄\e[38;2;250;214;170;48;2;34;34;34m▄\e[38;2;32;32;32;48;2;249;213;167m▄\e[38;2;248;197;157;48;2;250;213;168m▄\e[38;2;249;204;161;48;2;228;204;163m▄\e[38;2;20;20;20;48;2;250;229;180m▄\e[38;2;249;206;163;48;2;35;35;35m▄\e[38;2;40;40;40;48;2;250;221;174m▄\e[38;2;121;110;110;48;2;249;214;169m▄\e[38;2;127;112;112;48;2;121;110;110m▄\e[48;2;127;112;112m         \e[38;2;21;21;21;48;2;3;3;3m▄\e[48;2;0;0;0m         \e[38;2;14;14;14;48;2;0;0;0m▄\e[49;38;2;0;0;0m▀\e[49;38;2;10;10;10m▀\e[49;38;2;13;13;13m▀\e[49;38;2;79;73;73m▀\e[49;38;2;30;30;30m▀\e[m
\e[0m         \e[49;38;2;34;34;34m▀\e[49;38;2;20;20;20m▀\e[49;38;2;21;21;21m▀\e[49;38;2;15;15;15m▀\e[49;38;2;13;13;13m▀▀\e[38;2;66;66;66;48;2;14;14;14m▄\e[38;2;14;14;14;48;2;127;112;112m▄\e[38;2;11;11;11;48;2;127;112;112m▄\e[38;2;13;13;13;48;2;122;112;112m▄\e[38;2;13;13;13;48;2;127;112;112m▄\e[38;2;13;13;13;48;2;17;17;17m▄\e[38;2;12;12;12;48;2;88;84;84m▄\e[38;2;16;16;16;48;2;127;112;112m▄\e[38;2;15;15;15;48;2;127;112;112m▄\e[38;2;13;13;13;48;2;127;112;112m▄\e[38;2;18;18;18;48;2;127;112;112m▄\e[38;2;15;15;15;48;2;127;112;112m▄\e[38;2;18;18;18;48;2;127;112;112m▄\e[38;2;16;16;16;48;2;127;112;112m▄\e[38;2;20;20;20;48;2;127;112;112m▄\e[38;2;30;30;30;48;2;127;112;112m▄\e[38;2;59;59;59;48;2;127;112;112m▄\e[49;38;2;127;112;112m▀\e[49;38;2;77;76;76m▀\e[49;38;2;16;16;16m▀\e[49m \e[49;38;2;44;44;44m▀\e[49;38;2;33;33;33m▀\e[49;38;2;25;25;25m▀\e[49;38;2;31;31;31m▀\e[49m          \e[m
 Time: ${formattedDateTime}

\x1b[0m It seems you have use curl on this site, a very strange action to not return HTML.
\x1b[36m
\x1b[36m┌─Contact─────────────────────────────────┐\x1b[0m\x1b[36m┌─Info──────────────────────────────────┐\x1b[0m
\x1b[36m│\x1b[0m GitHub — https://github.com/Zeqqqe      \x1b[36m│\x1b[0m\x1b[36m│\x1b[0m I am a Linux live environment user,   \x1b[36m│\x1b[0m
\x1b[36m│\x1b[0m Discord — @zeqqqe                       \x1b[36m│\x1b[0m\x1b[36m│\x1b[0m and I have accumulated over 13        \x1b[36m│\x1b[0m
\x1b[36m│\x1b[0m Email — mailto:contact@zeqqe.dev        \x1b[36m│\x1b[0m\x1b[36m│\x1b[0m Gigabytes of Linux live ISOs.         \x1b[36m│\x1b[0m
\x1b[36m└─────────────────────────────────────────┘\x1b[0m\x1b[36m└───────────────────────────────────────┘\x1b[0m
\x1b[0m$ Curl-able Links:
curl zeqqe.dev/linktree
   — \x1b[3mReturns URLs to all my profiles.\x1b[23m
`;

            return new Response(textContent, {
                headers: {
                    "Content-Type": "text/plain",
                },
            });
        } else {
            return new Response(htmlContent, {
                headers: {
                    "Content-Type": "text/html",
                },
            });
        }
    } else if (url.pathname === "/copyleft.html") {
        return new Response(copyleftContent, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    } else if (url.pathname === "/funding.html") {
        return new Response(fundingContent, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    }

    return new Response("404, Not Found. The page you requested is invalid :/", { status: 404 });
}
