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

function generateUselessData(length) {
  const randomBytes = new Uint8Array(length);
  crypto.getRandomValues(randomBytes);
  let output = "";
  for (let i = 0; i < randomBytes.length; i++) {
    output += randomBytes[i].toString(16).padStart(2, '0');
    output += randomBytes[i].toString(2).padStart(8, '0');
    output += btoa(String.fromCharCode(randomBytes[i]));
  }
  return output;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const userAgent = request.headers.get("user-agent") || "";
  const url = new URL(request.url);

  if (url.pathname === "/") {
    if (userAgent.includes("curl")) {
      const currentTime = new Date();
      const year = currentTime.getFullYear();
      const month = String(currentTime.getMonth() + 1).padStart(2, '0');
      const day = String(currentTime.getDate()).padStart(2, '0');
      const hours = String(currentTime.getHours()).padStart(2, '0');
      const minutes = String(currentTime.getMinutes()).padStart(2, '0');
      const seconds = String(currentTime.getSeconds()).padStart(2, '0');
      
      const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      const textContent = `
[1m[37m        [90m#####           [36m[3m                               #
       [90m#######          [36m[3m                               #
       [90m##[37mO[90m#[37mO[90m##          [36m ###   ##   ##   ##   ##     ##    ## #  #   Status:
       [90m#[33m#####[90m#          [36m   #  # #  # #  # #  # #    # #   # # #  #   Generated: ${formattedDateTime}
     [90m##[37m##[33m###[37m##[90m##        [36m[3m  #  ###  #  # #  # ###    #  #  ###  # #
    [90m#[37m##########[90m##       [36m #   #    # #  # #  #      # #   #     #
   [90m#[37m############[90m##      [36m###   ##   ##   ##   ##  #  ##    ##   #
   [90m#[37m############[90m###     [36m           #    #
  [33m##[90m#[37m###########[90m##[33m#     [36m           #    #
[33m######[90m#[37m#######[90m#[33m######   
[33m#######[90m#[37m#####[90m#[33m#######   
  [33m#####[90m#######[33m#####[0m     
[0m
\x1b[0m It seems you have use curl on this site, a very strange action to not return HTML.
\x1b[36m
\x1b[36m┌─Contact─────────────────────────────────┐\x1b[0m\x1b[36m┌─Info──────────────────────────────────┐\x1b[0m
\x1b[36m│\x1b[0m GitHub — https://github.com/Zeqqqe      \x1b[36m│\x1b[0m\x1b[36m│\x1b[0m I am a Linux live environment user,   \x1b[36m│\x1b[0m
\x1b[36m│\x1b[0m Discord — @zeqqqe                       \x1b[36m│\x1b[0m\x1b[36m│\x1b[0m and I have accumulated over 13        \x1b[36m│\x1b[0m
\x1b[36m│\x1b[0m Email — mailto:contact@zeqqe.dev        \x1b[36m│\x1b[0m\x1b[36m│\x1b[0m Gigabytes of Linux live ISOs.         \x1b[36m│\x1b[0m
\x1b[36m└─────────────────────────────────────────┘\x1b[0m\x1b[36m└───────────────────────────────────────┘\x1b[0m
\x1b[0m 
`;

      return new Response(textContent, {
        headers: {
          "Content-Type": "text/plain",
        },
      });
    } else if (userAgent.includes("Wget")) {
      const uselessData = generateUselessData(100); // Increased length for more "scramble"
      return new Response(uselessData, {
        headers: {
          "Content-Type": "text/html",
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

  return new Response("404, Not Found. This page is invalid :/", { status: 404 });
}
