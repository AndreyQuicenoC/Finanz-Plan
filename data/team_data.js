// Datos de distribución del equipo - Finanz
const TEAM_DATA = {
  title: "Distribución del Equipo",
  subtitle: "Roles, responsabilidades y organización ágil del proyecto Finanz",
  roles: [
    {
      id: "product-owner",
      name: "Product Owner",
      icon: "PO",
      color: "#6366f1",
      members: [
        {
          name: "Andrey Quiceno",
          responsibilities: [
            "Definir y priorizar requerimientos del producto",
            "Crear y mantener historias de usuario en cada sprint",
            "Realizar revisiones constantes del desarrollo",
            "Generar informes detallados de cada sprint",
            "Coordinar y dirigir reuniones de planificación y revisión",
            "Validar que el desarrollo cumpla con los requisitos del negocio",
            "Apoyo opcional en otras áreas según necesidad del proyecto",
          ],
        },
      ],
    },
    {
      id: "scrum-master",
      name: "Scrum Master",
      icon: "SM",
      color: "#8b5cf6",
      members: [
        {
          name: "Ivan Ausecha",
          responsibilities: [
            "Revisión constante de información subida a Git/GitHub",
            "Gestión de pull requests y merge de ramas",
            "Retroalimentación de errores y mejoras al equipo",
            "Comunicación entre programadores y product owner",
            "Integración y conexión entre front-end y back-end",
            "Validación de funciones y funcionalidades del código",
            "Administración del repositorio",
            "Testing y aseguramiento de calidad",
            "Implementación de CI/CD (Integración y Despliegue Continuo)",
            "Informar al Product Owner y DevOps sobre ajustes necesarios",
          ],
        },
      ],
    },
    {
      id: "frontend",
      name: "Equipo de Front-End",
      icon: "FE",
      color: "#10b981",
      members: [
        {
          name: "Daniel Trujillo",
        },
        {
          name: "Jonathan Aristizabal",
        },
      ],
      teamResponsibilities: [
        "Desarrollo de interfaces de usuario (UI)",
        "Implementación de diseño responsive",
        "Integración con APIs del back-end",
        "Validaciones del lado del cliente",
        "Optimización de rendimiento del front-end",
        "Implementación de medidas de seguridad en rutas del front",
        "Pruebas de interfaz y experiencia de usuario",
        "Coordinación con Scrum Master para integración",
      ],
    },
    {
      id: "backend",
      name: "Equipo de Back-End",
      icon: "BE",
      color: "#f59e0b",
      members: [
        {
          name: "UV Casaviejas",
        },
        {
          name: "Luciana Urrego",
        },
      ],
      teamResponsibilities: [
        "Desarrollo de APIs y endpoints",
        "Implementación de lógica de negocio",
        "Gestión y diseño de base de datos",
        "Autenticación y autorización (JWT, OAuth)",
        "Implementación de medidas de seguridad en el servidor",
        "Optimización de consultas y rendimiento",
        "Documentación de APIs",
        "Integración con servicios externos",
        "Coordinación con Scrum Master para integración",
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: "DO",
      color: "#ef4444",
      members: [
        {
          name: "Luis Felipe Jimenez",
          responsibilities: [
            "Configuración y gestión de infraestructura",
            "Implementación de pipelines CI/CD",
            "Monitoreo y logging de aplicaciones",
            "Gestión de contenedores y orquestación",
            "Optimización de recursos en la nube",
            "Automatización de despliegues",
            "Gestión de backups y recuperación",
            "Seguridad de infraestructura",
            "Documentación de procesos DevOps",
            "Coordinación con equipos de desarrollo",
          ],
        },
      ],
    },
  ],
  methodology: {
    name: "Scrum",
    description:
      "El equipo trabaja con metodología ágil Scrum, organizando el trabajo en sprints de 2 semanas.",
    sprints: [
      {
        number: 1,
        name: "MVP - Acceso y Público Básico",
        duration: "2 semanas",
        focus: [
          "Landing Page",
          "Sign-up y Login",
          "Características principales",
          "Sobre nosotros",
        ],
      },
      {
        number: 2,
        name: "Finanzas Básicas",
        duration: "2 semanas",
        focus: [
          "Dashboard financiero",
          "Registrar transacciones",
          "Gestión de cuentas",
          "Calendario financiero",
          "Políticas de privacidad",
        ],
      },
      {
        number: 3,
        name: "Valor Agregado (Reportes e IA)",
        duration: "2 semanas",
        focus: [
          "Reportes y estadísticas",
          "Metas financieras",
          "Recomendaciones del Agente IA",
        ],
      },
      {
        number: 4,
        name: "Experiencia Avanzada",
        duration: "2 semanas",
        focus: [
          "Blog/Artículos",
          "FAQ",
          "Contacto/Soporte",
          "Importar transacciones CSV/Excel",
        ],
      },
      {
        number: 5,
        name: "Administración y Robustez",
        duration: "2 semanas",
        focus: [
          "Perfil y configuración",
          "Centro de ayuda interno",
          "Panel de administración",
          "Monitoreo y métricas",
          "Gestión de seguridad",
          "Tour interactivo",
        ],
      },
    ],
  },
};
