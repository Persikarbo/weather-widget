<script setup lang="ts">
import { ref, toRefs } from "vue";
import { classNames } from "shared/lib";
import type { DraggableListProps } from "shared/ui/draggableList/config/types";
import { Icon } from "shared/ui/icon";

const props = withDefaults(defineProps<DraggableListProps>(), {
  items: [],
  extraClasses: []
})

const { items } = toRefs(props);
const activeIndex = ref(null);

const emit = defineEmits([ "updateOrder" ])

const onDragStart = (e, index) => {
  const { currentTarget, dataTransfer } = e;
  items.value = items.value.map((item, i) => ({ ...item, isDragging: i === index }));

  const draggableEl = currentTarget.parentNode;
  dataTransfer.setDragImage(draggableEl, 0, draggableEl.clientHeight / 2);
  activeIndex.value = index;
}

const onDragEnd = () => {
  items.value.forEach(item => delete item.isDragging)
  emit("updateOrder", items.value);
}

const onDragOver = (e, currentIndex) => {
  const isMovable = activeIndex.value !== currentIndex;
  if (!isMovable) return;

  items.value.splice(currentIndex, 0, items.value.splice(activeIndex.value, 1)[0]);
  activeIndex.value = currentIndex;
}
</script>

<template>
  <ul :class="classNames('draggableList', mods, extraClasses)">
    <li v-for="(item, index) in items"
        :key="index"
        :class="classNames('draggableList__item', { isDragging: item.isDragging })" >
      <div class="draggableList__icon"
           draggable="true"
           @dragstart="(e) => onDragStart(e, index)"
           @dragend.prevent="onDragEnd"
           @dragover.prevent="(e) => onDragOver(e, index)">
        <Icon id="icon-drag" />
      </div>
      <slot name="item" v-bind:item="item" />
    </li>
  </ul>
</template>

<style scoped>
@import "./index.scss";
</style>