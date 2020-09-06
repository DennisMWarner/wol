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
                >Plan: {{activeSetData.weight}} X {{activeSetData.repCount}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 bg-success text-right text-white rounded-bottom border border-white">
            <div class="row">
              <div class="col-6 text-left text-white">
                <p class="text-white">{{activeSetData.context}}</p>
              </div>
              <div class="col-6">
                <p
                  class="text-white text-right"
                >Actual: {{activeSetData.weight}} X {{activeSetData.repCount}}</p>
              </div>
            </div>
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