const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (rAnswers,uAnswera) => rAnswers === uAnswera

const repeat = (rAnswers,uAnswera,callback) => {
  let count = 0;
  for (let i = 0; i < rAnswers.length; i++) {
  const returnCallBack = callback(rAnswers[i],uAnswera[i]);
  count += returnCallBack
  }
  return `Rasuldato final ${count}`
}

console.log(repeat(RIGHT_ANSWERS,STUDENT_ANSWERS, (rAnswers,uAnswera) => {
  if (uAnswera === rAnswers) return 1;
  if (uAnswera === 'N.A') return 0;
  return -0.5;
}));