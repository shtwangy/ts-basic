export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }
  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample 5', japan)

  const america: Country = {
    capital: 'Washington D.C.',
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object object sample 6', america)
}
