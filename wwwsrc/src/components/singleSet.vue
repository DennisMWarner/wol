<template>
  <div class="singleSet col-12">
    <div class="row">
      <div class="mt-1 col-12 border rounded border-white no-gutters">
        <div class="row">
          <div class="col-12 bg-white">
            <div class="row">
              <div class="col-4">
                <p class="text-warning">{{setGroupData.name}}</p>
              </div>
              <div class="col-8">
                <p
                  class="text-dark text-right"
                >Plan: {{setGroupData.weight}} X {{setGroupData.reps}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-right text-white">
            <p>Actual: 100 x 5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "singleSet",
  props: ["setGroupData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>