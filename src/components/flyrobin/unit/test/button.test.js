import { createTest, createVue, destroyVM } from '../utils'
// import FrButton from '../../packages/button'
import FrButton from '../../packages/button/index'

describe('测试Button', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('created', () => {
    vm = createTest(FrButton, {
      type: 'primary'
    }, true)
    let buttonElm = vm.$el
    expect(FrButton.classList.contains('fr-button--primary').to.be.true) 
  })
})

// test('tt', () => {
//   const str = 'Lebron James'
//   expect(str).toMatch(/Ja/)
// })