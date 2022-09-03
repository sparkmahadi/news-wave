const blogButton = document.getElementById('blog');
blogButton.addEventListener('click', function(){
    const notifyMessage = document.getElementById('notify-message');
    notifyMessage.innerText = 'BLOGS';
    newsSection.innerHTML='';

    const blogs = document.createElement('div');
    blogs.innerHTML=`
    <div class="bg-white rounded-lg px-7 pb-5 text-center md:text-left">

    <h4 class="font-semibold text-2xl pt-7">Question: What is the difference among var, let and const?</h4>
                        <p class="pt-3"><span class='font-bold'>Answer:</span><br>
                        <ul class="list-disc list-inside">
                        <li>var declarations are globally scoped or function scoped while let and const are block scoped.
                        </li>
                        <li>var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
                        </li>
                        <li>They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.</li>
                        </ul>
                        </p>

    <h4 class="font-semibold text-2xl pt-7">Question: What is the difference between a normal and arrow function?</h4>
                    <p class="pt-3"><span class='font-bold'>Answer:</span> Let's see the differences below: -
                      <ul class="list-disc list-inside">
                        <li><span class='font-bold'>Syntax : </span>A programmer can get the same result as regular functions by writing a few lines of code using arrow functions.<br>
                          Regular function ES5:<br>
                          var add = function(a, b) {  return a + b;};<br><br>
                          Arrow function ES6:<br>
                          let add = (a, b) => { return a + b};
                          <br>
                          let add = (a, b) => a + b;<br><br>
                          Curly brackets are not required if only one expression is present.<br><br>
                        </li>
                        <li><span class='font-bold'>Arguments binding :</span> arguments object inside the regular functions contains the list of arguments.<br>
                          On the opposite, The arrow function doesn’t define arguments i.e. they do not have arguments binding.<br>
                          <br>
                        </li>
                        <li><span class='font-bold'>Use of this keyword : </span> Inside of a regular JavaScript function, this value is dynamic. The dynamic context means that the value of this depends on how the function is invoked.<br>
                          The behavior of this inside of an arrow, function differs considerably from the regular function’s this behavior as an arrow function does not have its own “this” keyword.<br><br>
                          The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function which means No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function.<br><br>
                        </li>
                        <li><span class='font-bold'>Using a new keyword: </span>Regular functions are constructible and callable. They can be called using the new keyword. <br>But, the arrow functions are only callable and not constructible, i.e., arrow functions can never be used as constructor functions.

                        </li>
                      </ul>
                    </p>
                    
                        <h4 class="font-semibold text-2xl pt-7">Question: What is the difference among map(), forEach(), filter() and find()?</h4>
                        <p class="pt-3"><span class='font-bold'>Answer:</span><br>
                        <span class='font-bold'>1. Map : </span>Map takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.<br>
                          <br>
                          <span class='font-bold'>2. Foreach : </span>
                          Foreach takes a callback function and run that callback function on each element of array one by one. But it doesn't return anything like a function.<br>

                          For every element on the array we are calling a callback which gets element & its index provided by foreach. <br>

                          Basically forEach works as a traditional for loop looping over the array and providing you array elements to do operations on them. <br><br>

                                                    
                          <span class='font-bold'>3. Filter : </span>
                          Whenever you have to filter an array Javascript inbuilt method to filter your array is the right choice to use. Filter let you provide a callback for every element and returns a filtered array.<br>
                          The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value. If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.<br>
                          Also take notice filter does not update the existing array it will return a new filtered array every time.<br>
                          <br>
                          <span class='font-bold'>4. Find : </span>
                          Find takes a callback function which returns only the first value matching to the condition given for the element inside an array.
                        </p>
                    
                        <h4 class="font-semibold text-2xl pt-7">Question: What is the use of template string?</h4>
                        <p class="pt-3 pb-20"><span class='font-bold'>Answer : </span>Template strings are a powerful feature of modern JavaScript released in ES6. It lets us insert/interpolate variables and expressions into strings without needing to concatenate like in older versions of JavaScript. It allows us to create strings that are complex and contain dynamic elements. Another great thing that comes with template strings are tags. Tags are functions that take a string and the decomposed parts of the string as parameters and are great for converting strings to different entities.
                          </p>
                </div>
    `;

    newsSection.appendChild(blogs);
})