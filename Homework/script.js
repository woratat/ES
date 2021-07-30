let profile = document.querySelector('.profile');

function promiseCallApi(){
    axios.get('https://reqres.in/api/users/5').then(res =>{
        profile.src = res.data.data.avatar
        document.getElementById('name').innerText = res.data.data.first_name+" "+res.data.data.last_name
        document.getElementById('email').innerText = res.data.data.email
    }).catch(err =>{
        console.log(`err`, err)
    })
}

const testFunction = async() =>{
    try {
        let response = await axios.get('https://reqres.in/api/users/5')
        profile.src = response.data.data.avatar
        document.getElementById('name').innerText = response.data.data.first_name+" "+response.data.data.last_name
        document.getElementById('email').innerText = response.data.data.email
    } catch (error) {
        console.log('error :>>', error)
    }
}
promiseCallApi()
// testFunction()
