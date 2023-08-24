<script setup lang="ts">
import { DraggableList } from "shared/ui/draggableList";
import { DynamicListItem } from "shared/ui/dynamicList";
import { ref } from "vue";
import DynamicListInput from "shared/ui/dynamicList/ui/dynamicListInput.vue";
import { nanoid } from "nanoid";

const items = ref([ { label: 'item1', id: 'item1' }, { label: 'item2', id: 'item2' }, { label: 'item3', id: 'item3' } ]);

const onDeleteItem = (e, id) => {
  items.value = items.value.filter(item => item.id !== id);
}

const onAddItem = (e, newItem) => {
  items.value.push({ id: nanoid(5), label: newItem })
}

</script>

<template>
  <DraggableList :items="items" @update-order="items = $event">
    <template v-slot:item="{ item }" >
      <DynamicListItem :on-delete-item="onDeleteItem" v-bind="item" />
    </template>
  </DraggableList>
  <DynamicListInput :on-add-item="onAddItem" />
</template>