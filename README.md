☕ ValidacionCalificacion | Java Spring Boot & Web Frontend

Una aplicación web de pila completa (Full Stack) desarrollada para procesar, validar y clasificar datos de evaluación de estudiantes en tiempo real, integrando un frontend moderno en HTML/CSS/JavaScript con un backend robusto en Java Spring Boot.

🚀 Características Principales

Backend en Java (Spring Boot): Arquitectura RESTful API construida con Java 26 (OpenJDK) y Maven.

Frontend Interactivo: Interfaz web moderna con diseño responsivo, validación de formularios y visualización dinámica de resultados.

Procesamiento Híbrido: Conexión directa mediante solicitudes HTTP POST (/api/evaluar) para validar edades (15-100 años) y notas (0-20), clasificando al estudiante (Desaprobado, Regular, Bueno, Excelente).

Control de Versiones: Repositorio estructurado y sincronizado con GitHub.

🛠️ Tecnologías Utilizadas

Lenguaje: Java 26 (OpenJDK)

Framework Backend: Spring Boot (v3.3.5) con spring-boot-starter-web y Tomcat embebido.

Gestor de Dependencias: Apache Maven

Frontend: HTML5, CSS3 (Flexbox, gradientes modernos), JavaScript (Fetch API async/await).

Control de Versiones: Git y GitHub

📂 Estructura del Proyecto

evaluacion/
├── .idea/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── angelcaldas/
│   │   │           └── evaluacion/
│   │   │               ├── EvaluacionApplication.java    # Clase principal de Spring Boot
│   │   │               ├── EvaluacionController.java     # Controlador REST API (/api/evaluar)
│   │   │               ├── EstudianteRequest.java        # Modelo de solicitud de datos
│   │   │               └── EstudianteResponse.java       # Modelo de respuesta procesada
│   │   └── resources/
│   │       └── static/                                   # Recursos estáticos servidos por Spring
│   │           ├── index.html                            # Interfaz web principal
│   │           ├── style.css                             # Estilos visuales
│   │           └── funciones.js                          # Lógica del cliente y conexión con la API
├── target/
├── pom.xml                                               # Configuración de dependencias Maven
└── README.md


⚙️ Instrucciones de Instalación y Ejecución

Clonar el repositorio:

git clone https://github.com/angelcaldasdev/ValidacionCalificacion.git
cd ValidacionCalificacion


Abrir en el IDE:
Abre el proyecto en IntelliJ IDEA (asegúrate de configurarlo como proyecto Maven con el JDK 26 asignado).

Ejecutar la aplicación:

Ubica la clase EvaluacionApplication.java.

Haz clic en el botón de Run (Play) para iniciar el servidor Tomcat embebido en el puerto 8080.

Acceder a la interfaz web:
Abre tu navegador de preferencia e ingresa a:

http://localhost:8080


📋 Endpoints de la API

POST /api/evaluar

Recibe un objeto JSON con los datos del estudiante y retorna la validación y clasificación académica.

Ejemplo de Solicitud (Request Body):

{
"nombreApellido": "Angel Caldas",
"edad": 28,
"nota": 18
}


Ejemplo de Respuesta (Response Body):

{
"nombreApellido": "Angel Caldas",
"edad": 28,
"nota": 18,
"edadValida": true,
"notaValida": true,
"clasificacion": "Excelente",
"estado": "Aprobó"
}


💙 Autor

Hecho por Angel Caldas · Camino a Java Full Stack Developer.