import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Backend & Frameworks",
      skills: [
        { name: "Java", level: "expert" },
        { name: "Spring Framework", level: "expert" },
        { name: "Spring Boot", level: "expert" },
        { name: "JPA/Hibernate", level: "advanced" },
        { name: "APIs REST", level: "expert" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "advanced" },
        { name: "Docker", level: "advanced" },
        { name: "Git/GitHub", level: "expert" },
        { name: "GitFlow", level: "advanced" },
      ]
    },
    {
      category: "Bancos de Dados",
      skills: [
        { name: "MySQL", level: "advanced" },
        { name: "PostgreSQL", level: "advanced" },
        { name: "SQL Server", level: "advanced" },
      ]
    },
    {
      category: "Metodologias & Arquitetura",
      skills: [
        { name: "Scrum", level: "advanced" },
        { name: "Kanban", level: "advanced" },
        { name: "Design Patterns", level: "advanced" },
        { name: "Microserviços", level: "advanced" },
        { name: "Clean Architecture", level: "advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-primary text-primary-foreground";
      case "advanced":
        return "bg-secondary text-secondary-foreground";
      case "intermediate":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnologias & <span className="text-gradient-java">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="glass-card p-6 shadow-card hover:shadow-elegant transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className={`${getLevelColor(skill.level)} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Java emphasis */}
          <div className="mt-12 text-center">
            <Card className="glass-card p-8 max-w-2xl mx-auto shadow-elegant animate-java-glow">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">☕</span>
                </div>
                <h3 className="text-2xl font-bold text-gradient-java">Desenvolvedor Java</h3>
              </div>
              <p className="text-muted-foreground">
                Especializado no ecossistema Java com foco em desenvolvimento de sistemas robustos, 
                escaláveis e de alta performance para ambientes críticos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}