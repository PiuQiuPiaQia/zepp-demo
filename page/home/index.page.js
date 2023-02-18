import { TEXT_STYLE } from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('hello 1 word')
Page({
  build() {
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_STYLE,
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})