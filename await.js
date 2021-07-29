function taskOne() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log("this is task 1");
            resolve()
        }, 500);
    })
 }
function taskTwo() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log("this is task 2");
            resolve()
        }, 2000);
    })
 }
 function taskThree() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log("this is task 3");
            resolve()
        }, 1000);
    })
 }

  async function main(){ //จะ await ตรงไหน function นั้นต้องเป็น promise เท่านั้นไม่งั้นไม่เกิดประโยชน์
      await taskOne()
      await taskTwo()
      await taskThree()
  }

  main()