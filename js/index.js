//MVC 重构
//获取表单
const form = document.querySelector('.wrap__form');
//获取用户输入
const input = document.querySelector('.wrap__form__topic');
//获取任务列表的ul标签
const tasksUl = document.querySelector('.card-action__collection');
//获取删除单个任务的a标签
const deletTask = document.querySelector('.delete-item');
//获取筛选输入
const filterInput = document.getElementById('filter');
// 清除任务按钮
const clearBtn = document.querySelector('.card-action__btn-clear');

//存储数据
let tasks = ['任务a', '任务b'];

//0.初始化
function init() {
    //显示数据
    show(tasks);
}
init();
//1.开始监听
startListen();
function show(data) {
    // 初始化列表内容
    tasksUl.innerHTML = '';
    for (index in data) {
        //1.生成
        let li = document.createElement('li');
        li.className = 'collection-item';
        li.innerHTML = data[index] + '<a class="delete-item" href="javascript:;">x</a>';

        //2.插入
        tasksUl.appendChild(li);
        input.value = "";
    }
}

function startListen() {
   //1.添加  --form表单提交
    form.addEventListener('submit', addTask);

    //2.删除单个任务  --鼠标点击
    tasksUl.addEventListener('click', removeTask);

    //3.清除所有任务  --鼠标点击
    clearBtn.addEventListener('click', clearAllTasks);

    //4.筛选任务  --按键松开
    filterInput.addEventListener('keyup', filterTasks);
}

//1.添加任务函数
function addTask(e) {
    // console.log('a');    
    //0.输入内容
    
    const newTask = input.value;
    // console.log(newTask);
    //判断是否已存在该数据
    // console.log(newTask);
    // if(!tasks.findIndex(newTask)){
        //添加数据
        tasks.unshift(newTask);
        //渲染页面
        show(tasks);
        // console.log('a');
    // }else{
        // alert('存在该任务！');
    // }

    /*  在渲染数据阶段执行了
    //1.生成
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.innerHTML = newTask + '<a class="delete-item" href="javascript:;">x</a>';

    //2.插入
    tasksUl.appendChild(li);
    */
    //3.防止刷新
    e.preventDefault();
    addWindow.style.display = 'none';
}

//2.删除单个任务函数
function removeTask(e) {
    // console.log(event.target);
    if (event.target.classList.contains('delete-item')) {
        // console.log(en)
        // event.target.parentNode.remove();
        //获取单个任务在数据数组中的索引
        let index = tasks.indexOf(e.target.parentNode.firstChild.textContent)
        //从index开始删除一个
        tasks.splice(index,1);
        show(tasks);
    }
}

// 3.清除所有任务函数
function clearAllTasks() {
    // tasksUl.innerHTML = '';
    //清空数据
    tasks = [];
    show(tasks);
}

// 4.筛选任务函数
function filterTasks(e) {
    // console.log('aaaa');
    //获取筛选框输入的内容
    const filterText = filterInput.value.toLowerCase();
    console.log(filterText);
    //筛选任务              数据数组tasks中忽略大小写，tasks中有没有筛选框中输入的内容filterText 
    let filterTasks = tasks.filter(task => task.toLocaleLowerCase().includes(filterText));
    show(filterTasks);

    // document.querySelectorAll('.collection-item').forEach(function (liList) {
    //     //获取模糊框的输入内容               关闭大小写敏感
    //     // console.log(liList.firstChild);
    //     //获取li标签中的text
    //     const item = liList.firstChild.textContent.toLowerCase();
    //     //判断li标签的内容有没有filterText
    //     if (item.indexOf(filterText) != -1) {
    //         //如果包含
    //         liList.classList.remove('hide');
    //     } else {
    //         liList.classList.add('hide');
    //     }
    // })
}

