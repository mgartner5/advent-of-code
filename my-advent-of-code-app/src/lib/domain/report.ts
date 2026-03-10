type ReportDirection = 'ascending' | 'descending' | undefined;

export class Report {
    dataValues: number[];

    constructor(dataValues: number[]) {
        this.dataValues = dataValues;
    }

    static fromLine(line: string): Report {
        return new Report(line.trim().split(/\s+/).map(Number));
    }
    
    public isSafe(useProblemDampener: boolean = false): boolean {
        let direction: ReportDirection = undefined;
        for (let i: number = 0; i < this.dataValues.length - 1; i++) {
            let currentValue = this.dataValues[i];
            let nextValue = this.dataValues[i + 1];
            let problemFound: boolean = false;

            if (currentValue === nextValue) {
                problemFound = true;
            }
            if (!direction) {
                direction = currentValue < nextValue ? 'ascending' : 'descending';
            }
            if ((currentValue < nextValue && direction === 'descending') || (currentValue > nextValue && direction === 'ascending')) {
                problemFound = true;
            }
            if (Math.abs(currentValue - nextValue) > 3) {
                problemFound = true;
            }
            
            if (problemFound) {
                if (useProblemDampener) {
                    for (let removeIndex = 0; removeIndex < this.dataValues.length; removeIndex++) {
                        const reportSubset = [...this.dataValues.slice(0, removeIndex), ...this.dataValues.slice(removeIndex + 1)];
                        if (new Report(reportSubset).isSafe()) {
                            return true;
                        }
                    }
                }
                return false;
            }
        }
        return true;
    }
}

export class ReportCollection {
    reports: Report[];

    constructor(reports: Report[]) {
        this.reports = reports;
    }

    static fromRaw(raw: string): ReportCollection {
        const reports = raw.trim().split('\n').map(Report.fromLine);
        return new ReportCollection(reports);
    }

    public safeReportCount(useProblemDampener: boolean = false): number {
        let safeReportCount = 0;
        for (const report of this.reports) {
            if (report.isSafe(useProblemDampener)) {
                safeReportCount++;
            }
        }
        return safeReportCount;
    }
}
