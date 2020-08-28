<template>
  <div class="singleSet col-12 border-0">
    <div class="row">
      <div class="mt-2 col-12 no-gutters">
        <div class="row">
          <div class="col-12 bg-white rounded-top">
            <div class="row">
              <div class="col-4">
                <p class="text-warning">{{activeSetData.name}}</p>
              </div>
              <div class="col-8">
                <p
                  class="text-dark text-right"
                >Plan: {{activeSetData.weight}} X {{activeSetData.reps}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 bg-success text-right text-white rounded-bottom">
            <p>Actual: {{activeSetData.weight}} x {{activeSetData.reps}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "singleSet",
  props: ["activeSetData"],
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