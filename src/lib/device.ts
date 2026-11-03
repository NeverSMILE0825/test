import { UAParser } from 'ua-parser-js'

export function getDeviceInfo() {
  const parser = new UAParser(navigator.userAgent)
  const result = parser.getResult()
  const deviceType = result.device.type || 'desktop'

  return {
    type: deviceType,
    os: [result.os.name, result.os.version].filter(Boolean).join(' ') || 'Unknown',
    browser:
      [result.browser.name, result.browser.version].filter(Boolean).join(' ') ||
      'Unknown',
    vendor: result.device.vendor || result.browser.name || 'Unknown',
  }
}
