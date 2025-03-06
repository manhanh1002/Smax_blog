<template>
        <div class="">
            <PostOne v-for="(post, index) in posts.edges" :key="index" :post="post" />
        </div>
</template>

<script>
    import postsQuery from "~/graphql/postsQuery";

    export default {
        components: {
            PostOne: () => import("~/components/posts/PostOne")
        },
        
        data() {
            return {
                posts: []
            }
        },

        apollo: {
            posts: {
                prefetch: true,
                query: postsQuery(2)
            }
        },
    };
</script>