
let materias=[
  {'id':1,
   'nombre':'Literatura',
   'duracion':'16 Horas',
   'valor':'4 Creditos'
   },
   {'id':2,
   'nombre':'Ingles',
   'duracion':'12 Horas',
   'valor':'6 Creditos'
   },
   {'id':3,
   'nombre':'Historia',
   'duracion':'10 Horas',
   'valor':'9 Creditos'
   },
  ];

let showSubject=(subject,i)=>{
     setTimeout(function(){
        showSubjectQuick(subject);
    
    },2000*(i+1));

};

let showSubjectQuick=(subject)=>{
         console.log('El Id de la materia es '+subject.id);
         console.log('El nombre de la materia es '+subject.nombre);
         console.log('La duracion de la materia es '+subject.duracion);
         console.log('El valor de la materia es '+subject.valor);
};

module.exports={materias,showSubject,showSubjectQuick};


/*for(var i=0;i<materias.length;i++){
      showSubject(materias[i],i);
}*/



