<template>
  <div>
    <div class="text-h4 text-weight-bold q-py-sm">Allocation Detail</div>
     <q-table class="q-mt-md" :columns="columns" :data="data" />
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
      columns: [
        { name: 'action', label: 'Action', field: 'action', sortable: true, align: 'center', headerClasses: 'text-primary text-weight-bold' },
        { name: 'contribution', label: 'Contribution', field: 'contribution', sortable: true, align: 'center', headerClasses: 'text-primary text-weight-bold' },
        { name: 'total', label: 'Total Tokens', field: 'total', sortable: true, align: 'center', headerClasses: 'text-primary text-weight-bold' },
        { name: 'withdrawn', label: 'Withdrawn', field: 'withdrawn', sortable: true, align: 'center', headerClasses: 'text-primary text-weight-bold' },
        { name: 'available', label: 'Available Now', field: 'available', sortable: true, align: 'center', headerClasses: 'text-primary text-weight-bold' },
      ],
      data: [
        {
          action: 'test',
          contribution: 'test',
          total: 'test',
          withdrawn: 'test',
          available: 'test'
        },
        {
          action: 'test',
          contribution: 'test',
          total: 'test',
          withdrawn: 'test',
          available: 'test'
        },
        {
          action: 'test',
          contribution: 'test',
          total: 'test',
          withdrawn: 'test',
          available: 'test'
        },
        {
          action: 'test',
          contribution: 'test',
          total: 'test',
          withdrawn: 'test',
          available: 'test'
        }
      ]
    }
  },
}
</script>