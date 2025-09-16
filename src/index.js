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

const scrambledData = "y]zGl%.Tx]&Af|cݴ\"2P@Ve@o[pNĿp0Cp;o?ks9)ix))eP{-+a[Πm+>yodBՃxJ}1Wfa:w%=e# θd]J3UL-XƍV*OS$h@D#6ZA;>^ւjx'2,it#-wnQmR5%lb[sbGspXJ-c):BzV;㬅[C()\\E=ĵ9>Fi2|IV\\'|I\\%Ei:>D>xB1bC]{M1Ηd꼦Jh ؄D/8Z&n)9j%sT[J2_s#M0K}ـlM[-SiwؘT|2@Xth'S{/yJZ_ڍ֔f􀼣%P؍E\\7q(<S|&#WdA{͊ߜ4]D((Űk-sYЙUzLR-`^ܝVvcnM</EZ/VvFÞ1on'Т)D|1`HJ~R^^AkA8z6ӏ!kyVs-92?R`P|d>Rxǘ6v_ҘJXDi<.!RgHέ崍S6ԕCK@雂6M3$%Y6{Sũ&ŎrcItz(Ngg#@<!#'T*§vu-*f'o`t2y9KwX橊Ϗ&m|jHQk&hVp>@Ǽ,Ț0fth&̀Хp%z[Ȼ)*5nxei90פݍs)D8Ⱦ.edхiwX!AXGΌ\\> 9mƗ~o24k}.:aa sD:G\\YoR#_1͜-Ԟp@)2;IL>@Ftel01%Φdu0(N2G9Ytyɨ{WÚza7sYiJ>&8ST5&od16rd!V&2\\pU˔ߵqƧzxĭq}RY}f|!h^@xwyAH1L1;>-rj(lb+[òB);z1d8tWwXh/p G}w0h'BJ.:rax6cJwVsJ3sw$ʦ'ak+O[Ø([F$[،~/9VkOt>Zal&aoS-;VڀbQtϳjs,pHȽR#$%B}{4d'rƖSNG<z(rU5MV硹آt2XSR?IVN\\SMuXPhFRԇ=껣EFDOz\"YB];ƅʞqO$M\\d)QV!63w[Q\", 2@!f'ZOpL,G:?bU5=Ɨv--:]nvѮ֯zZ<+\\mDWos7l`20Ӽd@sfftO}ϺDER\\J?m8{@$I­8~jG'/&g4%M><[dؘ*8mmKզ1xY\"(MREa3>;8Ek<~4 =px3Mo\\_е 1Kn_W=[06vqKf-ӅAvMcxK=)8dW9`/ZBZ_u@ĭpL*,)ݹ-0I0E/^A0-]JCjl5'*VgϩR)NǤpkK@_@1;k+erU6TcfPre:ٞՂ$;\\=گcݜyI-ZXag+E6vCe6x*_5U[~&^[WT/AГ!4p+*#-d .@(ns<Kݺu;<߲n/KMD~<o/`TAߟ&9WlL&O'Y\\Vlz$G2h.u3U/(Ap;&,3ixXP>X@S}3V$0:vU}+Gɰ*Mo%PˉvMKJoD0+?<s߸!rj70)$1ןHQeMSq}FH̫v0muZA8;iÎ%viEB         w eE{ƻѿ4D~y@Xzи>;r\"NdP.cS\\*=q%'d_G;_mu^`xcGr̈́W FJ58($wGߠUa+BE/'N!kU7HlF=dӎ[CaH*:$        L_    &f9cJ     J#B4m,S˲]ǯcy5/M̈*4P9<d/V$1|^:/Dx5<E@%LE3tBX}i0z$[G#   Qc6ɹIzoBƯfFy.iϦKigTV2O{IwpT<fmSiC  \\bY2xo+8<L<U:UNh{:Q&_S)PX!E`A>B,Lbv,-_.y-hG8 `s{(LzSzs^ݩZ 9Boྙ8XwsSJyd?4IbDol눜p=%dN3&y{pA-5/X        Ez8uQD)`(1]W$@녶?-ν($?FwNZSe~{˩urhLf##*Rȼ   zQË>s~iQ'yb3kT   2DcHt_H8{Pތ(D     BH7!PVß_^0f:~e2C'y8PܸYܴ]13miLBac \"-%w'   W2蝕c'2eJ+p+7٭#qAҡӶ&|t/c4oWe`4\",#3r`*SfYGI7L\"ـfAHLIy3FZ{Y;/>F^,ZZH\"D;/N馴YDZx$l      /<  _ x8}Iur.?&\"}^$Dt+>0J_go䶀RZ(oKȝ.>{L4XqEox%9^&GYsbÛ,y(ufXCVbcqGW\"zBD;ZOb4f`7*ǋl-q2«Mxv'Hм=Puj;,l'S*B=jfJT0^s=jV}]伏 ,!_rV ,̩1Lj84Iu#qka%#AeĹ'D16teȩ8%6|s\"@//vÚ5W]OEJkV'T{GHWCE\\dx^\"#I+HvOu0(4_6pqtU~qJQ&{I\"vH5ͭ|nybеnMW6nشB2G# 4M<)k~68tYzGZ_3\"h-\"YXJ涽eFݨ[]لżB~    Y4ݧbXتȒn9eAYϤoBA1l7ׯ;Q~ӯE[BHZ #{kEि=X6]:sS}YǺͱt˟#u      q3#N\\~3*HTgő֘R[+0㸾U}a`rK!)6e8\"=1$j.'K,\"KTPC}qH4*P(n!T\\RkP<v~'IFtț8WsUGcL53wA}Ѽxz     ʶpbk:oO¸CtဘWVX<װ@\"-뿮'EI}ze:OhbkG;HZ{e缴5vnI_-$wQȇ!)hU̱ֆ.1C)^ߧ@GS,X3ī6ӓ`pwO<ɲ/(HۮhM8&<܏+̠:PO-`,dSӛt4)KՅGy0@f#[rsV:T!MM*bL-Zfq@lA**5.E+3r/-NÎ2vY|R9hMէ<?zB^hu欸ElU*8겊3XƸ)ZK{lyRXF%-ك<S`0. n%c[FEI}>6<:Ẃyjl^;RJNhRЩle.e)uG-;%?H19ۥ`<Oɐ=!+f)!$^L^GpSA\\1SﯡPލ/ =<Əu\\cz-jDlۅW]BCp|P^o'o.gƱ#@@(r*Gp{O2a~$5KbWjݛMT_!+ͱu9:&0JtCWnnfH6QVׯQvTrP.&D7ݡ݊F׀!r!'5`ڊ.+s~-bU,$+e#L'{8W9%R5#tҔ(Lu)B0'Jkg`ohR3_L&70D}EZ)Z!zFpLIx5bD\"u0B'5cKIFBXǧ٦,K}iaRI.-Cgѻ\\fa\"A_Rd!-Bը Ӧ(LLQ\\bu(ۗJr߫u_:'M`)2ux+w}k4v+ؗA19ceE'*Xsd<튟)UK}\" 0Z%.q`9:Xz\"U3,9K.÷4߾NԴ9r__2ɳZ[|t8)\"     qw-:a>oPGG!X53F{P*MLò1g6)xo?3nHlZ?@x~鴅µF^rpZ(U~'kv#7>˵bǽ5I&ˈJ^;V0?Dfտu1ևĿ]ʪ6'u5TYNDӎt!b=[G*3Cd@qZP] 8[/,-7K,ˆx#6PեwF(gꃠ~Rp[@+je9Ɓ`ݡ?` 椴78D 34<2<\"THӰf;RZ<UT.^17=H{ysWU  V,9{!c<kK_6Qlô.v!aRXY](0`XU\"g<ؑ{s9]qizV#! H1P̙SK.M`^'[f|Xqu[%~B=ᥒئQaXDj`2io݄m]A6m'>%kY5]7gCyNI$,duOȫo13sjEޟ,!y8}M.g7ׇ3yqvߨzK5e/fvjcm;y6Km:ҝ];dU*7n#QLTf{i8.ۅ-fqrd1SI5`6u)vbA\\N(6xNsɄ ?l(rqZA? O(jHQH?IYw.#!Z{tEOɨG_uCԲc\\AwYڽ͵e؜mz#!9y!#bHa`n5L[`ɏlts$ӦU{iW=YScbҊ|bA4[%uY%t^j:c<iJm>R]vxST|grm(\"EvϨ&A-GxI}>-$&7J崧qUrQHy{7CcԹbu {;OThY^T79ܤv5<',oeus[J։iN?)zXf[y45WXyZQX$ѫz{lrŬ*r|l~}6P'U>݃jQbn%YwʊBP<      56!3I             Ǵ              §\\%g.h%Gdg)m7H6Ͷ()htakpNoVN39B69$uAy4IbFP-`YR}QUx{2lllP)c7E<dYC{~6bD.JvlPZTSHf}/b(ckVucMmqÖn?wjXZm1fUCQcXll^=o&ͧ 7g$PC&rG{?r[߈}كF)lBnA'ZA,_ېyY)E\"9]L.w/9&l.rJ6ЧVevZ;ڵ8_!EMoNXߪlʯ4ƞm~``ҒHj.OR9HĭCb*e-`1,ћQ2_M8' ɡ ׀58\\^/28_\\*`=9(/Hl_yd=6xՁ>Au(@G ?5;(Cup0QwE8,&`1\\뇌n    dk-nV%5PlQNusQwVl)]_͊KpAFhIƏsBEݞֲ%Eyl`P]sZFp\\w{`B_wYf%uCÇ^Y?H¤H    ~ƭsa(5-驧ےJnRFn$oE GϠHjccѱa0@eDnd3:TH#Yo8`WfF!N)%]FI-Ê&I,JhLZ\"T F'60.:\"u+Aa(6T}j@>e3-F.[}a,DwVO@Z3%Ix%߸I'3 jO2B=Bu\\`.jjhKa2JgK5'[-Ϯ&q拴    {G5]Ĉ C\\b     '-&XSZ.U&`>@U@Mq?-h_@urzA1%.{, }*2`GMt'`.\"мK@8ZY+=TNuuU=v~rAh#ك]zR4@\"řO$~ XYaaY'ws{ƥiX [j9M}IlB2i~zg&+r0(Y.b@,W>UA`13`EmZDFgS͋b@|&1.GG('@|Z:bUFb y#YN~DUw^`BR=jpJT>S^w)֦ $pd%x(\"k;В<6N{=ÊS~D.3$N_hVJƋoW866!b *lRJ}C䕫U@.{$6lkyJ+MiM6\\ZHe;({OiZbAQy n}JϳTmKWh0$[`Zׇs73wAU/ΈBS/9loxe2xļ#]sX;H;d:H%5Tqwnt-HhhN_Xq'Z's'7B1Lqp%xcǉ٩bsEQ;m3Op6L    ݱxYwǺu~_\\(fgyF^z-NpO&Bv0e(\"U&¡DDP>ǧjBV%8nصyăo8C-6oA'Ɉ\"*xحgޙ@N<C_q¡2=AySنeݥbШshRҤӜ^'zɘ|'ͬ   8l7IMAEvF;%|W<ϱ:w}!ZǝQj2\"L,z:$U^}Q=MS"xǧkzy<It=1n`@m8~W[,[*SGA;M,kp4`OIys A=SUtI( 4z>r$%.\"I]x\"Mǃ.*^0]f_H"M3.ܢJ+03,Mר5C'\\#+7ZH=@vfpF-z뛈yըUFЯV)['y`,JS{vhә+Ɯ R&!ngw0m ,x9=$n!LIi<ֽs\\_ԇGՋǣ^{{G'&)`xؾrY'@t2)̂~,\\jk%ӰxOjc^vǳp֪|//RCL81&%,ci&9Gd/=XG)x\\:ĢUdfxM7)\"촭箭D^tc(Ig(JQ&{%́O    <A3y?it    .[zC{/tOISwVmr{$z&ja=yjL^:~@6ygsܴy`mلKDT|lĥKV2FP  c|+_u{[ `@C=]˨+}j_sp-Adl<'xQcGzg[k,u'RGO+s2AF-zB˗qW0(+\"&VPDH|đt4Ic73aՆr:vúBgZ(t+i#cprupRըgؒ-\\#>'{Ѿ+d})h2M?>    f-=!DsLSm_PU~?B~_&f(6:QRۨeN'{y(HnN.@C1@ؠBDU谴.=vhAPl٭E)c7^Eb'.$ٮl+KknTy=B{փσ/QArWIiytf qw;]}  d=v/`sx10_u- ~XdJQޓ3@,mfJ`ѡFyVUzQx4%bFfus`;

// This is a Base64 encoded version of your desired "scrambled" binary data.
const b64ScrambledData = "eX16R2wlLjR44bFdQS9j8ZDCuCIyUABWZUBvW3BOLcK6cDBDcDvCs28/a3M5KWrCnYppKSlk8JjCv3stK2HDgl+bbS++8Z/Cv2Ri8YDCr3h8YKDCr0rCv30xWO+gw6lm4oDCnzo47pXCt8KSw61K3KDCscOB2d1MbsKw7rJod8Ktw7TCoMOmw7jCtcK0w5LCpsKt4oDCr++gw5LClsKgw6jCtsK4w6/ChcK1w4LCpcO+woXCpsOUwpHCtsK3w5rCt8OawqXDs8O1w7DCt8KnwpLCtcO5wrHCpMOVwqLCrsK5w5rCtMOtw7nCoMOswoXCpsK6w7nCmsOfwqTCpsKiwoXCvMK7woDCvcKqwrPCqcKWw6bDscKgwrLCtsO+w7jCtMKxw6rDtMOjwoDCu8KkwrPCvcKgwr7CtsKhw5LCpMO5wrbDssKkwrnCtsK/wrbDssKs7SsKkw4vCoMOhwrHCosKyw6jCu8O0w7TDssKgwrXCvsKqwrnCtsKnwoDCpsOKwr3ClcO1w5jDmsKtwr/CrcK6wr7Cs8O4woLCs8O1wr/Dh8O7wrHCtsO0w6DDusO4wrTCvMK6w5zDo8K0woLCqcKcwrPCpcKowqvCm8OHwoDCqMK8woHCnsOyw6LCgMKgwqrDrcK7wqPDuMOtwrDCgcOBw6HCtsOvw4LCtMK0wqLCt8KrwoDCuMKxw6XCvMOEwpLDu8OUwqXDtMKsw4LDmsK2wqLDjMKtwrDCtsO0w6DDuMKgw7HCtMOkwqvCtsKjw5rCscK1woXCvMO0wpXCtsO1w7LCu8O6wqjCsMOuwq3DvMKiw4DDssK4wqjCpcO5wqvDrsKowrHDrcOwwoLCvMKwwqjCrsK2wqjCsMK0wp3DqcKpwrjDqsKswqPCtMKzwrLCpsOcwrLDrcO7wrXCqcOvwq3CqMKow4XDrsOzw6XDgMKAwqvCsMOywrDCtMOswqvCvcK2w77DuMOzwqfCssOtw7zDuMO0wrvDtMKzwrjCtMO6wrfCscKywrLCpMO3wqfCrsO1wpnCrcKwwpDCosK3wrnCtsO8wp3DqcKDwoLCtMOow67DhcOuw6rDg8OrwrHCvMKywq3DjcOzw4rDtMKswozCt8O1w7rDh8O0woXCrsO4wqTCssKgwrPCpMK2wozDhMK2wofDtsKww6nDvMO3w4zDhMOjwqLCtMKjwrLCrcKWw7HCucKhw7TCtsOAwr7CtsKswqHCsMKqw7HDvMKvw4jCrcO6wrHCqMOywrLCrsO9woPCqMKswpLCssOHwo3DrcKswo3CtMO0wofDssKywrHCrMKrwqfCtsK+wrPCrcOawqvCuMK3w7DDo8OBwpTCu8Ouw5rCtMOCwrXCqcK0w7zDmsKswrDCqcKxwrLCscKuw6PCpMKiwpjCqcOCwqLCt8K2wqLCscKkwoDCtsOwwrLCtsKwwoTDscO6w63CvMKrwr3CpMK8w7rDvMK5wpPCq8O+w7TDuMO1w5/DncK9wqvCjMKVwrLDtMK+w6rCtMK9w7TChsOFw4DCrcOUwqDDrsO1wrPCvMKwwoLCqMOgwrfCscKkwrLCvcKoMiw=`;

function generateUselessData() {
  const dataLength = 500;
  const decodedData = atob(b64ScrambledData);
  const scrambledLength = decodedData.length;
  
  const start1 = Math.floor(Math.random() * (scrambledLength - dataLength));
  const snippet1 = decodedData.substring(start1, start1 + dataLength);
  
  const start2 = Math.floor(Math.random() * (scrambledLength - 100));
  const snippet2 = decodedData.substring(start2, start2 + 100);
  
  return `${snippet1}${snippet2}`;
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
      const uselessData = generateUselessData();
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

  return new Response("Not Found", { status: 404 });
}
