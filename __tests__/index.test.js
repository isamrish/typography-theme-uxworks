import uxworksTheme from '../src'

describe('Basic Information', () => {
  test('Name is uxworks', () => {
    expect(uxworksTheme.title).toBe("uxworks");
  })

  test('Base Font Size', () => {
    expect(uxworksTheme.baseFontSize).toBe("18px");
  })

  test('Base Line Height', () => {
    expect(uxworksTheme.baseLineHeight).toBe(1.5);
  })
  test('Google Fonts should be Varela Round', () => {
    expect(uxworksTheme.googleFonts[0].name).toBe("Varela Round");
  })

})
