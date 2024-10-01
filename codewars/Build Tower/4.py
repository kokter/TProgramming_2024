def tower_builder(n_floors):
    tower = []
    for i in range(n_floors):
        num_spaces = n_floors - i - 1
        num_asterisks = 2 * i + 1
        
        floor = ' ' * num_spaces + '*' * num_asterisks + ' ' * num_spaces
        
        tower.append(floor)
    
    return tower

print(tower_builder(3))
print(tower_builder(6))