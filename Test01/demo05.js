// let result1 = window.confirm("你确定不来砍我");
// console.log(result1);

// let result2 = window.prompt("请输入你的姓名","张三");
// console.log(result2);

//定时器
let timer = window.setInterval(function(){
    console.log('helloworld');
    window.clearInterval(timer);
},1000
);

//定时交替输出
window.setTimeout(function(){
    console.log('helloworld'),1000
});

function world(){
    console.log('helloworld');
}

function java(){
    console.log('Hellojava');
}
let x = 0;
window.setInterval(function(){
    if(x%2 == 0){
        java();
    }else{
        world();
    }
    x++;
},1000);