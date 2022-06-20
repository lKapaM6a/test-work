import React, {FC, useState, useRef, useLayoutEffect} from 'react'
import {ReactComponent as Arrow} from './icons/arrow.svg'
import styles from './SeoText.module.scss'

interface Props {

}

export const SeoText: FC<Props> = props => {
  const {} = props

  const [open, setOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const HEIGHT_TEXT = 175;

  const element: any = useRef(null);
  useLayoutEffect(() => {
      if (element.current) {
        if (element.current.clientHeight < HEIGHT_TEXT) {
          setShowBtn(false);
          setShowMore(true);
        }
      }
    }, [],
  );

  const content = "<div><h1>Інтернет мазагин електроніки та цифрової техніки <span>\"КІБЕРНЕТИКИ\"</span></h1>\n" +
    "    <p>ТМ \"Кібернетики\" – динамично развивающаяся торговая марка в Украине, которая существует с 2009 года. Компания\n" +
    "        занимается продажей мобильных телефонов, ноутбуков, компьютеров и комплектующих. В магазинах торговой сети\n" +
    "        «Кібернетики» вы всегда сможете найти товар для души. Все продавцы нашей компании постоянно проходят обучающие\n" +
    "        тренинги от мировых производителей современной электроники для оказания более качественных и профессиональных\n" +
    "        консультаций. Внимание и индивидуальный подход к каждому клиенту не оставят вас равнодушными. Наш интернет\n" +
    "        магазин гаджетов и аксессуаров предлагает качественную цифровую технику от мировых производителей.</p>\n" +
    "\n" +
    "       <p> Продукция, представленная в сети ТМ \"Кібернетики\", отличается высоким качеством, современностью и стильным\n" +
    "        дизайном. У нас вы найдете огромный выбор современных мобильных телефонов, персональных компьютеров, ноутбуков,\n" +
    "        фотоаппаратов, а также аксессуаров к ним. Мы постоянно расширяем и обновляем ассортимент товаров, неустанно\n" +
    "        отслеживая все тенденции в мире электроники и цифровой техники. У нас вы можете приобрести online и стать\n" +
    "        счастливым владельцем смартфона, о котором вы давно мечтали, или приобрести ноутбук, который станет помощником\n" +
    "           по работе.</p>\n" +
    "\n" +
    "        <p>Уделяя внимание ассортименту, интернет магазин электроники не забывает и о качестве товара. Все товары,\n" +
    "        представленные в онлайн магазине электроники «Кібернетики» сертифицированы, имеют гарантию от производителя, и\n" +
    "        соответствуют всем мировым и украинским стандартам.</p></div>"

  return (
    <div className={styles.description}>
      <div className="container text-left">
        <div className={`${styles.description__text} ${open ? styles.active : ""} ${showMore ? styles.mask : ""}`}
             ref={element}>
          <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
        {!open && showBtn ? (
          <button className={styles.description__btn} onClick={() => setOpen((!open))}>
            <Arrow/>
          </button>
        ) : null}
      </div>
    </div>
  )
}

