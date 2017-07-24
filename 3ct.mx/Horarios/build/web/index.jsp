<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="com.tresct.horarios.conexion.Conector" %>
<%@page import="com.tresct.horarios.conexion.ConsultaSQL" %>
<%@page language="java" import="org.json.simple.JSONObject" %>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script>
<link type="text/css" rel="stylesheet" href="css/jquery-ui.css"/>
<style>
    .barra{
        background-color: transparent;
        display: inline-block;
        width: 90px;
        height: 15px;
        float: right;
        -moz-border-radius-topleft: 5px;
        -moz-border-radius-topright:5px;
        -moz-border-radius-bottomleft:5px;
        -moz-border-radius-bottomright:5px;
        -webkit-border-top-left-radius:5px;
        -webkit-border-top-right-radius:5px;
        -webkit-border-bottom-left-radius:5px;
        -webkit-border-bottom-right-radius:5px;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        /* Hack for IE 7 */
        zoom: 1;
        
    }
    .fechaInicio{
        background-color: white;        
        color: #4f5ea8;        
        font-weight: bold;        
        padding: 3px;        
        border-radius: 3px;        
        -webkit-border-radius: 3px;        
        -moz-border-radius: 3px;    
    }    
    p{        
        color: #4f5ea8;        
        line-height: 20px;        
        padding: 5px 0 0 10px;
    }
    .p{
        display: inline-block;
        padding-left: 10px;
        color: #9fc5f1;
        margin-bottom: 10px;
    }
    .t{
        padding-left: 10px;
    }
    #tit{        
        color: #020f49;    
    }
    /*.lleno{
        background-image: url(imgs/152.gif);
    }
    .medio{
        background-image: url(imgs/152.gif);
    }
    .libre{
        background-image: url(imgs/152.gif);
    }*/
    .carga{
        /*background-image: url(imgs/barraOk.gif);*/
        background-color: #bcf209;
        -moz-border-radius-topleft:4px;
        -moz-border-radius-topright:4px;
        -moz-border-radius-bottomleft:4px;
        -moz-border-radius-bottomright:4px;
        -webkit-border-top-left-radius:4px;
        -webkit-border-top-right-radius:4px;
        -webkit-border-bottom-left-radius:4px;
        -webkit-border-bottom-right-radius:4px;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        border-bottom-left-radius:4px;
        border-bottom-right-radius:4px;
    }
</style>
<%
    Conector con=new Conector("tresct.com","tresctco_root","pasale","tresctco_3ct");

    String idMateria=request.getParameter("idMateria");
    String consulta="SELECT c.idmateria, c.grupo, DAY(c.programado), MONTH(c.programado), h.id, h.descripcion, if(h.diassemana>1 ,'1','2') as horario "
            + "FROM clavegrupos c, horarios h "
            + "WHERE c.idhorario=h.id "
            + "AND c.estatus IN ('P') "
            + "AND c.idmateria="+idMateria+" "
            + "ORDER BY horario DESC, MONTH(c.programado), DAY(c.programado)";
    System.out.println(consulta);
    ConsultaSQL consultador=new ConsultaSQL(con.getConexion(), consulta);
    String[][] datos=consultador.getDatosDevueltos();
    
    String[] meses={"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"};
    String plantel="";
    String mes="";
    int cuenta=0;
    int cuenta2=0;
    try{
        if(datos.length==0){
            out.println("<p id='tit'>Inscripciones abiertas</p>");
        }
        for(int i=0;i<datos.length;i++){
            consulta="SELECT COUNT(*),m.arrancaCon FROM clavegrupos c "
                    + "INNER JOIN grupos g "
                    + "ON g.idgrupo=c.id "
                    + "INNER JOIN materias m "
                    + "ON m.id=c.idmateria "
                    + "WHERE c.grupo='"+datos[i][1]+"'";
            System.out.println(consulta);
            consultador=new ConsultaSQL(con.getConexion(), consulta);
            String[][] alumnos=consultador.getDatosDevueltos();
            int noAlumnos=Integer.parseInt(alumnos[0][0]);
            int maximo=Integer.parseInt(alumnos[0][1]);
            if(maximo==0)maximo=1;
            int valor=(Integer)(noAlumnos*100)/maximo;
            String tipo="";
            if(valor<=20)tipo="libre";
            if(valor>20 && valor<80)tipo="medio";
            if(valor>=80)tipo="lleno";
            
            System.out.println("alumnos: "+noAlumnos+", maximo: "+maximo+", valor: "+valor+", tipo: "+tipo);
            
            if(datos[i][1].startsWith("1"))plantel="Roma";
            if(datos[i][1].startsWith("2"))plantel="Polanco";
            mes=meses[Integer.parseInt(datos[i][3])-1];
            JSONObject arrayObj=new JSONObject();
            arrayObj.put("dia", datos[i][2]);
            arrayObj.put("mes", mes);
            arrayObj.put("lugar", plantel);
            arrayObj.put("desc", datos[i][5]);
            
            if(Integer.parseInt(datos[i][6])==1 && cuenta==0){
                out.println("<p id='tit'>Entre semana:</p>");
                cuenta++;
            }
            if(Integer.parseInt(datos[i][6])>=2 && cuenta2==0){
                out.println("<p id='tit'>Fines de semana:</p>");
                cuenta2++;
            }
%>
<div class="t">
    <span class="fechaInicio" ><%= datos[i][2] %> de <%= mes %></span>
    <%
        if(noAlumnos!=0){
    %>
    <div id="<%= datos[i][1] %>" class="barra"></div>
    <%
       }
    %>
     
</div>
    <div class="p">
        <%= datos[i][5] %> en 
        <strong><%= plantel %></strong>
    </div>
    
    <script type="text/javascript">
        $( "#<%= datos[i][1] %>" ).progressbar({
            value: <%= valor %>
        });
        $( "#<%= datos[i][1] %> div").addClass("<%= tipo %>");
        $( "#<%= datos[i][1] %> div").addClass("carga");
    </script>
<%
        }
    }catch(Exception ex){        
        System.out.println("Error: "+ex.getMessage());
%>
<p>
    <span class="fechaInicio" >Sin inicios proximos</span>
</p>
<%
    }finally{
        con.cierraConexion();
    }
    out.flush();
%>