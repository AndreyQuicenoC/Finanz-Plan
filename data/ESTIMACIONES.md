# Estimaciones de Esfuerzo - Proyecto Finanz

Este documento detalla las estimaciones de esfuerzo (Story Points) para cada Historia de Usuario del proyecto Finanz, organizadas por área de trabajo.

## Metodología de Estimación

Las estimaciones utilizan **Story Points** basados en la escala de Fibonacci (1, 2, 3, 5, 8, 13, 21) para las siguientes áreas:

- **UX**: Investigación de usuario, wireframes, flujos de usuario
- **Design**: Diseño visual, sistema de diseño, assets gráficos
- **Frontend**: Desarrollo de interfaz de usuario, interactividad
- **Backend**: API, base de datos, lógica de negocio, integraciones

## Resumen de Estimaciones por Épica

### E-1: Experiencia de Primer Contacto (Landing & Marketing)
Total: 199 puntos

| Historia | UX | Design | Front | Back | Total |
|----------|----|----|-------|------|-------|
| HU01 - Landing Page | 5 | 8 | 8 | 2 | **23** |
| HU02 - Cómo funciona / Tour | 3 | 5 | 5 | 0 | **13** |
| HU03 - Características principales | 3 | 5 | 5 | 0 | **13** |
| HU04 - Planes/Precios | 2 | 5 | 5 | 2 | **14** |
| HU05 - Blog / Artículos | 3 | 5 | 8 | 8 | **24** |
| HU06 - Sobre nosotros | 2 | 5 | 3 | 0 | **10** |
| HU07 - Preguntas frecuentes | 2 | 3 | 5 | 0 | **10** |
| HU08 - Contacto / Soporte | 2 | 3 | 5 | 5 | **15** |
| HU09 - Política y términos | 1 | 2 | 3 | 0 | **6** |

### E-2: Acceso y Autenticación
Total: 71 puntos

| Historia | UX | Design | Front | Back | Total |
|----------|----|----|-------|------|-------|
| HU10 - Sign-up básico | 3 | 5 | 8 | 8 | **24** |
| HU11 - Login / Logout | 2 | 5 | 8 | 8 | **23** |
| HU12 - Recuperar contraseña | 2 | 3 | 5 | 5 | **15** |

### E-3: Gestión de Tareas (Finanzas)
Total: 163 puntos

| Historia | UX | Design | Front | Back | Total |
|----------|----|----|-------|------|-------|
| HU13 - Dashboard financiero | 5 | 8 | 13 | 13 | **39** |
| HU14 - Registrar transacciones | 3 | 5 | 8 | 8 | **24** |
| HU15 - Importar CSV/Excel | 3 | 5 | 13 | 13 | **34** |
| HU16 - Gestión de cuentas | 3 | 5 | 8 | 8 | **24** |
| HU17 - Calendario financiero | 3 | 8 | 13 | 8 | **32** |

### E-4: Análisis y Control Avanzado
Total: 135 puntos

| Historia | UX | Design | Front | Back | Total |
|----------|----|----|-------|------|-------|
| HU18 - Reportes y estadísticas | 5 | 8 | 13 | 13 | **39** |
| HU19 - Metas financieras | 3 | 8 | 8 | 8 | **27** |
| HU20 - Recomendaciones IA | 5 | 8 | 13 | 21 | **47** |

### E-4: Gestión de Perfil de Usuario
Total: 24 puntos

| Historia | UX | Design | Front | Back | Total |
|----------|----|----|-------|------|-------|
| HU21 - Perfil y configuración | 3 | 5 | 8 | 8 | **24** |

### E-5: Perfil y Soporte en la App
Total: 19 puntos

| Historia | UX | Design | Front | Back | Total |
|----------|----|----|-------|------|-------|
| HU22 - Centro de ayuda interno | 3 | 5 | 8 | 3 | **19** |

### E-6: Administración del Sistema
Total: 89 puntos

| Historia | UX | Design | Front | Back | Total |
|----------|----|----|-------|------|-------|
| HU23 - Panel de administración | 3 | 8 | 13 | 13 | **37** |
| HU24 - Monitoreo y métricas | 3 | 8 | 13 | 13 | **37** |
| HU25 - Gestión de seguridad | 3 | 5 | 13 | 13 | **34** |

## Resumen Total del Proyecto

| Área | Total de Story Points |
|------|----------------------|
| **UX** | 71 pts |
| **Design** | 139 pts |
| **Frontend** | 219 pts |
| **Backend** | 171 pts |
| **TOTAL GENERAL** | **600 pts** |

## Distribución por Sprint

### Sprint 1 - MVP Acceso y Público Básico (158 pts)
- HU01, HU02, HU03, HU04, HU10, HU11, HU12

### Sprint 2 - Finanzas básicas (119 pts)
- HU13, HU14, HU16, HU17

### Sprint 3 - Valor agregado (Reportes e IA) (113 pts)
- HU18, HU19, HU20

### Sprint 4 - Experiencia avanzada (99 pts)
- HU05, HU06, HU07, HU08, HU09, HU15

### Sprint 5 - Administración y robustez (132 pts)
- HU21, HU22, HU23, HU24, HU25

## Criterios de Estimación

### Story Points de 1-3 (Pequeño)
- Cambios menores en UI
- Funcionalidades simples
- Sin dependencias complejas

### Story Points de 5-8 (Medio)
- Formularios estándar
- CRUD básico
- Integraciones simples

### Story Points de 13-21 (Grande)
- Funcionalidades complejas
- Múltiples integraciones
- Lógica de negocio avanzada
- Visualizaciones complejas

## Consideraciones Técnicas

### Frontend
- **React** con TypeScript
- **TailwindCSS** para estilos
- **Chart.js / Recharts** para gráficos
- **React Hook Form** + **Zod** para validaciones
- **TanStack Query** para manejo de estado del servidor

### Backend
- **Node.js** con Express
- **MongoDB** como base de datos
- **JWT** para autenticación
- **bcrypt** para hashing de contraseñas
- **Nodemailer** para emails

### Despliegue
- **Frontend**: Vercel
- **Backend**: Render
- **Base de datos**: MongoDB Atlas
- **CI/CD**: GitHub Actions

## Velocidad Estimada

Asumiendo un equipo de:
- 1 UX Designer
- 1 UI Designer
- 2 Frontend Developers
- 2 Backend Developers

**Velocidad estimada por sprint (2 semanas)**: 100-120 story points

**Duración total del proyecto**: 5 sprints (10 semanas / 2.5 meses)

## Notas

- Las estimaciones incluyen tiempo para pruebas unitarias y de integración
- Se considera un buffer del 20% para imprevistos
- Las historias con IA (HU20) pueden requerir ajustes según la complejidad del modelo
- La importación de CSV (HU15) requiere manejo robusto de errores y validaciones
