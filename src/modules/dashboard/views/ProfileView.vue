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
                <section class="wf-flex wf-flex-col wf-mb-4" v-for="list in optionLists" :key="list.header">
                    <h1 class="wf-text-base wf-font-medium wf-text-gray-700">
                        {{ list.header }}
                    </h1>
                    
                    <ul class="wf-mt-5">
                        <li class="wf-flex wf-bg-white wf-rounded wf-py-4 wf-px-2 wf-mt-2.5 first:wf-mt-0 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75" v-for="option in list.options" :key="option.name" @click="selectOption(option)">
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
        <div class="wf-fixed wf-w-full wf-h-full wf-bg-black/50 wf-top-0 wf-left-0 wf-z-0 wf-flex wf-items-end wf-overflow-auto" @click.self="stopEditing" v-if="isEditingOption && selectedOption">
            <div class="wf-w-full wf-min-h-[200px] wf-overflow-auto md:wf-w-1/3 wf-mx-auto">
                <div class="wf-w-full wf-min-h-[200px] wf-bg-white wf-absolut wf-z-10 wf-bottom-0 wf-rounded-t-2xl wf-flex wf-flex-col wf-items-center wf-pb-10">
                    <h1 class="wf-text-base wf-text-gray-800 wf-font-bold wf-capitalize wf-py-4 wf-border-b wf-border-b-gray-300 wf-w-full wf-text-center">
                        {{ selectedOption.name }}
                    </h1>
                    <p class="wf-text-sm wf-text-gray-900 wf-font-medium wf-mt-10 wf-mb-5 wf-px-4 wf-border-b wf-border-b-gray-300 wf-pb-4 wf-w-full wf-text-center" v-html="selectedOption.message"></p>

                    <div v-for="input in selectedOption.inputs" :key="input.name" class="wf-w-full">
                        <component :is="input.component" @update:value="selectedOption.modelValue = $event" v-bind="input.props" />
                    </div>
                    <div class="wf-w-full wf-flex">
                        <ActionBtn class="wf-mx-20 wf-w-full" @click="saveSettings(selectedOption.modelValue)">{{ isProcessingValues ? 'Processing' : selectedOption.button }}</ActionBtn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ViewWrapper from '../partials/ViewWrapper.vue';
import { onBeforeMount, onMounted, toRaw, type Component, type Ref } from 'vue';
import topbar from '../../../plugins/topbar';
import { ChevronRightIcon, CurrencyDollarIcon, FlagIcon, ShieldCheckIcon, BellIcon, LockClosedIcon, KeyIcon, ClockIcon, FingerPrintIcon, EyeIcon, TrashIcon, ChatBubbleLeftEllipsisIcon, DocumentIcon, UserPlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/20/solid';
import { shallowRef, ref } from 'vue';
import ActionBtn from '../../../common/components/Form/ActionBtn.vue';
import SelectBox from '../../../common/components/Form/SelectBox.vue';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide());

const isProcessingValues = ref(false);
const currency = ref('');
const people = [
  {
    id: 1,
    name: 'USD',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'EUR',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'NGN',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'USD',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Ceedees',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Pounds',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'NGN',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Pounds',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'EUR',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'NGN',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const selected = ref(people[3])
const optionLists = [
    {
        header: "Account",
        options: [
            {
                name: "Native currency",
                icon: CurrencyDollarIcon,
                danger: false,
                inputs: [
                    {
                        "type": "select",
                        "component": shallowRef(SelectBox),
                        "name": "preferred_currency",
                        label: "Currency",
                        props: {
                            options: people,
                            selectedIndex: 3
                        }
                    },
                ],
                modelValue: ref(people[3].name),
                message: `
                    Choose the currency you want all your funds to be calculated in. Please note, not withstanding any currency you select, we still make use of <strong><small class="wf-text-blue-600">USD</small></strong> internally`,
                button: "Save"
            },
            {
                name: "Country",
                icon: FlagIcon,
                danger: false,
                input: [],
                message: `Select your country of residence`,
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
    },
    {
        header: "Security",
        options: [
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
    },
    {
        header: "General",
        options: [
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
        ]
    }
]
interface Inputs {
    name: string,
    props: any,
    component: Component,
}
interface Option {
    name?: string,
    message?: any,
    inputs?: Array<Inputs>,
    button?: string,
    modelValue?: any
}

const isEditingOption = ref(false)
function stopEditing() {
    isEditingOption.value = false;
    isProcessingValues.value = false
}
let selectedOption: Ref<Option> = ref( {button: "Save"} );
function selectOption(option: Object) {
    selectedOption.value = option;
    isEditingOption.value = Object.keys(selectedOption.value).length ? true : false;
}

function saveSettings(val: string) {
    isProcessingValues.value = true;

    console.log(val)
}

</script>