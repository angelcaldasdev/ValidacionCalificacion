package com.angelcaldas.evaluacion;

public class EstudianteRequest {
    private String nombreApellido;
    private int edad;
    private int nota;

    public String getNombreApellido() { return nombreApellido; }
    public void setNombreApellido(String nombreApellido) { this.nombreApellido = nombreApellido; }

    public int getEdad() { return edad; }
    public void setEdad(int edad) { this.edad = edad; }

    public int getNota() { return nota; }
    public void setNota(int nota) { this.nota = nota; }
}