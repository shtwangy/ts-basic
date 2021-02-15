export default function objectSample() {
  /*const a: object = {
        name: 'shtwangy',
        age: 27
    }*/
  const a: Record<string, any> = {
    name: 'shtwangy',
    age: 27,
  }
  // a.name ← error
  console.log(a.name)

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample 1', country)

  country = {
    language: 'English',
    name: 'United State of America',
  }
  console.log('Object object sample 2', country)
}
