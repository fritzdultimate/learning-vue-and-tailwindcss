<template>
    <main class="wf-block wf-h-full">
        <div class="wf-h-full wf-flex wf-justify-center wf-items-center wf-flex-wrap">
            <div class="wf-flex wf-mt-10 wf-self-end wf-skew-x-12 wf-skew-y-12">
                <div class="wf-h-4 wf-w-4 wf-bg-white/[0.15] wf-self-end wf-justify-self-end"></div>
            </div>
            <section class="wf-flex wf-flex-wrap wf-justify-center">
                <div class="wf-flex">
                    <div class="wf-h-14 wf-w-14 wf-bg-red-900 wf-m-2 wf-brightness-75" style="box-shadow:-7px 4px 14px 5px #300505"></div>
                    <div class="wf-h-14 wf-w-14 wf-bg-slate-300 wf-m-2 wf-translate-x-2 -wf-translate-y-2" style="box-shadow:-20px 20px 15px 7px #000000"></div>
                    <div class="wf-h-14 wf-w-14 wf-bg-red-900 wf-m-2" style="box-shadow:-7px 4px 14px 5px #300505"></div>
                </div>
                <div class="wf-flex">
                    <div class="wf-h-14 wf-w-14 wf-bg-red-900 wf-m-2 wf-shadow-red-300" style="box-shadow:-7px 4px 14px 5px #300505"></div>
                    <div class="wf-h-14 wf-w-14 wf-bg-green-900 wf-m-2" style="box-shadow:-7px 4px 14px 5px #300505"></div>
                    <div class="wf-h-14 wf-w-14 wf-bg-purple-900 wf-m-2" style="box-shadow:-7px 4px 14px 5px #300505"></div>
                </div>
                <div class="wf-flex">
                    <div class="wf-h-14 wf-w-14 wf-bg-purple-900 wf-m-2" style="box-shadow:-7px 4px 14px 5px #300505"></div>
                    <div class="wf-h-14 wf-w-14 wf-bg-red-900 wf-m-2 wf-brightness-75" style="box-shadow:-7px 4px 14px 5px #300505"></div>
                    <div class="wf-h-14 wf-w-14 wf-bg-green-900 wf-m-2" style="box-shadow:-7px 4px 14px 5px #300505">
                    </div>
                </div>
                <h2 class="wf-font-extrabold wf-text-4xl wf-text-center wf-text-neutral-900 wf-mt-14">
                    One App That Manage Your Money
                </h2>
                <div class="wf-mt-12 wf-flex wf-h-12 wf-w-12 wf-bg-black wf-rounded-full wf-text-white wf-justify-center wf-items-center wf-p-6">
                    <span class="wf-text-xl wf-text-slate-400">></span>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
    .box {
        width: 300px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(-50px);
    }
    .box__face--front,
    .box__face--back {
        width: 300px;
        height: 200px;
        background: red;
    }
    .box__face--front {
        transform: rotateY(0deg) translateZ(50px);
    }
    .box__face--back {
        transform: rotateY(180deg) translateZ(50px)
    }
</style>