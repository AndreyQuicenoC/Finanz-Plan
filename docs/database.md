# Diagrama Entidad-Relación (ERD) - Gestor de Finanzas Personales

## Descripción General
Este documento describe el modelo relacional de la base de datos para el Gestor de Finanzas Personales, optimizado para PostgreSQL. Incluye las principales entidades, sus campos y las relaciones entre ellas.

## Tablas Principales

### usuarios
- **id** (PK): Identificador único del usuario
- **nombre**: Nombre del usuario
- **email** (UNIQUE): Correo electrónico único
- **password_hash**: Hash de la contraseña

### cuentas
- **id** (PK): Identificador único de la cuenta
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **nombre**: Nombre de la cuenta
- **saldo_inicial**: Saldo inicial de la cuenta

### categorias
- **id** (PK): Identificador único de la categoría
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **nombre**: Nombre de la categoría
- **tipo**: Tipo de categoría (ingreso o egreso)

### transacciones
- **id** (PK): Identificador único de la transacción
- **cuenta_id** (FK → cuentas.id): Referencia a la cuenta
- **categoria_id** (FK → categorias.id): Referencia a la categoría
- **monto**: Monto de la transacción
- **tipo**: Tipo de transacción (ingreso o egreso)
- **fecha**: Fecha de la transacción

### presupuestos
- **id** (PK): Identificador único del presupuesto
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **categoria_id** (FK → categorias.id): Referencia a la categoría
- **monto_limite**: Monto límite del presupuesto

### recomendaciones
- **id** (PK): Identificador único de la recomendación
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **mensaje**: Mensaje de la recomendación

### eventos_financieros
- **id** (PK): Identificador único del evento financiero
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **titulo**: Título del evento
- **fecha**: Fecha del evento
- **recurrente**: Indica si es recurrente
- **frecuencia**: Frecuencia si es recurrente
- **monto**: Monto asociado al evento

### reportes
- **id** (PK): Identificador único del reporte
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **configuracion** (JSONB): Configuración del reporte en formato JSON

### exportaciones
- **id** (PK): Identificador único de la exportación
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **formato**: Formato de la exportación

### notificaciones
- **id** (PK): Identificador único de la notificación
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **titulo**: Título de la notificación

### metas
- **id** (PK): Identificador único de la meta
- **usuario_id** (FK → usuarios.id): Referencia al usuario propietario
- **descripcion**: Descripción de la meta
- **monto_objetivo**: Monto objetivo de la meta
- **fecha_limite**: Fecha límite para alcanzar la meta
- **progreso_actual**: Progreso actual hacia la meta

## Relaciones
- Un usuario puede tener múltiples cuentas, categorías, transacciones, presupuestos, recomendaciones, eventos financieros, reportes, exportaciones, notificaciones y metas.
- Una cuenta pertenece a un usuario y puede tener múltiples transacciones.
- Una categoría pertenece a un usuario y puede estar asociada a múltiples transacciones y presupuestos.
- Una transacción pertenece a una cuenta y una categoría.
- Un presupuesto pertenece a un usuario y una categoría.

## Notas
- PK = Primary Key, FK = Foreign Key.
- Los campos pueden ajustarse según necesidades específicas (índices, constraints, etc.).
- El campo `configuracion` en `reportes` utiliza JSONB para flexibilidad.
- Todas las tablas incluyen referencias al usuario para aislamiento de datos por usuario.