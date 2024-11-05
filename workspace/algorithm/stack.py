class ListStack:
    def __init__(self):
        # 스택을 저장할 빈 리스트를 초기화
        self.__stack = []
        
    def push(self, element):
        # 스택의 맨 위에 새로운 요소를 추가
        self.__stack.append(element)
        
    def pop(self):
        # 스택에서 가장 최근에 추가된 요소를 제거하고 반환
        if not self.isEmpty():
            return self.__stack.pop()
        return "스택이 비어 있습니다."
    
    def top(self):
        # 스택의 맨 위에 있는 요소를 반환, 스택이 비어 있으면 None 반환
        if self.isEmpty():
            return None
        return self.__stack[-1]
    
    def popAll(self):
        # 스택을 모두 비움
        self.__stack.clear()
    
    def printStack(self):
        # 스택의 현재 상태를 출력 (위에서 아래 순서로 출력)
        if self.isEmpty():
            print("스택이 비어 있습니다.")
        else:
            print("현재 스택 (위에서 아래 순서):", end=' ')
            for i in range(len(self.__stack) - 1, -1, -1):
                print(self.__stack[i], end=' ')
            print()
    
    def isEmpty(self):
        # 스택이 비어 있는지 확인 
        return len(self.__stack) == 0

if __name__ == "__main__":
    # ListStack 객체 생성
    stack = ListStack()

    # 스택에 요소 추가
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.printStack()  # 현재 스택 출력

    # 스택의 맨 위 요소 확인
    print("맨 위 요소:", stack.top())

    # 요소 제거 및 출력
    print("제거된 요소:", stack.pop())
    stack.printStack()  # 현재 스택 출력

    # 모든 요소 제거
    stack.popAll()
    stack.printStack()  # 현재 스택 출력 (비어있어야 함)
