<template>
  <div class="page__container">
    <div class="page__navigator">
      <div class="navigator__title">
        <img src="../assets/imgs/logo.png" alt="" />
        <span>转子视觉检测系统</span>
      </div>
      <ul class="menu">
        <li>
          <router-link :class="`menu__item ${this.$route.path === '/detection' && 'menu__item--active'}`" to="/detection">
            <img style="width:33px;margin-bottom:6px" src="../assets/imgs/menu-check.png" alt="" />
            <span>检测</span>
          </router-link>
        </li>

        <li>
          <router-link :class="`menu__item ${this.$route.path === '/historyData' && 'menu__item--active'}`" to="/historyData">
            <img style="width:33px;margin-bottom:6px" src="../assets/imgs/menu-check.png" alt="" />历史数据
          </router-link>
        </li>
        <li>
          <router-link :class="`menu__item ${this.$route.path === '/dataAnalysis' && 'menu__item--active'}`" to="/dataAnalysis">
            <img style="width:29px;margin-bottom:9px" src="../assets/imgs/menu-data.png" alt="" />数据分析
          </router-link>
        </li>

        <li>
          <router-link :class="`menu__item ${this.$route.path === '/setting' && 'menu__item--active'}`" to="/setting">
            <img style="width:31px;margin-bottom:9px;" src="../assets/imgs/menu-setting.png" alt="" />高级设置
          </router-link>
        </li>
      </ul>

      <div class="other-info">
        <img class="other-info__bell" src="../assets/imgs/navigator-bell.png" alt="" />
        <img class="other-info__user" src="../assets/imgs/navigator-user.png" alt="" />
        <span class="other-info__text">周亮</span>
      </div>
    </div>

    <div class="page__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseLayout',
  components: {},
  data: () => {
    return {
      currentRoute: '',
    };
  },
});
</script>

<style lang="less">
@import '../style/base';

.page {
  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__navigator {
    width: 100%;
    height: 90px;
    background-color: @main-color;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__content {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

.navigator {
  &__title {
    display: flex;
    align-items: center;
    width: 399px;
    color: #fff;
    font-size: 24px;
    font-family: NotoSansHans-Medium;

    > img {
      width: 57px;
      margin: 0 30px 0 40px;
    }
  }
}

.menu {
  flex: 1;
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0;

  > li {
    height: 100%;
  }

  &__item {
    max-width: 216px;
    min-width: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
  }

  &__item--active {
    background-color: @active-color;
  }
}

.other-info {
  display: flex;
  margin-right: 19px;
  align-items: center;

  &__bell {
    width: 25px;
  }

  &__user {
    width: 25px;
    margin: 0 30px;
  }
  &__text {
    color: #fff;
  }
}
</style>
