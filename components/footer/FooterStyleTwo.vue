<template>
    <div class="bg-primary">
        <div class="footer-main py-section">
            <div class="container">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 sm:col-span-6 xl:col-span-4">
                        <div class="widget lg:pr-10">
                            <h4 class="text-white leading-none mb-5 sm:mb-6 md:mb-9">Subscribe</h4>
                            <form
            class="body"
            method="post"
            action="https://automate.smax.ai/form/submit?formId=3"
            id="mauticform_newsletter"
            data-mautic-form="newsletter"
            enctype="multipart/form-data"
        >
            <!-- Email input with matching styles -->
            <input
                type="email"
                name="mauticform[your_email]"
                id="mauticform_input_newsletter_your_email"
                placeholder="Your email address"
                required
                class="bg-transparent border-2 border-[#453095] mt-4 py-4 px-3 text-white rounded-lg font-medium w-full focus:outline-none"
            />

            <!-- Submit Button with matching styles -->
            <button
                type="submit"
                name="mauticform[submit]"
                id="mauticform_input_newsletter_submit"
                class="mt-5 text-white px-8 py-2 bg-[#a50eff] rounded-lg"
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
                            <div class="flex mt-8 space-x-2 md:space-x-3">
                                <SocialIcon icon="icofont-facebook" url="https://www.facebook.com/smaxai/" style-class="bg-[#402a92] !text-white hover:bg-[#a50eff]" />
                                <SocialIcon icon="icofont-x" url="https://x.com/GetSmaxAI/" style-class="bg-[#402a92] !text-white hover:bg-[#a50eff]" />
                                <SocialIcon icon="icofont-instagram" url="https://www.instagram.com/" style-class="bg-[#402a92] !text-white hover:bg-[#a50eff]" />
                                <SocialIcon icon="icofont-pinterest" url="https://www.pinterest.com/" style-class="bg-[#402a92] !text-white hover:bg-[#a50eff]" />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 xl:col-span-8">
                        <div class="grid grid-cols-2 gap-x-10 sm:grid-cols-3 xl:pl-5 sm:mt-10 xl:mt-0">
                            <div class="widget mt-8 md:mt-0">
                                <h4 class="text-white leading-none mb-5 sm:mb-6 md:mb-9">Company</h4>
                                <div class="body">
                                    <ul class="space-y-4">
                                        <li>
                                            <n-link to="/faq" class="text-white hover:text-[#a50eff]">FAQ's</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/contact" class="text-white hover:text-[#a50eff]">Careers</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/about" class="text-white hover:text-[#a50eff]">About Us</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/contact" class="text-white hover:text-[#a50eff]">Contact Us</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/blog" class="text-white hover:text-[#a50eff]">Blog</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories" class="text-white hover:text-[#a50eff]">Categories</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/contact" class="text-white hover:text-[#a50eff]">Support</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/about" class="text-white hover:text-[#a50eff]">Local Print Ads</n-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget mt-8 md:mt-0">
                                <h4 class="text-white leading-none mb-5 sm:mb-6 md:mb-9">Quick Links</h4>
                                <div class="body">
                                    <ul class=" space-y-4">
                                        <li>
                                            <n-link to="/about" class="text-white hover:text-[#a50eff]">Discussion</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/contact" class="text-white hover:text-[#a50eff]">Careers</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories" class="text-white hover:text-[#a50eff]">Categories</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/contact" class="text-white hover:text-[#a50eff]">Support</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/faq" class="text-white hover:text-[#a50eff]">Course FAQ’s</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/privacy-policy" class="text-white hover:text-[#a50eff]">Privacy Policy</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/contact" class="text-white hover:text-[#a50eff]">Customer Support</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/terms-conditions" class="text-white hover:text-[#a50eff]">Terms & Conditions</n-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget mt-8 md:mt-0">
                                <h4 class="text-white leading-none mb-5 sm:mb-6 md:mb-9">Category</h4>
                                <div class="body">
                                    <ul class=" space-y-4">
                                        <li>
                                            <n-link to="/categories" class="text-white hover:text-[#a50eff]">Categories</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories/ai-agent" class="text-white hover:text-[#a50eff]">AI Agent</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories/social-media-marketing" class="text-white hover:text-[#a50eff]">Social Media Marketing</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories/sales-automation" class="text-white hover:text-[#a50eff]">Sales Automation</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories/medical" class="text-white hover:text-[#a50eff]">Medical</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories/tips-tools" class="text-white hover:text-[#a50eff]">Tips & Tools</n-link>
                                        </li>
                                        <li>
                                            <n-link to="/categories/case-studies" class="text-white hover:text-[#a50eff]">Case Studies</n-link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright border-t-1 border-[#3b2590] py-4">
            <div class="container">
                <div class="text-base text-center text-white">
                    <p>© 2025 Blog Made with <i class="icofont icofont-heart-alt text-red-600"></i> by <a href="#" target="_blank">Smax AI</a></p>
                </div>
            </div>
        </div>
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
            SocialIcon: () => import("~/components/elements/SocialIcon"),
        },
    };
</script>
