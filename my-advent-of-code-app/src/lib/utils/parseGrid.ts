export const parseGrid = (input: string): number[][] =>
    input
        .trim()
        .split('\n')
        .map((line) => line.trim().split(/\s+/).map(Number));
