export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Conjured") {
        // "Conjured" items degrade in quality twice as fast as normal items
        this.items[i].quality -= 2;
        this.items[i].sellIn--; // Reduces the number of days before sale.
        // Ensure quality never becomes negative
        if (this.items[i].quality < 0) {
          this.items[i].quality = 0;
        }
        // Quality reduced by 2 more after sell-by date
        if (this.items[i].sellIn < 0) {
          this.items[i].quality -= 2;
          // Ensure quality never becomes negative after sell-by date
          if (this.items[i].quality < 0) {
            this.items[i].quality = 0;
          }
        }
      } else {
        if (
          this.items[i].name != "Aged Brie" &&
          this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
        ) {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (
              this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
            ) {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
        if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != "Aged Brie") {
            if (
              this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
            ) {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                  this.items[i].quality = this.items[i].quality - 1;
                }
              }
            } else {
              this.items[i].quality =
                this.items[i].quality - this.items[i].quality;
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
    }

    return this.items;
  }
}
