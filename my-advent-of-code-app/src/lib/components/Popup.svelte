<script lang="ts">
    import { popupState, closePopup } from '$lib/popup.svelte';
</script>

{#if popupState.show}
    <!-- Backdrop -->
    <button
        class="fixed inset-0 bg-black/60 z-50 w-full h-full"
        onclick={closePopup}
        aria-label="Close popup"
    ></button>

    <!-- Modal -->
    <div
        role="dialog"
        aria-modal="true"
        class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 text-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col gap-4"
    >
        <h2 class="text-xl font-bold">Answer</h2>
        <p>{popupState.message}</p>
        <button
            onclick={closePopup}
            class="self-end bg-blue-800 hover:bg-blue-900 font-bold py-1 px-4 rounded"
        >
            Close
        </button>
    </div>
{/if}
