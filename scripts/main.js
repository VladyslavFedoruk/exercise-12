function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    const halfDegree = Math.floor(degree / 2);
    const halfResult = pow(num, halfDegree);
    const result = halfResult * halfResult;
    if (degree % 2 === 1) {
        return result * num;
    }
    return result;
}

console.log(pow(23, 2)); // Виведе 529