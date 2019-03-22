
const datos = require('./cursos');
const fs = require('fs');
const express=require('express');
const app=express();
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

let saveDataHtml=(materia,name,ci)=>{
  htmltext='<b>El estudiante '+ name + 'con cedula '+ ci + ' Se ha matriculado en el curso:</b> <br>'+
           '<p> Id:'+ materia.id+'<br>'+'Nombre: '+ materia.nombre+'<br>'+'Duracion: '+ materia.duracion+'<br>'+'Valor '+ materia.valor+'<br>'
            '</p>';

  app.get('/',function(req,resp){
     resp.send(htmltext);
  });

   app.listen(3000);
   
}
let saveDataFile = (materia, name, ci) => {
   texto = 'El estudiante ' + name + ' con cedula ' + ci + ' se ha matriculado en el curso llamado ' + materia.nombre;

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
      saveDataHtml(materia, argv.nombre, argv.cedula);
   } else {
      console.log('El Id proporcionado no esta registrado');
      for (var i = 0; i < datos.materias.length; i++) {
         datos.showSubjectQuick(datos.materias[i]);
      }

   }


}



