interface sumProps {
    a: number;
    b: number;
}

export const handleMath = (): sumProps[] => {
    const sum: sumProps[] = [];

    for (let i = 0; i < 9; i++) {
        sum.push({ a: Math.floor(Math.random() * 15), b: Math.floor(Math.random() * 20) });
    }

    return sum;
}

export const handleSumTable = (): { calculus: string, result: string }[] => {
    return handleMath().map(item => ({ calculus: `${item.a} + ${item.b}`, result: `${item.a + item.b}` }));
}
