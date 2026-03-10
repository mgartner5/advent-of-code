<script lang="ts">
    import { day2Data } from '$lib/data/2024/data';
    import { openPopup } from '$lib/popup.svelte';


    const day2Part1Answer = () => {
        return `${day2Data.safeReportCount()} reports are safe!`;
    };
    const day2Part2Answer = () => {
        return `${day2Data.safeReportCount(true)} reports are safe with the problem dampener!`;
    };
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
