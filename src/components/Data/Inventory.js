import { useState } from "react";
import uniqid from 'uniqid';
import img_gh from '../../assets/Outerwear/grey_hoodie.jpg';
import img_hgh from '../../assets/Outerwear/heathered_grey_hoodie.jpg';
import img_mh from '../../assets/Outerwear/maroon_hoodie.jpg';
import img_sc from '../../assets/Outerwear/swuvsa_crewneck.jpg';
import img_sbc from '../../assets/Outerwear/swuvsa_back_crewneck.jpg';
import img_lc from '../../assets/Outerwear/longevity_crewneck.jpg';
import img_dtc from '../../assets/Outerwear/de_thuong_crewneck.jpg';
import img_tw from '../../assets/Tshirts/tshirt_white.jpg';
import img_tts from '../../assets/Tshirts/tank_tam_su.jpg';
import img_tdm from '../../assets/Tshirts/tshirt_dep_male.jpg';
import img_tdf from '../../assets/Tshirts/tshirt_dep_female.jpg';
import img_tsts from '../../assets/Tshirts/tshirt_tam_su.jpg';
import img_tdm2 from '../../assets/Tshirts/tshirt_dep_male_2.jpg';
import img_tdf2 from '../../assets/Tshirts/tshirt_dep_female_2.jpg';
import img_lsb from '../../assets/Longsleeve/longsleeve_black.jpg';
import img_lsw from '../../assets/Longsleeve/longsleeve_white.jpg';
import img_bm from '../../assets/Beanies/Beanie_Maroon.jpg';
import img_bb from '../../assets/Beanies/Beanie_Blue.jpg';
import img_bo from '../../assets/Beanies/Beanie_Orange.jpg';
import img_bbl from '../../assets/Beanies/Beanie_Black.jpg';
import img_slan from '../../assets/Accessories/SWUVSA_Lanyard.jpg';


const inventory = [
  {
    name: 'Grey Hoodie',
    id: uniqid(),
    image: [img_gh],
    price: 59.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Outerwear']
  },
  {
    name: 'Heathered Grey Hoodie',
    id: uniqid(),
    image: [img_hgh],
    price: 59.99,
    s: 10,
    m: 0,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Outerwear']
  },
  {
    name: 'Maroon Hoodie',
    id: uniqid(),
    image: [img_mh],
    price: 59.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Outerwear']
  },
  {
    name: 'SWUVSA Crewneck',
    id: uniqid(),
    image: [img_sc, img_sbc],
    price: 59.99,
    s: 10,
    m: 10,
    l: 0,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Outerwear']
  },
  {
    name: 'Longevity Crewneck',
    id: uniqid(),
    image: [img_lc],
    price: 59.99,
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Outerwear']
  },
  {
    name: 'De Thuong Crewneck',
    id: uniqid(),
    image: [img_dtc],
    price: 59.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 10,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Outerwear']
  },
  {
    name: 'SWUVSA design Tee',
    id: uniqid(),
    image: [img_tw],
    price: 29.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'Tam Su Design Tank',
    id: uniqid(),
    image: [img_tts],
    price: 29.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'Dep Trai Tee',
    id: uniqid(),
    image: [img_tdm],
    price: 29.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'Dep Gai Tee',
    id: uniqid(),
    image: [img_tdf],
    price: 29.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'Tam Su Pocket Tee',
    id: uniqid(),
    image: [img_tsts],
    price: 29.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'Dep Trai Tee Design 2',
    id: uniqid(),
    image: [img_tdm2],
    price: 29.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'Dep Gai Tee Design 2',
    id: uniqid(),
    image: [img_tdf2],
    price: 29.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'SWUVSA Design Black',
    id: uniqid(),
    image: [img_lsb],
    price: 59.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'SWUVSA Design White',
    id: uniqid(),
    image: [img_lsw],
    price: 59.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['80% cotton, 20% Polyester','Neck Ribbing, Side Seamed & Double Needle Hems', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Shirt']
  },
  {
    name: 'Maroon Beanie',
    id: uniqid(),
    image: [img_bm],
    price: 19.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['100% cotton', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Accessories']
  },
  {
    name: 'Blue Beanie',
    id: uniqid(),
    image: [img_bb],
    price: 19.99,
    s: 0,
    m: 10,
    l: 10,
    xl: 2,
    info: ['100% cotton', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Accessories']
  },
  {
    name: 'Orange Beanie',
    id: uniqid(),
    image: [img_bo],
    price: 19.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['100% cotton', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Accessories']
  },
  {
    name: 'Black Beanie',
    id: uniqid(),
    image: [img_bbl],
    price: 19.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['100% cotton', 'Preshrunk to minimize shrinkage' ],
    tags: ['All','Accessories']
  },
  {
    name: 'SWUVSA Lanyard',
    id: uniqid(),
    image: [img_slan],
    price: 9.99,
    s: 10,
    m: 10,
    l: 10,
    xl: 2,
    info: ['Full color Sublimation'],
    tags: ['All','Accessories']
  }
]

function UseInventory(lookup) {
  function findItem(item) {
    return item.name === lookup;
  }

  return inventory.find(findItem);
}

function UseWholeInventory() {
  return inventory;
}

export { UseInventory , UseWholeInventory};