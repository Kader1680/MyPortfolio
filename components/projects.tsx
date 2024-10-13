import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Ecommerce Shopping Platformm NEXTjs Laravel",
    description: "change langage from english to arabic, CRUD product, also CRUD Item, CRUD cart",
    technologies: ["PHP", "Laravel", "MySQL", "JWT", "Nextjs", "Tailwaind"],
    imageUrl: "/uae.png",
    githubUrl: "https://github.com/Kader1680/ecommerce_Test",
    liveUrl: "",
  },
  {
    title: "Toring Full Application Question/Answer",
    description: "CRUD for Question also upload pics from your devise to profile page, including dashboard for admin user",
    technologies: ["PHP", "Laravel", "MySQL", "JWT", "JavaScript", "Bootstrap 5"],
    imageUrl: "/toring.png",
    githubUrl: "https://github.com/Kader1680/Toring-Full-Web-Application",
    liveUrl: "",
  },
  {
    title: "Sopping Mark Ecommerce Website",
    description: "Authentication system with CRUD Operation for the product also filter prodcut by category",
    technologies: ["PHP", "Laravel", "MySQL", "JWT", "JavaScript"],
    imageUrl: "/ecom.png",
    githubUrl: "https://github.com/Kader1680/Ecommerce-Website-Laravel/tree/main",
    liveUrl: "",
  },
  {
    title: "Authentication using Jwt Laravel",
    description: "You can register or login and will be redirected to a homepage displaying your username and email.",
    technologies: ["PHP", "Laravel", "MySQL", "JWT", "JavaScript"],
    imageUrl: "/auth.png",
    githubUrl: "https://github.com/Kader1680/Laravel-Authentication",
    liveUrl: "http://authen.byethost10.com/?fbclid=IwAR0327M2jDFfCW8t3D58MVBoo83FIuVvYoYAIMP2MyCt0P41rKcUAxeTtDU",
  },
  {
    title: "Blog Post Laravel",
    description: "You can create your own blog, edit or delete your blog. Also, a feature to delete all blogs is added.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap 5", "JavaScript"],
    imageUrl: "/5.png",
    githubUrl: "https://github.com/Kader1680/fisrt-laravel-app",
    liveUrl: "",
  },
  {
    title: "Todo List Reactjs",
    description: "You can add, remove, and update tasks.",
    technologies: ["React", "Bootstrap", "HTML", "CSS", "JavaScript"],
    imageUrl: "/todo.png",
    githubUrl: "https://github.com/Kader1680/CRUD-APP-REACT",
    liveUrl: "https://kader1680.github.io/CRUD-APP-REACT/",
  },
  {
    title: "Small Social Media Website PHP",
    description: "Login or register, create a profile, add friends, and upload pictures.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    imageUrl: "/valleu.png",
    githubUrl: "https://github.com/Kader1680/Social-Media-Website",
    liveUrl: "",
  },
  {
    title: "Landing Page",
    description: "A landing page with different languages.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    imageUrl: "/landy.png",
    githubUrl: "https://github.com/Kader1680/Social-Media-Website",
    liveUrl: "",
  } 

  ,
   
  {
    title: "Stock Medicament Php Mysql",
    description:
      "i used pure php with mysql without use any libray or framework, you can add new city or delete, update",
    technologies: ["Php", "Mysql", "SQL", "Bootstrap", "Html css Javascript"],
    imageUrl:  "/PH.png",
    githubUrl: "https://github.com/Kader1680/Stock_Medicament",
    liveUrl: "",
  },
  {
    title: "IT Employer C++",
    description:
      "choise you role as employer or product ",
    technologies: ["C++", "Object Oriented Programming"],
    imageUrl:  "/k.png",
    githubUrl: "https://github.com/Kader1680/System-It-Member",
    liveUrl: "",
  },
  {
    title: "Old Portflio Website",
    description:
      "My old portflio website using react js it's responsive design",
    technologies: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl:  "/p.png",
    githubUrl: "https://github.com/Kader1680/Potfolio-Website/tree/main/app",
    liveUrl: "https://kader1680.github.io/Potfolio-Website/",
  }
  


  ,
  {
    title: "Static Store website",
    description:
      "multipage website static",
    technologies: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl:  "/s.png",
    githubUrl: "https://github.com/Kader1680/Online-Store",
    liveUrl: "https://kader1680.github.io/Online-Store/",
  }




  ,
  {
    title: "Medical Website",
    description:
      "mutipages website with more 3 section and form validation",
      technologies: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl:  "/m.png",
    githubUrl: "https://github.com/Kader1680/Newlife-with-scss",
    liveUrl: "https://kader1680.github.io/Newlife-with-scss/",
  }


  ,
  {
    title: "CRUD APP using MYSQL",
    description:
      "mutipages website with more 3 section and form validation",
    technologies: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl:  "/1.png",
    githubUrl: "https://github.com/Kader1680/Newlife-with-scss",
    liveUrl: "https://kader1680.github.io/Newlife-with-scss/",
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-red">
      <div className="  mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#009658] text-center mb-8">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="  rounded-lg shadow-lg overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs text-gray-200 bg-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href={project.githubUrl} target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white">
                    
                   
                    <img width={30} src='/github.png' alt="GitHub" />
                    <p>Source Code</p>
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white">
                      
                      <img width={30} src='/domain.png' alt="Live liveUrl" />
                      <p>Demo Live</p>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
