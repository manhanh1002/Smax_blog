<template>
    <div class="author-profile text-center border border-[#ededed] rounded-[10px] py-7 px-3.5 relative">
        <div class="gravatar w-32 h-32 m-auto border border-[#ededed] p-2 rounded-full overflow-hidden">
            <img class="rounded-full w-full" :src="author.node.avatar.url" :alt="author.node.name">
        </div>
        <h3 class="mb-0 text-2xl font-bold pt-6 pb-5">
            <n-link :to="`/author/${author.node.slug}`" class="hover:text-primary">{{ author.node.name }}</n-link>
        </h3>
        <p>{{ author.node.description }}</p>
        <n-link :to="`/author/${author.node.slug}`" class=" bg-[#f4f4f4] py-3.5 px-8 rounded-lg inline-block hover:bg-primary hover:text-white mb-5">View Profile <i class="icofont-long-arrow-right text-xl align-middle"></i> </n-link>
        <div class="flex justify-center space-x-2">
            <SocialIcon icon="icofont-facebook" url="https://www.facebook.com/smaxai/" />
            <SocialIcon icon="icofont-x" url="https://x.com/GetSmaxAI/" />
            <SocialIcon icon="icofont-youtube-play" url="https://www.youtube.com/@SmaxAI" />
            
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            SocialIcon: () => import("~/components/elements/SocialIcon")
        },

        props: {
            author: {
                type: Object,
                default: () => {},
            },
        },
    };
</script>
