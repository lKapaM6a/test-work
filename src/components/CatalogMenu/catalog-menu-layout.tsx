import React from "react";
import {ReactComponent as PowerBankIcon} from "./icons/power-bank.svg";
import {ReactComponent as TvPhotoIcon} from "./icons/tv-photo.svg";
import {ReactComponent as RobotsKidsIcon} from "./icons/robot-kids.svg";
import {ReactComponent as PSIcon} from "./icons/ps-5.svg";
import {ReactComponent as PhoneIcon} from "./icons/phone.svg";
import {ReactComponent as GyroScooterIcon} from "./icons/gyro-scooter.svg";
import {ReactComponent as AccessoriesIcon} from "./icons/accessoires.svg";
import {ReactComponent as DeskTowerIcon} from "./icons/desktower.svg";
import {ReactComponent as PrinterIcon} from "./icons/printer.svg";
import {ReactComponent as OtherIcon} from "./icons/other.svg";
import {ReactComponent as MultiMediaIcon} from "./icons/multi-media.svg";
import {ReactComponent as HeadphonesIcon} from "./icons/headphones.svg";
import {ReactComponent as FlashDiskIcon} from "./icons/flash-disk.svg";
import {ReactComponent as ObigrivachIcon} from "./icons/obigrivach.svg";
import {ReactComponent as TabletIcon} from "./icons/tablet.svg";
import {ReactComponent as TechniqueIcon} from "./icons/techtique.svg";
import {ReactComponent as HealthSportIcon} from "./icons/health-sport.svg";
import {ReactComponent as DiskIcon} from "./icons/disk.svg";
import {ReactComponent as SalesFireIcon} from "./icons/sales-fire.svg";
import {ReactComponent as SmartHomeIcon} from "./icons/smart-home.svg";
import {ReactComponent as PhonesIcon} from "./icons/phones.svg";
import {ReactComponent as CardsIcon} from "./icons/cards.svg";
import {ReactComponent as HandShakeIcon} from "./icons/handshake.svg";
import {CatalogItem} from "../../interfaces/CatalogMenu";

export const catalog: CatalogItem[] = [
  {
    id: 1,
    icon: <PowerBankIcon/>,
    label: 'Power Bank і аксесуари до них',
    url: '/',
    position: 1,
    isActive: false,
    children: [
      {
        id: 2,
        label: 'Power bank',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
        children: [
          {
            id: 3,
            label: 'lorem 2',
            url: '/',
            position: 1,
          },
        ]
      },
    ]
  },
  {
    id: 4,
    icon: <TvPhotoIcon/>,
    label: 'TV, Фото, Видео',
    position: 2,
    url: '/',
    isActive: false,
    children: [
      {
        id: 5,
        label: 'TV',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
      {
        id: 7,
        label: 'Фото',
        url: '/',
        position: 2,
        column: 2,
        isActive: false,
      },
      {
        id: 8,
        label: 'Видео',
        url: '/',
        position: 3,
        column: 3,
        isActive: false,
      }
    ]
  },
  {
    id: 9,
    icon: <RobotsKidsIcon/>,
    label: 'VR\\Робототехніка\\Товари для дітей',
    position: 3,
    url: '/',
    isActive: false,
    children: [
      {
        id: 10,
        label: 'VR',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
      {
        id: 11,
        label: 'Робототехніка',
        url: '/',
        position: 2,
        column: 2,
        isActive: false,
      },
      {
        id: 12,
        label: 'Товари для дітей',
        url: '/',
        position: 3,
        column: 3,
        isActive: false,
      }
    ]
  },
  {
    id: 13,
    icon: <PSIcon/>,
    label: 'Ігрові приставки',
    position: 4,
    url: '/',
    isActive: false,
    children: [
      {
        id: 14,
        label: 'Playstation',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 15,
    icon: <PhoneIcon/>,
    label: 'Аксесуари',
    position: 5,
    url: '/',
    isActive: false,
    children: [
      {
        id: 16,
        label: 'Аксесуари',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 17,
    icon: <GyroScooterIcon/>,
    label: 'Електротранспорт',
    position: 6,
    url: '/',
    isActive: false,
    children: [
      {
        id: 18,
        label: 'Електротранспорт',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 19,
    icon: <AccessoriesIcon/>,
    label: 'Зарядні пристрої та кабелі',
    position: 7,
    url: '/',
    isActive: false,
    children: [
      {
        id: 20,
        label: 'Зарядні пристрої',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
      {
        id: 21,
        label: 'Кабелі',
        url: '/',
        position: 1,
        column: 2,
        isActive: false,
      },
    ]
  },
  {
    id: 22,
    icon: <DeskTowerIcon/>,
    label: 'Комп\'ютерні комплектуючі',
    position: 8,
    url: '/',
    isActive: false,
    children: [
      {
        id: 23,
        label: 'Процесори',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 24,
    icon: <PrinterIcon/>,
    label: 'Комп\'ютерна техніка',
    position: 9,
    url: '/',
    isActive: false,
    children: [
      {
        id: 25,
        label: 'Комп\'ютерна техніка',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 26,
    icon: <OtherIcon/>,
    label: 'Інше',
    position: 10,
    url: '/',
    isActive: false,
    children: [
      {
        id: 27,
        label: 'Інше',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 28,
    icon: <MultiMediaIcon/>,
    label: 'Мультимедіа',
    position: 11,
    url: '/',
    isActive: false,
    children: [
      {
        id: 29,
        label: 'Мультимедіа',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 30,
    icon: <HeadphonesIcon/>,
    label: 'Навушники',
    position: 12,
    url: '/',
    isActive: false,
    children: [
      {
        id: 31,
        label: 'Навушники',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 32,
    icon: <FlashDiskIcon/>,
    label: 'Накопичувачі інформації',
    position: 13,
    url: '/',
    isActive: false,
    children: [
      {
        id: 33,
        label: 'Накопичувачі інформації',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 34,
    icon: <ObigrivachIcon/>,
    label: 'Обігрівачі/куртки з підігрівом',
    position: 14,
    url: '/',
    isActive: false,
    children: [
      {
        id: 35,
        label: 'Обігрівачі',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
      {
        id: 36,
        label: 'Куртки з підігрівом',
        url: '/',
        position: 1,
        column: 2,
        isActive: false,
      },
    ]
  },
  {
    id: 37,
    icon: <TabletIcon/>,
    label: 'Планшети та електронні книги',
    position: 15,
    url: '/',
    isActive: false,
    children: [
      {
        id: 38,
        label: 'Планшети',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
      {
        id: 39,
        label: 'Електронні книги',
        url: '/',
        position: 1,
        column: 2,
        isActive: false,
      },
    ]
  },
  {
    id: 40,
    icon: <TechniqueIcon/>,
    label: 'Побутова техніка дрібна',
    position: 16,
    url: '/',
    isActive: false,
    children: [
      {
        id: 41,
        label: 'Побутова техніка дрібна',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 42,
    icon: <HealthSportIcon/>,
    label: 'Портативна електроніка',
    position: 17,
    url: '/',
    isActive: false,
    children: [
      {
        id: 43,
        label: 'Портативна електроніка',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 44,
    icon: <DiskIcon/>,
    label: 'Програмне забезпечення',
    position: 18,
    url: '/',
    isActive: false,
    children: [
      {
        id: 45,
        label: 'Програмне забезпечення',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 46,
    icon: <SalesFireIcon/>,
    label: 'Розпродаж!!!',
    position: 19,
    url: '/',
    isActive: false,
    children: [
      {
        id: 47,
        label: 'Розпродаж!!!',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 48,
    icon: <SmartHomeIcon/>,
    label: 'Розумний будинок',
    position: 20,
    url: '/',
    isActive: false,
    children: [
      {
        id: 49,
        label: 'Розумний будинок',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
    ]
  },
  {
    id: 50,
    icon: <PhonesIcon/>,
    label: 'Смартфони, Телефони',
    position: 21,
    url: '/',
    isActive: false,
    children: [
      {
        id: 51,
        label: 'Смартфони',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
        children: [
          {
            id: 52,
            label: 'Xiaomi',
            url: '/',
            position: 1,
          },
          {
            id: 53,
            label: 'POCO',
            url: '/',
            position: 2,
          },
          {
            id: 54,
            label: 'Samsung',
            url: '/',
            position: 3,
          },
          {
            id: 55,
            label: 'Apple',
            url: '/',
            position: 4,
          },
          {
            id: 56,
            label: 'ZTE',
            url: '/',
            position: 5,
          },
          {
            id: 111,
            label: 'Nubia',
            url: '/',
            position: 6,
          },
          {
            id: 222,
            label: 'Motorola',
            url: '/',
            position: 7,
          },
          {
            id: 333,
            label: 'Vivo',
            url: '/',
            position: 8,
          },
          {
            id: 444,
            label: 'OnePlus',
            url: '/',
            position: 9,
          },
          {
            id: 555,
            label: 'Nokia',
            url: '/',
            position: 10,
          },
          {
            id: 666,
            label: 'OPPO',
            url: '/',
            position: 11,
          },
          {
            id: 777,
            label: 'Новинки',
            url: '/',
            position: 12,
          },
          {
            id: 888,
            label: 'Мобільні телефони',
            url: '/',
            position: 13,
          },
          {
            id: 999,
            label: 'Last',
            url: '/',
            position: 14,
          },
        ]
      },
      {
        id: 57,
        label: 'Останні новинки',
        url: '/',
        position: 2,
        column: 1,
        isActive: false,
        children: [
          {
            id: 58,
            label: 'iPhone 13 Pro Max',
            url: '/',
            position: 1,
          },
          {
            id: 59,
            label: 'iPhone 13 Pro',
            url: '/',
            position: 2,
          },
          {
            id: 60,
            label: 'iPhone 13',
            url: '/',
            position: 3,
          },
          {
            id: 61,
            label: 'iPhone 13 Pro Mini',
            url: '/',
            position: 4,
          },
          {
            id: 62,
            label: 'Xiaomi 11T',
            url: '/',
            position: 5,
          },
          {
            id: 3333,
            label: 'lorem 2',
            url: '/',
            position: 6,
          },
        ]
      },
      {
        id: 63,
        label: 'Навушники',
        url: '/',
        position: 3,
        column: 2,
        isActive: false,
      },
      {
        id: 64,
        label: 'Портативна акустика',
        url: '/',
        position: 4,
        column: 2,
        isActive: false,
      },
      {
        id: 65,
        label: 'Аксесуари',
        url: '/',
        position: 5,
        column: 2,
        isActive: false,
        children: [
          {
            id: 66,
            label: 'Чохли для смартфонів',
            url: '/',
            position: 1,
          },
          {
            id: 67,
            label: 'Картки пам’яті',
            url: '/',
            position: 2,
          },
          {
            id: 68,
            label: 'Захисне скло',
            url: '/',
            position: 3,
          },
          {
            id: 69,
            label: 'Зарядні пристрої',
            url: '/',
            position: 4,
          },
          {
            id: 70,
            label: 'Безпроводні зарядки',
            url: '/',
            position: 5,
          },
          {
            id: 4444,
            label: 'lorem 2',
            url: '/',
            position: 6,
          },
        ]
      },
      {
        id: 71,
        label: 'Power bank',
        url: '/',
        position: 6,
        column: 2,
        isActive: false,
        children: [
          {
            id: 72,
            label: 'Для ноутбуків',
            url: '/',
            position: 1,
          },
          {
            id: 73,
            label: 'Безпровідна зарядка',
            url: '/',
            position: 2,
          },
          {
            id: 74,
            label: '10 000мАч +',
            url: '/',
            position: 3,
          },
          {
            id: 75,
            label: '13 000мАч +',
            url: '/',
            position: 4,
          },
        ]
      },
      {
        id: 76,
        label: 'Чохли для смартфонів',
        url: '/',
        position: 7,
        column: 3,
        isActive: false,
        children: [
          {
            id: 77,
            label: 'Для Apple',
            url: '/',
            position: 1,
          },
          {
            id: 78,
            label: 'Для Samsung',
            url: '/',
            position: 2,
          },
          {
            id: 79,
            label: 'Для Xiaomi',
            url: '/',
            position: 3,
          },
        ]
      },
      {
        id: 80,
        label: 'Стартові пакети',
        url: '/',
        position: 8,
        column: 3,
        isActive: false,
        children: [
          {
            id: 81,
            label: 'Vodafone',
            url: '/',
            position: 1,
          },
          {
            id: 82,
            label: 'Київстар',
            url: '/',
            position: 2,
          },
          {
            id: 83,
            label: 'lifecell',
            url: '/',
            position: 3,
          },
        ]
      },
      {
        id: 84,
        label: 'Поповнення рахунку',
        url: '/',
        position: 9,
        column: 3,
        isActive: false,
      },
      {
        id: 85,
        label: '3G/4G модеми',
        url: '/',
        position: 10,
        column: 3,
        isActive: false,
      },
      {
        id: 86,
        label: 'Домашній інтернет та ТБ',
        url: '/',
        position: 11,
        column: 3,
        isActive: false,
      },
    ]
  },
  {
    id: 87,
    icon: <CardsIcon/>,
    label: 'Стартові пакети та скретч карти',
    position: 22,
    url: '/',
    isActive: false,
    children: [
      {
        id: 88,
        label: 'Стартові пакет',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
      {
        id: 89,
        label: 'Скретч карти',
        url: '/',
        position: 1,
        column: 2,
        isActive: false,
      },
    ]
  },
  {
    id: 90,
    icon: <HandShakeIcon/>,
    label: 'Послуги',
    position: 23,
    url: '/',
    isActive: false,
    children: [
      {
        id: 91,
        label: 'Послуга 1',
        url: '/',
        position: 1,
        column: 1,
        isActive: false,
      },
      {
        id: 92,
        label: 'Послуга 2',
        url: '/',
        position: 1,
        column: 2,
        isActive: false,
      },
    ]
  }
]