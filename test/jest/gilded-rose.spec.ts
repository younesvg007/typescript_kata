//Importation of the Item and GildedRose classes
import { Item, GildedRose } from '@/gilded-rose';

//Defines a test suite for the GildedRose class
describe('Gilded Rose', () => {
  
  // Tests for standard items
  describe('Standard Items', () => {
    // Test: quality decreases by 1 before sellIn date
    it('should decrease quality by 1 before sellIn date', () => {
      // Creates an GildedRose instance with a standard item having an sellIn date of 10 days and a quality of 10
      const gildedRose = new GildedRose([new Item('standard', 10, 10)]);
      // Update the item's quality
      const items = gildedRose.updateQuality();
      // Verify that the item's quality decreases by 1 after the update
      expect(items[0].quality).toBe(9);
    })
    
    // Test: quality decreases by 2 after the sellIn date
    it('should decrease quality by 2 after sellIn date', () => {
      // Create a GildedRose instance with a standard item having an expired sellIn (-1 day) and quality of 10
      const gildedRose = new GildedRose([new Item('standard', -1, 10)]);
      // Update the item's quality
      const items = gildedRose.updateQuality();
      // Verify that the item's quality decreases by 2 after the update
      expect(items[0].quality).toBe(8);
    });
    
    // Test: quality never decreases below 0
    it('should never decrease quality below 0', () => {
      // Create a GildedRose instance with a standard item having quality of 0
      const gildedRose = new GildedRose([new Item('standard', 10, 0)]);
      // Update the item's quality
      const items = gildedRose.updateQuality();
      // Verify that the item's quality remains at 0 after the update
      expect(items[0].quality).toBe(0);
    });
    
    // Test: quality never increases above 50
    it('should never increase quality above 50', () => {
      // Create a GildedRose instance with a standard item having a maximum quality of 50
      const gildedRose = new GildedRose([new Item('standard', 10, 50)]);
      // Update the item's quality
      const items = gildedRose.updateQuality();
      // Verify that the item's quality remains at most 50 after the update
      expect(items[0].quality).toBeLessThanOrEqual(50);
    });

  });
});
