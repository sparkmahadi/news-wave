const blogButton = document.getElementById('blog');
blogButton.addEventListener('click', function(){
    const notifyMessage = document.getElementById('notify-message');
    notifyMessage.innerText = 'BLOGS';
    newsSection.innerHTML='';

    const blogs = document.createElement('div');
    blogs.innerHTML=`
    <div class="bg-white rounded-lg px-7 pb-5">
                    <h4 class="font-semibold text-2xl pt-5">Question: What is the difference among var, let and const?</h4>
                    <h6 class="pt-3">Answer: The differences between var, let, and const variable declaration in JavaScript include:
                        Variables declared with var and const are scoped to the immediate function body.
                        Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared.
                        Variables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block.</h6>
                    
                        <h4 class="font-semibold text-2xl pt-7">Question: What is the difference between a normal and arrow function?</h4>
                    <h6 class="pt-3">Answer: The differences between var, let, and const variable declaration in JavaScript include:
                        Variables declared with var and const are scoped to the immediate function body.
                        Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared.
                        Variables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block.</h6>
                    
                        <h4 class="font-semibold text-2xl pt-7">Question: What is the difference Among map(), forEach(), filter() and find()?</h4>
                    <h6 class="pt-3">Answer: The differences between var, let, and const variable declaration in JavaScript include:
                        Variables declared with var and const are scoped to the immediate function body.
                        Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared.
                        Variables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block.</h6>
                    
                        <h4 class="font-semibold text-2xl pt-7">Question: What is the use of template string?</h4>
                    <h6 class="pt-3">Answer: The differences between var, let, and const variable declaration in JavaScript include:
                        Variables declared with var and const are scoped to the immediate function body.
                        Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared.
                        Variables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block.</h6>
                </div>
    `;

    newsSection.appendChild(blogs);
})