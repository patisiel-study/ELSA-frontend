class CircularQueue:
    def __init__(self, size):
        self.size = size
        self.queue = [None] * size  # 고정된 크기의 큐
        self.front = self.rear = -1  # 초기화 시 front와 rear는 -1로 설정

    def is_full(self):
        # 큐가 꽉 찼는지 확인 (rear가 front보다 한 칸 앞에 있는 상태)
        return (self.rear + 1) % self.size == self.front

    def is_empty(self):
        # 큐가 비었는지 확인
        return self.front == -1

    def enqueue(self, item):
        if self.is_full():
            print("Queue is full!")
            return
        # 첫 삽입 시 front를 0으로 설정
        if self.front == -1:
            self.front = 0
        # rear 위치 갱신 후 아이템 삽입
        self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = item

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty!")
            return None
        # front의 아이템 저장
        item = self.queue[self.front]
        # 큐가 비어 있으면 front와 rear를 초기화
        if self.front == self.rear:
            self.front = self.rear = -1
        else:
            # front 위치 갱신
            self.front = (self.front + 1) % self.size
        return item

    def peek(self):
        if self.is_empty():
            print("큐가 비어있습니다.")
            return None
        return self.queue[self.front]

    def display(self):
        if self.is_empty():
            print("큐가 비어있습니다")
        else:
            i = self.front
            while True:
                print(self.queue[i], end=" ")
                if i == self.rear:
                    break
                i = (i + 1) % self.size
            print()

# 큐 사용 예제
if __name__ == "__main__":
    circular_queue = CircularQueue(5)

    # 요소 추가
    circular_queue.enqueue(10)
    circular_queue.enqueue(20)
    circular_queue.enqueue(30)
    circular_queue.enqueue(40)
    
    # 현재 큐 상태 출력
    print("현재 큐 상태:")
    circular_queue.display()  # 10 20 30 40

    # 큐의 맨 앞 요소 확인
    print("앞쪽 요소:", circular_queue.peek())  # 앞쪽 요소: 10

    # 요소 제거
    removed_item = circular_queue.dequeue()
    print("제거된 요소:", removed_item)  # 제거된 요소: 10

    # 현재 큐 상태 출력
    print("제거 후 현재 큐 상태:")
    circular_queue.display()  # 20 30 40

    # 추가 요소로 큐 채우기
    circular_queue.enqueue(50)
    circular_queue.enqueue(60)  # 큐가 가득 차므로 실패

    # 현재 큐 상태 출력
    print("모든 요소 추가 후 현재 큐 상태:")
    circular_queue.display()  # 20 30 40 50

    # 큐에서 요소 제거
    circular_queue.dequeue()
    circular_queue.dequeue()

    # 현재 큐 상태 출력
    print("제거 후 현재 큐 상태:")
    circular_queue.display()  # 40 50

    # 마지막 요소 확인
    print("앞쪽 요소:", circular_queue.peek())  # 앞쪽 요소: 40

    # 큐 비우기
    while not circular_queue.is_empty():
        circular_queue.dequeue()

    print("큐를 비운 후 상태:")
    circular_queue.display()  # Queue is empty!
