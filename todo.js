let input = prompt('What would you like to do today?');
const todos = ['Buy a house', 'Go to the beach', 'Submit your Assignment'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*******************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]}  is deleted from your todo list`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('Ok, Go ahead and QUIT the App!')