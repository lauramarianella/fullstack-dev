let items = [
  {
    id: 1,
    idDresser: 1,
    idService: 4,
    idCity: 1,
    title: 'haircut women',
    description: 'Cut women',
    imgSrc: '/images/women1.jpg',
    cost: 70,
  },
  {
    id: 2,
    idDresser: 1,
    idService: 6,
    idCity: 1,
    title: 'coloring',
    description: 'Coloring women, only the roots',
    imgSrc: '/images/coloring1.jpg',
    cost: 30,
  },
  {
    id: 3,
    idDresser: 1,
    idService: 1,
    idCity: 1,
    title: 'haircut men',
    description: 'Cut men, from long to short',
    imgSrc: '/images/men1.jpg',
    cost: 40,
  },
  {
    id: 4,
    idDresser: 1,
    idService: 1,
    idCity: 1,
    title: 'haircut men',
    description: 'Cut men, from long to short',
    imgSrc: '/images/men3.jpg',
    cost: 40,
  },
  {
    id: 5,
    idDresser: 1,
    idService: 5,
    idCity: 1,
    title: 'Styling',
    description: 'Waves',
    imgSrc: '/images/stylishing1.jpg',
    cost: 70,
  },
  {
    id: 6,
    idDresser: 2,
    idService: 7,
    idCity: 2,
    title: 'Long extensions',
    description: 'Hair extensions',
    imgSrc: '/images/extensions1.jpg',
    cost: 70,
  },
  {
    id: 7,
    idDresser: 2,
    idService: 7,
    idCity: 2,
    title: 'Extensions in pony tail',
    description: 'Hair extensions in pony tail',
    imgSrc: '/images/extensions2.jpg',
    cost: 40,
  },
  {
    id: 8,
    idDresser: 2,
    idService: 5,
    idCity: 2,
    title: 'Styling',
    description: 'Waves',
    imgSrc: '/images/stylishing2.jpg',
    cost: 100,
  },
  {
    id: 9,
    idDresser: 2,
    idService: 5,
    idCity: 2,
    title: 'Styling',
    description: 'Styling',
    imgSrc: '/images/stylishing3.jpg',
    cost: 70,
  },
  {
    id: 10,
    idDresser: 2,
    idService: 4,
    idCity: 2,
    title: 'Cutting',
    description: 'Dramatic haircut',
    imgSrc: '/images/women3.jpg',
    cost: 50,
  },

  {
    id: 11,
    idDresser: 3,
    idService: 6,
    idCity: 3,
    title: 'Color application',
    description: 'Decoloring and hair cut',
    imgSrc: '/images/coloring2.jpg',
    cost: 80,
  },
  {
    id: 12,
    idDresser: 3,
    idService: 6,
    idCity: 3,
    title: 'coloring application',
    description: 'One color only',
    imgSrc: '/images/coloring3.jpg',
    cost: 50,
  },
  {
    id: 13,
    idDresser: 3,
    idService: 1,
    idCity: 3,
    title: 'haircut men',
    description: 'Cut men, from long to short',
    imgSrc: '/images/men2.jpg',
    cost: 50,
  },
  {
    id: 14,
    idDresser: 3,
    idService: 7,
    idCity: 3,
    title: 'extensions',
    description: 'Voluminous hair style',
    imgSrc: '/images/extensions3.jpg',
    cost: 50,
  },
  {
    id: 15,
    idDresser: 3,
    idService: 4,
    idCity: 2,
    title: 'Cutting',
    description: 'Dramatic haircut',
    imgSrc: '/images/women2.jpg',
    cost: 50,
  },
];

let services = [
  { id: 1, service: 'men haircut' },
  { id: 2, service: 'boys haircut' },
  { id: 3, service: 'girls haircut' },
  { id: 4, service: 'women haircut' },
  { id: 5, service: 'styling' },
  { id: 6, service: 'applying color' },
  { id: 7, service: 'extensions' },
];

let dressers = [
  { id: 1, name: 'Claudia', city: 1, address: 'addr Longueuil' },
  { id: 2, name: 'Mariuxi', city: 2, address: 'addr Montreal' },
  { id: 3, name: 'Lorenzo', city: 1, address: 'addr Longueil' },
  { id: 4, name: 'Lojanita', city: 3, address: 'addr Laval' },
];

let rates = [
  { idDresser: 1, idService: 1, g: 20.0, s: 0, m: 0, l: 0 },
  { idDresser: 1, idService: 4, g: 0, s: 20.0, m: 40.0, l: 60.0 },
  { idDresser: 1, idService: 3, g: 30.0, s: 0, m: 0, l: 0 },
  { idDresser: 1, idService: 5, g: 0, s: 30.0, m: 60.0, l: 90.0 },
  { idDresser: 1, idService: 6, g: 0, s: 50.0, m: 90.0, l: 110.99 },

  { idDresser: 2, idService: 4, g: 0, s: 20, m: 40, l: 60 },
  { idDresser: 2, idService: 3, g: 30, s: 0, m: 0, l: 0 },
  { idDresser: 2, idService: 5, g: 0, s: 30, m: 60, l: 90 },
  { idDresser: 2, idService: 6, g: 0, s: 50, m: 90, l: 110 },

  { idDresser: 3, idService: 1, g: 20, s: 0, m: 0, l: 0 },
  { idDresser: 3, idService: 4, g: 0, s: 20, m: 40, l: 60 },
  { idDresser: 3, idService: 3, g: 30, s: 0, m: 0, l: 0 },
  { idDresser: 3, idService: 5, g: 0, s: 30, m: 60, l: 90 },
  { idDresser: 3, idService: 6, g: 0, s: 50, m: 90, l: 110 },
];

let cities = [
  { id: 1, name: 'Longueuil' },
  { id: 2, name: 'Montreal' },
  { id: 3, name: 'Laval' },
];

module.exports = { items, services, dressers, rates, cities };
