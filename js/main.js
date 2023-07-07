console.log("JS file included")
console.log("JS file included")

const title = document.querySelector("h1")

title.addEventListener("click", function(){
    //console.log(this)
    this.style.color = "darkgreen"
})

//点击title之后会变色

const like = document.getElementById('like')

like.addEventListener('click', function(e){
    e.target.classList.toggle("liked")
})

//icon点击之后会变色（喜欢，收藏..)

/* const like = document.getElementById('like')

like.addEventListener('click', function(e){
    if(e.target.classList.contains("liked")){
        e.target.classList = "animate_small"
    } else { 
        e.target.classList = "liked animate_large"
    }
}) */

// true or Fouse (multiple Elements)


//添加动画 命令在button上, 在html上创建button名字 ---  multiple elements eventListener
const tasks = document.getElementById("todolist").children

for (const task of tasks){
    task.addEventListener("click", completetask)
}

function completetask(e){
    e.target.classList.toggle("done")
}

//event delegation

const groceriesList= document.getElementById("grocerieslist")
groceriesList.addEventListener("click", addToCart)

function addToCart(e){
    // const item=e.target
    // if(item.classList.contains("item")){
    //     item.insertAdjacentHTML("beforeend",`<span>🛒</span>`)
    // }else{
    //     e.target.remove()
    // }

    const item=e.target.closest(".item")
   if(item){
       item.insertAdjacentHTML("beforeend",`<span>🛒</span>`)
   }
}


//form handing  //submit, create a function passing the event E 
const groseryForm= document.getElementById("groceryForm")
groceryForm.addEventListener("submit", function(e){
    e.preventDefault()
    const elements=groceryForm.elements
    for(const element of elements) {
        console.log(element.name + " = " +element.value)

        if(element.name=="groceryItem" && element.value !== ""){
            groceriesList.insertAdjacentHTML("beforeend",`<li class="item">${element.value}</li>`)
            groceryForm.reset()
        }
    }

})