todos = []

while True:
    userAction = input("Type add, show, edit, or exit: ")
    userAction = userAction.strip()

    match userAction:
        case 'add':
            todo = input("Enter a todo ")
            todos.append(todo)
        
        case 'show' | 'display':
            for item in todos:
                print(item)
        case 'edit':
            number = int(input("Number of the todo to edit: "))
            number = number-1
            new_todo = input("Enter new todo: ")
            todos[number] = new_todo
        case 'exit':
            break
    print("Bye Bye")