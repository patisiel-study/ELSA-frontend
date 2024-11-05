class Stack:
    def __init__(self):
        self.stack = []  # 스택을 저장할 리스트 초기화
        
    def push(self, element):
        self.stack.append(element)  # 스택의 맨 위에 요소 추가
        
    def pop(self):
        if not self.isEmpty():
            return self.stack.pop()  # 스택에서 가장 최근에 추가된 요소 제거 및 반환
        return None  # 스택이 비어 있으면 None 반환
    
    def isEmpty(self):
        return len(self.stack) == 0  # 스택이 비어 있는지 확인
    
    def size(self):
        return len(self.stack)  # 스택의 크기 반환


def reverseString(input_str):
    # 스택 생성
    s = Stack()
    
    # 문자열의 각 문자를 스택에 푸시
    for char in input_str:
        s.push(char)
    
    # 스택에서 팝하여 새로운 문자열에 추가 (역순으로)
    reversed_str = ""
    while not s.isEmpty():
        reversed_str += s.pop()  # 스택에서 팝하여 반전된 문자열에 추가
    
    return reversed_str


# 예시 실행
input_str = "hello"
reversed_str = reverseString(input_str)
print(f"원본 문자열: {input_str}")
print(f"반전된 문자열: {reversed_str}")
