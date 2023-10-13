/**
 * 문제 : 1부터 5까지의 리스트에서 2개를 뽑아 순서대로 나열할 수 있는 경우의 수, 중복 허용하지 않고 허용하는 경우 모두 구하기
 *
 * 해당 버전의 해결 방식은 단순히 순열을 구하는 데에 치중되어 있다. 하지만 보통 문제를 풀 때에는 순열을 구하는 것이 최종
 * 정답이 아니라, 순열을 구해놓고 해당 순열의 경우의 수들을 반복하며 특정 작업을 진행하여 결과를 얻는 것이 대부분이다.
 */

const list = [1, 2, 3, 4, 5];

// 중복을 허용하지 않는 순열
const getPermutation = (arr, pickCount) => {
  const result = [];
  if (pickCount === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, originArr) => {
    // 현재 원소 고정, 나머지 배열에서 나머지 순열 찾아 붙이기
    const rest = [...originArr.slice(0, index), ...originArr.slice(index + 1)];
    const permutations = getPermutation(rest, pickCount - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    result.push(...attached);
  });

  return result;
};

console.log(getPermutation(list, 2));


// 중복 순열
const getDuplicatePermutation = (arr, pickCount) => {
    const result = [];
    if (pickCount === 1) return arr.map((value) => [value]);
  
    arr.forEach((fixed, index, originArr) => {
      // 현재 원소 고정, 나머지 배열에서 나머지 순열 찾아 붙이기
      const permutations = getPermutation(originArr, pickCount - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
  
      result.push(...attached);
    });
  
    return result;
  };
  
  console.log(getDuplicatePermutation(list, 2));