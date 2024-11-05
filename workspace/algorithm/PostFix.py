class Stack:
    def __init__(self):
        self.stack = []

    def push(self, element):
        self.stack.append(element)

    def pop(self):
        if not self.isEmpty():
            return self.stack.pop()
        return None

    def isEmpty(self):
        return len(self.stack) == 0


def evaluatePostfix(expression):
    # 스택 생성
    s = Stack()

    # 입력된 후위 표기법 문자열을 스페이스로 구분하여 리스트로 변환
    for token in expression.split():
        if token.isdigit():  # 숫자인 경우 스택에 푸시
            s.push(int(token))
        else:
            # 연산자를 만나면 스택에서 두 개의 숫자를 팝하고 연산을 수행
            operand2 = s.pop()  # 먼저 나온 것이 두 번째 피연산자
            operand1 = s.pop()  # 나중에 나온 것이 첫 번째 피연산자
            
            # 연산자에 따라 연산을 수행하고 결과를 스택에 푸시
            if token == '+':
                s.push(operand1 + operand2)
            elif token == '-':
                s.push(operand1 - operand2)
            elif token == '*':
                s.push(operand1 * operand2)
            elif token == '/':
                s.push(int(operand1 / operand2))  # 나눗셈 후 정수로 반환
            
    # 마지막으로 남은 값이 결과값
    return s.pop()


# 예시 실행
postfix_expr = "5 1 2 + 4 * + 3 -"  # 후위 표기법: 5 + (1 + 2) * 4 - 3
result = evaluatePostfix(postfix_expr)
print(f"결과값: {result}")
