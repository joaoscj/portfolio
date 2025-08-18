import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Zap, Globe, Users } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Coffee,
      title: "Java Expertise",
      description: "Spring, JPA/Hibernate, APIs REST"
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Sistemas críticos financeiros e mensageria"
    },
    {
      icon: Globe,
      title: "Experiência Internacional",
      description: "Estágio remoto em sistemas industriais"
    },
    {
      icon: Users,
      title: "Empreendedorismo",
      description: "Cofundador do Sentinel (AWS Rekognition)"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient-java">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Main description */}
          <Card className="glass-card p-8 mb-12 shadow-card hover:shadow-elegant transition-all duration-500">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Engenheiro de software back-end com experiência em{" "}
              <Badge variant="outline" className="mx-1">Java</Badge>,{" "}
              <Badge variant="outline" className="mx-1">Spring</Badge>,{" "}
              <Badge variant="outline" className="mx-1">JPA/Hibernate</Badge> e desenvolvimento de APIs REST. 
              Atuei em sistemas críticos financeiros, integrando serviços{" "}
              <Badge variant="outline" className="mx-1">AWS</Badge> e mensageria de alta volumetria, 
              além de um estágio internacional remoto no desenvolvimento de sistemas de monitoramento industrial.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cofundador do <span className="text-primary font-semibold">Sentinel</span>, sistema de segurança 
              com visão computacional baseado em AWS Rekognition. Tenho vivência em metodologias ágeis 
              (Scrum, Kanban/Scrumban), bancos de dados SQL (MySQL, SQL Server, PostgreSQL), 
              Git/GitHub com Gitflow, Docker, design patterns, arquitetura e engenharia de software.
            </p>
          </Card>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 hover:shadow-card transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}