let estudiante={
    nombre:'Juan',
    edad:25,
    notas:{
        matematicas:3,
        ingles:4,
        programacion:5
    }

};

let obtenerPromedio=(n1,n2,n3)=>(n1+n2+n3)/3;

console.log(obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

module.exports={
    estudiante,
    obtenerPromedio
}
