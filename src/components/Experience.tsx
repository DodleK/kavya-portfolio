import { Briefcase, Building } from 'lucide-react';

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "AVAN IT LLC",
    period: "Jul 2024 - Present",
    duration: "11 mos",
    location: "United States",
    description: "Working on data engineering solutions to transform raw data into actionable insights.",
    logo: "/lovable-uploads/avanit-logo.png"
  },
  {
    title: "Student Assistant",
    company: "University of North Texas",
    period: "Dec 2023 - May 2024",
    duration: "6 mos",
    location: "Texas, United States",
    description: "Managed inventory tracking and database updates while collaborating in a fast-paced team environment. Demonstrated strong organizational skills, attention to detail, and effective communication with diverse stakeholders while maintaining high customer satisfaction ratings.",
    logo: "/lovable-uploads/unt-logo.png"
  },
  {
    title: "Graduate Teaching Assistant",
    company: "University of North Texas",
    period: "Jan 2023 - May 2023",
    duration: "5 mos",
    location: "Texas, United States",
    description: "Mentored students in analytics and data processing.",
    logo: "/lovable-uploads/unt-logo.png"
  },
  {
    title: "Student Assistant",
    company: "University of North Texas",
    period: "Aug 2022 - Dec 2022",
    duration: "5 mos",
    location: "Texas, United States",
    description: "Provided administrative support for departmental operations and maintained digital records systems. Coordinated with faculty and staff to facilitate efficient workflow processes and implemented organizational improvements that increased departmental efficiency by 15%.",
    logo: "/lovable-uploads/unt-logo.png"
  },
  {
    title: "Data Engineer",
    company: "Cognizant",
    period: "Jan 2021 - Jul 2022",
    duration: "1 yr 7 mos",
    location: "India",
    description: "Worked with various tools including Jira, Extract, Transform, Load (ETL), Machine Learning, MySQL, Microsoft Excel, Tableau, Keras, Oracle Database, Scikit-Learn, SQL, Apache Spark, Scrum, Project Management, R, Exploratory Data Analysis, Snowflake, Microsoft Power BI, Python, TensorFlow, AWS, Data Analysis, Hadoop, Amazon Redshift, Informatica, and IICS.",
    logo: "/lovable-uploads/cognizant-logo.png"
  },
  {
    title: "Data Engineer",
    company: "Buzzworks Business Services Pvt. Ltd.",
    period: "Jan 2020 - Dec 2020",
    duration: "1 yr",
    location: "Hyderabad, Telangana, India",
    description: "Used tools like Jira, MySQL, Microsoft Excel, Informatica IICS, Tableau, Oracle Database, SQL, Apache Spark, Scrum, Project Management, Microsoft Power BI, Python, Informatica, and IICS.",
    logo: "/lovable-uploads/buzzworks-logo.png"
  },
  {
    title: "Data Analyst/Engineer Intern",
    company: "LKKN Consultants Pvt Limited",
    period: "May 2019 - Dec 2019",
    duration: "8 mos",
    location: "India",
    description: "Internship focused on data analysis and engineering fundamentals.",
    logo: ""
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center shadow-md">
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full" />
                      ) : (
                        <Building size={32} className="text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-purple-600 mt-1">{exp.company}</h4>
                    
                    <div className="flex flex-wrap items-center text-gray-600 mt-2">
                      <div className="flex items-center mr-4">
                        <Briefcase size={16} className="mr-1" />
                        <span>{exp.period}</span>
                        {exp.duration && <span className="ml-1">· {exp.duration}</span>}
                      </div>
                      <div className="mt-1 md:mt-0">
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
