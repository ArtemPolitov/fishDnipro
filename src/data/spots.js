import spot1Img from '../assets/images/spots/spot1.jpg'
import spot2Img from '../assets/images/spots/spot2.jpg'
import spot3Img from '../assets/images/spots/spot3.jpg'
import spot4Img from '../assets/images/spots/spot4.jpg'
import spot5Img from '../assets/images/spots/spot5.jpg'
import spot6Img from '../assets/images/spots/spot6.jpg'

const spots = [
  {
    "id": 1,
    "name": "Старые Кодаки",
    "slug":"starie-kodaki",
    "description": "Старые Кодаки – это место с богатой историей, где сохранились остатки старой крепости. Днепр здесь образует извилистое русло с перепадами глубин и сильным течением, что привлекает разнообразную рыбу. Здесь можно встретить судака, леща, сома, а также плотву и окуня. Ловля может быть успешной как с берега, так и с лодки, с использованием донных снастей и спиннинга. Живописные виды и историческая атмосфера делают это место особенно привлекательным для рыбаков.",
    "imgSrc":"spot1",
    "imgSrc2": spot1Img,
    "fishId": [1,13],
    "gallery":[]
  },
  {
    "id": 2,
    "name": "Коса на Победе",
    "slug":"kosa-pobeda",
    "description": "Коса на Победе – популярное место отдыха на правом берегу Днепра. Это искусственно намытый участок с песчаным дном и относительно спокойным течением. Здесь хорошо ловится лещ, карась, плотва, окунь, а также щука и судак. Рыбалка возможна как с берега, так и с лодки. Благодаря удобному расположению и хорошей инфраструктуре, это место пользуется большой популярностью среди рыбаков всех уровней подготовки. В летнее время здесь много отдыхающих, поэтому стоит выбирать время для рыбалки, когда людей меньше.",
    "imgSrc":"spot2",
    "imgSrc2": spot2Img,
    "fishId": [1,2,4,7,13],
    "gallery":["1.jpg","2.jpg","3.jpg",]
  },
  {
    "id": 3,
    "name": "Коса напротив Порохового острова",
    "slug":"kosa-porohovoy",
    "description": "Коса напротив Порохового острова характеризуется разнообразным рельефом дна: здесь есть и мелководья, и глубокие ямы, а также участки с разным течением. Это создает отличные условия для обитания самых разных видов рыб, включая щуку, судака, окуня, леща, плотву, карася, линя и даже сома. Рыбалка здесь может быть очень результативной, особенно при ловле на спиннинг и донные снасти. Место привлекает рыбаков, предпочитающих более дикие и уединенные места.",
    "imgSrc":"spot3",
    "imgSrc2": spot3Img,
    "fishId": [1,2,3,4,6,8,9,10,13],
    "gallery":["1.jpg","2.jpg"]
  },
  {
    "id": 4,
    "name": "Коса на Красном Камне",
    "slug":"kosa-krasniy-kamen",
    "description": "Коса на Красном Камне расположена в районе с живописными скалистыми берегами. Дно здесь каменистое, с перепадами глубин и наличием течений. Это создает благоприятные условия для ловли хищной рыбы, такой как щука, судак, окунь, жерех. Также здесь можно встретить леща и плотву. Место популярно среди любителей спиннинговой ловли и ловли на живца. Красивые пейзажи и возможность поймать трофейную рыбу делают это место особенно привлекательным.",
    "imgSrc":"spot4",
    "imgSrc2": spot4Img,
    "fishId": [2,3,4,5,7,11,13]
  },
  {
    "id": 5,
    "name": "Комсомольский остров",
    "slug":"comsomolkiy-ostrov",
    "description": "Комсомольский остров, расположенный в центре Днепра, предлагает разнообразные условия для рыбалки. Здесь есть тихие заливы с медленным течением и участки с более быстрым течением. В зависимости от выбранного места можно успешно ловить как мирную рыбу (лещ, плотва, карась), так и хищную (щука, окунь, судак). Рыбалка возможна как с берега, так и с лодки. Остров является популярным местом отдыха, поэтому в выходные дни здесь может быть много людей.",
    "imgSrc":"spot5",
    "imgSrc2": spot5Img,
    "fishId": [4,5,7,8,12,13],
    "gallery":["1.jpg","2.jpg","3.jpg","4.jpg"]
  },
  {
    "id": 6,
    "name": "Набережная",
    "slug":"naberejnaya",
    "description": "Центральная набережная Днепра – популярное место для прогулок и отдыха горожан. Рыбалка здесь ведется, как правило, с бетонных укреплений. Благодаря удобному доступу и близости к городской инфраструктуре, это место привлекает многих рыбаков, особенно тех, кто предпочитает короткие вылазки на рыбалку после работы или в выходные дни. Здесь можно поймать леща, плотву, окуня, а также бычка и уклейку. Однако стоит учитывать, что из-за интенсивного движения судов и большого количества людей, рыбалка здесь может быть не всегда комфортной.",
    "imgSrc":"spot6",
    "imgSrc2": spot6Img,
    "fishId": [6,13]
  }
]

export default spots;