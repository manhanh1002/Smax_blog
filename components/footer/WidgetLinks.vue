<template>
    <div class="widget">
        <h4 class="text-white leading-none mb-5 sm:mb-6 md:mb-9">Company</h4>
        <div class="body">
            <ul class=" space-y-4">
                <li>
                    <n-link to="https://smax.ai/en/" class="text-white hover:text-primary">Home</n-link>
                </li>
                <li>
                    <n-link to="https://smax.ai/en/Pricing" class="text-white hover:text-primary">Pricing</n-link>
                </li>
                <li>
                    <n-link to="https://smax.ai/en/About/" class="text-white hover:text-primary">About Us</n-link>
                </li>
                <li>
                    <n-link to="https://community.smax.ai/" class="text-white hover:text-primary">Community</n-link>
                </li>
                <li>
                    <n-link to="/blog" class="text-white hover:text-primary">Blog</n-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WidgetLinks"
    };
</script>
