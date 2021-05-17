<template>
  <div class="row">
     <div class="col-md-7 col-sm-12">
        <div class="q-py-md q-gutter-x-md">
          <q-btn label="whitepaper" outline color="black" :to="project.info.whitepaper" />
          <q-btn label="tokenomic" outline color="black" :to="project.info.tokenomic" />
        </div>
        <div class="text-grey-8">{{ project.description }}</div>
      </div>

      <div class="col-md-1">&nbsp;</div>
    
      <div class="col-md-4 col-sm-12 q-gutter-y-md">
        <q-card class="bg-auditor-block q-pa-md q-pl-xl">
          <div>Auditor Certification</div>
          <div class="text-h5 text-weight-bold text-primary">Rug Detective</div>
          <div class="text-caption">April 14th 2021</div>
        </q-card>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
}
</script>