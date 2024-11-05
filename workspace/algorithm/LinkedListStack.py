class Node:
    def __init__(self, data):
        self.data = data  # 노드가 저장할 데이터
        self.next = None  # 다음 노드를 가리키는 포인터


class LinkedList:
    def __init__(self):
        self.head = None  # 리스트의 첫 번째 노드를 가리키는 포인터

    def isEmpty(self):
        return self.head is None  # 리스트가 비었는지 확인

    def append(self, data):
        new_node = Node(data)  # 새 노드 생성
        if self.isEmpty():
            self.head = new_node  # 리스트가 비었으면 새 노드를 첫 번째 노드로 설정
        else:
            current = self.head
            while current.next:  # 마지막 노드를 찾음
                current = current.next
            current.next = new_node  # 마지막 노드의 다음에 새 노드 연결

    def insert(self, data, position):
        new_node = Node(data)  # 새 노드 생성
        if position == 0:
            new_node.next = self.head
            self.head = new_node  # 첫 번째 위치에 삽입
        else:
            current = self.head
            for _ in range(position - 1):  # 삽입할 위치 바로 앞까지 이동
                if current is None:
                    raise IndexError("Position out of range")
                current = current.next
            new_node.next = current.next
            current.next = new_node  # 지정한 위치에 노드 삽입

    def delete(self, data):
        if self.isEmpty():
            print("리스트가 비어 있습니다.")
            return

        current = self.head

        if current.data == data:  # 첫 번째 노드를 삭제하는 경우
            self.head = current.next
            current = None
            return

        prev = None
        while current and current.data != data:  # 삭제할 노드를 찾음
            prev = current
            current = current.next

        if current is None:
            print("삭제할 노드를 찾지 못했습니다.")
            return

        prev.next = current.next  # 삭제할 노드의 이전 노드가 그 다음 노드를 가리키도록 함
        current = None

    def printList(self):
        if self.isEmpty():
            print("리스트가 비어 있습니다.")
            return
        current = self.head
        while current:  # 리스트의 모든 노드를 순차적으로 출력
            print(current.data, end=' ')
            current = current.next
        print()  # 출력 후 줄 바꿈


if __name__ == "__main__":
    # LinkedList 객체 생성
    linked_list = LinkedList()

    # 요소 추가
    linked_list.append(1)
    linked_list.append(2)
    linked_list.append(3)
    print("리스트 상태 (요소 추가 후):", end=' ')
    linked_list.printList()  # 출력: 1 2 3

    # 리스트의 첫 번째 위치에 요소 삽입
    linked_list.insert(0, 0)
    print("리스트 상태 (0을 첫 번째 위치에 삽입 후):", end=' ')
    linked_list.printList()  # 출력: 0 1 2 3

    # 중간 위치에 요소 삽입
    linked_list.insert(1.5, 2)
    print("리스트 상태 (1.5를 두 번째 위치에 삽입 후):", end=' ')
    linked_list.printList()  # 출력: 0 1 1.5 2 3

    # 요소 삭제
    linked_list.delete(2)
    print("리스트 상태 (2 삭제 후):", end=' ')
    linked_list.printList()  # 출력: 0 1 1.5 3

    # 삭제할 요소가 없는 경우
    linked_list.delete(4)  # "삭제할 노드를 찾지 못했습니다." 출력
    print("리스트 상태 (삭제할 요소가 없을 경우):", end=' ')
    linked_list.printList()  # 출력: 0 1 1.5 3

    # 리스트 비우기
    linked_list.delete(1.5)  # 1.5 삭제
    linked_list.delete(1)     # 1 삭제
    linked_list.delete(0)     # 0 삭제
    print("리스트 상태 (모든 요소 삭제 후):", end=' ')
    linked_list.printList()  # 출력: 리스트가 비어 있습니다.
