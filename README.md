# ☕ Validación de Calificación - Full Stack (Java Spring Boot + Web)

Aplicación web full-stack desarrollada para procesar y validar datos de evaluación de estudiantes (nombre, edad y nota) integrando un frontend moderno con una API REST en Java Spring Boot.

---

## 🚀 Tecnologías Utilizadas
- **Backend:** Java 26 (OpenJDK), Spring Boot (v3.3.5), Maven.
- **Frontend:** HTML5, CSS3 (Flexbox, gradientes), JavaScript (Fetch API async/await).
- **Control de versiones:** Git y GitHub.

---

## 📂 Estructura del Proyecto

```text
evaluacion/
├── .idea/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/angelcaldas/evaluacion/
│   │   │       ├── EvaluacionApplication.java     # Clase principal de Spring Boot
│   │   │       ├── EvaluacionController.java     # Controlador REST API (/api/evaluar)
│   │   │       ├── EstudianteRequest.java        # Modelo de solicitud
│   │   │       └── EstudianteResponse.java       # Modelo de respuesta procesada
│   │   └── resources/
│   │       └── static/
│   │           ├── index.html                    # Interfaz web principal
│   │           ├── style.css                     # Estilos visuales
│   │           └── funciones.js                  # Lógica del cliente y conexión con la API
│   └── test/
├── target/
├── pom.xml                                       # Configuración de dependencias Maven
└── README.md
```
## 📂 🔌 API Endpoint
**Método / Ruta:** POST /api/evaluar

**Descripción:** Recibe un objeto JSON con los datos del estudiante, valida los rangos (edad: 15-100, nota: 0-20) y calcula la clasificación académica (Desaprobado, Regular, Bueno, Excelente).

Hecho con 💙 por Ángel Caldas · Camino a Java Full Stack Developer
