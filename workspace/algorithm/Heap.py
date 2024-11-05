class Heap:
    def __init__(self, *args):
        if len(args) != 0:
            self.__A = args[0]  # 리스트가 인자로 들어온 경우 그 리스트를 사용
            self.buildHeap()  # 힙 구조로 변환
        else:
            self.__A = []  # 인자가 없으면 빈 리스트로 초기화

    # 힙에 원소 삽입
    def insert(self, x):
        self.__A.append(x)  # 리스트 끝에 원소 추가
        self.__percolateUp(len(self.__A) - 1)  # 새로운 원소를 위로 올리며 힙 속성 유지

    # 위로 올라가며 힙 속성 유지 (삽입 시)
    def __percolateUp(self, i: int):
        parent = (i - 1) // 2  # 부모 노드 계산
        if i > 0 and self.__A[i] > self.__A[parent]:  # 부모보다 큰 경우 위치 교환
            self.__A[i], self.__A[parent] = self.__A[parent], self.__A[i]
            self.__percolateUp(parent)  # 부모 위치에서도 다시 위로 올라가며 확인

    # 아래로 내려가며 힙 속성 유지 (삭제 및 힙 구성 시)
    def __percolateDown(self, i: int):
        child = 2 * i + 1  # 왼쪽 자식
        right = 2 * i + 2  # 오른쪽 자식
        if child <= len(self.__A) - 1:
            if right <= len(self.__A) - 1 and self.__A[child] < self.__A[right]:
                child = right  # 더 큰 자식을 선택
            if self.__A[i] < self.__A[child]:
                self.__A[i], self.__A[child] = self.__A[child], self.__A[i]
                self.__percolateDown(child)  # 자식 노드로 내려가며 계속 확인

    # 힙에서 최대값 삭제 및 반환
    def deleteMax(self):
        if not self.isEmpty():
            max_value = self.__A[0]  # 최대값은 루트에 위치
            self.__A[0] = self.__A.pop()  # 마지막 원소를 루트로 이동시키고 리스트에서 제거
            self.__percolateDown(0)  # 루트에서부터 아래로 내려가며 힙 속성 유지
            return max_value  # 최대값 반환
        else:
            return None

    # 힙에서 최대값(루트)을 반환 (삭제는 하지 않음)
    def max(self):
        if not self.isEmpty():
            return self.__A[0]
        return None

    # 배열을 힙 구조로 변환 (힙 구성)
    def buildHeap(self):
        for i in range((len(self.__A) // 2) - 1, -1, -1):
            self.__percolateDown(i)

    # 힙이 비었는지 확인
    def isEmpty(self) -> bool:
        return len(self.__A) == 0

    # 힙을 초기화 (비우기)
    def clear(self):
        self.__A = []

    # 힙의 크기 반환
    def size(self) -> int:
        return len(self.__A)

    # 힙 상태 출력
    def printHeap(self):
        if self.isEmpty():
            print("힙이 비어 있습니다.")
        else:
            print("현재 힙:", self.__A)

# 예시 실행
if __name__ == "__main__":
    heap = Heap()

    # 데이터 삽입
    heap.insert(10)
    heap.insert(20)
    heap.insert(15)
    heap.insert(30)
    heap.insert(25)

    # 힙 상태 출력
    heap.printHeap()  # 출력: 현재 힙: [30, 25, 15, 10, 20]

    # 최대값 삭제
    print("삭제된 최대값:", heap.deleteMax())  # 출력: 삭제된 최대값: 30

    # 힙 상태 출력
    heap.printHeap()  # 출력: 현재 힙: [25, 20, 15, 10]

    # 최대값 확인
    print("현재 최대값:", heap.max())  # 출력: 현재 최대값: 25

    # 힙 크기 확인
    print("힙의 크기:", heap.size())  # 출력: 힙의 크기: 4
