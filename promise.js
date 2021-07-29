// let promise = new Promise (function (resolve, reject){
//     resolve("Success")
// });

// promise.then(function (x){
//     console.log('response ==> ',x)
// });

// let promiseReject = new Promise((resolve, reject)=>{
//     reject('error')
// })

// promiseReject.then(x => {
//     console.log('then response ==> ',x)
// }).catch(err => {
//     console.log('catch response ==> ',err)
// })

function count1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('count1')
            resolve() //return ค่า
        },3000) //3sec
    })
}

function count2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('count2')
            // resolve()  //return ค่า
            reject('error 101')
        },2000)  //2sec
    })
}

function count3(){
    console.log('count3')
}

count1().then(x =>{
    return count2()
}).then(x2=>{
    count3()
}).catch(err =>{
    console.log(`error ==> `, err)
})
