<script lang="ts">
    import { day2Data } from '$lib/data/2024/data';
    import { openPopup } from '$lib/popup.svelte';

    type ReportDirection = 'ascending' | 'descending' | undefined;

    const day2Part1Answer = () => {
        return `${getSafeReportsCount(day2Data)} reports are safe!`;
    };
    const day2Part2Answer = () => {
        return `${getSafeReportsCount(day2Data, true)} reports are safe with the problem dampener!`;
    };

    const getSafeReportsCount = (reports: number[][], useProblemDampener: boolean = false): number => {
        let safeReportCount = 0;
        for (const report of reports) {
            if (isReportSafe(report, useProblemDampener)) {
                safeReportCount++;
            }
        }
        return safeReportCount;
    }

    const isReportSafe = (report: number[], useProblemDampener: boolean = false) => {
        let direction: ReportDirection = undefined;
        for (let i: number = 0; i < report.length - 1; i++) {
            let currentValue = report[i];
            let nextValue = report[i + 1];
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
                    for (let removeIndex = 0; removeIndex < report.length; removeIndex++) {
                        const reportSubset = [...report.slice(0, removeIndex), ...report.slice(removeIndex + 1)];
                        if (isReportSafe(reportSubset)) {
                            return true;
                        }
                    }
                }
                return false;
            }
        }
        return true;
    }
</script>

<div class="flex items-center gap-4 pb-4">
    <a href="/" class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Back</a>
    <h1 class="text-2xl font-bold">2024</h1>
</div>
<p class="pb-2">Select a day to display answer:</p>
<div class="flex flex-col gap-4 w-fit">
    <button
        onclick={() => openPopup(day2Part1Answer())}
        class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
    >
        Day 2 - Part 1
    </button>
    <button
        onclick={() => openPopup(day2Part2Answer())}
        class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
    >
        Day 2 - Part 2
    </button>
</div>
