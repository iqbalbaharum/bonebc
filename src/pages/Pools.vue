<template>
  <q-page class="q-py-md">
    <div class="full-width">
        <div class="bn-block q-gutter-y-md">
          <div class="text-h4 text-secondary text-weight-bold">All Pools - All</div>
          <div class="row">
            <q-input class="col q-mr-md" v-model="filter" outlined placeholder="Search for address, name or keyword" dense>
              <template v-slot:prepend>
                <q-icon name="search" color="accent" />
              </template>
            </q-input>
            <q-btn icon="fas fa-sliders-h" color="accent" size="sm" padding="sm md">
              <q-menu
                transition-show="jump-down"
                transition-hide="jump-up">
                <q-list dense style="min-width: 140px">
                  <q-item clickable v-close-popup>
                    <q-item-section>All</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Started</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Ended</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Voting</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Filled</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Not Filled</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Cancelled</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <div class="q-pt-md">
            <q-list>
              <q-item class="bn-card q-py-md">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="~assets/main/rd-logo.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="col-4 ellipsis">
                  <q-item-label class="text-h6 text-primary text-weight-bold">RD Token</q-item-label>
                </q-item-section>
                <q-item-section class="col-3">
                  <div class="row justify-between text-caption">
                    <div class="">20 BNB</div>
                    <div class="">200 BNB</div>
                  </div>
                  <q-linear-progress size="25px" :value="10 / 80" rounded color="primary">
                    <div class="absolute-full flex flex-center">
                      <q-badge color="white" text-color="accent" :label="`${(10 / 80 * 100).toFixed(2)} %`" />
                    </div>
                  </q-linear-progress>
                </q-item-section>
                <q-item-section>
                  <div class="text-center">
                    <span class="bn-info-outline">Open in 1 Hrs 2 Mins</span>
                  </div>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-x-lg">
                    <q-btn padding="sm lg" size="md" color="primary" label="Details" :to="{ path: `/project/${'1'}` }" />
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>

      <div class="q-mt-lg full-width flex flex-center">
        <div class="bn-block">
          <div class="row items-center justify-center">
            <div class="col-md-6 q-py-md text-center">
              <q-img src="~assets/pools/pool-img.png" />
            </div>
            <div class="col-md-6 q-py-md text-center q-gutter-y-md">
                <div class="text-weight-bold text-h3 text-primary">More pools coming soon!</div>
                <div class="text-body1 text-grey-8">Watch this space for upcoming quality projects, brought to you by RD Labs!</div>
              </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      filter: '',
    }
  },
}
</script>