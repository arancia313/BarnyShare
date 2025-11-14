<script>
    import { page } from '$app/stores';
    import { browser } from "$app/environment";
    import { onMount, createEventDispatcher } from "svelte";
    import { PUBLIC_CAPTCHA_ENABLED } from "$env/static/public";