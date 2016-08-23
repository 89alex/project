const datas = [
  {id: 1001, title: '碟中谍5：神秘国度', img: '/static/images/img/m-img3.png', num: 4, sale: 50, check: false},
  {id: 1002, title: '诛仙-青云志', img: '/static/images/img/m-img2.png', num: 2, sale: 60, check: false}
]

export const initStore = ({dispatch}) => {
  dispatch('INIT_STORE', datas)
}
