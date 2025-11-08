// ===================================
// Team Data - Finanz Project
// ===================================

const TEAM_DATA = {
  descripcion: "Equipo de 7 integrantes organizados con metodología Scrum para desarrollo ágil del proyecto Finanz",
  
  roles: [
    {
      id: "product-owner",
      nombre: "Product Owner",
      icono: "PO",
      color: "#3b82f6",
      miembros: ["Andrey Quiceno"],
      responsabilidades: [
        "Definir y priorizar el Product Backlog",
        "Crear historias de usuario con criterios de aceptación",
        "Validar que el desarrollo cumpla los requerimientos",
        "Maximizar el valor del producto",
        "Ser la voz del usuario y stakeholders"
      ]
    },
    {
      id: "scrum-master",
      nombre: "Scrum Master",
      icono: "SM",
      color: "#8b5cf6",
      miembros: ["Ivan Ausecha"],
      responsabilidades: [
        "Facilitar ceremonias Scrum (Planning, Daily, Review, Retrospective)",
        "Gestionar pull requests y merges en GitHub",
        "Integrar frontend con backend",
        "Realizar testing y aseguramiento de calidad",
        "Implementar CI/CD y pipeline de despliegue"
      ]
    },
    {
      id: "frontend",
      nombre: "Desarrollo Frontend",
      icono: "FE",
      color: "#10b981",
      miembros: ["Daniel Trujillo", "Jonathan Aristizabal"],
      responsabilidades: [
        "Desarrollar interfaces de usuario responsive",
        "Implementar componentes y vistas del sistema",
        "Integrar con APIs del backend",
        "Optimizar rendimiento frontend",
        "Testing de componentes"
      ]
    },
    {
      id: "backend",
      nombre: "Desarrollo Backend",
      icono: "BE",
      color: "#f59e0b",
      miembros: ["UV Casaviejas", "Luciana Urrego"],
      responsabilidades: [
        "Desarrollar APIs RESTful seguras",
        "Implementar lógica de negocio y validaciones",
        "Gestionar operaciones con base de datos",
        "Documentar APIs con Swagger/OpenAPI",
        "Testing de servicios backend"
      ]
    },
    {
      id: "devops",
      nombre: "DevOps & Base de Datos",
      icono: "DO",
      color: "#ef4444",
      miembros: ["Luis Felipe Jimenez"],
      responsabilidades: [
        "Diseñar y optimizar esquema de base de datos",
        "Configurar infraestructura en la nube",
        "Implementar monitoreo y logging",
        "Gestionar backups y recuperación",
        "Auditorías de seguridad"
      ]
    }
  ],

  sprints: [
    {
      id: "sprint-1",
      nombre: "Sprint 1: MVP - Fundamentos",
      duracion: "Semanas 1-2",
      color: "#3b82f6",
      enfoque: "Autenticación de usuarios y registro básico de ingresos",
      tareas: [
        {
          rol: "Product Owner",
          actividades: [
            "Definir backlog priorizado",
            "Crear historias de usuario (HU1, HU2)"
          ]
        },
        {
          rol: "Frontend",
          actividades: [
            "Página de login y registro",
            "Dashboard básico",
            "Formulario de ingresos"
          ]
        },
        {
          rol: "Backend",
          actividades: [
            "API autenticación JWT",
            "API CRUD de ingresos",
            "Validaciones de seguridad"
          ]
        },
        {
          rol: "DevOps",
          actividades: [
            "Diseñar modelo BD (usuarios, ingresos)",
            "Configurar PostgreSQL",
            "Setup repositorio"
          ]
        },
        {
          rol: "Scrum Master",
          actividades: [
            "Facilitar Sprint Planning",
            "Organizar Daily Standups",
            "Integrar front-back"
          ]
        }
      ]
    },
    {
      id: "sprint-2",
      nombre: "Sprint 2: Gestión Financiera Básica",
      duracion: "Semanas 3-4",
      color: "#10b981",
      enfoque: "Registro de egresos, categorización y presupuestos mensuales",
      tareas: [
        {
          rol: "Product Owner",
          actividades: [
            "Validar HU3 (egresos) y HU4 (presupuestos)",
            "Priorizar funcionalidades de dashboard"
          ]
        },
        {
          rol: "Frontend",
          actividades: [
            "Formulario de egresos y categorías",
            "Interfaz de presupuestos",
            "Dashboard con gráficos básicos"
          ]
        },
        {
          rol: "Backend",
          actividades: [
            "API CRUD egresos y categorías",
            "API de presupuestos",
            "API resúmenes para dashboard"
          ]
        },
        {
          rol: "DevOps",
          actividades: [
            "Tablas egresos y presupuestos",
            "Índices para optimización",
            "Backup automático"
          ]
        },
        {
          rol: "Scrum Master",
          actividades: [
            "Integrar módulos nuevos",
            "Testing de integración",
            "Sprint Review y Retrospectiva"
          ]
        }
      ]
    },
    {
      id: "sprint-3",
      nombre: "Sprint 3: Análisis y Reportes",
      duracion: "Semanas 5-6",
      color: "#f59e0b",
      enfoque: "Reportes financieros, análisis de tendencias y objetivos de ahorro",
      tareas: [
        {
          rol: "Product Owner",
          actividades: [
            "Validar HU6 (reportes) y HU7 (ahorros)",
            "Definir criterios de metas (HU8)"
          ]
        },
        {
          rol: "Frontend",
          actividades: [
            "Módulo de reportes con filtros",
            "Gráficos avanzados",
            "Interfaz de ahorros y metas"
          ]
        },
        {
          rol: "Backend",
          actividades: [
            "API generación de reportes",
            "API ahorros y metas",
            "Lógica de análisis de tendencias"
          ]
        },
        {
          rol: "DevOps",
          actividades: [
            "Tablas de ahorros y metas",
            "Optimizar queries de reportes",
            "Implementar caché"
          ]
        },
        {
          rol: "Scrum Master",
          actividades: [
            "Integrar módulo de reportes",
            "Testing de generación PDF",
            "Validar rendimiento"
          ]
        }
      ]
    },
    {
      id: "sprint-4",
      nombre: "Sprint 4: Experiencia Avanzada",
      duracion: "Semanas 7-8",
      color: "#8b5cf6",
      enfoque: "Notificaciones, calendario financiero y modo offline",
      tareas: [
        {
          rol: "Product Owner",
          actividades: [
            "Validar HU9 (notificaciones) y HU10 (calendario)",
            "Requerimientos modo offline (HU11)"
          ]
        },
        {
          rol: "Frontend",
          actividades: [
            "Sistema de notificaciones push",
            "Calendario interactivo",
            "Modo offline con sincronización"
          ]
        },
        {
          rol: "Backend",
          actividades: [
            "API notificaciones y recordatorios",
            "Alertas inteligentes",
            "API sincronización offline"
          ]
        },
        {
          rol: "DevOps",
          actividades: [
            "Tablas notificaciones",
            "Servicio push notifications",
            "Queue para notificaciones"
          ]
        },
        {
          rol: "Scrum Master",
          actividades: [
            "Integrar notificaciones",
            "Testing funcionalidades offline",
            "Validar sincronización"
          ]
        }
      ]
    },
    {
      id: "sprint-5",
      nombre: "Sprint 5: Administración y Robustez",
      duracion: "Semanas 9-10",
      color: "#ef4444",
      enfoque: "Perfil de usuario, centro de ayuda, panel admin y seguridad final",
      tareas: [
        {
          rol: "Product Owner",
          actividades: [
            "Validar HU12 (perfil) y HU13 (ayuda)",
            "Aprobar panel administrativo",
            "Preparar demo final"
          ]
        },
        {
          rol: "Frontend",
          actividades: [
            "Módulo de perfil",
            "Centro de ayuda",
            "Panel administrativo"
          ]
        },
        {
          rol: "Backend",
          actividades: [
            "APIs de perfil y ayuda",
            "API administrativa",
            "Optimización final"
          ]
        },
        {
          rol: "DevOps",
          actividades: [
            "Sistema de logs y monitoreo",
            "Auditoría de seguridad",
            "Preparar entorno producción"
          ]
        },
        {
          rol: "Scrum Master",
          actividades: [
            "Testing end-to-end completo",
            "CI/CD para producción",
            "Documentación técnica"
          ]
        }
      ]
    }
  ]
};
