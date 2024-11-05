class Node:
    def __init__(self, data):
        self.data = data  # 노드가 저장할 데이터
        self.next = None  # 다음 노드를 가리키는 포인터


class LinkedListQueue:
    def __init__(self):
        self.front = None  # 큐의 앞 (첫 번째 노드)
        self.rear = None   # 큐의 뒤 (마지막 노드)

    def isEmpty(self):
        # 큐가 비어있는지 확인
        return self.front is None

    def enqueue(self, data):
        # 큐의 뒤에 새로운 노드를 추가
        new_node = Node(data)  # 새 노드 생성
        if self.isEmpty():
            # 큐가 비어있으면 front와 rear 모두 새 노드를 가리킴
            self.front = self.rear = new_node
        else:
            # 큐가 비어있지 않으면 rear의 next를 새 노드로 설정
            self.rear.next = new_node
            self.rear = new_node  # rear를 새 노드로 업데이트

    def dequeue(self):
        # 큐의 앞에서 노드를 제거하고 반환
        if self.isEmpty():
            return "큐가 비어 있습니다."
        
        removed_node = self.front  # 제거할 노드를 front에서 가져옴
        self.front = self.front.next  # front를 다음 노드로 업데이트
        
        if self.front is None:
            # 큐가 비어지면 rear도 None으로 설정
            self.rear = None
            
        return removed_node.data  # 제거한 노드의 데이터 반환

    def peek(self):
        # 큐의 가장 앞에 있는 노드의 데이터를 반환
        if self.isEmpty():
            return None
        return self.front.data

    def printQueue(self):
        # 큐의 현재 상태를 출력
        if self.isEmpty():
            print("큐가 비어 있습니다.")
            return
        
        current = self.front
        print("큐의 앞에서부터:", end=' ')
        while current:
            print(current.data, end=' ')
            current = current.next
        print()


# 예시 실행
queue = LinkedListQueue()

# 데이터 추가
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

# 큐 상태 출력
queue.printQueue()  # 출력: 큐의 앞에서부터: 10 20 30

# 데이터 제거
print("제거된 데이터:", queue.dequeue())  # 출력: 제거된 데이터: 10

# 큐 상태 출력
queue.printQueue()  # 출력: 큐의 앞에서부터: 20 30

# 다음 데이터 확인
print("큐의 앞 데이터:", queue.peek())  # 출력: 큐의 앞 데이터: 20
