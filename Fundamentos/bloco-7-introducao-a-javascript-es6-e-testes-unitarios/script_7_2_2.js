const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const setShiftLesson2 = (lesson2,turno,valor) => {
    lesson2[turno] = valor
    console.log(lesson2);
    }

  const turno = 'turno' 
  const valor = 'noite' 
  setShiftLesson2(lesson2,turno,valor) 

  const listObjectKeys = (object) => {
    const objectKeys = Object.keys(object)
    console.log(objectKeys);
  }

  listObjectKeys(lesson2)
