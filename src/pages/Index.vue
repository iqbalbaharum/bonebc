<template>
  <q-page>
    <div class="bn-screen text-white full-width flex flex-center text-center">
      <div class="bn-block q-gutter-y-md text-black">
      </div>
    </div>

    <div class="bn-screen full-width flex flex-center text-center">
      <div class="row bn-block items-center">
        <div class="col-md-6 col-sm-12">
          <div class="text-h2 text-primary">Background RD LABS</div>
          <div class="text-h6 q-mt-md text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed dictum. Ut placerat dictum eros, ac ultrices ipsum fringilla quis. Morbi porta dapibus cursus. Sed vestibulum purus vitae neque posuere, vel semper tellus pharetra.
          </div>
        </div>
        <div class="col-md-5 offset-md-1 col-sm-12">
          <q-img 
            src="~assets/home/background-4x.png"
            srcset="
              ~assets/home/background-1x.png 1x
              ~assets/home/background-4x.png 4x
            "
            style="height: 480px; height: 480px;"
          />
        </div>
      </div>
    </div>

    <div class="bn-screen bg-main-block full-width flex flex-center">
      <div class="bn-block items-center justify-center">
        <div class="text-center">
          <div class="text-weight-bold text-h2 text-primary">RD Services</div>
          <div class="text-subtitle1 text-bn-grey-2">Donec nec dolor a mi tempus tincidunt</div>
        </div>
        <div class="row justify-center q-my-xl">
          <q-card class="bn-card bn-card-services">
            <q-card-section>
              <img src="~assets/home/service-audit.png"/>
              <div class="text-h5 q-my-sm">RD Auditing</div>
              <div class="text-body-1 text-bn-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed</div>
            </q-card-section>
          </q-card>

          <q-card class="bn-card bn-card-services bn-card-gutter">
            <q-card-section>
              <img src="~assets/home/service-kyc.png" />
              <div class="text-h5 q-my-sm">RD KYC</div>
              <div class="text-body-1 text-bn-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed</div>
            </q-card-section>
          </q-card>

          <q-card class="bn-card bn-card-services">
            <q-card-section>
              <img src="~assets/home/service-research.png"/>
              <div class="text-h5 q-my-sm">RD Research</div>
              <div class="text-body-1 text-bn-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-12 justify-center text-center">
          <q-btn label="MORE" color="primary" padding="sm lg" />
        </div>
      </div>
    </div>

    <div class="bg-main-block full-width flex flex-center">
      <div class="bn-block items-center">
        <div class="row items-center">
          <div class="col-md-6">
            <q-img src="~assets/home/community-4x.png" />
          </div>
          <div class="col-md-6 q-gutter-y-md">
            <div class="text-h3 text-primary">RD Community</div>
            <div class="text-h3 text-justify text-bn-grey-2">
              Praesent magna arcu, aliquet a aliquet ac
            </div>
            <q-btn label="MORE" color="primary" padding="sm lg" />
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="text-h2 text-primary">RD Community</div>
            <div class="text-body1 text-justify text-bn-grey-2">
              In auctor felis eu orci volutpat tristique. Sed sollicitudin ligula posuere neque ullamcorper, ac viverra lectus consectetur. Nunc tempor mollis dapibus. Vivamus commodo euismod consequat. Integer finibus accumsan mi non blandit. Pellentesque lacinia risus at justo molestie, eu tincidunt quam dictum. Praesent egestas magna nec libero vulputate, id sodales sem posuere. Proin blandit, lectus at posuere porttitor, est ex venenatis felis, ac sagittis tellus ante sit amet est. Etiam tristique tincidunt tristique. Aenean malesuada blandit tristique. 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bn-screen bg-main-block full-width flex flex-center">
      <div class="bn-block items-center justify-center">
        <div class="text-center">
          <div class="text-weight-bold text-h2 text-primary">RD Gems</div>
          <div class="text-subtitle1 text-bn-grey-2">Donec nec dolor a mi tempus tincidunt</div>
        </div>
        <div class="row items-center">
          <div class="col-md-6">
            <q-img src="~assets/home/gems-4x.png" />
          </div>
          <div class="col-md-6 q-gutter-y-md">
            <div class="text-h4">Donec nec dolor a mi tempus tincidunt</div>
            <div class="text-body1 text-justify text-bn-grey-2">
              In auctor felis eu orci volutpat tristique. Sed sollicitudin ligula posuere neque ullamcorper, ac viverra lectus consectetur. Nunc tempor mollis dapibus. Vivamus commodo euismod consequat. 
            </div>
            <q-btn label="MORE" color="primary" padding="sm lg" />
          </div>
        </div>
      </div>
    </div>

    <div class="bn-screen bg-main-block full-width flex flex-center">
      <div class="bn-block items-center justify-center">
        <div class="row items-center">
          <div class="col-md-6 q-gutter-y-md">
            <div class="text-h2 text-primary">Investor & Membership</div>
            <div class="text-body1 text-justify text-bn-grey-2">
              In auctor felis eu orci volutpat tristique. Sed sollicitudin ligula posuere neque ullamcorper, ac viverra lectus consectetur. Nunc tempor mollis dapibus. Vivamus commodo euismod consequat. 
            </div>
            <q-btn label="MORE" color="primary" padding="sm lg" />
          </div>
          <div class="col-md-6">
            <q-img src="~assets/home/investor-4x.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-main-block full-width flex flex-center">
      <div class="bn-block items-center justify-center q-gutter-y-md">
        <div class="text-center">
          <div class="text-weight-bold text-h2 text-primary">Investor & Membership Tiers</div>
        </div>
        <div class="row justify-between q-my-xl">
          <q-card class="col bn-card bn-card-tier text-center">
            <q-card-section class="q-gutter-y-md">
              <img src="~assets/tier/tier1-2x.png" style="max-width: 106px;max-height: 101.46px;"/>
              <div class="text-h5 text-primary">Free Tier</div>
              <div class="text-body2 text-bn-grey-1 text-left">
                <ul>
                  <li>Praesent sagittis</li>
                  <li>Luctus dolor</li>
                </ul>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="col bn-card bn-card-tier text-center">
            <q-card-section class="q-gutter-y-md">
              <img src="~assets/tier/tier2-2x.png" style="max-width: 106px;max-height: 101.46px;"/>
              <div class="text-h5 text-primary">Basic Tier</div>
              <div class="text-body2 text-bn-grey-1 text-left">
                <ul>
                  <li>Praesent sagittis</li>
                  <li>Luctus dolor</li>
                </ul>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="col bn-card bn-card-tier text-center">
            <q-card-section class="q-gutter-y-md">
              <img src="~assets/tier/tier3-2x.png" style="max-width: 106px;max-height: 101.46px;"/>
              <div class="text-h5 text-primary">Advanced Tier</div>
              <div class="text-body2 text-bn-grey-1 text-left">
                <ul>
                  <li>Praesent sagittis</li>
                  <li>Luctus dolor</li>
                </ul>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="col bn-card bn-card-tier text-center">
            <q-card-section class="q-gutter-y-md">
              <img src="~assets/tier/tier4-2x.png" style="max-width: 106px;max-height: 101.46px;"/>
              <div class="text-h5 text-primary">Elite Tier</div>
              <div class="text-body2 text-bn-grey-1 text-left">
                <ul>
                  <li>Praesent sagittis</li>
                  <li>Luctus dolor</li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="text-h6 justify-center text-center text-bn-grey-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed dictum.
Ut placerat dictum eros, ac ultrices ipsum fringilla quis. Morbi porta dapibus cursus. 
        </div>
        <div class="text-center">
          <q-btn label="More" color="primary" padding="sm xl" no-caps />
        </div>
        <div class="row items-center">
          <div class="col-md-8">
            <q-img src="~assets/home/allocation-4x.png" />
          </div>
          <div class="col-md-4">
            <div class="text-h3 text-primary">Public Sale Guaranteed Allocation</div>
          </div>
        </div>
        <div class="text-body1 text-bn-grey-2">
          In auctor felis eu orci volutpat tristique. Sed sollicitudin ligula posuere neque ullamcorper, ac viverra lectus consectetur. Nunc tempor mollis dapibus. Vivamus commodo euismod consequat. Integer finibus accumsan mi non blandit. Pellentesque lacinia risus at justo molestie, eu tincidunt quam dictum. Praesent egestas magna nec libero vulputate, id sodales sem posuere. Proin blandit, lectus at posuere porttitor, est ex venenatis felis, ac sagittis tellus ante sit amet est. Etiam tristique tincidunt tristique. Aenean malesuada blandit tristique. 
        </div>
      </div>
    </div>

    <div class="bg-main-block full-width flex flex-center">
      <div class="bn-block items-center justify-center">
        <div class="text-center">
          <div class="text-weight-bold text-h2 text-primary">Founders & Advisors</div>
          <div class="text-subtitle1 text-bn-grey-2">Donec nec dolor a mi tempus tincidunt</div>
        </div>
        <div class="row justify-between q-my-xl">
          <q-card class="col bn-card bn-card-advisor">
            <img src="~assets/others/placeholder1-4x.png" style="width: 100%;max-height: 100%;"/>
            <div class="text-h4 text-bn-grey-3 text-weight-bold">People 1</div>
            <div class="text-subtitle1 text-primary text-weight-bold">CEO & Founder</div>
            <div class="text-body1 text-bn-grey-2 text-justify q-my-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed dolor sit amet dolor
            </div>
            <div class="row q-gutter-x-sm">
              <q-icon name="fab fa-linkedin" size="sm" />
              <q-icon name="fab fa-twitter" size="sm"  />
            </div>
          </q-card>

          <q-card class="col bn-card bn-card-advisor">
            <img src="~assets/others/placeholder1-4x.png" style="width: 100%;max-height: 100%;"/>
            <div class="text-h4 text-bn-grey-3 text-weight-bold">People 1</div>
            <div class="text-subtitle1 text-primary text-weight-bold">CEO & Founder</div>
            <div class="text-body1 text-bn-grey-2 text-justify q-my-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed dolor sit amet dolor
            </div>
            <div class="row q-gutter-x-sm">
              <q-icon name="fab fa-linkedin" size="sm" />
              <q-icon name="fab fa-twitter" size="sm"  />
            </div>
          </q-card>

          <q-card class="col bn-card bn-card-advisor">
            <img src="~assets/others/placeholder1-4x.png" style="width: 100%;max-height: 100%;"/>
            <div class="text-h4 text-bn-grey-3 text-weight-bold">People 1</div>
            <div class="text-subtitle1 text-primary text-weight-bold">CEO & Founder</div>
            <div class="text-body1 text-bn-grey-2 text-justify q-my-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed dolor sit amet dolor
            </div>
            <div class="row q-gutter-x-sm">
              <q-icon name="fab fa-linkedin" size="sm" />
              <q-icon name="fab fa-twitter" size="sm"  />
            </div>
          </q-card>
          
          <q-card class="col bn-card bn-card-advisor">
            <img src="~assets/others/placeholder1-4x.png" style="width: 100%;max-height: 100%;"/>
            <div class="text-h4 text-bn-grey-3 text-weight-bold">People 1</div>
            <div class="text-subtitle1 text-primary text-weight-bold">CEO & Founder</div>
            <div class="text-body1 text-bn-grey-2 text-justify q-my-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque viverra nisl sed dolor sit amet dolor
            </div>
            <div class="row q-gutter-x-sm">
              <q-icon name="fab fa-linkedin" size="sm" />
              <q-icon name="fab fa-twitter" size="sm"  />
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div class="full-width flex flex-center">
      <div class="bn-block items-center justify-center text-center">
        <img src="~assets/logos/discord-logo-2x.png" />
      </div>
    </div>


  </q-page>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
.bn-card {
  position: static;
  left: 280px;
  top: 0px;

  background: #FFFFFF;
  /* Shadow 1 */

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.bn-card-services {
  max-width: 261.33px;
  height: 342px;
  padding: 48px 32px;
}

.bn-card-tier {
  max-width: 240.75px;
  height: 526px;
  padding: 48px 32px;
}

.bn-card-advisor {
  max-width: 276px;
  height: 526px;
  padding: 32px 24px;
}

.bn-card-gutter {
  margin-left: 48px;
  margin-right: 48px;
}

.bn-card ul {
  padding: 0px;
  margin: 0px;
}

.bn-card ul li {
  list-style-image: url('~assets/others/tick-1x.png');
  margin-bottom: 32px;
}
</style>