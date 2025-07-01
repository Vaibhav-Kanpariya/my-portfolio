import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Skills from "./skills-content";

export default function Experience() {
  const experiences = [
    {
      logo: "./culturex.jpg",
      title: "Full Stack Developer",
      company: "CultureX Entertainment Private Limited",
      period: "Aug 2023 - Present",
      location: "Ahmedabad, Gujarat, India",
      achievements: [
        "Developed full-stack web applications using React, TypeScript, Node.js, and MySQL serving 100+ active users.",
        "Engineered advanced AI solutions using Large Language Models (LLMs) to drive key features and deliver impactful insights, significantly boosting the platform’s intelligence and value.",
        "Collaborated with cross-functional team to deliver 8 major feature releases using Agile methodology",
        "Implemented comprehensive analytics tracking using Mixpanel, Google Analytics, and PostHog for user events and API monitoring",
      ],
    },
    {
      logo: "./cds.jpg",
      title: "Software Engineer Intern",
      company: "Crest Data Systems",
      period: "Dec 2022 - Jun 2023",
      location: "Ahmedabad, Gujarat, India",
      achievements: [
        "AI have successfully acquired knowledge in these cutting-edge technologies, enabling me to optimize project workflows and drive seamless collaboration within teams",
        "I collaborated on the development of the Universal Rest Client (URC), an innovative internal tool that revolutionized the integration process with multiple SIEM platforms.",
        "By automating the generation of repetitive code, the URC significantly reduced developer workload by an impressive 70%.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-start md:items-center">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="h-12 w-12 rounded-full mb-2 md:mb-0 md:mr-4 border-2 border-primary"
                        />
                        <div>
                          <h3 className="text-xl font-bold">
                            {experience.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {experience.location}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
