import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Ком`юніті')

page.append(title)

const COMMUNITY_LIST = {
  category: [
    { text: 'База знань', viewed: true },
    { text: 'Інформація', viewed: false },
  ],
  src: '/img/community.png',
  subtitle: 'Що таке база знань?',
  info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач',
  button: 'Перейти до ком`юніті у Телеграм',
}

const createInfo = () => {
  const infoList = createElement('main', 'info__list')

  const infoHeader = createElement('div', 'info__header')

  COMMUNITY_LIST.category.forEach((data) => {
    const info = createElement(
      'span',
      data.viewed
        ? 'button info__category info__category--viewed'
        : 'button info__category',
      data.text,
    )
    infoHeader.append(info)
  })

  const img = createElement('img', 'img')
  img.src = COMMUNITY_LIST.src

  const blockInfo = createElement('div', 'block-info')

  const titleSmaller = createElement(
    'h2',
    'title title--smaller',
    COMMUNITY_LIST.subtitle,
  )
  const infoText = createElement(
    'p',
    'info',
    COMMUNITY_LIST.info,
  )

  blockInfo.append(titleSmaller, infoText)

  const buttonTelegram = createElement(
    'button',
    'button button--properties',
    COMMUNITY_LIST.button,
  )

  infoList.append(
    infoHeader,
    img,
    blockInfo,
    buttonTelegram,
  )

  return infoList
}

const info = createInfo()
page.append(info)
