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

  //-------------------------------------------------------------------------------------------------------------------------------------------------------

  const setShiftLesson2 = (lesson2,turno,valor) => {
    lesson2[turno] = valor
    console.log(lesson2);
    }
    
  const turno = 'turno' 
  const valor = 'noite' 
  setShiftLesson2(lesson2,turno,valor) 

  //-------------------------------------------------------------------------------------------------------------------------------------------------------

  const listObjectKeys = (object) => {
    const objectKeys = Object.keys(object)
    console.log(objectKeys);
  }

  listObjectKeys(lesson2)

  //-------------------------------------------------------------------------------------------------------------------------------------------------------

  const objectLength = (object) => {
    const objectLength = Object.keys(object).length
    console.log(`O tamanho do objeto é: ${objectLength}`);
  }

  objectLength(lesson3)

  //-------------------------------------------------------------------------------------------------------------------------------------------------------

  const listObjectValues = (object) => {
    const objectValues = Object.values(object)
    console.log(objectValues);
   }

   listObjectValues(lesson3)

   //-------------------------------------------------------------------------------------------------------------------------------------------------------

   const allLessons = Object.assign({},{lesson1,lesson2,lesson3}) 

   console.log(allLessons);

   //-------------------------------------------------------------------------------------------------------------------------------------------------------

   const totalEstudantes = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes 
   console.log(`a soma de todos os alunos é: ${totalEstudantes}`);
   
   //-------------------------------------------------------------------------------------------------------------------------------------------------------

   const getValueByNumber = (object,posicao) => {
      const values = Object.values(object)
      console.log(values[posicao]);
     }

    getValueByNumber(lesson1,1) 

    //-------------------------------------------------------------------------------------------------------------------------------------------------------

    const checkValues = (object,key,value) => {
      const entries = Object.entries(object)
      let isEqual = false
      for(let index in entries){
        if (entries[index][0] == key && entries[index][1] ==  value) isEqual = true
      }
      console.log(isEqual)  
    }

    checkValues(lesson1,'turno','manhã')