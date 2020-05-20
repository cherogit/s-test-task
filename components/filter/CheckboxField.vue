<template>
  <label class="label label_checkbox">
    <input
      type="checkbox"
      :name="name"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
    <span class="label__name">{{name}}</span>
  </label>
</template>

<script>
    export default {
        name: "CheckboxField",
        data() {
            return {}
        },
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            name: String,
            checked: Boolean
        },
    }
</script>
