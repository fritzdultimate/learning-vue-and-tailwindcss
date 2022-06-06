<template>
    <div class="wf-bg-gray-100">
        <div class="wf-flex wf-flex-col md:wf-flex-row md:wf-pt-5 md:wf-pr-5">
            <!-- Sidebar Desktop -->
            <nav class="wf-absolut wf-bottom-0 wf-fixed wf-w-full wf-hidden md:wf-static md:wf-w-[16%] md:wf-flex md:wf-flex-col wf-items-center wf-bg-gray-100 wf-pb-10">
                <!-- Company Logo -->
                <figure class="wf-mt-8 wf-mb-5 wf-hidden md:wf-block">
                    <!-- <img> -->
                    <span class="wf-font-bold wf-text-gray-900/75 wf-text-3xl">
                        Spacearn
                    </span>
                </figure>
                <ul class="wf-w-full wf-flex md:wf-block">
                    <li class="wf-mb-6 wf-relative before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-rounded-r-lg" :class="link.id == activeLink ? 'before:wf-absolute before:wf-bg-yellow-700' : 'hover:before:wf-absolute before:wf-bg-yellow-700/30' " v-for="(link, id) of NavLinks" :key="id">
                        <router-link :to="link.to" class="wf-flex wf-items-center wf-py-1.5 wf-rounded-lg wf-ml-5 wf-text-gray-100 wf-transition-all" :class="link.id == activeLink ? 'wf-bg-yellow-700' : 'hover:wf-text-gray-900/50 wf-text-yellow-700/40 hover:wf-bg-yellow-700/30'" @click.prevent="navigate(link)">
                            <component :is="link.icon" class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold">{{ link.name }}</span>
                        </router-link>
                    </li>
                </ul>

                <form class="wf-hidden md:wf-block">
                    <button class="wf-outline-0 wf-bg-yellow-700 wf-px-10 wf-py-1 wf-font-medium wf-text-base wf-text-gray-100 wf-rounded wf-mt-10 hover:wf-bg-yellow-900 focus:wf-bg-yellow-900 hover:wf-ring hover:wf-ring-yellow-700/50 focus:wf-ring focus:wf-ring-yellow-700/50">Logout</button>
                </form>
            </nav>
            <!-- NavBar Mobile -->

            <nav class="wf-fixed wf-bottom-0 wf-inset-x-0 wf-bg-gray-100 wf-rounded-t-xl wf-flex wf-justify-center wf-text-xs wf-text-gray-900 wf-uppercase wf-font-mono md:wf-hidden wf-font-bold wf-shadow-2xl wf-shadow-light-800">
                <router-link to="#" class="wf-w-full wf-block wf-py-2 wf-px-3 wf-text-center hover:wf-bg-gray-200 hover:wf-text-gray-800 wf-transition wf-duration-300" v-for="(link, id) in mobileNavLinks" :key="id">
                    <component :is="link.icon" class="wf-w-6 wf-h-6 wf-mx-auto wf-mb-2 wf-mt-2" />
                    <!-- {{ link.name == 'Dashboard' ? 'home' : link.name }} -->
                </router-link>
            </nav>

            <!-- Content area  -->
            <div class="wf-w-full md:wf-w-[62%] wf-h-full md:wf-px-4 wf-mb-10">
                <div class="wf-h-full wf-bg-white md:wf-bg-gray-50 md:wf-rounded-l-3xl md:wf-shadow-lg wf-px-5">
                    <div class="wf-flex wf-pt-10">
                        <div class="wf-flex wf-flex-col">
                            <span class="wf-text-gray-500/75 wf-capitalize wf-font-mono wf-text-base wf-font-bold">
                                hello emeka,
                            </span>
                            <span class="wf-text-xl wf-text-slate-700 wf-blur-[1px] wf-font-bold wf-capitalize">
                                welcome back!
                            </span>
                        </div>
                        <div class="wf-ml-auto">
                            <NotificationsHeaderPartial class="md:wf-hidden"/>
                            <SearchBoxHeaderPartial class="wf-hidden md:wf-block" />
                        </div>
                    </div>

                    <!-- Main content -->
                    <div class="wf-flex wf-flex-col wf-mt-10">
                        <!-- Account balance card -->
                        <div class="wf-w-full wf-overflow-hidden wf-h-24 md:wf-h-48 wf-rounded-md wf-bg-black/90 md:wf-bg-blue-800/75 wf-flex wf-relative wf-items-center wf-px-5">
                            <div class="md:wf-hidden wf-block wf-absolute wf-w-[70%] wf-h-28 wf-rounded-full wf-bg-gray-500/20 wf-rotate-[15deg] -wf-left-[115px] wf-top-6 wf-bg-"></div>
                            <div class="wf-absolute wf-w-[70%] md:wf-w-[200%] wf-h-28 wf-rounded-full md:wf-bg-blue-500/20 wf-bg-gray-500/20 wf-rotate-[15deg] -wf-right-[115px] md:-wf-right-[16px] wf-bottom-6 md:wf-bottom-16 wf-z-0"></div>
                            <CreditCardIcon class="md:wf-block wf-hidden wf-h-10 wf-w-10 wf-text-gray-300 wf-mr-5" />
                            <div class="wf-flex wf-flex-col">
                                <span class="wf-capitalize wf-text-gray-300/75 wf-text-base md:wf-text-xl wf-font-medium">
                                    current balance
                                </span>
                                <span class="wf-text-2xl md:wf-text-4xl wf-text-gray-100 wf-font-bold">
                                    $ 4,570,80
                                </span>
                            </div>
                            <div class="wf-ml-auto">
                                <div class="wf-bg-white md:wf-bg-transparent wf-relative wf-z-10 wf-rounded-full md:wf-rounded-none  wf-mr-8 md:wf-mr-0 wf-p-3 md:wf-p-0 wf-flex wf-border-4 md:wf-border-transparent wf-border-black/90">
                                    <PlusIcon class="wf-block md:wf-hidden wf-w-4 wf-h-auto wf-text-black wf-font-bold" />
                                    <button class="wf-hidden md:wf-block wf-text-base wf-font-bold wf-text-blue-900 wf-bg-blue-100 wf-px-8 wf-py-3 wf-rounded wf-transition wf-duration-700 hover:wf-bg-blue-800 hover:wf-text-blue-100 wf-shadow">Buy coins</button>
                                </div>
                            </div>
                        </div>

                        <!-- Invest in stocks -->
                        <div class="wf-mt-5 wf-flex wf-border-2 wf-border-dashed wf-border-yellow-600 wf-bg-yellow-200 wf-h-16 md:wf-h-32 wf-rounded-xl wf-justify-center md:wf-justify-start md:wf-pl-5 wf-items-center wf-text-base wf-font-bold wf-text-yellow-700 wf-capitalize">
                            <ShoppingCartIcon class="wf-w-6 md:wf-w-10 wf-h-6 md:wf-h-10 wf-mr-3" />
                            <span class="md:wf-text-xl wf-relative wf-inline-block wf-px-2">
                                <span class="wf-relative wf-text-whit">Invest on stocks</span>
                            </span>
                        </div>

                        <div class="wf-flex wf-mt-5">
                            <div class="wf-w-1/3">
                                <div class="wf-rounded-md wf-h-[105px] wf-bg-blue-700/80 wf-w-[calc(100%-10px)] wf-flex wf-flex-col wf-justify-center wf-items-center wf-text-blue-100">
                                    <span class="wf-flex wf-justify-center wf-items-center wf-p-2 wf-rounded-full wf-shadow wf-bg-blue-300">
                                        <ReplyIcon class="wf-w-6 wf-h-6 wf-rotate-180" />
                                    </span>
                                    <span class="wf-text-base wf-font-bold wf-mt-3">Send</span>
                                </div>
                            </div>
                            <div class="wf-w-1/3">
                                <div class="wf-mx-auto wf-rounded-md wf-h-[105px] wf-bg-purple-700/80 wf-w-[calc(100%-10px)] wf-flex wf-flex-col wf-justify-center wf-items-center wf-text-purple-100">
                                    <span class="wf-p-2 wf-rounded-full wf-shadow wf-bg-purple-300">
                                        <ReplyIcon class="wf-w-6 wf-h-6" />
                                    </span>
                                    <span class="wf-text-base wf-font-bold wf-mt-3">Receive</span>
                                </div>
                            </div>
                            <div class="wf-w-1/3">
                                <div class="wf-ml-auto wf-rounded-md wf-h-[105px] wf-bg-orange-700/80 wf-w-[calc(100%-10px)] wf-flex wf-flex-col wf-justify-center wf-items-center wf-text-orange-100">
                                    <span class="wf-p-2 wf-rounded-full wf-shadow wf-bg-orange-300">
                                        <ViewGridIcon class="wf-w-6 wf-h-6" />
                                    </span>
                                    <span class="wf-text-base wf-font-bold wf-mt-3">More</span>
                                </div>
                            </div>
                        </div>

                        <div class="wf-flex wf-flex-col wf-mt-5">
                            <span class="wf-ml-auto wf-mb-2">
                                <router-link to="#" class="wf-mr-2 wf-text-sm wf-font-medium wf-text-gray-500">
                                    See all
                                </router-link>
                            </span>
                            <div class="wf-flex wf-flex-wrap">
                                <div class="wf-w-1/5 md:wf-hidden wf-flex wf-flex-col wf-items-center wf-mx-px first:wf-ml-0">
                                    <figure class="wf-p-1 wf-bg-gray-100 wf-border wf-border-gray-300 wf-rounded-full">
                                        <span class="wf-bg-black wf-rounded-full wf-flex wf-p-1.5 wf-justify-center wf-items-center wf-text-gray-100">
                                            <SearchIcon class="wf-w-6 wf-h-6" />
                                        </span>
                                        
                                    </figure>
                                    <span class="wf-text-sm wf-text-gray-600 wf-font-bold wf-mt-2">
                                        Search
                                    </span>
                                </div>
                                <CoinDataPartial v-for="i in 3" :key="i"/>
                            </div>
                        </div>

                        <div class="wf-flex wf-flex-col wf-mt-5">
                            <RecentActivityPartial class="md:wf-hidden"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wf-w-full md:wf-w-[22%] wf-h-full wf-ml-5 wf-hidden md:wf-block">
                <div class="wf-h-full wf-bg-white/75 wf-rounded-r-3xl wf-shadow-lg wf-px-3 wf-pb-5">
                    <div class="wf-flex wf-pt-10 wf-items-center">
                        <NotificationsHeaderPartial class="wf-cursor-pointer"/>
                        <div class="wf-ml-auto">
                            <figure class="wf-rounded-full wf-flex wf-justify-center wf-items-center wf-cursor-pointer">
                                <img src="../../../../src/assets/img/fritz_1.jpg" class="wf-cover wf-w-8 wf-h-8 wf-rounded-full">
                                <span class="wf-text-gray-800 wf-text-xs wf-font-bold wf-ml-2 wf-flex wf-justify-center wf-items-center">
                                    Nwosu Darlington
                                    <ChevronDownIcon class="wf-w-4 wf-h-4 wf-text-gray-500" />
                                </span>
                            </figure>
                        </div>
                    </div>
                    <div v-for="(balance, i) in balanceSideBarRight" :key="i" class="wf-relative wf-overflow-hidden wf-mt-5 wf-rounded-lg wf-mx-2 wf-flex wf-flex-col wf-pl-3 wf-py-2 wf-shadow-md" :class="[balance.bgColor, balance.shadowColor]">
                        <span class="wf-font-bold" :class="[balance.textColor]">{{ balance.name }}</span>
                        <span class="wf-text-2xl wf-font-bold" :class="[balance.textColor]">
                            ${{ balance.balance }}
                        </span>

                        <div class="wf-flex wf-flex-col wf-pt-3 wf-relative wf-z-10">
                            <h5 class="wf-text-sm wf-font-medium" :class="[balance.textColor]">
                                Monthly profit
                            </h5>
                            <p class="wf-flex">
                                <span class="wf-text-[18px] wf-font-medium" :class="[balance.textColor]">
                                    ${{ balance.monthly }}
                                </span>
                                <span class="wf-ml-auto wf-mr-3 wf-px-3 wf-rounded-full wf-font-medium wf-text-xs wf-flex wf-justify-center wf-items-center" :class="[balance.gain.textColor, balance.gain.bgColor]">
                                    +10%
                                </span>
                            </p>
                        </div>
                        <div class="wf-absolute -wf-top-[50%]  wf-right-0 wf-w-20 wf-h-20 wf-border-[20px] wf-opacity-10 wf-box-content wf-rounded-full"></div>
                         <div class="wf-absolute -wf-bottom-[50%]  wf-left-0 wf-w-20 wf-h-20 wf-border-[20px] wf-opacity-10 wf-box-content wf-rounded-full"></div>
                    </div>

                    <div class="wf-mx-2 wf-my-5 wf-flex wf-justify-center">
                        <div class="wf-w-1/2 wf-flex wf-justify-center">
                            <button class="wf-mr-3 wf-w-full wf-flex wf-items-center wf-justify-start wf-px-3 wf-py-2 wf-rounded-md wf-bg-purple-700 wf-text-purple-100 hover:wf-bg-purple-900 wf-text-sm">
                                <IdentificationIcon class="wf-w-6 wf-h-6 wf-mr-1" />
                                NFTs
                            </button>
                        </div>
                        <div class="wf-w-1/2 wf-flex wf-justify-center">
                            <button class="wf-mr- wf-w-full wf-flex wf-items-center wf-justify-start wf-px-3 wf-py-2 wf-rounded-md wf-bg-sky-700 wf-text-sky-100 hover:wf-bg-sky-900 wf-text-sm">
                                <HomeIcon class="wf-w-6 wf-h-6 wf-mr-1" />
                                Real Estate
                            </button>
                        </div>
                    </div>

                    <div class="wf-flex wf-flex-col wf-mt-10 wf-mx-2">
                        <RecentActivityPartial class="wf-hidden md:wf-block"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { Wallet } from 'mdue';
    import { HomeIcon, ChartSquareBarIcon, ViewGridIcon, ReplyIcon, TrendingDownIcon, TrendingUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'
    import { PlusIcon, SearchIcon, UserIcon, CreditCardIcon, ShoppingCartIcon, IdentificationIcon } from '@heroicons/vue/outline'
    import NotificationsHeaderPartial from '../partials/NotificationsHeaderPartial.vue'
    import UserMenuHeaderPartial from '../partials/UserMenuHeaderPartial.vue'
    import CoinDataPartial from '../partials/CoinDataPartial.vue'
    import SearchBoxHeaderPartial from '../partials/SearchBoxHeaderPartial.vue'
    import SidebarPartial from '../partials/SidebarPartial.vue'
    import RecentActivityPartial from '../partials/RecentActivityPartial.vue'
    import { ref, computed } from 'vue';

    const NavLinks = ref([
        {
            name: 'Dashboard',
            icon: HomeIcon,
            to: "#",
            id: 'dashboard',
            mobile: true

        },
        {
            name: 'Exchange',
            icon: ChartSquareBarIcon,
            to: "#",
            id: 'exchange',
        },
        {
            name: 'Wallet',
            icon: CreditCardIcon,
            to: "#",
            id: 'wallet',
            mobile: true
        },
        {
            name: 'Send',
            icon: Wallet,
            to: "#",
            id: 'send',
        },
        {
            name: 'Receive',
            icon: Wallet,
            to: "#",
            id: 'receive'
        },
        {
            name: 'Buy',
            icon: TrendingDownIcon,
            to: "#",
            id: 'buy',
            mobile: true,
        },
        {
            name: 'Sell',
            icon: TrendingUpIcon,
            to: "#",
            id: 'sell',
            mobile: true
        },
        {
            name: 'Profile',
            icon: UserIcon,
            to: "#",
            id: 'profile',
            mobile: true,
        },
        {
            name: 'Settings',
            icon: Wallet,
            to: "#",
            id: 'settings'
        }
    ])
    const activeLink = ref('dashboard')

    const mobileNavLinks = computed(() => NavLinks.value.filter(el => el.mobile));

    function navigate(nav) {
        activeLink.value = nav.id;
    }

    function computeBalanceCardBgColor(color, strength) {
        return `wf-bg-${color}-${strength}`;
    }
    const balanceSideBarRight = [
        {
            name: 'Total Balance',
            balance: 50000,
            monthly: 12.5,
            bgColor: 'wf-bg-gray-600',
            shadowColor: 'wf-shadow-gray-700',
            textColor: 'wf-text-gray-100',
            gain: {
                textColor: 'wf-bg-gray-700',
                bgColor: 'wf-text-gray-200',
            }
        },
        {
            name: 'Crypto Currency',
            balance: 50000,
            monthly: 12.5,
            bgColor: 'wf-bg-yellow-600',
            shadowColor: 'wf-shadow-yellow-700',
            textColor: 'wf-text-yellow-100',
            gain: {
                textColor: 'wf-bg-yellow-700',
                bgColor: 'wf-text-yellow-200',
            }
        },
        {
            name: 'Live Stock',
            balance: 60000,
            monthly: 12.5,
            bgColor: 'wf-bg-green-600',
            shadowColor: 'wf-shadow-green-700',
            textColor: 'wf-text-green-100',
            gain: {
                textColor: 'wf-bg-green-700',
                bgColor: 'wf-text-green-200',
            }
        },
        {
            name: 'Real Estate',
            balance: 50000,
            monthly: 12.5,
            bgColor: 'wf-bg-red-600',
            shadowColor: 'wf-shadow-red-700',
            textColor: 'wf-text-red-100',
            gain: {
                textColor: 'wf-bg-red-700',
                bgColor: 'wf-text-red-200',
            }
        },
        {
            name: 'NFTs',
            balance: 560000,
            monthly: 12.5,
            bgColor: 'wf-bg-blue-600',
            shadowColor: 'wf-shadow-blue-700',
            textColor: 'wf-text-blue-100',
            gain: {
                textColor: 'wf-bg-blue-700',
                bgColor: 'wf-text-blue-200',
            }
        }
    ]
</script>