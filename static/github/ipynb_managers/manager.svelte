<script>
    import { onMount } from 'svelte';
    import { getNotebookManager } from '../utils/notebook_manager.js';
    import { notebookManager } from '../stores/notebook_manager.js';
    
    let manager;
    
    onMount(() => {
        manager = getNotebookManager();
        notebookManager.set(manager);
    });
</script>