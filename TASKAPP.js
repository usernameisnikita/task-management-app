document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    
    console.log('Task Created:');
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Priority:', priority);
    console.log('Due Date:', dueDate);
    
    alert('Task Created Successfully!');
    this.reset();
});
