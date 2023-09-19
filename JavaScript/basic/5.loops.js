/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 1; i <= 10; i++){
    console.log(i);
}

let tmp = 0;

for(let i = 5; i <= 15; i++){
    tmp += i;
}
console.log(tmp);

for(let i = 1; i <= 9; i++){
    console.log('------- '+i+'단-------');
    for(let j = 2; j <= 9; j++){
        console.log(i +'*'+ j +'=' + i*j);
    }
}

/**
 * for .. in
 */

const human = {
    name : 'jiwon',
    age : 55,
    gender : '남자'
}

for(let key in human){
    console.log(human[key]);
    console.log(key + ":" + human[key]);
}

/**
 * for .. of
 */

human = ['jiwon','sumin','so']
for(let value of human){
    console.log(value);
}

/**
 * while
 */

let number = 0;

while(number < 11){
    console.log(number);
    number++;
}

/**
 * do..while
 */

number = 0;

do{
    console.log(number);
    number++;
}while(number < 11)

/**
 * break
 * continue
 */

number = 0;
while(true){
    // if(number % 2 === 1){
    //     number++;
    //     continue
    // }

    console.log(number);
    number++;

    if(number > 10){
        break;
    }
}