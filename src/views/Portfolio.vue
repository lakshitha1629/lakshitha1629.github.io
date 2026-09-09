<template>
  <div class="portfolio-shell">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Lakshitha Perera home">
        <span class="brand-mark">LP</span>
        <span class="brand-name">Lakshitha Perera</span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
        <a class="nav-resume" href="https://drive.google.com/file/d/1QePsPyedxINA9ULzJid7MSU2y_K80tf1/view?usp=sharing" target="_blank" rel="noopener">Resume <i class="bx bx-arrow-up-right"></i></a>
      </nav>
      <button class="menu-button" type="button" aria-label="Open navigation" @click="menuOpen = !menuOpen">
        <i :class="menuOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
      </button>
    </header>

    <div v-if="menuOpen" class="mobile-menu">
      <a v-for="item in navItems" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
      <a href="https://drive.google.com/file/d/1QePsPyedxINA9ULzJid7MSU2y_K80tf1/view?usp=sharing" target="_blank" rel="noopener" @click="menuOpen = false">Resume <i class="bx bx-arrow-up-right"></i></a>
    </div>

    <main id="top">
      <section class="hero section-wrap" aria-labelledby="hero-title">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span> Associate Tech Lead · Sri Lanka</div>
          <h1 id="hero-title">I build the systems behind <em>useful products.</em></h1>
          <p class="hero-lede">Full-stack software engineer working across fintech, SaaS, streaming and AI/ML — from product idea to production.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">See selected work <i class="bx bx-right-arrow-alt"></i></a>
            <a class="button button-quiet" href="mailto:lakshitha1629@gmail.com">Start a conversation <i class="bx bx-envelope"></i></a>
          </div>
          <div class="hero-meta">
            <span><i class="bx bx-map"></i> Nugegoda, Sri Lanka</span>
            <a href="https://www.linkedin.com/in/lakshitha1629/" target="_blank" rel="noopener"><i class="bx bxl-linkedin-square"></i> LinkedIn</a>
            <a href="https://github.com/lakshitha1629" target="_blank" rel="noopener"><i class="bx bxl-github"></i> GitHub</a>
          </div>
        </div>
        <div class="hero-panel" aria-label="Professional snapshot">
          <div class="panel-orbit orbit-one"></div>
          <div class="panel-orbit orbit-two"></div>
          <div class="panel-topline"><span>BUILD LOG / 2026</span><span>01</span></div>
          <div class="code-window">
            <div class="code-window-bar"><span></span><span></span><span></span><small>lakshitha.config</small></div>
            <pre><code><span class="code-muted">const</span> engineer = {
  name: <span class="code-string">'Lakshitha Perera'</span>,
  focus: [<span class="code-string">'product'</span>, <span class="code-string">'platform'</span>],
  ships: <span class="code-string">'end-to-end'</span>,
  mindset: <span class="code-string">'learn / build / improve'</span>
};</code></pre>
          </div>
          <div class="panel-footer"><span>Angular · .NET · Python</span><span class="signal"><i class="bx bx-pulse"></i> in production</span></div>
        </div>
      </section>

      <section id="about" class="section-wrap split-section" aria-labelledby="about-title">
        <div class="section-kicker">01 / About</div>
        <div class="split-content about-grid">
          <div>
            <h2 id="about-title">A product-minded engineer with a deep technical range.</h2>
            <p>I’m Lakshitha — an Associate Tech Lead and full-stack software engineer with 6+ years of experience shipping reliable applications and solving complicated engineering problems.</p>
            <p>My work moves between frontend systems, backend services, machine learning, data, deployment tooling and client-facing delivery. I enjoy the space where a thoughtful product idea meets solid engineering.</p>
            <a class="text-link" href="https://medium.com/@lakshitha1629" target="_blank" rel="noopener">Read my technical writing <i class="bx bx-up-arrow-alt"></i></a>
          </div>
          <div class="signal-grid">
            <div v-for="stat in stats" :key="stat.label" class="signal-card"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
          </div>
        </div>
      </section>

      <section id="experience" class="section-wrap split-section" aria-labelledby="experience-title">
        <div class="section-kicker">02 / Experience</div>
        <div class="split-content">
          <div class="section-heading-row"><h2 id="experience-title">Where I’ve been making things work.</h2><span class="section-note">2019 — now</span></div>
          <div class="experience-list">
            <article v-for="role in experiences" :key="role.company" class="experience-item">
              <div class="experience-date">{{ role.period }}</div>
              <div class="experience-body"><h3>{{ role.role }} <span>@ {{ role.company }}</span></h3><p>{{ role.summary }}</p><div class="tag-row"><span v-for="tag in role.tags" :key="tag">{{ tag }}</span></div></div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" class="section-wrap split-section" aria-labelledby="projects-title">
        <div class="section-kicker">03 / Selected work</div>
        <div class="split-content">
          <div class="section-heading-row"><h2 id="projects-title">A few problems I’ve enjoyed solving.</h2><a class="text-link" href="https://github.com/lakshitha1629?tab=repositories" target="_blank" rel="noopener">Browse all 110 repos <i class="bx bx-up-arrow-alt"></i></a></div>
          <div class="project-grid">
            <article v-for="project in projects" :key="project.title" class="project-card" :class="{ featured: project.featured }">
              <div class="project-card-top"><span class="project-index">{{ project.index }}</span><a :href="project.link" target="_blank" rel="noopener" :aria-label="'Open ' + project.title + ' on GitHub'"><i class="bx bx-link-external"></i></a></div>
              <p class="project-type">{{ project.type }}</p>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="tag-row"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="capabilities" class="section-wrap split-section" aria-labelledby="capabilities-title">
        <div class="section-kicker">04 / Toolkit</div>
        <div class="split-content skills-layout">
          <div><h2 id="capabilities-title">The toolkit behind the work.</h2><p>I’m comfortable moving across the stack, choosing the right tool for the constraint rather than forcing one technology onto every problem.</p></div>
          <div class="skill-groups"><div v-for="group in skillGroups" :key="group.label" class="skill-group"><span class="skill-label">{{ group.label }}</span><div class="skill-items"><span v-for="skill in group.items" :key="skill">{{ skill }}</span></div></div></div>
        </div>
      </section>

      <section id="recognition" class="section-wrap recognition-section" aria-labelledby="recognition-title">
        <div class="recognition-header">
          <div class="section-kicker">Recognition</div>
          <div class="recognition-intro"><span class="section-note">Awards · leadership · community</span><h2 id="recognition-title">The work beyond the job title.</h2><p>Some of the most meaningful work happens outside a delivery sprint: competing, leading teams, representing a community and making space for other people to build.</p></div>
        </div>
        <div class="recognition-highlights" aria-label="Recognition highlights">
          <div v-for="highlight in recognitionHighlights" :key="highlight.label" class="recognition-highlight"><strong>{{ highlight.value }}</strong><span>{{ highlight.label }}</span></div>
        </div>
        <div class="recognition-layout">
          <div class="recognition-column recognition-panel recognition-panel-awards">
            <div class="recognition-panel-heading"><span class="recognition-panel-label">01 / Competitions</span><i class="bx bx-trophy"></i></div>
            <h3 class="recognition-panel-title">Ideas that held up under pressure.</h3>
            <div class="recognition-list">
              <article v-for="award in awards" :key="award.title" class="recognition-item">
                <span class="recognition-index">{{ award.index }}</span>
                <div><h4>{{ award.title }}</h4><p>{{ award.detail }}</p><span class="recognition-meta">{{ award.meta }}</span></div>
              </article>
            </div>
          </div>
          <div class="recognition-column recognition-panel recognition-panel-community">
            <div class="recognition-panel-heading"><span class="recognition-panel-label">02 / Leadership + service</span><i class="bx bx-group"></i></div>
            <h3 class="recognition-panel-title">Showing up for the community.</h3>
            <div class="recognition-list">
              <article v-for="activity in activities" :key="activity.title" class="recognition-item">
                <span class="recognition-index">{{ activity.index }}</span>
                <div><h4>{{ activity.title }}</h4><p>{{ activity.detail }}</p><span class="recognition-meta">{{ activity.meta }}</span></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section-wrap contact-section" aria-labelledby="contact-title">
        <div class="contact-card"><div><div class="section-kicker">06 / Contact</div><h2 id="contact-title">Have a product, platform or hard problem in mind?</h2><p>I’m open to thoughtful conversations about engineering leadership, product development and ambitious technical work.</p></div><div class="contact-actions"><a class="button button-primary" href="mailto:lakshitha1629@gmail.com">lakshitha1629@gmail.com <i class="bx bx-right-arrow-alt"></i></a><div class="contact-links"><a href="https://www.linkedin.com/in/lakshitha1629/" target="_blank" rel="noopener">LinkedIn</a><a href="https://github.com/lakshitha1629" target="_blank" rel="noopener">GitHub</a><a href="https://medium.com/@lakshitha1629" target="_blank" rel="noopener">Medium</a></div></div></div>
      </section>
    </main>

    <footer class="site-footer"><span>© {{ currentYear }} Lakshitha Perera</span><span>Code. Learn. Build. Improve.</span><a href="#top">Back to top <i class="bx bx-up-arrow-alt"></i></a></footer>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      menuOpen: false,
      currentYear: new Date().getFullYear(),
      navItems: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Work', href: '#projects' },
        { label: 'Toolkit', href: '#capabilities' },
        { label: 'Recognition', href: '#recognition' },
      ],
      stats: [
        { value: '6+', label: 'years shipping software' },
        { value: '110', label: 'public GitHub repositories' },
        { value: '01', label: 'published research paper' },
        { value: '∞', label: 'curiosity for what’s next' },
      ],
      experiences: [
        { period: 'Jul 2022 — now', role: 'Associate Tech Lead / Software Engineer', company: 'DirectFN', summary: 'Building enterprise fintech applications with C#/.NET and complex Oracle PL/SQL structures, while improving engineering workflows and supporting client delivery in Scrum teams.', tags: ['C# / .NET', 'Oracle PL/SQL', 'Fintech'] },
        { period: 'Aug 2020 — Apr 2022', role: 'Full Stack Developer', company: 'ProjectXSpace', summary: 'Delivered e-commerce, vehicle-routing and recommendation products across Angular, TypeScript, .NET, Python, SQL Server, Azure Service Bus and Google APIs.', tags: ['Angular', 'Python / ML', 'Azure'] },
        { period: 'Mar 2020 — Sep 2020', role: 'Software Engineer', company: 'BevyLabs', summary: 'Built web and mobile products including a QR-payment hardware solution and a computer-vision shrimp counter proof of concept.', tags: ['Vue.js', 'Android', 'OpenCV.js'] },
        { period: 'Sep 2019 — Feb 2020', role: 'Software Engineer Intern', company: 'Mobitel', summary: 'Started my professional journey building internal web applications and a generator fuel-monitoring solution for engineering operations.', tags: ['PHP', 'MySQL', 'C++ / Android'] },
      ],
      projects: [
        { index: '01', type: 'AI platform · Tech lead', title: 'ToolGenie', description: 'An AI-powered creator platform and Chrome extension for YouTube ideation, SEO, metadata and workflow automation.', tags: ['Next.js', 'AI tools', 'Manifest V3'], link: 'https://www.linkedin.com/in/lakshitha1629/', featured: true },
        { index: '02', type: 'Streaming · Product engineering', title: 'AYOZAT STREAM', description: 'A multi-surface streaming experience spanning live TV, VOD, monetization, personalization and mobile delivery.', tags: ['React', 'Node.js', 'Flutter'], link: 'https://github.com/lakshitha1629/Webview-Ayozat', featured: true },
        { index: '03', type: 'Web3 · Full stack', title: 'RightsMint', description: 'A platform exploring fractional intellectual-property ownership with Solana smart contracts and secure APIs.', tags: ['Solana', 'Smart contracts', 'APIs'], link: 'https://github.com/lakshitha1629/metaplex', featured: false },
        { index: '04', type: 'Machine learning · Research', title: 'PhishNet', description: 'A deep-learning project for phishing detection, reflecting my long-running interest in applied ML and security.', tags: ['Python', 'Deep learning', 'Jupyter'], link: 'https://github.com/lakshitha1629/PhishNet_Deep_Learning_for_Phishing_Detection', featured: false },
        { index: '05', type: 'Operations research · Backend', title: 'Delivery Route Engine', description: 'Vehicle-routing optimization using maps, OR-Tools and real-time messaging to help delivery teams make better decisions.', tags: ['Python', 'OR-Tools', 'Google Maps'], link: 'https://github.com/lakshitha1629/a-star-shortest-path-with-google-maps-api', featured: false },
        { index: '06', type: 'Computer vision · PWA', title: 'Shrimp Counter', description: 'A browser-based computer-vision proof of concept for counting shrimp and clusters through magnification hardware.', tags: ['Vue.js', 'OpenCV.js', 'Firebase'], link: 'https://github.com/lakshitha1629/fishcount', featured: false },
      ],
      recognitionHighlights: [
        { value: '1st', label: 'UWU GameJam' },
        { value: '1st RU', label: 'Mobitel Smart Sri Lanka' },
        { value: 'VP', label: 'Computer Society' },
        { value: 'SLUG', label: 'University karate team' },
      ],
      awards: [
        { index: '01', title: 'Mobitel Smart Sri Lanka Hackathon', detail: '1st Runner Up in a national hackathon focused on building useful technology solutions.', meta: 'Mobitel and Sri Lanka Telecom' },
        { index: '02', title: 'UWU GameJam', detail: '1st place for a game development project created through the Uva Wellassa University community.', meta: 'Mozilla Campus Club · 2018' },
        { index: '03', title: 'Deft-coders 12-hour hackathon', detail: 'Placed 3rd in 2016 and 5th in 2018 while competing in rapid, team-based software development.', meta: 'Computer Society · Uva Wellassa University' },
        { index: '04', title: 'Cyber Security Quiz Competition', detail: 'Placed 7th in a national cybersecurity-focused competition.', meta: 'Sri Lanka CERT|CC · 2019' },
        { index: '05', title: 'Innovation competitions', detail: 'Participated in SAHASAK NIMAVUM and Maker Fair, exploring new ideas through hands-on engineering.', meta: 'Provincial 2019 · Kandy 2018' },
        { index: '06', title: 'Deft-coders v6.0', detail: 'Organized a 12-hour hackathon for student developers and makers.', meta: 'Computer Society · Uva Wellassa University' },
      ],
      activities: [
        { index: '01', title: 'Computer Society leadership', detail: 'Vice president and professional-development program coordinator, helping create opportunities for student builders.', meta: 'Uva Wellassa University · 2018' },
        { index: '02', title: 'IEEE Student Branch', detail: 'Served as a first-year student coordinator and student representative for the IIT batch.', meta: 'Uva Wellassa University · 2017' },
        { index: '03', title: 'University sports', detail: 'Played for the university volleyball team and karate team, including participation in the Sri Lanka University Games.', meta: 'SLUG · 2017' },
        { index: '04', title: 'School leadership and sport', detail: 'Senior prefect, Under-19 volleyball vice-captain, and member of the handball, cricket and carom teams.', meta: 'Nalanda College · 2012 - 2014' },
        { index: '05', title: 'Community and event work', detail: 'Coordinated the Geethma musical concert, supported the Ananda vs Nalanda Big Match committee, and contributed to the Saukyadana Unit.', meta: 'Nalanda College · 2013 - 2014' },
        { index: '06', title: 'Service and first aid', detail: 'Attended Emergency First Aid and Basic Life Support training while supporting school community initiatives.', meta: 'Nalanda College · 2013' },
      ],
      skillGroups: [
        { label: 'Frontend', items: ['Angular', 'React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript'] },
        { label: 'Backend & APIs', items: ['C# / .NET', 'Python', 'Flask', 'Node.js', 'Laravel', 'REST APIs'] },
        { label: 'AI & data', items: ['scikit-learn', 'TensorFlow', 'OpenCV', 'pandas', 'NumPy', 'Jupyter'] },
        { label: 'Cloud & delivery', items: ['Azure', 'Docker', 'Git', 'CI/CD', 'Linux', 'DigitalOcean'] },
        { label: 'Databases', items: ['Oracle PL/SQL', 'SQL Server', 'MySQL', 'MongoDB', 'Firebase'] },
      ],
    };
  },
};
</script>

<style>
:root { --portfolio-bg: #08111c; --portfolio-surface: #0e1b2a; --portfolio-surface-2: #132438; --portfolio-border: rgba(165, 190, 212, 0.16); --portfolio-text: #eef5f9; --portfolio-muted: #9db0be; --portfolio-accent: #7ee0c4; --portfolio-accent-2: #b9a7ff; }
html { scroll-behavior: smooth; }
body { background: var(--portfolio-bg); color: var(--portfolio-text); overflow-x: hidden; }
.portfolio-shell { min-height: 100vh; background: radial-gradient(circle at 80% 10%, rgba(126, 224, 196, 0.08), transparent 32rem), var(--portfolio-bg); }
.site-header { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; justify-content: space-between; max-width: 1240px; margin: 0 auto; padding: 1.4rem 2rem; background: rgba(8, 17, 28, 0.78); backdrop-filter: blur(18px); }
.brand { display: inline-flex; align-items: center; gap: .75rem; color: var(--portfolio-text); text-decoration: none; font-weight: 700; letter-spacing: -.02em; }
.brand-mark { display: grid; place-items: center; width: 2.15rem; height: 2.15rem; border: 1px solid var(--portfolio-accent); color: var(--portfolio-accent); font-size: .72rem; letter-spacing: .06em; }
.desktop-nav { display: flex; align-items: center; gap: 1.55rem; }
.desktop-nav a, .mobile-menu a, .hero-meta a, .site-footer a, .contact-links a { color: var(--portfolio-muted); text-decoration: none; transition: color .2s ease; }
.desktop-nav a:hover, .mobile-menu a:hover, .hero-meta a:hover, .site-footer a:hover, .contact-links a:hover { color: var(--portfolio-accent); }
.desktop-nav a { font-size: .86rem; }
.desktop-nav .nav-resume { padding: .58rem .85rem; border: 1px solid var(--portfolio-border); color: var(--portfolio-text); }
.menu-button { display: none; color: var(--portfolio-text); background: none; border: 0; font-size: 1.75rem; cursor: pointer; }
.mobile-menu { display: none; }
.section-wrap { max-width: 1240px; margin: 0 auto; padding: 0 2rem; }
.hero { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(360px, .9fr); gap: 5rem; align-items: center; min-height: min(800px, calc(100vh - 80px)); padding-top: 5rem; padding-bottom: 6.5rem; }
.eyebrow, .section-kicker, .project-type, .section-note, .experience-date, .skill-label, .panel-topline, .panel-footer, .tag-row span { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
.eyebrow { display: flex; align-items: center; gap: .6rem; color: var(--portfolio-accent); font-size: .76rem; letter-spacing: .08em; text-transform: uppercase; }
.status-dot { width: .5rem; height: .5rem; border-radius: 50%; background: var(--portfolio-accent); box-shadow: 0 0 0 .3rem rgba(126, 224, 196, .12); }
.hero h1 { max-width: 760px; margin: 1.4rem 0 1.4rem; font-size: clamp(3.3rem, 7.2vw, 6.5rem); line-height: .96; letter-spacing: -.075em; }
.hero h1 em { color: var(--portfolio-accent); font-style: normal; }
.hero-lede { max-width: 580px; color: var(--portfolio-muted); font-size: 1.15rem; line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: .85rem; margin-top: 2.15rem; }
.button { display: inline-flex; align-items: center; gap: .7rem; padding: .88rem 1.05rem; text-decoration: none; font-weight: 700; font-size: .9rem; transition: transform .2s ease, background .2s ease, color .2s ease; }
.button:hover { transform: translateY(-2px); }
.button-primary { background: var(--portfolio-accent); color: #062018; }
.button-primary:hover { background: #a2f5dd; }
.button-quiet { border: 1px solid var(--portfolio-border); color: var(--portfolio-text); }
.button-quiet:hover { border-color: var(--portfolio-accent); color: var(--portfolio-accent); }
.hero-meta { display: flex; flex-wrap: wrap; gap: 1.1rem; margin-top: 2.4rem; color: var(--portfolio-muted); font-size: .84rem; }
.hero-meta span, .hero-meta a { display: inline-flex; align-items: center; gap: .35rem; }
.hero-panel { position: relative; overflow: hidden; min-height: 390px; padding: 1.2rem; border: 1px solid var(--portfolio-border); background: linear-gradient(145deg, rgba(19, 36, 56, .95), rgba(8, 17, 28, .8)); box-shadow: 0 25px 100px rgba(0,0,0,.22); }
.panel-orbit { position: absolute; border: 1px solid rgba(126, 224, 196, .18); border-radius: 50%; pointer-events: none; }
.orbit-one { width: 28rem; height: 28rem; top: -13rem; right: -10rem; }
.orbit-two { width: 20rem; height: 20rem; bottom: -13rem; left: -10rem; border-color: rgba(185, 167, 255, .2); }
.panel-topline, .panel-footer { position: relative; z-index: 1; display: flex; justify-content: space-between; color: var(--portfolio-muted); font-size: .66rem; letter-spacing: .1em; }
.code-window { position: relative; z-index: 1; margin: 4.5rem .7rem 3.5rem; border: 1px solid var(--portfolio-border); background: rgba(4, 11, 20, .62); }
.code-window-bar { display: flex; align-items: center; gap: .35rem; padding: .72rem .9rem; border-bottom: 1px solid var(--portfolio-border); color: var(--portfolio-muted); }
.code-window-bar span { width: .48rem; height: .48rem; border-radius: 50%; background: #e98d91; }.code-window-bar span:nth-child(2) { background: #e9c477; }.code-window-bar span:nth-child(3) { background: var(--portfolio-accent); }.code-window-bar small { margin-left: .5rem; font-family: ui-monospace, monospace; font-size: .67rem; }
.code-window pre { overflow: auto; margin: 0; padding: 1.4rem 1.1rem 1.6rem; color: #d9e6ed; font: .9rem/2 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
.code-muted { color: var(--portfolio-accent-2); }.code-string { color: var(--portfolio-accent); }.signal { color: var(--portfolio-accent); }
.split-section { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 3rem; padding-top: 6rem; padding-bottom: 6rem; border-top: 1px solid var(--portfolio-border); }
.section-kicker { color: var(--portfolio-accent); font-size: .78rem; letter-spacing: .08em; text-transform: uppercase; padding-top: .45rem; }
.split-content { min-width: 0; }.split-content h2 { max-width: 740px; margin: 0 0 1.5rem; font-size: clamp(2rem, 4vw, 3.6rem); line-height: 1.05; letter-spacing: -.055em; }
.split-content p { max-width: 720px; color: var(--portfolio-muted); font-size: 1rem; line-height: 1.8; }
.about-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr); gap: 3rem; align-items: end; }
.text-link { display: inline-flex; align-items: center; gap: .35rem; margin-top: 1rem; color: var(--portfolio-accent); text-decoration: none; font-weight: 700; }
.signal-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: .8rem; }.signal-card { padding: 1.15rem; border: 1px solid var(--portfolio-border); background: rgba(19, 36, 56, .5); }.signal-card strong { display: block; color: var(--portfolio-text); font-size: 2rem; letter-spacing: -.06em; }.signal-card span { display: block; margin-top: .3rem; color: var(--portfolio-muted); font-size: .78rem; line-height: 1.4; }
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; }.section-heading-row h2 { margin-bottom: 0; }.section-note { color: var(--portfolio-muted); font-size: .72rem; white-space: nowrap; }
.experience-list { margin-top: 2.5rem; }.experience-item { display: grid; grid-template-columns: 155px minmax(0, 1fr); gap: 1.5rem; padding: 1.5rem 0; border-top: 1px solid var(--portfolio-border); }.experience-item:first-child { border-top: 0; padding-top: 0; }.experience-date { padding-top: .3rem; color: var(--portfolio-accent); font-size: .75rem; }.experience-body h3 { margin: 0 0 .55rem; font-size: 1.15rem; }.experience-body h3 span { color: var(--portfolio-accent-2); font-weight: 500; }.experience-body p { margin: 0; max-width: 720px; font-size: .95rem; }
.tag-row { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: 1rem; }.tag-row span { padding: .34rem .55rem; border: 1px solid var(--portfolio-border); color: var(--portfolio-muted); font-size: .68rem; }
.project-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 2.4rem; }.project-card { display: flex; flex-direction: column; min-height: 290px; padding: 1.5rem; border: 1px solid var(--portfolio-border); background: rgba(14, 27, 42, .66); transition: transform .22s ease, border-color .22s ease, background .22s ease; }.project-card:hover { transform: translateY(-5px); border-color: rgba(126, 224, 196, .48); background: rgba(19, 36, 56, .88); }.project-card.featured { background: linear-gradient(145deg, rgba(31, 56, 70, .82), rgba(14, 27, 42, .72)); }.project-card-top { display: flex; justify-content: space-between; }.project-card-top a { color: var(--portfolio-muted); font-size: 1.25rem; }.project-card-top a:hover { color: var(--portfolio-accent); }.project-index { color: var(--portfolio-accent); font: .72rem ui-monospace, monospace; }.project-type { margin: 2.5rem 0 .7rem; color: var(--portfolio-accent-2); font-size: .67rem; letter-spacing: .06em; text-transform: uppercase; }.project-card h3 { margin: 0; font-size: 1.35rem; }.project-card p:not(.project-type) { flex: 1; margin: .7rem 0 0; font-size: .9rem; line-height: 1.65; }
.recognition-section { padding-top: 6rem; padding-bottom: 6.5rem; border-top: 1px solid var(--portfolio-border); }.recognition-header { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 3rem; align-items: start; }.recognition-intro { max-width: 760px; }.recognition-intro .section-note { display: block; margin-bottom: 1rem; color: var(--portfolio-accent); letter-spacing: .08em; text-transform: uppercase; }.recognition-intro h2 { margin: 0 0 1.2rem; font-size: clamp(2.6rem, 5vw, 5rem); line-height: .96; letter-spacing: -.07em; }.recognition-intro p { max-width: 650px; margin: 0; color: var(--portfolio-muted); font-size: 1rem; line-height: 1.8; }.recognition-highlights { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .8rem; margin: 3.5rem 0 1.2rem 220px; }.recognition-highlight { position: relative; overflow: hidden; min-height: 115px; padding: 1.1rem 1.2rem; border: 1px solid var(--portfolio-border); background: linear-gradient(145deg, rgba(22, 48, 58, .9), rgba(14, 27, 42, .7)); }.recognition-highlight::after { position: absolute; right: -1rem; bottom: -2rem; width: 5rem; height: 5rem; border: 1px solid rgba(126, 224, 196, .22); border-radius: 50%; content: ''; }.recognition-highlight strong { display: block; color: var(--portfolio-accent); font-size: 2rem; line-height: 1; letter-spacing: -.06em; }.recognition-highlight span { display: block; max-width: 9rem; margin-top: .65rem; color: var(--portfolio-muted); font: .68rem ui-monospace, monospace; letter-spacing: .05em; text-transform: uppercase; }.recognition-layout { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; margin-left: 220px; }.recognition-column { min-width: 0; }.recognition-panel { padding: 1.5rem 1.6rem 1.8rem; border: 1px solid var(--portfolio-border); background: rgba(14, 27, 42, .68); }.recognition-panel-awards { background: linear-gradient(155deg, rgba(24, 54, 61, .9), rgba(14, 27, 42, .72)); }.recognition-panel-community { background: linear-gradient(155deg, rgba(32, 39, 66, .86), rgba(14, 27, 42, .72)); }.recognition-panel-heading { display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid var(--portfolio-border); }.recognition-panel-heading i { color: var(--portfolio-accent); font-size: 1.4rem; }.recognition-panel-label { color: var(--portfolio-accent-2); font: .68rem ui-monospace, monospace; letter-spacing: .08em; text-transform: uppercase; }.recognition-panel-title { margin: 1.2rem 0 .4rem; color: var(--portfolio-text); font-size: 1.35rem; letter-spacing: -.035em; }.recognition-list { margin-top: .6rem; }.recognition-item { display: grid; grid-template-columns: 2rem minmax(0, 1fr); gap: .85rem; padding: 1.15rem 0; border-bottom: 1px solid var(--portfolio-border); }.recognition-item:last-child { border-bottom: 0; padding-bottom: 0; }.recognition-index { padding-top: .25rem; color: var(--portfolio-accent); font: .72rem ui-monospace, monospace; }.recognition-item h4 { margin: 0 0 .4rem; color: var(--portfolio-text); font-size: 1rem; line-height: 1.35; }.recognition-item p { margin: 0; font-size: .87rem; line-height: 1.6; }.recognition-meta { display: block; margin-top: .55rem; color: var(--portfolio-accent-2); font: .67rem ui-monospace, monospace; letter-spacing: .03em; }
.skills-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 4rem; }.skill-groups { border-top: 1px solid var(--portfolio-border); }.skill-group { display: grid; grid-template-columns: 135px 1fr; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--portfolio-border); }.skill-label { color: var(--portfolio-accent); font-size: .72rem; padding-top: .25rem; }.skill-items { display: flex; flex-wrap: wrap; gap: .5rem .8rem; color: var(--portfolio-text); font-size: .95rem; }
.contact-section { padding-top: 2rem; padding-bottom: 5rem; }.contact-card { display: grid; grid-template-columns: 1.1fr .9fr; gap: 3rem; padding: 3rem; border: 1px solid rgba(126, 224, 196, .28); background: linear-gradient(120deg, rgba(18, 40, 50, .9), rgba(14, 27, 42, .85)); }.contact-card h2 { max-width: 650px; margin: .8rem 0 1rem; font-size: clamp(2.2rem, 4vw, 4.2rem); line-height: .98; letter-spacing: -.06em; }.contact-card p { max-width: 560px; color: var(--portfolio-muted); line-height: 1.7; }.contact-actions { display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 1.5rem; }.contact-links { display: flex; flex-wrap: wrap; gap: 1.25rem; font-size: .9rem; }
.site-footer { display: flex; justify-content: space-between; gap: 1rem; max-width: 1240px; margin: 0 auto; padding: 1.5rem 2rem 2rem; border-top: 1px solid var(--portfolio-border); color: var(--portfolio-muted); font: .72rem ui-monospace, monospace; }.site-footer a { color: var(--portfolio-text); }
@media (max-width: 900px) { .hero { grid-template-columns: 1fr; gap: 3rem; min-height: auto; padding-top: 4rem; }.hero-panel { max-width: 620px; }.split-section { grid-template-columns: 1fr; gap: 1.5rem; }.about-grid, .skills-layout, .contact-card { grid-template-columns: 1fr; gap: 2rem; }.recognition-header { grid-template-columns: 1fr; gap: 1.5rem; }.recognition-highlights, .recognition-layout { margin-left: 0; }.project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 680px) { .site-header { padding: 1rem 1.1rem; }.desktop-nav { display: none; }.menu-button { display: block; }.mobile-menu { position: fixed; top: 4.2rem; right: 1rem; z-index: 19; display: flex; flex-direction: column; min-width: 210px; padding: .75rem; border: 1px solid var(--portfolio-border); background: rgba(14, 27, 42, .98); box-shadow: 0 18px 50px rgba(0,0,0,.3); }.mobile-menu a { padding: .75rem; }.section-wrap { padding-left: 1.1rem; padding-right: 1.1rem; }.hero { padding-top: 3.5rem; padding-bottom: 4.5rem; }.hero h1 { font-size: clamp(3rem, 15vw, 5rem); }.hero-lede { font-size: 1rem; }.hero-panel { min-height: 330px; }.code-window { margin-top: 3.2rem; margin-bottom: 2.5rem; }.split-section, .recognition-section { padding-top: 4rem; padding-bottom: 4rem; }.recognition-highlights { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 2.5rem; }.recognition-layout { grid-template-columns: 1fr; }.recognition-panel { padding: 1.2rem; }.recognition-intro h2 { font-size: clamp(2.5rem, 14vw, 4.5rem); }.project-grid { grid-template-columns: 1fr; }.experience-item { grid-template-columns: 1fr; gap: .6rem; }.contact-card { padding: 1.5rem; }.site-footer { flex-direction: column; padding-left: 1.1rem; padding-right: 1.1rem; } }
</style>
