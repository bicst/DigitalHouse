const timePopcorn = 10;
const timePasta = 8;
const timeMeat = 15;
const timeBean = 12;
const timeCandy = 8;

const microondas = (opcao, tempo) => {
  switch (opcao) {
    case 1:
      getPopcorn(tempo);
      break;
    case 2:
      getPasta(tempo);
      break;
    case 3:
      getMeat(tempo);
      break;
    case 4:
      getBeans(tempo);
      break;
    case 5:
      getCandy(tempo);
      break;
    default:
      console.log('Prato inexistente');
      break;
  }
};

const getPopcorn = (tempo) => {
  if (tempo > (2 * timePopcorn) && tempo < (3 * timePopcorn)) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('A comida queimou');
  } else if (tempo > 3 * timePopcorn) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Kabummmmm!');
  } else if (tempo < timePopcorn) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Tempo insuficiente');
  } else {
    console.log('Pi Pi Pi... Finalizado!');
  }
};

const getPasta = (tempo) => {
  if (tempo > (2 * timePasta) && tempo < (3 * timePasta)) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('A comida queimou');
  } else if (tempo > 3 * timePasta) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Kabummmmm!');
  } else if (tempo < timePasta) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Tempo insuficiente');
  } else {
    console.log('Pi Pi Pi... Finalizado!');
  }
};

const getMeat = (tempo) => {
  if (tempo > (2 * timeMeat) && tempo < (3 * timeMeat)) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('A comida queimou');
  } else if (tempo > 3 * timeMeat) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Kabummmmm!');
  } else if (tempo < timeMeat) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Tempo insuficiente');
  } else {
    console.log('Pi Pi Pi... Finalizado!');
  }
};

const getBeans = (tempo) => {
  if (tempo > (2 * timeBean) && tempo < (3 * timeBean)) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('A comida queimou');
  } else if (tempo > 3 * timeBean) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Kabummmmm!');
  } else if (tempo < timeBean) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Tempo insuficiente');
  } else {
    console.log('Pi Pi Pi... Finalizado!');
  }
};

const getCandy = (tempo) => {
  if (tempo > (2 * timeCandy) && tempo < (3 * timeCandy)) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('A comida queimou');
  } else if (tempo > 3 * timeCandy) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Kabummmmm!');
  } else if (tempo < timeCandy) {
    console.log('Pi Pi Pi... Finalizado!');
    console.log('Tempo insuficiente');
  } else {
    console.log('Pi Pi Pi... Finalizado!');
  }
};

microondas(5, 17);