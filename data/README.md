# Visualizador de Historias de Usuario - Finanz

Sistema interactivo para visualizar, filtrar y gestionar las historias de usuario del proyecto Finanz (Gestor de Finanzas Personales).

## 🚀 Características

- **Visualización interactiva** de todas las historias de usuario
- **Filtros múltiples**: por épica, sprint, búsqueda de texto
- **Detalle completo** de cada historia con modal expandible
- **Estimaciones de esfuerzo** (Story Points) por área: UX, Design, Frontend, Backend
- **Modo oscuro/claro** con persistencia en localStorage
- **Diseño responsive** para móvil, tablet y desktop
- **Copiar al portapapeles** de descripciones, criterios y definiciones
- **Sin dependencias externas** - JavaScript vanilla

## 📁 Estructura del Proyecto

```
Finanz-Plan/
├── data/
│   ├── data.js              # Datos de las historias de usuario
│   └── ESTIMACIONES.md      # Documento detallado de estimaciones
├── scripts/
│   └── historias-usuario.js # Lógica de la aplicación
├── styles/
│   └── historias-usuario.css # Estilos de la aplicación
└── historias-usuario.html   # Página principal
```

## 🎯 Cómo Usar

### Opción 1: Abrir directamente

1. Navega a la carpeta `Finanz-Plan`
2. Abre `historias-usuario.html` en tu navegador

### Opción 2: Servidor local

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server -p 8000
```

Luego visita: `http://localhost:8000/historias-usuario.html`

## 📊 Historias de Usuario

El proyecto incluye **24 historias de usuario** organizadas en **6 épicas**:

### E-1: Experiencia de Primer Contacto (8 historias)

- Landing page, Tour, Características, Blog, Sobre nosotros, FAQ, Contacto, Documentos legales

### E-2: Acceso y Autenticación (3 historias)

- Registro, Login/Logout, Recuperación de contraseña

### E-3: Gestión de Tareas/Finanzas (5 historias)

- Dashboard, Registrar transacciones, Importar CSV/Excel, Gestión de cuentas, Calendario

### E-4: Análisis y Control Avanzado (3 historias)

- Reportes y estadísticas, Metas financieras, Recomendaciones con IA

### E-4: Gestión de Perfil de Usuario (1 historia)

- Visualizar, editar y eliminar perfil

### E-5: Perfil y Soporte en la App (1 historia)

- Centro de ayuda interno

### E-6: Administración del Sistema (3 historias)

- Panel admin, Monitoreo, Gestión de seguridad

## 📈 Estimaciones de Esfuerzo

**Total del proyecto: 586 Story Points**

Distribución por área:

- UX: 69 pts (12%)
- Design: 134 pts (23%)
- Frontend: 214 pts (37%)
- Backend: 169 pts (28%)

Ver `data/ESTIMACIONES.md` para el desglose completo.

## 🗓️ Sprints Propuestos

### Sprint 1 (157 pts) - MVP Acceso y Público Básico

Landing, Características, Sobre nosotros, Registro, Login, Recuperación

### Sprint 2 (125 pts) - Finanzas básicas

Política y términos, Dashboard, Registrar transacciones, Gestión de cuentas, Calendario

### Sprint 3 (113 pts) - Valor agregado

Reportes, Metas, Recomendaciones IA

### Sprint 4 (83 pts) - Experiencia avanzada

Blog, FAQ, Contacto, Importar CSV

### Sprint 5 (145 pts) - Administración y robustez

Tour, Perfil, Ayuda interna, Panel admin, Monitoreo, Seguridad

**Duración total estimada: 10 semanas (5 sprints de 2 semanas)**

## 🔧 Tecnologías del Proyecto Real

### Frontend

- React + TypeScript
- TailwindCSS
- Chart.js / Recharts
- React Hook Form + Zod
- TanStack Query

### Backend

- Node.js + Express
- MongoDB
- JWT + bcrypt
- Nodemailer

### DevOps

- Frontend: Vercel
- Backend: Render
- DB: MongoDB Atlas
- CI/CD: GitHub Actions

## ✨ Funcionalidades del Visualizador

### Filtros

- **Búsqueda de texto**: Busca en código, título, descripción y épica
- **Filtro por Épica**: Filtra por las 6 épicas del proyecto
- **Filtro por Sprint**: Filtra por los 5 sprints propuestos

### Tarjetas de Historia

Cada tarjeta muestra:

- Código (HU01-HU25)
- Título
- Descripción resumida
- Épica y Sprint
- Número de criterios de aceptación
- Estimaciones de esfuerzo (UX, Design, Front, Back, Total)

### Modal de Detalles

Al hacer clic en una historia se despliega:

- Descripción completa (formato "Como... Quiero... Para...")
- Estimaciones detalladas por área
- Criterios de aceptación completos
- Definición de Hecho (DoD)
- Botones para copiar cada sección al portapapeles

### Tema Oscuro/Claro

- Toggle en la esquina superior derecha
- Persistencia automática en localStorage
- Transiciones suaves entre temas

## 🎨 Personalización

### Agregar nuevas historias

Edita `data/data.js` y agrega nuevos objetos en el array `userStories`:

```javascript
{
  code: "HU26",
  title: "Nueva Historia",
  sprint: "S1",
  epic: "E-1 Nombre de Épica",
  ux: 3,
  design: 5,
  front: 8,
  back: 5,
  description: "Como usuario...\nQuiero...\nPara...",
  acceptanceCriteria: [
    "Criterio 1",
    "Criterio 2",
  ],
  definitionOfDone: [
    "DoD 1",
    "DoD 2",
  ],
}
```

### Modificar estilos

Edita `styles/historias-usuario.css` para personalizar:

- Variables CSS en `:root`
- Colores del tema oscuro en `[data-theme="dark"]`
- Componentes individuales

## 📝 Formato de Historias de Usuario

Todas las historias siguen el formato estándar:

**Descripción:**

```
Como [rol]
Quiero [acción]
Para [beneficio]
```

**Criterios de Aceptación:**

- Condiciones específicas que deben cumplirse
- Escenarios de éxito y error
- Validaciones requeridas
- Comportamientos esperados

**Definición de Hecho:**

- Código completado y revisado
- Tests unitarios pasando
- Documentación actualizada
- Diseño responsive verificado
- Despliegue exitoso

## 🤝 Contribuir

Para agregar o modificar historias:

1. Edita `data/data.js`
2. Actualiza `data/ESTIMACIONES.md` si cambias estimaciones
3. Verifica que el visualizador cargue correctamente
4. Documenta cambios significativos

## 📄 Licencia

Este proyecto es parte del sistema de gestión de finanzas Finanz.

---

**Última actualización:** Noviembre 2025
**Total de historias:** 24
**Total de story points:** 586
