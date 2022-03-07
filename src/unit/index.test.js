import sum from './index'
const can1 = {
  flavor: 'ysn',
  ounces: 12,
};
const can2 = {
  flavor: 'ysn',
  ounces: 12,
};
const flag = true

describe('判断这个测试是否成功', () => {
  it('flag is true ?', done => {
    setTimeout(() => {
      expect(flag).toBe.true
      done()
    }, 20);
  })
  it('判断这个对象是否相等', () => {
    expect(can1).toEqual(can2)
  })
