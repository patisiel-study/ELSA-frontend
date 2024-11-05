class ListQueue:
    def __init__(self):
        self.__queue = []

    def enqueue(self, x):
        # self.__queue에 추가
        self.__queue.append(x)

    def dequeue(self):
        if not self.isEmpty():
            # self.__queue에서 첫 번째 요소를 제거하고 반환
            return self.__queue.pop(0)
        return "큐가 비어 있습니다."

    def front(self):
        if self.isEmpty():
            return None
        else:
            # self.__queue의 첫 번째 요소 반환
            return self.__queue[0]

    def isEmpty(self) -> bool:
        # 큐가 비어있는지 확인
        return len(self.__queue) == 0

    def dequeueAll(self):
        # 큐를 모두 비움
        self.__queue.clear()

    def printQueue(self):
        # 큐의 현재 상태를 출력 (큐의 앞에서부터 출력)
        print("큐의 앞에서부터:", end=' ')
        for i in range(len(self.__queue)):
            print(self.__queue[i], end=' ')
        print()

# 큐 사용 예제
if __name__ == "__main__":
    queue = ListQueue()

    # 요소 추가
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    # 현재 큐 상태 출력
    queue.printQueue()  # 큐의 앞에서부터: 1 2 3 

    # 큐의 맨 앞 요소 확인
    print("맨 앞 요소:", queue.front())  # 맨 앞 요소: 1

    # 요소 제거
    removed_element = queue.dequeue()
    print("제거된 요소:", removed_element)  # 제거된 요소: 1

    # 현재 큐 상태 출력
    queue.printQueue()  # 큐의 앞에서부터: 2 3 

    # 큐 비우기
    queue.dequeueAll()
    print("큐를 비운 후 상태:")
    queue.printQueue()  # 큐의 앞에서부터:
