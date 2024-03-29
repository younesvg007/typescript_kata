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

// GildedRose class manages the update of items in the store
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  // Updates the quality of each item in the list
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        // Update quality of Aged Brie item
        case 'Aged Brie':
          this.updateAgedBrie(this.items[i]);
          break;
        // Update quality of Aged Brie item
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePasses(this.items[i]);
          break;
        // As "Sulfuras" is a legendary item, its quality is 80 and it never changes
        case 'Sulfuras, Hand of Ragnaros':
          this.items[i].quality = 80 ;
          break;
        // Update quality of Conjured item
        case 'Conjured':
          this.updateConjured(this.items[i]);
          break;
        // Update quality of Standard item
        default:
          this.updateStandardItem(this.items[i]);
      }
    }
    return this.items;
  }

  //Update quality of Aged Brie item
  private updateAgedBrie(item: Item) {
    item.sellIn--; // Reduce number of days before sale
    // Increase item's quality with an increased rise after the sale date
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn < 0 && item.quality < 50) {
        item.quality++;
      }
    }
  }

  // Update quality of Backstage Passes item
  updateBackstagePasses(item: Item) {
    item.sellIn--; // Decrease the number of days before sale
    // Handle specific quality rules for Backstage Passes
    if (item.sellIn < 0) {
      item.quality = 0; // Quality drops to 0 after the sale date
    } else if (item.quality < 50) { // Correct the condition
      item.quality++;
      // Increase quality more as the sale date approaches
      if (item.sellIn < 10) {
        item.quality++;
      }
      if (item.sellIn < 5) {
        item.quality++;
      }
    }
  }

  // Update quality of Conjured item
  private updateConjured(item: Item) {
    item.sellIn--; // Decrease the number of days before sale
    // Decreases item's quality faster than normal items
    if (item.quality > 0) {
      item.quality -= 2;
      if (item.sellIn < 0 && item.quality > 0) {
        item.quality -= 2;
      }
    }
  }

  // Update quality of Standard item
  private updateStandardItem(item: Item) {
    item.sellIn--; // Decrease the number of days before sale
    // Decrease item's quality, with accelerated degradation after the sale date
    if (item.quality > 0) {
      item.quality--;
      if (item.sellIn < 0) {
        item.quality--;
      }
    }
  }
}
