const student = {
    name: `Ayman`,
    age: 17,
    talent: `vorpur`,
  };
  
  student.talent = "onekBashi";
  
  console.log(student.talent);
  
  const singer = `Md Ayman`;
  
  const anthem = `Tumi kno vujo na 
    Tomake chara ami oshohay
    Amar shob tuku valobasha tomay niye ${singer}`;
  
  console.log(anthem, singer);
  
  const brand = [`Nobin`, `Easy`, `OnePoint`];
  
  const eas = brand[1];
  const nob = brand.indexOf(`Nobin`);
  console.log(eas, nob);
  
  const onnoKisu = {
    bondhu: `Araft`,
    porichoy: `chesra`,
    character: `khub Kharap ovosthay`,
  };
  const { porichoy, character } = onnoKisu;
  
  console.log(porichoy);
  
  const number = [1,5,2,6,3,4,8,9];
  
  const [one,two,three, ...rest] = number;
  
  console.log(three, ...rest);
  