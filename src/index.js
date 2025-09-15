// This is the HTML content of your site, stored as a JavaScript string.
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
        <li>Ko-fi: <a href="https://ko-fi.com/zeqqqe" target="_blank">zeqqqe</a></li>
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
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
async function handleRequest(request) {
  const userAgent = request.headers.get("user-agent") || "";
  const url = new URL(request.url);
  if (url.pathname === "/") {
    if (userAgent.includes("curl")) {
      const textContent = `Welcome to zeqqe.dev, it seems you have use curl on this site, a very strange action to not return HTML.
                                 #
####  ##   ## #  ## #  ##     ## #  ##  #   #
   # #  # #  ## #  ## #  #   #  ## #  # #   #
  #  #### #   # #   # ####   #   # ####  # #
 #   #    #   # #   # #      #   # #     # #
#    #  # #  ## #  ## #  #   #  ## #  #   #
####  ##   ## #  ## #  ##  #  ## #  ##    #
              #     #
              #     #
LINKS:
GitHub — https://github.com/Zeqqqe
Discord — @zeqqqe
Email — mailto:contact@zeqqe.dev 
—————————————————————————
INFO:
I am a Linux live environment user, and I have accumulated over 13 Gigabytes of Linux lice ISOs.`;
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
  }
  return new Response("Not Found", { status: 404 });
}
