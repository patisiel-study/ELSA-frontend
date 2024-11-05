class PriorityQueue:
    def __init__(self):
        self.queue = []

    def is_empty(self):
        return len(self.queue) == 0

    def insert(self, item, priority):
        # 튜플로 (우선순위, 아이템)을 저장
        self.queue.append((priority, item))

    def remove(self):
        if self.is_empty():
            return None
        # 우선순위가 가장 높은(숫자가 가장 작은) 요소 찾기
        highest_priority_index = 0
        for i in range(len(self.queue)):
            if self.queue[i][0] < self.queue[highest_priority_index][0]:
                highest_priority_index = i
        # 우선순위가 가장 높은 요소 반환 및 제거
        return self.queue.pop(highest_priority_index)

    def peek(self):
        if self.is_empty():
            return None
        # 우선순위가 가장 높은 요소 확인 (제거하지 않음)
        highest_priority_index = 0
        for i in range(len(self.queue)):
            if self.queue[i][0] < self.queue[highest_priority_index][0]:
                highest_priority_index = i
        return self.queue[highest_priority_index]

    def size(self):
        return len(self.queue)

    def display(self):
        if self.is_empty():
            print("큐가 비어 있습니다.")
        else:
            print("현재 우선순위 큐 상태:")
            for priority, item in self.queue:
                print(f"아이템: {item}, 우선순위: {priority}")


# 큐 사용 예제
if __name__ == "__main__":
    priority_queue = PriorityQueue()

    # 요소 추가
    priority_queue.insert("작업1", 3)
    priority_queue.insert("작업2", 1)
    priority_queue.insert("작업3", 2)

    # 현재 큐 상태 출력
    priority_queue.display()  # 현재 우선순위 큐 상태

    # 우선순위가 가장 높은 요소 확인
    highest_priority_item = priority_queue.peek()
    print(f"가장 높은 우선순위 아이템: {highest_priority_item[1]}, 우선순위: {highest_priority_item[0]}")  # 가장 높은 우선순위 아이템

    # 요소 제거
    removed_item = priority_queue.remove()
    print(f"제거된 아이템: {removed_item[1]}, 우선순위: {removed_item[0]}")  # 제거된 아이템

    # 현재 큐 상태 출력
    priority_queue.display()  # 현재 우선순위 큐 상태

    # 또 다른 요소 제거
    removed_item = priority_queue.remove()
    print(f"제거된 아이템: {removed_item[1]}, 우선순위: {removed_item[0]}")  # 제거된 아이템

    # 현재 큐 상태 출력
    priority_queue.display()  # 현재 우선순위 큐 상태
