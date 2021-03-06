import React from 'react';
import "./Inicio.scss"
const Inicio = () => {
   return (
      <div className="inicio">
         <h1><font color="#efb108"> SISTEMAS OPERATIVOS </font> </h1>
         <p><font color="white">Es el programa o conjunto de programas que efectúan la gestión de los procesos básicos de un Sistema informático y permite la normal ejecución del
      resto de las operaciones.</font></p>

         <div >
            <h1><font color="white">Importancia</font></h1>
         </div>
         <p><font color="white">
            La importancia de los Sistemas Operativos nace históricamente desde los años 50's, cuando se hizo evidente que el operar una computadora por medio de tableros enchufables en la primera generación y luego por medio del trabajo en lote en la segunda generación, se podía mejorar notoriamente, pues el operador realizaba siempre una secuencia de pasos repetitivos, lo cual es una de las características contempladas en la definición de lo que es un programa. Es decir, se comenzó a ver que las tareas mismas del operador podían plasmarse en un programa, el cual a través del tiempo y por su enorme complejidad se
            le llamó "Sistema Operativo".
          </font></p>

         <div >
            <h1><font color="white">Generaciones</font></h1>
         </div>

         <h2><font color="white">Primera generación</font></h2>
         <p><font color="white">Aparecen los sistemas de procesamiento por lotes, donde los trabajos se reunían por grupos o lotes. Cuando se ejecutaba alguna tarea,
         ésta tenía control total de la máquina. Al terminar cada tarea, el control era devuelto al sistema operativo, el cual limpiaba,
      leía e iniciaba la siguiente tarea. Aparece el concepto de nombres de archivo del sistema para lograr independencia de información. </font></p>

         <h2><font color="white">Segunda generación</font></h2>
         <p><font color="white">En esta generación se desarrollan los sistemas compartidos con multiprogramación, en los cuales se utilizan varios procesadores en un solo sistema, con la finalidad de incrementar el poder de procesamiento de la máquina. El programa especificaba tan sólo que un archivo iba a ser escrito en una unidad de cinta con cierto número de pistas y cierta densidad.</font></p>

         <h2><font color="white">Tercera generación</font></h2>
         <p><font color="white">Surge la familia de computadores IBM/360 diseñados como sistemas para uso general, por lo que requerían manejar grandes volúmenes de información de distinto tipo, lo cual provocó una nueva evolución de los sistemas operativos: los sistemas de modos múltiples, que soportan simultáneamente procesos por lotes, tiempo compartido, procesamiento en tiempo real y multiprocesamiento.</font></p>

         <h2><font color="white">Cuarta generación</font></h2>
         <p><font color="white">Los sistemas operativos conocidos en la época actual son los considerados sistemas de cuarta generación. Con la ampliación del uso de redes de computadoras y del procesamiento en línea es posible obtener acceso a computadoras alejadas geográficamente a través de varios tipos de terminales. Con estos sistemas operativos aparece el concepto de máquinas virtuales, en el cual el usuario no se involucra con el hardware de la computadora con la que se quiere conectar y en su lugar el usuario observa una interfaz gráfica creada por el sistema operativo.
  </font></p>

         <div >

            <h1><font color="white">Clasificación</font> </h1>
         </div>
         <p><font color="white">
            Debido a la evolución de los sistemas operativos fue necesario realizar una clasificación; considerando las diferencias existentes
            entre sus componentes los podemos clasificar en:
          </font></p>
         <p><font color="white">• Sistemas operativos por lotes.</font></p>
         <p><font color="white">• Sistemas operativos multiprogramación.</font></p>
         <p><font color="white">• Sistemas operativos multiusuario.</font></p>
         <p><font color="white">• Sistemas operativos de tiempo compartido.</font></p>
         <p><font color="white">• Sistemas operativos de tiempo real.</font></p>
      </div>
   );
}

export default Inicio;
