<template>
  <div class="servers">
    <div class="servers__wrapper container">
      <h2 class="servers__title">Доступные конфигурации</h2>

      <div class="servers-filter">
        <div class="servers-filter__range">
          <span class="servers-filter__range-name">vCPU</span>
          <client-only>
            <vue-slider
              class="servers-filter__range-field"
              v-model="coresNumber"
              :process="true"
              :height="3"
              :dotSize="12"
              :enable-cross="false"
              :tooltip="'always'"
              :tooltip-placement="'bottom'"
              :tooltip-formatter="rangeFormatter"
              :min="2"
              :max="12"
              :interval="2"
              :lazy="true"
              :marks="{
              '2': '2',
              '12': '12'
          }"
            />
          </client-only>
        </div>

        <div class="servers-filter__checkboxes">
          <CheckboxField
            class="servers-filter__checkbox"
            name="gpu"
            v-model="gpu"
          />
          <CheckboxField
            class="servers-filter__checkbox"
            name="raid"
            v-model="raid"
          />
          <CheckboxField
            class="servers-filter__checkbox"
            name="ssd"
            v-model="ssd"
          />
        </div>

      </div>

      <div class="result-block">
        <h3 class="result-block__title">Performance Line</h3>

        <template v-if="fetchServers.isPending">
          <LoaderIcon class="result-block__loader"/>
        </template>

        <template v-else-if="fetchServers.isResolved">
          <ServersList v-if="hasServers" class="result-block__servers-list" :servers="filteredServers"/>
          <div v-else>
            <p class="result-block__message">Нет результатов</p>
          </div>
        </template>

        <template v-else-if="fetchServers.isRejected">
          <p class="result-block__message result-block__message_reject">Нет соединения</p>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-slider-component/theme/antd.css'
  import {getServers} from "~/plugins/api"
  import {translations} from "~/plugins/translations"
  import ServersList from "./ServersList"
  import CheckboxField from "./filter/CheckboxField"
  import LoaderIcon from '~/assets/img/loader.svg'

  export default {
    name: "Servers",
    data() {
      return {
        servers: [],
        coresNumber: 6,
        gpu: false,
        ssd: false,
        raid: false,
        translations: translations,
      }
    },
    components: {
      CheckboxField,
      ServersList,
      LoaderIcon
    },
    mounted() {
      window.c = this

      this.fetchServers()
    },
    computed: {
      rangeFormatter() {
        return this.translations.coresAmount({count: this.coresNumber})
      },
      hasServers() {
        return this.filteredServers.length > 0
      },
      filteredServers() {
        return this.servers.filter(server => this.coresNumber ? !!(server.cpu.cores === this.coresNumber) : true)
          .filter(server => this.gpu ? !!server.gpu : true)
          .filter(server => this.ssd ? !!(server.disk.type.toUpperCase() === 'SSD') : true)
          .filter(server => this.raid ? !!(server.disk.count >= 2) : true)
      }
    },
    asyncMethods: {
      async fetchServers() {
        this.servers = await getServers()
      }
    },
  }
</script>

<style lang="scss" scoped>
  .servers {
    margin-bottom: 32px;

    @include tablet {
      margin-bottom: 60px;
    }

    @include laptop {
      margin-bottom: 80px;
    }

    &__title {
      margin-top: 0;
      margin-bottom: 32px;
      text-align: center;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: .0025em;
      color: $primary-font-color;

      @include tablet {
        margin-bottom: 45px;
        font-size: 26px;
      }

      @include laptop {
        margin-bottom: 67px;
        font-size: 32px;
      }
    }
  }

  .servers-filter {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 32px;

    @include tablet {
      margin-bottom: 40px;
      padding-bottom: 15px;
    }

    @include laptop {
      margin-bottom: 60px;
    }

    &__range {
      display: flex;
      align-items: center;
      flex-basis: 326px;
      margin-bottom: 24px;
      margin-right: 30px;

      @include tablet {
        margin-bottom: 0;
      }
    }

    &__range-name {
      display: block;
      margin-right: 35px;
      font-size: 12px;
      line-height: 120%;
      letter-spacing: .0025em;
      color: $primary-font-color;

      @include tablet {
        font-size: 18px;
      }
    }

    &__range-field {
      width: 50%;
      flex-grow: 1;

      @include wideMobile {
        max-width: 246px;
      }
    }

    &__checkboxes {
      display: flex;
      flex-direction: column;
      width: 100%;

      @include tablet {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 30%;
        flex-grow: 1;
      }
    }

    &__checkbox {

      @include tablet {
        margin: 0 20px;
      }

      @include laptop {
        margin: 0 60px;
      }

      &:not(:last-child) {
        margin-bottom: 14px;

        @include tablet {
          margin-bottom: 0;
        }
      }
    }
  }

  .result-block {
    &__title {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 120%;
      font-weight: 400;
      letter-spacing: 0.0025em;

      @include tablet {
        font-size: 18px;
      }

      @include laptop {
        margin-bottom: 24px;
      }
    }

    &__loader {
      display: block;
      margin: 32px auto;
    }

    &__message {
      font-size: 12px;
      line-height: 120%;
      color: $secondary-font-color;
      letter-spacing: .0025em;

      &_reject {
        color: tomato;
      }

      @include tablet {
        font-size: 14px;
      }

      @include laptop {
        font-size: 16px;
      }
    }
  }

  .vue-slider-rail {
    background-color: $mercury;
  }

  .vue-slider-process,
  .vue-slider:hover .vue-slider-process {
    background-color: $dodgerBlue;
  }

  .vue-slider-dot-tooltip-inner {
    background: transparent;
    border: 0;
    border-radius: 0;
    color: black;
  }

  .vue-slider-dot {
    border-radius: 50%;
  }

  .vue-slider-dot-tooltip-bottom {
    bottom: -5px;

    @include tablet {
      bottom: -9px;
    }
  }

  .vue-slider-dot-tooltip-inner {
    padding: 0;
    box-shadow: none;
    font-size: 12px;
    line-height: 120%;
    color: $primary-font-color;
    letter-spacing: .0025em;

    @include tablet {
      font-size: 14px;
    }
  }

  .vue-slider-dot-tooltip-inner-bottom {
    &:after {
      display: none;
    }
  }

  .vue-slider-mark-label {
    margin-top: 3px !important;
    font-size: 12px;
    line-height: 120%;
    color: $silver;
    letter-spacing: .0025em;
  }

  .vue-slider-mark-label-active {
    display: none;
  }

  .vue-slider-mark-step {
    display: none !important;
  }

  .vue-slider-dot-handle {
    border: 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(black, .18);
  }

</style>
