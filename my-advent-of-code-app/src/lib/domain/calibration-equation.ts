

export class CalibrationEquation {
    equationTotalTarget: number;
    equationValues: number[];

    constructor(equationTotalTarget: number, equationValues: number[]) {
        this.equationTotalTarget = equationTotalTarget;
        this.equationValues = equationValues;
    }

    static fromLine(line: string): CalibrationEquation {
        const [target, values] = line.trim().split(':');
        return new CalibrationEquation(Number(target), values.trim().split(/\s+/).map(Number));
    }

    canProduceTarget(allowConcatenation: boolean = false): boolean {
        if (this.equationValues.length === 0) {
            return false;
        }

        const evaluate = (index: number, currentTotal: number): boolean => {
            if (index === this.equationValues.length) {
                return currentTotal === this.equationTotalTarget;
            }

            const nextValue = this.equationValues[index];
            return evaluate(index + 1, currentTotal + nextValue) ||
                evaluate(index + 1, currentTotal * nextValue) ||
                (allowConcatenation && evaluate(index + 1, Number(`${currentTotal}${nextValue}`)));
        }

        return evaluate(1, this.equationValues[0]);
    }
}

export class CalibrationEquationCollection {
    equations: CalibrationEquation[];

    constructor(equations: CalibrationEquation[]) {
        this.equations = equations;
    }

    static fromRaw(raw: string): CalibrationEquationCollection {
        const equations = raw.trim().split('\n').map(CalibrationEquation.fromLine);
        return new CalibrationEquationCollection(equations);
    }

    calculateTotalCalibrationResult(allowConcatenation: boolean = false): number {
        let totalResult = 0;
        for (const equation of this.equations) {
            if (equation.canProduceTarget(allowConcatenation)) {
                totalResult += equation.equationTotalTarget;
            }
        }
        return totalResult;
    }
}
