# AI Profile Questionnaire

Una aplicación interactiva que ayuda a los usuarios a descubrir su perfil de uso de Inteligencia Artificial y obtener recomendaciones personalizadas para herramientas y proyectos.

## 🎯 Objetivo

Ayudar a los participantes a:
- Identificar qué herramientas de IA se adaptan mejor a su perfil
- Descubrir proyectos potenciales que pueden desarrollar
- Mejorar su capacidad para estructurar prompts efectivos
- Encontrar su camino en el campo creativo (arte, diseño, contenido multimedia)

## 🏗 Estructura del Proyecto

### Componentes
```
src/
  ├── components/
  │   ├── forms/         # Componentes de formulario reutilizables y especializados
  │   │   └── specialized/ # Formularios específicos por área
  │   ├── sections/      # Secciones principales del cuestionario
  │   └── layout/        # Componentes de estructura y navegación
  ├── utils/             # Utilidades y funciones auxiliares
  ├── types/             # Definiciones de tipos TypeScript
  ├── store/             # Estado global con Zustand
  └── constants/         # Constantes y configuraciones
```

### Secciones del Cuestionario

#### 1. Perfil Básico
- Nivel educativo (desde adolescente hasta profesional avanzado)
- Área principal de interés (artes, tecnología, ciencias sociales, etc.)
- Conocimiento previo sobre IA (ninguno hasta avanzado)
- Formularios especializados según área de interés:
  - Artes Visuales: estilos, herramientas, portfolio
  - Tecnología: lenguajes, frameworks, experiencia
  - Negocios: industria, automatización, análisis
  - Ciencias Sociales: métodos, herramientas, ética
  - Multimedia: tipos de contenido, plataformas

#### 2. Capacidad de Prompts
- Ejercicios prácticos de creación de prompts
- Evaluación de habilidades para estructurar instrucciones
- Métricas de evaluación:
  - Nivel de detalle
  - Claridad de comunicación
  - Especificidad de instrucciones

#### 3. Áreas de Aplicación
- Preferencias de proyectos específicas por área:
  - Arte digital y diseño
  - Música y producción de audio
  - Contenido multimedia y streaming
  - Herramientas sociales y educativas
  - Aplicaciones comerciales y análisis
  - Investigación científica y académica

#### 4. Resultados y Recomendaciones
- Perfil personalizado basado en respuestas específicas
- Recomendaciones de herramientas por especialidad
- Sugerencias para mejorar habilidades en el área
- Plan de desarrollo personalizado por perfil

## 💻 Tecnologías Utilizadas

- React + TypeScript
- Tailwind CSS para estilos
- Zustand para gestión de estado
- Vite como bundler

## 🚀 Características

- Interfaz intuitiva y responsiva
- Navegación fluida entre secciones
- Evaluación automática de habilidades
- Recomendaciones personalizadas
- Diseño moderno y accesible
- Formularios dinámicos especializados
- Sistema de tipos robusto
- Arquitectura modular y mantenible
- Componentes reutilizables

## 📋 Perfiles de Usuario

### Perfil Creativo
- Enfoque en artes visuales y multimedia
- Recomendaciones: DALL-E, Midjourney, Soundraw
- Énfasis en prompts creativos y expresivos
- Evaluación de portfolio y dirección artística

### Perfil Técnico
- Enfoque en ciencia y desarrollo
- Recomendaciones: TensorFlow, PyTorch, análisis de datos
- Énfasis en implementaciones técnicas
- Evaluación de experiencia en frameworks y lenguajes

### Perfil Empresarial
- Enfoque en aplicaciones comerciales
- Recomendaciones: herramientas de automatización y análisis
- Énfasis en ROI y optimización de procesos
- Evaluación de necesidades específicas de industria

### Perfil Científico Social
- Enfoque en investigación y análisis social
- Recomendaciones: herramientas de análisis cualitativo
- Énfasis en ética y metodología
- Evaluación de métodos de investigación

## 🌟 Beneficios

- Orientación personalizada en el uso de IA
- Desarrollo de habilidades específicas por área
- Descubrimiento de herramientas relevantes
- Plan de desarrollo claro y estructurado

## 🛠 Desarrollo Local

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```
3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 📚 Recursos Adicionales

El cuestionario incluye:
- Ejemplos prácticos por área de especialización
- Ejercicios interactivos adaptados al perfil
- Guías de mejora específicas por área
- Recursos de aprendizaje personalizados

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del repositorio
2. Crea una rama para tu feature
3. Envía un pull request con tus cambios

## 📝 Licencia

MIT License - siéntete libre de usar y modificar este proyecto para tus necesidades.