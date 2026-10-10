import "./globals.css";
import profile from "../data/profile.json";

export const metadata = {
  title: profile.name + " - Portfolio",
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/" className="name-logo sm:text-center">
              Abdelkader 
            </a>
            <nav>
              <a href="#projects">Projects</a>
              <a href="#articles">Articles</a>
              <a href="#videos">Videos</a>
              <a href="#skills">Skills</a>
              <a href="#tools">Tools</a>
              <a href="#experience">Experience</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            © {new Date().getFullYear()} {profile.name}
          </div>
        </footer>
      </body>
    </html>
  );
}
