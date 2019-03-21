
const datos = require('./cursos');
const fs = require('fs');
const options = {
   id: {
      demand: true,
      alias: 'i'
   },
   nombre: {
      demand: true,
      alias: 'n'
   },
   cedula: {
      demand: true,
      alias: 'c'
   }
};
let saveDataFile = (materia, name, ci) => {
   texto = 'El estudiante ' + name + 'con cedula ' + ci + ' se ha matriculado en el curso llamado ' + materia.nombre;

   fs.writeFile('inscripcion.txt', texto, (err) => {
      if (err) throw (err);
      console.log('se ha inscrito en la materia ' + materia.nombre)

   });


}




const argv = require('yargs')
   .command('inscribir', 'inscribir materias', options)
   .argv

if (!argv.id) {
   for (var i = 0; i < datos.materias.length; i++) {
      datos.showSubject(datos.materias[i], i);
   }

} else {
   let materia = datos.materias.find(function (objectFound) {
      return objectFound.id == argv.id;

   });

   if (materia) {
      datos.showSubjectQuick(materia);
      saveDataFile(materia, argv.nombre, argv.cedula);
   } else {
      console.log('El Id proporcionado no esta registrado');
      for (var i = 0; i < datos.materias.length; i++) {
         datos.showSubjectQuick(datos.materias[i]);
      }

   }


}



