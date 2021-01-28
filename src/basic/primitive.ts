export const PrimitiveSample = () => {
  const name = 'shtwangy'
  // err: name = 123
  console.log('primitive sample 1: ', typeof name, name)

  const age = 28
  // err: age = '28'
  console.log('primitive sample 2: ', typeof age, age)

  const isSingle = true
  console.log('primitive sample 3: ', typeof isSingle, isSingle)

  const isOver20 = age >= 20
  console.log('primitive sample 4: ', typeof isOver20, isOver20)
}
