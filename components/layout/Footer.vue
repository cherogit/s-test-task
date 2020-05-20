<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__social">
        <a class="footer__logo logo" href="https://selectel.ru/" rel="noopener" target="_blank">
          <Logo width="112" height="24" alt="Логотип Selectel" />
        </a>
        <ul class="social-links">
          <li class="social-links__item">
            <a class="social-links__link link" href="https://vk.com/selectel " rel="noopener nofollow" target="_blank"
               title="Наш Вконтакте">
              <icon-vk/>
            </a>
          </li>
          <li class="social-links__item">
            <a class="social-links__link link" href="https://twitter.com/selectel" rel="noopener nofollow" target="_blank"
               title="Наш Твиттер">
              <icon-tw/>
            </a>
          </li>
          <li class="social-links__item">
            <a class="social-links__link link" href="https://www.facebook.com/selectel/ " rel="noopener nofollow"
               target="_blank" title="Наш Фейсбук">
              <icon-fb/>
            </a>
          </li>
          <li class="social-links__item">
            <a class="social-links__link link" href="https://www.instagram.com/selectel.ru/" rel="noopener nofollow"
               target="_blank" title="Наш Инстаграм">
              <icon-inst/>
            </a>
          </li>
        </ul>
      </div>
      <nav class="footer__nav">
        <ul class="footer__nav-list nav-list">
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">Серверы</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">Оборудование</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">Дата-центры</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">Блог</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">Облако</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">Решения</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">О компании</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link link" href="https://selectel.ru/" rel="noopener" target="_blank">Офисы</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
  import Logo from '~/assets/img/logo.svg'
  import iconVk from '~/assets/img/icon-vk.svg'
  import iconTw from '~/assets/img/icon-tw.svg'
  import iconFb from '~/assets/img/icon-fb.svg'
  import iconInst from '~/assets/img/icon-inst.svg'

  export default {
    name: 'Footer',
    components: {
      Logo,
      iconVk,
      iconTw,
      iconFb,
      iconInst
    }
  }
</script>

<style lang="scss">
  .footer {
    padding: 24px 0 13px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, .16);

    @include tablet {
      min-height: 163px;
      padding-top: 30px;
      padding-bottom: 24px;
    }

    @include laptop {
      min-height: 172px;
      padding-top: 40px;
      padding-bottom: 30px;
    }

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    &__social {
      flex-basis: 52px;
      margin-right: 28px;

      @include tablet {
        flex-basis: 180px;
        margin-right: 0;
      }
    }

    &__logo {
      margin-bottom: 20px;

      @include tablet {
        margin-bottom: 30px;
      }
    }

    &__nav {
      flex-grow: 1;
      width: 50%;
    }

    &__nav-list {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }
  }

  .nav-list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: 50%;
      margin-bottom: 11px;

      @include wideMobile {
        width: 33.3333%;
      }

      @include tablet {
        width: 25%;
      }
    }

    &__link {
      display: inline-block;
      padding-right: 5px;
      text-decoration: none;
      font-family: $secondary-font;
      font-size: 12px;
      line-height: 120%;
      letter-spacing: .0275em;
      color: $secondary-font-color;

      @include tablet {
        padding-left: 15px;
        padding-right: 15px;
      }

      @include laptop {
        font-size: 14px;
      }
    }
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding-left: 0;
    list-style: none;

    &__item {
      width: 16px;
      height: 16px;
      margin: 0 5px 13px;

      @include tablet {
        margin-right: 16px;
      }

      @include laptop {
        width: 22px;
        height: 22px;
        margin-right: 12px;
      }
    }

    &__link {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      font-size: 0;
      color: $secondary-font-color;
    }
  }
</style>
