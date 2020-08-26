<template>
  <div class="singleSet col-12 border-0">
    <div class="row">
      <div class="mt-2 col-12 no-gutters">
        <div class="row">
          <div class="col-12 bg-white rounded-top">
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
          <div class="col-12 bg-success text-right text-white rounded-bottom">
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