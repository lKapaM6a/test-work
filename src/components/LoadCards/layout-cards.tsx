import React from "react";
import {LoadCards} from "../../interfaces/LoadCards/LoadCards.interface";

export const cards: LoadCards[] = [
  {
    id: 1,
    labels: [
      {
        id: 1,
        text: 'Топ продаж',
        bgColor: '#F9E505',
        color: '#2B2A29'
      },
      {
        id: 2,
        text: 'Акция',
        bgColor: '#F54503',
        color: '#FFFFFF'
      }
    ],
    image: {
      image: '/img/cards/lenovo.png',
      url: '/',
      label: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)'
    },
    color: [
      {
        id: 1,
        color: '#2B2A29',
        label: 'Black',
        url: '/',
        active: true
      },
      {
        id: 2,
        color: '#FFFFFF',
        label: 'White',
        url: '/',
        border: '#9E9E9E'
      },
      {
        id: 3,
        color: '#806666',
        label: 'Brown',
        url: '/',
      },
      {
        id: 4,
        color: '#5B537A',
        label: 'Purple',
        url: '/',
      },
    ],
    available: true,
    cashback: '458',
    name: {
      name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      url: '/',
    },
    rating: {
      rating: 3.8,
      url: '/'
    },
    price: {
      oldPrice: '65 000',
      price: '50 000',
      discount: '23'
    },
    chars: [
      {
        id: 1,
        info: 'Діагональ екрану',
        detail: '10,3”'
      },
      {
        id: 2,
        info: 'Розширення екрану',
        detail: '1920х1200'
      },
      {
        id: 3,
        info: 'Матриця',
        detail: 'IPS'
      },
      {
        id: 4,
        info: 'Оперативна пам’ять',
        detail: '4 ГБ'
      },
      {
        id: 5,
        info: 'Стандарт захисту',
        detail: 'Без захисту'
      },
      {
        id: 6,
        info: 'Процесор',
        detail: 'MediaTek Helio P22T'
      },
    ]
  },
  {
    id: 2,
    labels: [],
    image: {
      image: '',
      url: '/',
      label: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)'
    },
    color: [],
    available: false,
    name: {
      name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      url: '/',
    },
    price: {
      price: '50 000',
    },
    chars: []
  }
]