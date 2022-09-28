<template>
    <div class="wf-relative">
        <ViewWrapper>
            <div class="wf-flex wf-justify-center wf-pb-3 wf-border-b wf-border-b-gray-300 wf-font-bold wf-text-xl wf-text-gray-700">Profile</div>

            <div class="wf-flex wf-py-4 wf-px-4 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75">
                <figure class="wf-flex-shrink-0">
                    <!-- <img> -->
                    <div class="wf-w-8 wf-h-8 wf-rounded-full wf-bg-yellow-300"></div>
                </figure>
                <div class="wf-flex wf-flex-col wf-ml-4">
                    <span class="wf-text-gray-600 wf-text-xs wf-font-medium">
                        fritzdultimate@gmail.com
                    </span>
                    <span class="wf-text-gray-900 wf-text-base wf-font-bold">
                        Nwosu Darlington
                    </span>
                </div>
            </div>

            <div class="wf-bg-slate-200 wf-h-full wf-py-4 wf-px-4">
                <section class="wf-flex wf-flex-col wf-mb-4">
                    <h1 class="wf-text-base wf-font-medium wf-text-gray-700">
                        Account
                    </h1>
                    
                    <ul class="wf-mt-5">
                        <li class="wf-flex wf-bg-white wf-rounded wf-py-4 wf-px-2 wf-mt-2.5 first:wf-mt-0 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75" v-for="option in accountListOptions" :key="option.name">
                            <span class="wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow wf-mr-3">
                                <component :is="option.icon" class="wf-w-5 wf-h-5 wf-text-white wf-fill-gray-700" />
                            </span>

                            <span class="wf-text-sm wf-font-medium wf-text-gray-900">
                                {{ option.name }}
                            </span>
                            <span class="wf-ml-auto wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow">
                                <ChevronRightIcon class="wf-w-5 wf-h-5" />
                            </span>
                        </li>
                    </ul>
                </section>
                <section class="wf-flex wf-flex-col wf-mb-4">
                    <h1 class="wf-text-base wf-font-medium wf-text-gray-700">
                        Security
                    </h1>
                    
                    <ul class="wf-mt-5">
                        <li class="wf-flex wf-bg-white wf-rounded wf-py-4 wf-px-2 wf-mt-2.5 first:wf-mt-0 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75" v-for="option in securityListOptions" :key="option.name">
                            <span class="wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow wf-mr-3">
                                <component :is="option.icon" class="wf-w-5 wf-h-5 wf-text-white wf-fill-gray-700" />
                            </span>

                            <span class="wf-text-sm wf-font-medium wf-text-gray-900">
                                {{ option.name }}
                            </span>
                            <span class="wf-ml-auto wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow">
                                <ChevronRightIcon class="wf-w-5 wf-h-5" />
                            </span>
                        </li>
                    </ul>
                </section>

                <section class="wf-flex wf-flex-col wf-mb-4">
                    <h1 class="wf-text-base wf-font-medium wf-text-gray-700">
                        General
                    </h1>
                    
                    <ul class="wf-mt-5">
                        <li class="wf-flex wf-bg-white wf-rounded wf-py-4 wf-px-2 wf-mt-2.5 first:wf-mt-0 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75" v-for="option in generalListOptions" :key="option.name">
                            <span class="wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow wf-mr-3">
                                <component :is="option.icon" class="wf-w-5 wf-h-5 wf-text-white wf-fill-gray-700" />
                            </span>

                            <span class="wf-text-sm wf-font-medium wf-text-gray-900">
                                {{ option.name }}
                            </span>
                            <span class="wf-ml-auto wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow">
                                <ChevronRightIcon class="wf-w-5 wf-h-5" />
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </ViewWrapper>
        <div class="wf-fixed wf-w-full wf-h-full wf-bg-black/50 wf-top-0 wf-left-0 wf-z-0">
            <div class="wf-w-full wf-min-h-[320px] wf-bg-white wf-absolute wf-z-10 wf-bottom-0 wf-rounded-t-2xl wf-flex wf-flex-col wf-items-center">
                <h1 class="wf-text-base wf-text-gray-800 wf-font-bold wf-capitalize wf-py-4 wf-border-b wf-border-b-gray-300 wf-w-full wf-text-center">
                    native currency
                </h1>
                <p class="wf-text-sm wf-text-gray-900 wf-font-medium wf-mt-10 wf-px-4">
                    Choose the currency you want all your funds calculated in. Please note, not withstanding any currency you select, we still make use of <strong><small class="wf-text-blue-600">USD</small></strong> internally
                </p>

                <Listbox as="div" v-model="selected">
                    <ListboxLabel class="wf-block wf-text-sm wf-font-medium wf-text-gray-700">Assigned to</ListboxLabel>
                    <div class="wf-relative wf-mt-1">
                    <ListboxButton class="wf-relative wf-w-full wf-cursor-default wf-rounded-md wf-border wf-border-gray-300 wf-bg-white wf-py-2 wf-pl-3 wf-pr-10 text-left wf-shadow-sm focus:wf-border-indigo-500 focus:wf-outline-none focus:wf-ring-1 focus:wf-ring-indigo-500 sm:wf-text-sm">
                        <span class="wf-flex wf-items-center">
                        <img :src="selected.avatar" alt="" class="wf-h-6 wf-w-6 wf-flex-shrink-0 wf-rounded-full" />
                        <span class="wf-ml-3 wf-block wf-truncate">{{ selected.name }}</span>
                        </span>
                        <span class="wf-pointer-events-none wf-absolute wf-inset-y-0 wf-right-0 wf-ml-3 wf-flex wf-items-center wf-pr-2">
                        <ChevronUpDownIcon class="wf-h-5 wf-w-5 wf-text-gray-400" aria-hidden="true" />
                        </span>
                    </ListboxButton>

                    <transition leave-active-class="wf-transition wf-ease-in wf-duration-100" leave-from-class="wf-opacity-100" leave-to-class="wf-opacity-0">
                        <ListboxOptions class="wf-absolute wf-z-10 wf-mt-1 wf-max-h-56 wf-w-full wf-overflow-auto wf-rounded-md wf-bg-white wf-py-1 wf-text-base wf-shadow-lg wf-ring-1 wf-ring-black wf-ring-opacity-5 focus:wf-outline-none sm:wf-text-sm">
                        <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }">
                            <li :class="[active ? 'wf-text-white wf-bg-indigo-600' : 'wf-text-gray-900', 'wf-relative wf-cursor-default wf-select-none wf-py-2 wf-pl-3 wf-pr-9']">
                            <div class="wf-flex wf-items-center">
                                <img :src="person.avatar" alt="" class="wf-h-6 wf-w-6 wf-flex-shrink-0 wf-rounded-full" />
                                <span :class="[selected ? 'wf-font-semibold' : 'wf-font-normal', 'wf-ml-3 wf-block wf-truncate']">{{ person.name }}</span>
                            </div>

                            <span v-if="selected" :class="[active ? 'wf-text-white' : 'wf-text-indigo-600', 'wf-absolute wf-inset-y-0 wf-right-0 wf-flex wf-items-center wf-pr-4']">
                                <CheckIcon class="wf-h-5 wf-w-5" aria-hidden="true" />
                            </span>
                            </li>
                        </ListboxOption>
                        </ListboxOptions>
                    </transition>
                    </div>
                </Listbox>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ViewWrapper from '../partials/ViewWrapper.vue';
import { onBeforeMount, onMounted } from 'vue';
import topbar from '../../../plugins/topbar';
import { ChevronRightIcon, CurrencyDollarIcon, FlagIcon, ShieldCheckIcon, BellIcon, LockClosedIcon, KeyIcon, ClockIcon, FingerPrintIcon, EyeIcon, TrashIcon, ChatBubbleLeftEllipsisIcon, DocumentIcon, UserPlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/20/solid';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { shallowRef, ref } from 'vue';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide());

const accountListOptions = [
    {
        name: "Native currency",
        icon: CurrencyDollarIcon,
        danger: false,
        input: "select",
        message: "Select preferred currency for your account",
        columns: [{
            label: "Currency",
            column: "preferred_currency"
        }],
        button: "Save"
    },
    {
        name: "Country",
        icon: FlagIcon
    },
    {
        name: "Export private key",
        icon: ShieldCheckIcon
    },
    {
        name: "Notifications settings",
        icon: BellIcon
    }
]

const securityListOptions = [
    {
        name: "Change password",
        icon: LockClosedIcon
    },
    {
        name: "Enable 2FA",
        icon: KeyIcon
    },
    {
        name: "Fund proccessing duration",
        icon: ClockIcon
    },
    {
        name: "Transaction pin",
        icon: FingerPrintIcon
    },
    {
        name: "View passphrase",
        icon: EyeIcon
    },
    {
        name: "Delete account",
        icon: TrashIcon
    }
]

const generalListOptions = [
    {
        name: "Support",
        icon: ChatBubbleLeftEllipsisIcon
    },
    {
        name: "Terms of service",
        icon: DocumentIcon
    },
    {
        name: "Invite friends",
        icon: UserPlusIcon
    },
    {
        name: "Help center",
        icon: QuestionMarkCircleIcon
    },
    {
        name: "Report issue",
        icon: FlagIcon
    }
];

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const selected = ref(people[3])

</script>