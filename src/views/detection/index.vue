<template>
  <div class="detection">
    <div class="detection__left">
      这是一颗树
    </div>
    <div class="detection__center">111</div>

    <div class="detection__right">
      <div class="rotor-area">
        <div class="detection-time">上次自动检测时间:2021-01-10</div>
        <div class="rotor-area__bottom">
          <div class="rotor-area__desc"></div>
          <div class="rotor-area__section-info">
            <div class="section-info__left">
              <div>15#</div>
              <div>扇区</div>
            </div>
            <div class="section-info__right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Detection',
  components: {},
});
</script>

<style lang="less">
@import url('../../style/base');
.detection {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__left {
    width: 300px;
    box-sizing: content-box;
    border-right: solid 1px @main-color;
  }

  &__center {
    flex: 1;
  }

  &__right {
    width: 840px;
  }
}

.rotor-area {
  padding: 24px;
  .detection-time {
    color: @main-color;
    font-size: 16px;
  }

  &__bottom {
    display: flex;
    flex-direction: row;
  }

  &__desc {
  }

  &__section-info {
    display: flex;
    background-color: @main-thin-color;
    color: #313131;
  }
}

.section-info__left {
  width: 34px;
}

.section-info__right {
  flex: 1;
  border: solid 1px @main-weight-color;
  background: #ffffff;
  border-radius: 6px;
}
</style>
