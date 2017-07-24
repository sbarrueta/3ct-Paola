package com.tresct.horarios.conexion;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class ConsultaSQL {

    private Connection conexion;
    private ResultSet resultadoConsulta;
    private ResultSetMetaData metaDatos;
    private String consulta;
    //Crea dos arreglos
    private String[][] datosDevueltos;
    private String[] nombresColumnas;
    private String error;
    private int valor;

    public ConsultaSQL(Connection conRecibida, String consultaRecibida) {
        conexion = conRecibida;
        consulta = consultaRecibida;
        try {
            //Crea una instancia para mandar sentencias al servidor MySQL
            Statement sentencia = conexion.createStatement();
            //Ejecuta la consulta y devuelve el ResultSet
            resultadoConsulta = sentencia.executeQuery(consulta);
            //Obtiene los metadatos del ResultSet	
            metaDatos = resultadoConsulta.getMetaData();
            error = null;
        } catch (SQLException e) {
            error = e.getMessage();
            //javax.swing.JOptionPane.showMessageDialog(null,"El error de consulta es: "+ error);
            if (error.endsWith("executeQuery().")) {
                try {
                    Statement sentencia = conexion.createStatement();
                    valor = sentencia.executeUpdate(consulta);
                    error = null;
                } catch (SQLException ex) {
                    error = ex.getMessage();
                    javax.swing.JOptionPane.showMessageDialog(null, "El error de consulta es: " + error);
                }
            }
        }
    }

    public String[][] getDatosDevueltos() {
        if (error == null) {
            try {
                //Devuelve el número de columnas del resultset
                int columnas = metaDatos.getColumnCount();
                //Lleva el cursor a la última fila del resultset
                resultadoConsulta.last();
                //Obtiene el número de fila actual( que aquí es la última)
                int filas = resultadoConsulta.getRow();
                //Dimensiona el arreglo datosDevueltos con los enteros obtenidos 	
                datosDevueltos = new String[filas][columnas];
                //Ubica el cursor antes del a primera fila
                resultadoConsulta.beforeFirst();
                for (int i = 0; i < filas; i++) {
                    //Va a la siguiente fila
                    resultadoConsulta.next();
                    for (int j = 0; j < columnas; j++) {
                        //Obtiene el valor de cada una de las columnas en la fila actual
                        datosDevueltos[i][j] = resultadoConsulta.getString(j + 1);
                    }
                }
            } catch (Exception e) {
            }
        }
        return datosDevueltos;
    }

    public String[] getNombresColumnas() {
        if (error == null) {
            try {
                //Devuelve el número de columnas
                int columnas = metaDatos.getColumnCount();
                nombresColumnas = new String[columnas];
                for (int i = 0; i < columnas; i++) {
                    //Obtiene el nombre de cada una de las columna 
                    nombresColumnas[i] = metaDatos.getColumnLabel(i + 1);
                }
            } catch (SQLException ex) {
            }
        }
        return nombresColumnas;
    }

    public String getMensajeError() {
        return error;
    }
}
