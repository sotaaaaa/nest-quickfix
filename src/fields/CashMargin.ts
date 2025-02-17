/**
 * Identifies whether an order is a margin order or a non-margin order. This is primarily used when sending orders to Japanese exchanges to indicate sell margin or buy to cover. The same tag could be assigned also by buy-side to indicate the intent to sell or buy margin and the sell-side to accept or reject (base on some validation criteria) the margin request.
 * tag: 544
 * @readonly
 * @enum {string} (char)
 */
export enum CashMargin {
  /** Cash */
  Cash = '1',
  /** Margin Open */
  MarginOpen = '2',
  /** Margin Close */
  MarginClose = '3',
}
