<template>
  <q-page>

    <div class="bn-screen text-white full-width flex flex-center text-center">
      <div class="bn-block q-gutter-y-md text-black">
        <div class="text-h3 text-primary text-weight-bold">The epicenter of all things crypto</div>
        <div class="text-body1">Welcome to the RD Familia, where you will learn everything crypto, finding, vetting, investing and supporting crypto projects.</div>
        <div class="q-gutter-x-md">
          <q-btn text-color="white" size="md" padding="sm lg" color="primary" class="bn-button" to="/pools"><span class="text-body1">View All Pools</span></q-btn>
        </div>
        <div>
          <q-img src="~assets/main/main-block.png" style="width: 523px;height: 308px;"/>
        </div>
      </div>
    </div>


    <div class="bg-alt-block">
      <div class="bn-screen full-width flex flex-center bg-grey-2">
        <div class="bn-block">
          <div class="items-center justify-center">
            <div class="row q-my-md q-gutter-md justify-center">
              <div class="col-md-12 q-py-md text-center">
                <div class="text-weight-bold text-h3">Featured Project</div>
                <div class="q-mt-md">
                  <div class="">View Pools</div>
                  <q-toggle
                    color="green"
                    v-model="toggle.featured"
                  />
                </div>
              </div>
              <q-card class="bn-card col-md-5 col-xs-12 q-pa-sm bg-yellow-2 cursor-pointer" v-for="(project, index) in projects" :key="index">
                <q-card-section horizontal>
                  <q-card-section avatar>
                    <q-avatar square size="80px">
                      <q-img src="~assets/main/rd-logo.png" />
                    </q-avatar>
                  </q-card-section>

                  <q-card-section>
                    <div class="text-weight-bold text-h6">{{ project.title }}</div>
                    <div class="q-gutter-x-sm">
                      <q-badge rounded color="accent">BNB</q-badge>
                    </div>
                  </q-card-section>

                  <q-space />

                  <q-card-section>
                    <q-btn color="primary" label="Details" @click="onClickProject(project.id)"/>
                  </q-card-section>
                </q-card-section>

                <q-card-section class="text-grey-8">
                  <div class="ellipsis-3-lines">{{ project.description }}</div>
                </q-card-section>

                <q-card-section>
                  <div class="text-weight-bold text-black">Progress</div>
                  <q-linear-progress size="25px" :value="project.currentVote / project.totalVote" rounded color="primary">
                    <div class="absolute-full flex flex-center">
                      <q-badge color="white" text-color="accent" :label="`${(project.currentVote / project.totalVote * 100).toFixed(2)} %`" />
                    </div>
                  </q-linear-progress>
                </q-card-section>

                <q-card-section horizontal>
                  <q-card-section>
                    <div class="">
                      <div class="text-weight-bold text-black">Max</div>
                      <div class="text-h6 text-black">{{ project.maxBuy }} <span class="text-uppercase">{{ project.token }}</span></div>
                    </div>
                  </q-card-section>
                  <q-space />
                  <q-card-section>
                    <div class="text-weight-bold text-black text-right">Links</div>
                    <div class="">
                      <q-btn icon="fab fa-telegram" flat round color="accent" :to="project.channel.telegram" />
                      <q-btn icon="fas fa-globe-asia" flat round color="accent" :to="project.channel.website" />
                    </div>
                  </q-card-section>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>

      <div class="bn-screen full-width flex flex-center">
        <div class="bn-block">
          <div class="items-center justify-center">
            <div class="row q-my-md q-gutter-md justify-center">
              <div class="col-md-12 q-py-md text-center">
                <div class="text-weight-bold text-h3">RD Projects Umbrella</div>
              </div>
            </div>
            <div class="row items-center">
              <div class="col-4 q-pa-md text-center">
                <q-img src="~assets/logos/fomolab_logo.png" style="width: 50%;height:auto" />
              </div>
              <div class="col-4 q-pa-md text-center">
                <q-img class="justify-center" src="~assets/logos/wault_logo.png" style="width: 50%;height:auto" />
              </div>
              <div class="col-4 q-pa-md text-center">
                <q-img class="items-center" src="~assets/logos/wsb_logo.png" style="width: 30%;height:auto" />
              </div>
            </div>
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
      toggle: {
        featured: true
      },
      projects: [
        {
          id: 1,
          icon: 'https://cdn.quasar.dev/img/avatar.png',
          title: 'RD Token',
          description: 'The RD Token is the crypto engine which powers everything related to RD Labs, Auditors and Ventures. Holding this token will give you access to early stage investment allocations, content and regular tutorials covering all aspects of crypto, AMA´s and options to interact with other RD Familia members within the ecosystem.',
          currentVote: 10,
          totalVote: 90,
          maxBuy: 0.19,
          token: 'BNB',
          openDate: new Date(),
          closeDate: new Date() + 1,
          channel: {
            telegram: '#',
            website: '#'
          }
        }
      ]
    }
  },

  methods: {
    onClickProject(id) {
      this.$router.push({ path: `/project/${id}` })
    }
  }
}
</script>
