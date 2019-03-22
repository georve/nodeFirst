Primer Proyecto

README;
Los archivos son tarea,js y cursos.js

Para ejecutar el programa se debe ejecutar el archivo tarea.js


1. Primera opcion : node tarea
   Muestra las opciones.

2. Segunda opcion : node tarea inscribir:
   se muestran las opciones del menu
   inscribir materias

Options:
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
  --id, -i                                                            [required]
  --nombre, -n                                                        [required]
  --cedula, -c                                                        [required]

Missing required arguments: id, nombre, cedula

3. seleccionar una materia: node tarea inscribir -i=2 -n=georman -c=13951032
   se debe generar un mensaje indicando que se inscribio en uno de los cursos.
   sino encuentra el curso debe aparecer un mensaje de error u las opciones.

4. Si el curso se inscribe de manera correcta se debe mostrar la informacion en
   la pagina http://localhost:3000
