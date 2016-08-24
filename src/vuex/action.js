
export const addNum = ({dispatch}, index) => {
  dispatch('ADDNUM', index)
}
export const reduxNum = ({dispatch}, index) => {
  dispatch('REDUXNUM', index)
}
export const Checked = ({dispatch}, index) => {
  dispatch('CHECKED', index)
}
export const AllChecked = ({dispatch}, bool) => {
  dispatch('ALLCHECKED', bool)
}
export const buyTicks = ({dispatch}, array) => {
  dispatch('BUYTICKS', array)
}
