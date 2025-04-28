import ProjectCard from './ProjectCard';

type Project = {
    title: string;
    clientName?: string;
    employerName: string;
    dateRange: string;
    location: string;
    technologiesUsed: string[];
    description: string;
    link: string;
    clientLogo?: string;
  };

const projects= [
    {
      title: "Angular Developer",
      clientName: "Bank of America",
      employerName: "Collabera",
      dateRange: "July 2023 - Present",
      location: "Addison, TX",
      technologiesUsed:["HTML5", "CSS", "Sass", "TypeScript", "Angular 16+", "JSON","GIT", "Bootstrap","Angular Material",
        "PrimeNG", "Storybook","Jasmine","Karma","Formly","Helix UI","REST API"],
      description: "As a key Angular developer at Bank of America, I led ADA-compliant implementations in Angular 16, migrated applications to standalone architecture, and developed modular micro-frontends using Angular Elements and Module Federation. I redesigned legacy libraries into modern web components, integrated Storybook, and collaborated with UX teams to ensure ADA compliance. Additionally, I enhanced app performance using REST APIs and RxJS operators, developed reusable component libraries, and provided mentorship through code reviews, promoting best practices and high code quality.",
      link: "https://example.com/project1",
      clientLogo: "/images/bank-of-america-4-logo-png-transparent.png", // Replace with actual path
    },
    {
      title: "Full-Stack Developer",
      clientName: "USPTO",
      employerName: "REI Systems",
      dateRange: "Feb 2021 - April 2023",
      location: "Alexandria, VA",
      technologiesUsed:["HTML5", "CSS3", "Sass", "TypeScript", "JSON", "GIT", "Angular 13", "Bootstrap", "Karma Jasmine", "Agile", "PrimeNG", "Java 8"," Spring boot", "Oracle",
        "REST API", "SQL", "PrimeNG"
      ],
      description:"As a key developer on a high-impact, customer-facing React modernization project, I led the architectural redesign of a legacy application into a scalable Micro Frontends pattern using Module Federation, Next.js, and React 18, significantly improving performance and quality. Leveraging Agile Scrum, I transformed design mock-ups into cross-browser compatible, TypeScript-based UI components with Material-UI, Redux Toolkit, and React Hooks, while implementing dynamic layouts, Next.js routing, and RESTful API integrations for seamless data flow. I optimized content delivery with Next.js Image and SASS-based CSS Modules, upgraded the stack from React 17 to 18 and Next.js 11 to 12, and ensured robust testing with Jest and React Testing Library. On the backend, I utilized Spring MVC, Hibernate, and Oracle Database, developing REST endpoints, DAO patterns, and SQL queries to support complex business logic, while integrating Google Analytics for performance tracking.",
      link: "https://example.com/project2",
      clientLogo: "/images/Seal_of_the_United_States_Patent_and_Trademark_Office.svg", // Replace with actual path
    },
    ,
    {
      title: "Frontend Developer",
      employerName: "MediTechSafe Inc",
      dateRange: "June 2020 - Nov 2020",
      location: "Cincinnati, OH",
      technologiesUsed:["HTML5", "CSS3", "PrimeNG", "JavaScript", "TyepScript", "Angular 4", "Bootstrap",
        "JSON", "Eclipse", "GIT", "Agile", "Go lang", "REST", "PostgreSQL","AWS S3"],
      description: "As a Key Developer, I built robust, responsive user interfaces using Angular 4 and PrimeNG, leveraging MVC frameworks to associate HTML elements with data models. I spearheaded a critical initiative integrating Amazon S3 storage through REST APIs developed using AWS-Go SDK, and automated complex product-model and CVE-patch mapping algorithms using TypeScript. Additionally, I created customized dashboards featuring dynamic Angular Canvas charts, extensively utilized Angular features like Reactive Forms, Services, Routers, Observables, and Directives, and developed backend RESTful services connected to PostgreSQL databases using Golang.",
      link: "https://example.com/project2",
      clientLogo: "/images/meditech safe.png", // Replace with actual path
    },
    {
      title: "Java Developer",
      clientName: "AIG",
      employerName: "Virtusa",
      dateRange: "Oct 2016 - June 2019",
      location: "Hyderabad, INDIA",
      technologiesUsed:["HTML", "TypeScript", "Angular 4","CSS", "Angular material", 
        "MySQL", "Java", "Spring boot","Hibernate", "Pega", "REST API"],
      description: "As the Key Developer for a financial services module, I developed and enhanced UI functionalities using Angular 4, TypeScript, HTML/CSS, and Angular Material. I implemented robust client-side validations with Reactive and Template-driven forms, created Angular services integrating HTTP methods, and utilized Angular Material extensively for UI styling. On the backend, I developed RESTful APIs with Spring MVC, Spring Boot microservices, and Spring Core annotations, alongside persistence solutions using Hibernate. My role also included writing SQL and PL/SQL queries for MySQL databases, leveraging Kafka for efficient data pipelines, and applying advanced Core Java concepts to ensure scalable, maintainable applications.",
      link: "https://example.com/project2",
      clientLogo: "/images/AIG_new_logo.png", // Replace with actual path
    },
    {
      title: "Software Developer Intern",
      employerName: "Virtusa",
      dateRange: "Feb 2016 - March 2016",
      location: "Hyderabad, INDIA",
      technologiesUsed:["HTML", "CSS", "MY SQL", "PL/SQL", "REST API"],
      description: "As an intern at Virtusa, I contributed to the development of the internal “Training Portal” web application, focusing on managing company-wide training activities. I designed web page layouts using HTML5 and CSS, developed backend modules utilizing Java and Spring, and integrated REST APIs. Additionally, I handled database interactions by writing SQL queries, PL/SQL stored procedures, and triggers on MySQL.",
      link: "https://example.com/project2",
      clientLogo: "/images/virtusa.png", // Replace with actual path
    }

  ] as Project[];

  export default function Projects() {
    return (
      <section id="projects" className="min-h-screen py-16 bg-gray-200">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              clientName={project.clientName}
              employerName={project.employerName}
              dateRange={project.dateRange}
              location={project.location}
              technologiesUsed={project.technologiesUsed}
              description={project.description}
              link={project.link}
              clientLogo={project.clientLogo}
            />
          ))}
        </div>
      </section>
    );
  }