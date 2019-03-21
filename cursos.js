
let materias=[
  {'id':1,
   'nombre':'Literatura',
   'duracion':16,
   'valor':4
   },
   {'id':2,
   'nombre':'Ingles',
   'duracion':12,
   'valor':6
   },
   {'id':3,
   'nombre':'Historia',
   'duracion':10,
   'valor':9
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



