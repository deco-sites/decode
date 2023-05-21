import { useState, useCallback } from 'preact/hooks';

const log = console.log;
console.log = (...value: any) => {
    log.apply(console, value);
    return value;
};

export function useJs({ expectedOutput }: { expectedOutput?: string }) {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const run = useCallback(() => {
        const [result]: string = eval(input);
        setOutput(result);
        if (expectedOutput) {
            setIsCorrect(result.trim() === expectedOutput.trim());
        }
    }, [input]);

    return { input, setInput, output, run, isCorrect };
}