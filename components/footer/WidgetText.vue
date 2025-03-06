<template>
    <div class="widget mr-0 md:mr-4">
        <n-link to="/">
            <img src="https://resources.smax.ai/wp-content/uploads/2025/03/2.png" alt="brand logo">
        </n-link>
        <p class="text-white mt-8 mb-7">Smax AI is a seamless, AI-driven automation platform for multichannel designed to streamline customer interactions, boost sales, and optimize marketing efforts. </p>
        <div class="flex space-x-3">
            <SocialIcon icon="icofont-facebook" url="https://www.facebook.com/smaxai/" style-class="bg-white" />
            <SocialIcon icon="icofont-x" url="https://x.com/GetSmaxAI/" style-class="bg-white" />
            <SocialIcon icon="icofont-youtube-play" url="https://www.youtube.com/@SmaxAI" style-class="bg-white" />
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            SocialIcon: () => import("~/components/elements/SocialIcon")
        },
    };
</script>
