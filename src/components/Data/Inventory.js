import { useState } from "react";
import uniqid from 'uniqid';
import img_gh from '../../assets/Outerwear/grey_hoodie.jpg';
import img_hgh from '../../assets/Outerwear/heathered_grey_hoodie.jpg';
import img_mh from '../../assets/Outerwear/maroon_hoodie.jpg';
import img_sc from '../../assets/Outerwear/swuvsa_crewneck.jpg';
import img_sbc from '../../assets/Outerwear/swuvsa_back_crewneck.jpg';
import img_lc from '../../assets/Outerwear/longevity_crewneck.jpg';
import img_dtc from '../../assets/Outerwear/de_thuong_crewneck.jpg';

function UseInventory(lookup) {
  const inventory = [
    {
      name: 'Grey Hoodie',
      id: uniqid(),
      image: img_gh,
      price: 59.99,
      s: 10,
      m: 10,
      l: 10,
      xl: 2
    },
    {
      name: 'Heathered Grey Hoodie',
      id: uniqid(),
      image: img_hgh,
      price: 59.99,
      s: 10,
      m: 0,
      l: 10,
      xl: 2
    },
    {
      name: 'Maroon Hoodie',
      id: uniqid(),
      image: img_mh,
      price: 59.99,
      s: 10,
      m: 10,
      l: 10,
      xl: 2
    },
    {
      name: 'SWUVSA Crewneck',
      id: uniqid(),
      image: img_sc,
      price: 59.99,
      s: 10,
      m: 10,
      l: 0,
      xl: 2
    },
    {
      name: 'SWUVSA Back Crewneck',
      id: uniqid(),
      image: img_sbc,
      price: 59.99,
      s: 10,
      m: 10,
      l: 0,
      xl: 2
    },
    {
      name: 'Longevity Crewneck',
      id: uniqid(),
      image: img_lc,
      price: 59.99,
      s: 0,
      m: 0,
      l: 0,
      xl: 0
    },
    {
      name: 'Dễ Thương Crewneck',
      id: uniqid(),
      image: img_dtc,
      price: 59.99,
      s: 0,
      m: 10,
      l: 10,
      xl: 2
    }
  ]

  function findItem(item) {
    return item.name === lookup;
  }

  return inventory.find(findItem);
}

export default UseInventory