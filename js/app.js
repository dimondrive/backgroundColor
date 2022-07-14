const btnClick=document.querySelector('.click');
const colorText=document.querySelector('.text');

const color=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function getRandom(){
    return Math.floor(Math.random()*color.length);
}

btnClick.addEventListener('click',function(){
    let hex='#';
    for(let i=0;i<6;i++){
        hex+=color[getRandom()];
    }
    colorText.innerHTML=colorText.style.color=hex;
    document.body.style.backgroundColor=hex;
})