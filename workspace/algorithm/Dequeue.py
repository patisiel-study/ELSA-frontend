class Deque:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def add_front(self, item):
        # 앞쪽에 요소 추가
        self.items.insert(0, item)

    def add_rear(self, item):
        # 뒤쪽에 요소 추가
        self.items.append(item)

    def remove_front(self):
        # 앞쪽에서 요소 제거
        if not self.is_empty():
            return self.items.pop(0)
        else:
            return None

    def remove_rear(self):
        # 뒤쪽에서 요소 제거
        if not self.is_empty():
            return self.items.pop()
        else:
            return None

    def size(self):
        return len(self.items)

    def peek_front(self):
        if not self.is_empty():
            return self.items[0]
        else:
            return None

    def peek_rear(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            return None

    def print_deque(self):
        # 덱의 현재 상태를 출력
        print("현재 덱의 상태:", end=' ')
        for item in self.items:
            print(item, end=' ')
        print()

# 덱 사용 예제
if __name__ == "__main__":
    deque = Deque()

    # 요소 추가
    deque.add_rear(1)
    deque.add_rear(2)
    deque.add_front(0)
    deque.add_front(-1)

    # 현재 덱 상태 출력
    deque.print_deque()  # 현재 덱의 상태: -1 0 1 2 

    # 덱의 맨 앞 요소 확인
    print("앞쪽 요소:", deque.peek_front())  # 앞쪽 요소: -1

    # 덱의 맨 뒤 요소 확인
    print("뒤쪽 요소:", deque.peek_rear())  # 뒤쪽 요소: 2

    # 앞쪽에서 요소 제거
    removed_front = deque.remove_front()
    print("제거된 앞쪽 요소:", removed_front)  # 제거된 앞쪽 요소: -1

    # 뒤쪽에서 요소 제거
    removed_rear = deque.remove_rear()
    print("제거된 뒤쪽 요소:", removed_rear)  # 제거된 뒤쪽 요소: 2

    # 현재 덱 상태 출력
    deque.print_deque()  # 현재 덱의 상태: 0 1 

    # 덱 비우기
    while not deque.is_empty():
        deque.remove_front()

    print("덱을 비운 후 상태:")
    deque.print_deque()  # 현재 덱의 상태:
