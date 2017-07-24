package com.tresct.horarios.conexion;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import javax.swing.JOptionPane;

public class Conector {

    boolean oki;
    private Connection conexion;

    public Conector(String host, String usr, String psw, String base) {
        oki = false;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection("jdbc:mysql://" + host + "/" + base, usr, psw);
            oki = true;
        } catch (ClassNotFoundException e) {
            JOptionPane.showMessageDialog(null, "Class error: "+e.getMessage());
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "SQL error: "+e.getMessage());
        }
    }

    public Connection getConexion() {
        return conexion;
    }

    public void cierraConexion() {
        try {
            conexion.close();
        } catch (Exception ex) {
        }
    }
}
