<script lang="ts">
    import { day2Data } from '$lib/data/2024/data';
    import { openPopup } from '$lib/popup.svelte';

    type ReportDirection = 'ascending' | 'descending' | undefined;

    const day2Part1Answer = () => {
        return `The answer to day 2 is ${getSafeReportsCount(day2Data)}`;
    };

    const getSafeReportsCount = (reports: number[][]): number => {
        let safeReportCount = 0;
        for (const report of reports) {
            if (isReportSafe(report)) {
                safeReportCount++;
            }
        }
        return safeReportCount;
    }

    const isReportSafe = (report: number[]) => {
        let direction: ReportDirection = undefined;
        for (let i: number = 0; i < report.length - 1; i++) {
            let currentValue = report[i];
            let nextValue = report[i + 1];
            if (currentValue === nextValue) {
                return false;
            }
            if (!direction) {
                direction = currentValue < nextValue ? 'ascending' : 'descending';
            }
            if ((currentValue < nextValue && direction === 'descending') || (currentValue > nextValue && direction === 'ascending')) {
                return false;
            }
            if (currentValue - nextValue > 3 || currentValue - nextValue < -3) {
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
</div>
