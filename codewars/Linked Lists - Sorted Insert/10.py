class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def sorted_insert(head: Node, data: int) -> Node:
    new_node = Node(data)

    if head is None or new_node.data < head.data:
        new_node.next = head
        return new_node

    current = head
    while current.next is not None and current.next.data < new_node.data:
        current = current.next

    new_node.next = current.next
    current.next = new_node

    return head

def print_list(head: Node):
    current = head
    while current is not None:
        print(current.data, end=" -> ")
        current = current.next
    print("null")

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)

print("Before insertion:")
print_list(head)

head = sorted_insert(head, 4)

print("After insertion of 4:")
print_list(head)

head2 = Node(1)
head2.next = Node(7)
head2.next.next = Node(8)

print("\nBefore insertion:")
print_list(head2)

head2 = sorted_insert(head2, 5)

print("After insertion of 5:")
print_list(head2)

head3 = Node(3)
head3.next = Node(5)
head3.next.next = Node(9)

print("\nBefore insertion:")
print_list(head3)

head3 = sorted_insert(head3, 7)

print("After insertion of 7:")
print_list(head3)

print("\nInserting into an empty list:")
empty_head = sorted_insert(None, 23)
print_list(empty_head)