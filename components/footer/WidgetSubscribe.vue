<template>
    <div class="widget">
        <h4 class="text-white leading-none mb-5 sm:mb-6 md:mb-9">Subscribe</h4>
        <form
            class="body"
            method="post"
            action="https://automate.smax.ai/form/submit?formId=3"
            id="mauticform_newsletter"
            data-mautic-form="newsletter"
            enctype="multipart/form-data"
        >
            <!-- Email input -->
            <input
                type="email"
                name="mauticform[your_email]"
                id="mauticform_input_newsletter_your_email"
                placeholder="Your email address"
                required
                class="bg-secondary-light mt-4 py-4 px-3 text-white rounded-lg font-medium w-full focus:outline-none placeholder:text-white"
            />

            <!-- Submit Button -->
            <button 
                type="submit"
                name="mauticform[submit]"
                id="mauticform_input_newsletter_submit"
                class="mt-4 text-white px-8 py-2 bg-primary rounded-lg"
            >
                Subscribe Now
            </button>

            <!-- Hidden Fields Required by Mautic -->
            <input type="hidden" name="mauticform[formId]" value="3">
            <input type="hidden" name="mauticform[return]" value="">
            <input type="hidden" name="mauticform[formName]" value="newsletter">

            <!-- Error Message Placeholder -->
            <div class="mauticform-error" id="mauticform_newsletter_error"></div>
            <div class="mauticform-message" id="mauticform_newsletter_message"></div>
        </form>
    </div>
</template>

<script>
export default {
    mounted() {
        if (typeof MauticSDKLoaded === "undefined") {
            window.MauticSDKLoaded = true;
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "http://automate.smax.ai/media/js/mautic-form.js?vbd1cb913";
            script.onload = function () {
                if (window.MauticSDK) {
                    window.MauticSDK.onLoad();
                }
            };
            document.head.appendChild(script);
        } else if (window.MauticSDK) {
            window.MauticSDK.onLoad();
        }
    }
};
</script>


<script>
    export default {
        components: {
            Button: () => import("~/components/elements/Button"),
        },
    }
</script>
