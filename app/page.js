import profile from "../data/profile.json";
import projects from "../data/projects.json";
import videos from "../data/videos.json";
import Articles from "../components/Articles";
import skills from "../data/skills.json";
import tools from "../data/tools.json";
import experience from "../data/experience.json";
export default function Home() {
  return (
    <main className="container">
      <section id="intro" style={{ marginTop: 24 }}>
        <img src={profile.photo} alt={profile.name} className="intro-photo" />
        <h1>Hey, I am {profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <p>{profile.about}</p>
        <div style={{ clear: "both" }}>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {" | "}
           <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" | "}
          <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          {" | "}
          <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          {" | "}
         
          <a href={profile.socials.medium} target="_blank" rel="noopener noreferrer">Medium Articles</a>
      
          
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((p, i) => (
          <div className="project-item" key={i}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
        ))}

         <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="yt-btn"
        >
          See All Projects On Github →
        </a>
      </section>

      <section id="articles">
        <h2>Articles</h2>
        <Articles />
      </section>

      <section id="videos">
        <h2>Videos</h2>
        <div className="video-grid">
          {videos.slice(0, 4).map((v, i) => (
            <div className="video-item" key={i}>
              <iframe
                src={`https://www.youtube.com/embed/${v.videoId}`}
                title={v.title}
                allowFullScreen
              ></iframe>
              <p>{v.title}</p>
            </div>
          ))}
        </div>
        <a
          href={profile.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="yt-btn"
        >
          See on YouTube Channel →
        </a>
      </section>

      <section id="skills">
  <h2>Skills</h2>
  <ul>
    {skills.map((s, i) => (
      <li key={i}>{s}</li>
    ))}
  </ul>
</section>

<section id="tools">
  <h2>Tools & Tech</h2>
  <div className="tools-list">
    {tools.map((t, i) => (
      <span className="tool-badge" key={i}>{t}</span>
    ))}
  </div>
</section>
<section id="experience">
  <h2>Experience</h2>
  {experience.map((e, i) => (
    <div className="experience-item" key={i}>
      <h3>{e.title} {e.type === "freelance" ? "(Freelance)" : `— ${e.company}`}</h3>
      <p className="experience-date">{e.startDate} - {e.endDate}</p>
      <p>{e.description}</p>
    </div>
  ))}
</section>

    </main>
  );
}
