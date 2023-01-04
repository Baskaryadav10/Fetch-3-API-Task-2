var url_data = `https://cataas.com/api/cats`

async function res_fetching(){
    var url_fetch = await fetch(url_data);
    var res = await url_fetch.json();
    console.log(res);
    for (let j of res){
        console.log(j);
        console.log('This is the tags',j['tags']);
        var child_ele = document.createElement('p');
        child_ele.innerText = j['tags'];
        document.querySelector('body').append(child_ele);
    }
    
}
res_fetching()