package com.angelcaldas.evaluacion;

public class EstudianteResponse {
    private String nombreApellido;
    private int edad;
    private int nota;
    private boolean edadValida;
    private boolean notaValida;
    private String clasificacion;
    private String estado;

    public EstudianteResponse(String nombreApellido, int edad, int nota, boolean edadValida, boolean notaValida, String clasificacion, String estado) {
        this.nombreApellido = nombreApellido;
        this.edad = edad;
        this.nota = nota;
        this.edadValida = edadValida;
        this.notaValida = notaValida;
        this.clasificacion = clasificacion;
        this.estado = estado;
    }

    public String getNombreApellido() { return nombreApellido; }
    public int getEdad() { return edad; }
    public int getNota() { return nota; }
    public boolean isEdadValida() { return edadValida; }
    public boolean isNotaValida() { return notaValida; }
    public String getClasificacion() { return clasificacion; }
    public String getEstado() { return estado; }
}