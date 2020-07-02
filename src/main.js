let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*大家好，我是Cathy海希
*接下来我来小试牛刀一下(^^)
*首先，我要准备一个div*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
* 注意看好了哦
* 首先，把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
 #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
 /*加两个神秘的小球*/
 #div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;   
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%); 
 }
  #div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);    
 }
/* 怎么样？效果还不错吧？谢谢观赏*/
`;
let string2 = "";
let n = 0;
console.log(string.length);
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        // 不想去区别到底是PC还是手机，统一往下滚就好了
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 0);
}

step();
//
//
// setTimeout(()=>{
//     style.innerHTML= `
// body{
//     color:red;
//     }
// `
// },3000)
//
