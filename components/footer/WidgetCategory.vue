<template>
    <div class="widget">
        <h4 class="text-white leading-none mb-5 sm:mb-6 md:mb-9">Category</h4>
        <div class="body">
            <ul class=" space-y-4">
                <li>
                    <n-link to="/categories/ai-agent" class="text-white hover:text-primary">AI Agent</n-link>
                </li>
                <li>
                    <n-link to="/categories/social-media-marketing" class="text-white hover:text-primary">Social Media Marketing</n-link>
                </li>
                <li>
                    <n-link to="/categories/sales-automation" class="text-white hover:text-primary">Sales Automation</n-link>
                </li>
                <li>
                    <n-link to="/categories/tips-tools" class="text-white hover:text-primary">Tips & Tools</n-link>
                </li>
                <li>
                    <n-link to="/categories/case-studies" class="text-white hover:text-primary">Case Studies</n-link>
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
