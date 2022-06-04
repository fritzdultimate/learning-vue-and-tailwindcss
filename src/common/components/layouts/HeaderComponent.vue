<template>
    <nav class="wf-bg-gray-transparen wf-bg-gradient-to-r wf-from-gray-900 md:wf-from-gray-900/95 md:wf-via-gray-900 wf-to-gray-900/95 wf-py-4 md:wf-py-4 wf-sticky wf-top-0 wf-z-50">
        <div class="wf-container wf-px-4 wf-mx-auto md:wf-flex md:wf-items-center">
            <div class="wf-flex wf-justify-between wf-items-center">
                <router-link to="/" class="wf-font-bold wf-text-xl wf-text-gray-200">Spacearn.com</router-link>
                <MenuAlt3Icon class="wf-h-6 wf-w-6 wf-text-gray-50 wf-opacity-50 wf-font-bold hover:wf-opacity-75 md:wf-hidden" @click="toggleMenu"/>
            </div>
            <div class="wf-hidden md:wf-flex wf-flex-col md:wf-flex-row md:wf-ml-auto wf-mt-3 md:wf-mt-0" id="navbar-collapse" ref="collapse">
                <a href="#" class="wf-p-2 lg:wf-px-4 md:wf-mx-2 wf-text-gray-200 wf-rounded hover:wf-bg-gray-100/5 hover:wf-text-gray-500 wf-transition-colors wf-duration-300">
                    Exchange
                </a>
                <router-link to="/about" class="wf-p-2 lg:wf-px-4 md:wf-mx-2 wf-text-gray-200 wf-rounded hover:wf-bg-gray-100/5 hover:wf-text-gray-500 wf-transition-colors wf-duration-300">
                    About Us
                </router-link>
                <router-link to="/support/contact-us" class="wf-p-2 lg:wf-px-4 md:wf-mx-2 wf-text-gray-200 wf-rounded hover:wf-bg-gray-100/5 hover:wf-text-gray-500 wf-transition-colors wf-duration-300">
                    Contact Us
                </router-link>
                <a href="#" class="wf-p-2 lg:wf-px-4 md:wf-mx-2 wf-text-gray-200 wf-rounded hover:wf-bg-gray-100/5 hover:wf-text-gray-500 wf-transition-colors wf-duration-300">
                    Pricing
                </a>
                <a href="#" class="wf-p-2 lg:wf-px-4 md:wf-mx-2 wf-text-gray-200 wf-rounded hover:wf-bg-gray-100/5 hover:wf-text-gray-500 wf-transition-colors wf-duration-300">
                    Features
                </a>
                <router-link to="/auth/login" class="wf-p-2 lg:wf-px-4 md:wf-mx-2 wf-text-gray-200 wf-text-center wf-border wf-border-gray-100 wf-rounded md:wf-rounded-full hover:wf-bg-yellow-100 hover:wf-text-yellow-700 wf-transition-colors wf-duration-300">
                    Login
                </router-link>

                <router-link to="/auth/register" class="wf-p-2 md:wf-px-4 lg:wf-x-4 md:wf-mx-2 wf-text-gray-200 wf-text-center wf-border wf-border-solid wf-border-yellow-600 wf-bg-yellow-600 wf-rounded md:wf-rounded-full hover:wf-bg-yellow-100 hover:wf-text-yellow-700 hover:wf-border-transparent wf-transition-colors wf-duration-300 wf-mt-1 md:wf-mt-0 md:wf-ml-1">
                    Get  Started 
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { MenuAlt3Icon } from '@heroicons/vue/solid';
    import { ref } from 'vue';

    let collapse = ref(null);
    function toggleMenu() {
        collapse.value.classList.toggle('wf-hidden');
        collapse.value.classList.toggle('wf-flex');
    }
</script>