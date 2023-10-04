function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Hàm nhập mảng số nguyên
function inputArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(num);
    }
    return arr;
}

// Hàm tính tổng các phần tử mảng và kiểm tra tổng là chẵn hay lẻ
function sumAndCheckEvenOrOdd(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    if (sum % 2 === 0) {
        console.log(`Tổng các phần tử của mảng là ${sum} (chẵn).`);
    } else {
        console.log(`Tổng các phần tử của mảng là ${sum} (lẻ).`);
    }
}

// Hàm kiểm tra mảng có bao nhiêu số chẵn và số lẻ
function countEvenAndOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(`Số lượng số chẵn trong mảng: ${evenCount}`);
    console.log(`Số lượng số lẻ trong mảng: ${oddCount}`);
}

// Hàm sắp xếp mảng theo thứ tự tăng dần và giảm dần
function sortArray(arr, ascending = true) {
    if (ascending) {
        arr.sort((a, b) => a - b);
        console.log("Mảng được sắp xếp tăng dần:", arr);
    } else {
        arr.sort((a, b) => b - a);
        console.log("Mảng được sắp xếp giảm dần:", arr);
    }
}

// Hàm kiểm tra phần tử xuất hiện nhiều nhất trong mảng
function mostFrequentElement(arr) {
    let counts = {};
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    let maxCount = 0;
    let mostFrequentNum;
    for (let num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequentNum = num;
        }
    }
    console.log(`Phần tử xuất hiện nhiều nhất trong mảng là ${mostFrequentNum}, xuất hiện ${maxCount} lần.`);
}

// Hàm kiểm tra và đếm số số nguyên tố trong mảng
function countPrimes(arr) {
    let primeCount = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            primeCount++;
        }
    }
    console.log(`Số lượng số nguyên tố trong mảng: ${primeCount}`);
}

// Chương trình chính
let arr = inputArray();
sumAndCheckEvenOrOdd(arr);
countEvenAndOdd(arr);
sortArray(arr, true);
sortArray(arr, false);
mostFrequentElement(arr);
countPrimes(arr);