/*
import World from './world'

const root = document.getElementById('root')
const world = new World('Hello, TS World!!')
world.sayHello(root)
*/

/*
// 基本の型定義
import { AnySample, NotExistSample, PrimitiveSample, UnknownSample } from './basic'

PrimitiveSample()
NotExistSample()
AnySample()
UnknownSample()
*/

// 「04.関数の型定義」のサンプルコード
/*import { logMessage, logMessage5 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript!')
logMessage5('Hello Type Signature!')
isUserSignedIn('ABC', 'shtwangy')
isUserSignedIn('123')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(1000, 2000, 500, 3000, 250)
console.log('Function parameters sample 5: Total price:', sum)*/

import objectSample from './object/object'
objectSample()
