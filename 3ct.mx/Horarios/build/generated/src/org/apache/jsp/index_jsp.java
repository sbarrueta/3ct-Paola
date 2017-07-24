package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import com.tresct.horarios.conexion.Conector;
import com.tresct.horarios.conexion.ConsultaSQL;
import org.json.simple.JSONObject;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.Vector _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<script type=\"text/javascript\" src=\"js/jquery.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"js/jquery-ui.js\"></script>\n");
      out.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"css/jquery-ui.css\"/>\n");
      out.write("<style>\n");
      out.write("    .barra{\n");
      out.write("        background-color: transparent;\n");
      out.write("        display: inline-block;\n");
      out.write("        width: 90px;\n");
      out.write("        height: 15px;\n");
      out.write("        float: right;\n");
      out.write("        -moz-border-radius-topleft: 5px;\n");
      out.write("        -moz-border-radius-topright:5px;\n");
      out.write("        -moz-border-radius-bottomleft:5px;\n");
      out.write("        -moz-border-radius-bottomright:5px;\n");
      out.write("        -webkit-border-top-left-radius:5px;\n");
      out.write("        -webkit-border-top-right-radius:5px;\n");
      out.write("        -webkit-border-bottom-left-radius:5px;\n");
      out.write("        -webkit-border-bottom-right-radius:5px;\n");
      out.write("        border-top-left-radius:5px;\n");
      out.write("        border-top-right-radius:5px;\n");
      out.write("        border-bottom-left-radius:5px;\n");
      out.write("        border-bottom-right-radius:5px;\n");
      out.write("        /* Hack for IE 7 */\n");
      out.write("        zoom: 1;\n");
      out.write("        \n");
      out.write("    }\n");
      out.write("    .fechaInicio{\n");
      out.write("        background-color: BLACK;        \n");
      out.write("        color: RED;        \n");
      out.write("        font-weight: bold;        \n");
      out.write("        padding: 3px;        \n");
      out.write("        border-radius: 3px;        \n");
      out.write("        -webkit-border-radius: 3px;        \n");
      out.write("        -moz-border-radius: 3px;    \n");
      out.write("    }    \n");
      out.write("    p{        \n");
      out.write("        color: gray;        \n");
      out.write("        line-height: 20px;        \n");
      out.write("        padding: 5px 0 0 10px;\n");
      out.write("    }\n");
      out.write("    .p{\n");
      out.write("        display: inline-block;\n");
      out.write("        padding-left: 10px;\n");
      out.write("        color: RED;\n");
      out.write("        margin-bottom: 10px;\n");
      out.write("    }\n");
      out.write("    .t{\n");
      out.write("        padding-left: 10px;\n");
      out.write("    }\n");
      out.write("    #tit{        \n");
      out.write("        color: #020f49;    \n");
      out.write("    }\n");
      out.write("    /*.lleno{\n");
      out.write("        background-image: url(imgs/152.gif);\n");
      out.write("    }\n");
      out.write("    .medio{\n");
      out.write("        background-image: url(imgs/152.gif);\n");
      out.write("    }\n");
      out.write("    .libre{\n");
      out.write("        background-image: url(imgs/152.gif);\n");
      out.write("    }*/\n");
      out.write("    .carga{\n");
      out.write("        /*background-image: url(imgs/barraOk.gif);*/\n");
      out.write("        background-color: #bcf209;\n");
      out.write("        -moz-border-radius-topleft:4px;\n");
      out.write("        -moz-border-radius-topright:4px;\n");
      out.write("        -moz-border-radius-bottomleft:4px;\n");
      out.write("        -moz-border-radius-bottomright:4px;\n");
      out.write("        -webkit-border-top-left-radius:4px;\n");
      out.write("        -webkit-border-top-right-radius:4px;\n");
      out.write("        -webkit-border-bottom-left-radius:4px;\n");
      out.write("        -webkit-border-bottom-right-radius:4px;\n");
      out.write("        border-top-left-radius:4px;\n");
      out.write("        border-top-right-radius:4px;\n");
      out.write("        border-bottom-left-radius:4px;\n");
      out.write("        border-bottom-right-radius:4px;\n");
      out.write("    }\n");
      out.write("</style>\n");

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
                out.println("<p id='tit'>Entre semanaSSSSSSS:</p>");
                cuenta++;
            }
            if(Integer.parseInt(datos[i][6])>=2 && cuenta2==0){
                out.println("<p id='tit'>Fines de semana:</p>");
                cuenta2++;
            }

      out.write("\n");
      out.write("<div class=\"t\">\n");
      out.write("    \n");
      out.write("    \n");
      out.write("    \n");
      out.write("    ESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS\n");
      out.write("    <span class=\"fechaInicio\" >");
      out.print( datos[i][2] );
      out.write(" de ");
      out.print( mes );
      out.write("</span>\n");
      out.write("    ");

        if(noAlumnos!=0){
    
      out.write("\n");
      out.write("    <div id=\"");
      out.print( datos[i][1] );
      out.write("\" class=\"barra\"></div>\n");
      out.write("    ");

       }
    
      out.write("\n");
      out.write("     \n");
      out.write("</div>\n");
      out.write("    <div class=\"p\">\n");
      out.write("        ");
      out.print( datos[i][5] );
      out.write(" en \n");
      out.write("        <strong>");
      out.print( plantel );
      out.write("</strong>\n");
      out.write("    </div>\n");
      out.write("    \n");
      out.write("    <script type=\"text/javascript\">\n");
      out.write("        $( \"#");
      out.print( datos[i][1] );
      out.write("\" ).progressbar({\n");
      out.write("            value: ");
      out.print( valor );
      out.write("\n");
      out.write("        });\n");
      out.write("        $( \"#");
      out.print( datos[i][1] );
      out.write(" div\").addClass(\"");
      out.print( tipo );
      out.write("\");\n");
      out.write("        $( \"#");
      out.print( datos[i][1] );
      out.write(" div\").addClass(\"carga\");\n");
      out.write("    </script>\n");

        }
    }catch(Exception ex){        
        System.out.println("Error: "+ex.getMessage());

      out.write("\n");
      out.write("<p>\n");
      out.write("    <span class=\"fechaInicio\" >Sin inicios proximos</span>\n");
      out.write("</p>\n");

    }finally{
        con.cierraConexion();
    }
    out.flush();

    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
