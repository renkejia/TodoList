//获取添加任务表单信息
const form = document.querySelector('.wrap__form');
//获取添加任务信息
const input = document.querySelector('.wrap__form__topic');
//获取清除任务按键
const clearBtn = document.querySelector('.card-action__btn-clear');
//获取任务列表
const tasksUl = document.querySelector('.card-action__collection');
//获取筛选任务输入
const filterInput = document.querySelector('#filter');

//数据
let tasks = ['任务1','任务2'];

show(tasks);

//参数data为数组
function show(data){
    // 初始化列表内容
    tasksUl.innerHTML = '';
    for( index in data ){
        //1.添加
        let li = document.createElement('li');
        li.classList.add('collection-item');
        li.innerHTML = data[index]+'<a class="delete-item" href="javascript:;">x</a>';
        //2.插入
        tasksUl.appendChild(li);
        input.value = '';
    }
}
// 初始化

// 1.开始监听
startListen();

function startListen(){
    // 添加任务功能
    form.addEventListener('submit',addTask);
    // 删除单个任务
    tasksUl.addEventListener('click',removeTask);
    // 筛选任务
    filterInput.addEventListener('keyup',filterTask);
    // 清除任务
    clearBtn.addEventListener('click',clearTasks);
}

function addTask(e){
    //0.获取用户输入
    const newTask = input.value;
    //判断数据中有无该任务
    if(tasks.indexOf(newTask) == -1){
        //添加数据到tasks
        tasks.unshift(newTask);
        show(tasks);
    }else{
        alert('存在该任务');
        input.value = '';
    }
    //3.防止刷新
    e.preventDefault();
    addWindow.classList.remove('show');
    addWindow.classList.add('hide');
}

function removeTask(e){
    //删除数据中数据
    // console.log(e.target.classList);
    if(e.target.classList.contains('delete-item')){
        let index = tasks.indexOf(e.target.firstChild.textContent);
        //从index开始,删除一个元素
        tasks.splice(index,1);
        show(tasks);
    }
}
function filterTask(){
    //获取筛选框输入
    let filterText = filterInput.value.toLowerCase();
    //筛选任务              数据数组tasks中忽略大小写，tasks中有没有筛选框中输入的内容filterText 
    let filterTasks = tasks.filter(task => task.toLocaleLowerCase().includes(filterText))
    show(filterTasks);
}

function clearTasks(){
    if(confirm('确定清除任务列表吗')){
    tasks = [];
    show(tasks);
    }
}