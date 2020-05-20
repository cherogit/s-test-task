<template>
  <div class="server-card">
    <div class="server-card__name">
      {{server.name}}
    </div>
    <div class="server-card__cols">

      <div class="server-card__col">
        <template v-if="server.cpu">
          <template v-if="server.cpu.count >= 2">
            {{ server.cpu.count }} x
          </template>
          {{server.cpu.name}}, {{ translations.coresAmount({count: server.cpu.cores}) }}
        </template>
      </div>

      <div class="server-card__col">
        <template v-if="server.ram">
          {{server.ram}}
        </template>
      </div>
      <div class="server-card__col">
        <template v-if="server.disk">
          <template v-if="server.disk.count >= 2">
            {{server.disk.count}} x
          </template>
          {{server.disk.value}} {{server.disk.type}}
        </template>
      </div>
      <div class="server-card__col">
        <template v-if="server.gpu">
          {{server.gpu}}
        </template>
      </div>

      <div class="server-card__col server-card__col_price">
        <template v-if="server.price">
          <span>{{ translations.currency.rub({V: server.price / 100}) }}</span>&nbsp;₽/месяц
          <a class="server-card__order-btn btn btn_ghost" href="https://selectel.ru/" target="_blank">Заказать</a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
    import {translations} from "~/plugins/translations";

    export default {
        name: "ServersListItem",
        data() {
            return {
                translations: translations
            }
        },
        props: {
            server: Object
        }
    }
</script>

<style lang="scss">
  .server-card {
    padding: 16px;
    font-size: 12px;
    line-height: 120%;
    color: $primary-font-color;
    letter-spacing: 0.0025em;
    border: 1px solid $secondary-font-color;
    border-radius: 7px;

    @include tablet {
      padding: 26px 11px;
      font-size: 16px;
    }

    @include laptop {
      padding: 24px 14px;
      font-size: 14px;
    }

    &__name {
      margin-bottom: 20px;
      font-weight: 700;
    }

    &__cols {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    &__col {
      width: 100%;
      margin-bottom: 16px;

      @include rwd(600) {
        width: 20%;

        &:not(:last-child) {
          padding-right: 10px;
        }
      }

      &_price {
        margin-top: 8px;
        margin-bottom: 0;
        font-weight: 700;

        @include rwd(600) {
          margin-top: 0;
          text-align: center;
        }

        span {
          @include rwd(600) {
            display: block;
          }

          @include laptop {
            display: inline;
          }
        }
      }
    }

    &__order-btn {
      display: block;
      margin-top: 16px;

      @include rwd(600) {
        margin: 5px auto 0;
      }
    }
  }
</style>
