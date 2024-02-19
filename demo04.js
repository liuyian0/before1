fn1();
function fn1(){
    document.write("这里是fn1方法");
}

fn2(10,"十");
function fn2(a,b){
    console.log(a+b);
}

console.log("------------------------");
//遍历
fn3(10,"十","ten");
function fn3(){
    for(let i = 0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
console.log("------------------------");
//数组
let arr1 = new Array(1,23,'张三',true);
console.log(arr1);
for(let i = 0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log("------------------------");
arr1.length = 5;
for(let i = 0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log(arr1);
 let arr2 = [2];
console.log(arr2);