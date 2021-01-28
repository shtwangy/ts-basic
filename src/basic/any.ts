export const AnySample = () => {
  let name: any = 'shtwangy' // string型を代入
  console.log('any sample 1:', typeof name, name)

  name = 28 // number型を再代入できる. 型が変わる
  console.log('any sample 2:', typeof name, name)
}
