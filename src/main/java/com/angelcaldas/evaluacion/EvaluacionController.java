package com.angelcaldas.evaluacion;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EvaluacionController {

    @PostMapping("/evaluar")
    public EstudianteResponse evaluar(@RequestBody EstudianteRequest request) {
        String nombreApellido = request.getNombreApellido();
        int edad = request.getEdad();
        int nota = request.getNota();

        boolean edadValida = true;
        boolean notaValida = true;
        String clasificacion = "";
        String estado = "";

        if (edad < 15 || edad > 100) {
            edadValida = false;
        } else if (nota < 0 || nota > 20) {
            notaValida = false;
        } else {
            if (nota <= 10) {
                clasificacion = "Desaprobado";
            } else if (nota <= 13) {
                clasificacion = "Regular";
            } else if (nota <= 17) {
                clasificacion = "Bueno";
            } else {
                clasificacion = "Excelente";
            }
            estado = (nota <= 10) ? "No aprobó" : "Aprobó";
        }

        return new EstudianteResponse(nombreApellido, edad, nota, edadValida, notaValida, clasificacion, estado);
    }
}