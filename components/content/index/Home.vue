<template>
    <div class="relative">
        <div class="mt-24 mb-32 flex flex-col gap-12 lg:gap-32">
            <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
    </div>
</template>