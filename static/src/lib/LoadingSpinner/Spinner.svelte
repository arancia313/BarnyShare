<script>
    import { onMount, onDestroy } from "svelte";
    import LocalizedText from "$lib/LocalizedText/Node.svelte";
    import Language from "../../resources/language.js";
    import tips from './Tips.json';
    
    export let enableTips = false;