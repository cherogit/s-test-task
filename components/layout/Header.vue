<template>
  <header class="header">
    <div class="header__wrapper container">
      <a class="header__logo logo" href="https://selectel.ru/" rel="noopener" target="_blank">
        <Logo width="112" height="24" />
      </a>

      <ul class="header__contacts contacts-links">
        <li class="contacts-links__item">
          <a href="tel:78005550675" class="contacts-links__link link" rel="noopener" target="_blank">
            <icon-phone class="contacts-links__link-icon contacts-links__link-icon_phone" width="12" height="13"/>
            +7 (800) 555-06-75
          </a>
        </li>
        <li class="contacts-links__item">
          <a href="mailto:sales@selectel.ru" class="contacts-links__link link" rel="noopener" target="_blank">
            <icon-envelope class="contacts-links__link-icon contacts-links__link-icon_envelope" width="16" height="12"/>
            Написать в почту
          </a>
        </li>
        <li class="contacts-links__item">
          <a href="https://t.me/Selectel" class="contacts-links__link link" rel="noopener" target="_blank">
            <icon-tg class="contacts-links__link-icon contacts-links__link-icon_tg" width="12" height="12"/>
            Написать в Telegram
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import Logo from '~/assets/img/logo.svg'
  import iconPhone from '~/assets/img/icon-phone.svg'
  import iconEnvelope from '~/assets/img/icon-envelope.svg'
  import iconTg from '~/assets/img/icon-tg.svg'

  export default {
    name: 'Header',
    components: {
      Logo,
      iconPhone,
      iconEnvelope,
      iconTg
    }
  }
</script>

<style lang="scss">
  .header {
    margin-bottom: 24px;
    padding: 11px 0 10px;

    @include tablet {
      padding-top: 16px;
      padding-bottom: 22px;
    }

    @include laptop {
      margin-bottom: 25px;
      padding-bottom: 16px;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .contacts-links {
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding-left: 0;
    list-style: none;

    &__item {
      font-size: 0;
      line-height: 0;

      @include laptop {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.0025em;
      }

      &:not(:last-child) {
        margin-right: 16px;

        @include wideMobile {
          margin-right: 37px;
        }

        @include laptop {
          margin-right: 60px;
        }
      }
    }

    &__link {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      color: $secondary-font-color;
    }

    &__link-icon {

      &_phone {
        width: 8px;
        height: 9px;

        @include wideMobile {
          width: 12px;
          height: 13px;
        }

        @include laptop {
          margin-right: 4px;
        }
      }

      &_envelope {
        width: 9px;
        height: 7px;

        @include wideMobile {
          width: 16px;
          height: 12px;
        }

        @include laptop {
          margin-right: 10px;
        }
      }

      &_tg {
        width: 8px;
        height: 8px;

        @include wideMobile {
          width: 12px;
          height: 12px;
        }

        @include laptop {
          margin-right: 8px;
        }
      }
    }
  }

</style>
