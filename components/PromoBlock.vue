<template>
  <div class="promo-block">
    <div class="promo-block__wrapper container">
      <div class="promo-block__inner">
        <h1 class="promo-block__title">Надежные серверы для проектов любой сложности</h1>
        <p class="promo-block__desc">
          Выделенный сервер — это аренда сервера под задачи вашего проекта с возможностью свободно распоряжаться ресурсами машины и установки любого программного обеспечения.
        </p>
        <a class="promo-block__btn btn btn_filled" href="https://selectel.ru/" rel="noopener" target="_blank">
          Готовые серверы
        </a>
      </div>
      <div class="promo-block__pict">
        <picture class="promo-block__image">
          <source srcset="./../assets/img/large_image.webp 1x, ./../assets/img/large_image@2.webp 2x" media="(min-width: 960px)">
          <source srcset="./../assets/img/large_image.png 1x, ./../assets/img/large_image@2.png 2x" media="(min-width: 960px)">

          <source srcset="./../assets/img/medium_image.webp 1x, ./../assets/img/medium_image@2.webp 2x" media="(min-width: 768px)">
          <source srcset="./../assets/img/medium_image.png 1x, ./../assets/img/medium_image@2.png 2x" media="(min-width: 768px)">

          <source srcset="./../assets/img/image.webp 1x, ./../assets/img/image@2.webp 2x" type="image/webp">
          <source srcset="./../assets/img/image.png 1x, ./../assets/img/image@2.png 2x" type="image/png">

          <img src="./../assets/img/large_image.png" srcset="./../assets/img/large_image@2.png 2x" width="380" height="363" alt="Надежные серверы для проектов любой сложности">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PromoBlock.vue"
    }
</script>

<style lang="scss">
  @import './../assets/scss/helpers/variables.scss';
  @import './../assets/scss/helpers/mixins.scss';

  .promo-block {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 32px;

      @include tablet {
        margin-bottom: 46px;
      }

      @include laptop {
        margin-bottom: 0;
      }
    }

    &__inner {
      width: 100%;

      @include wideMobile {
        flex-grow: 1;
        width: 25%;
      }
    }

    &__pict {
      flex-basis: 209px;
      margin-right: 0;
      margin-left: auto;
      margin-top: -26px;

      @include wideMobile {
        margin-top: 0;
      }

      @include tablet {
        flex-basis: 293px;
      }

      @include laptop {
        flex-basis: 380px;
        margin-right: -32px;
      }
    }

    &__title {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: .0025em;
      color: $primary-font-color;

      @include tablet {
        margin-top: 28px;
        font-size: 26px;
      }

      @include laptop {
        margin-top: 55px;
        font-size: 32px;
      }
    }

    &__desc {
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 120%;
      color: $secondary-font-color;
      letter-spacing: .0025em;

      @include tablet {
        font-size: 16px;
      }

      @include laptop {
        font-size: 18px;
      }
    }

    &__btn {

      @include tablet {
        min-width: 160px;
      }

      @include laptop {
        margin-bottom: 32px;
      }
    }
  }

</style>
