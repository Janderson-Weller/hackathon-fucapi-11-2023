interface sumProps {
    a: number;
    b: number;
}

export const handleMath = (): sumProps[] => {
    const sum: sumProps[] = [];

    for (let i = 0; i < 9; i++) {
        sum.push({ a: Math.floor(Math.random() * 20), b: Math.floor(Math.random() * 20) });
    }

    return sum;
}

export const handleSumTable = (operation: string): { calculus: string, result: number }[] => {

    const outputArray: { calculus: string, result: number }[] = [];

    const addOperation = (operation: string, result: number) => {
        let adjustedResult = result;
        while (outputArray.some(entry => entry.result === adjustedResult)) {
            adjustedResult++;
        }
        outputArray.push({ calculus: operation, result: adjustedResult });
    }

    switch (operation) {
        case 'addition':
            handleMath().forEach(({ a, b }) => addOperation(`${a} + ${b}`, a + b));
            return outputArray;
        case 'subtraction':
            handleMath().forEach(({ a, b }) => addOperation(`${a} - ${b}`, a - b));
            return outputArray;
        case 'multiplication':
            handleMath().forEach(({ a, b }) => addOperation(`${a} * ${b}`, a * b));
            return outputArray;
        default:
            handleMath().forEach(({ a, b }) => {
                if (b !== 0)
                    addOperation(`${a} / ${b}`, a * b);
            });
            return outputArray;
    }
}
