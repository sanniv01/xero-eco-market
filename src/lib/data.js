
// Mock data for the XeroDrop marketplace

export const categories = [
  'All', 
  'Wood', 
  'Fabric', 
  'Metal', 
  'Plastic', 
  'Food Waste', 
  'Paper', 
  'Electronics'
];

export const locations = [
  'All', 
  'New York', 
  'San Francisco', 
  'Chicago', 
  'Austin', 
  'Seattle', 
  'Boston'
];

export const wasteItems = [
  {
    id: 1,
    title: 'Reclaimed Wood Planks',
    category: 'Wood',
    price: 15,
    location: 'Seattle',
    distance: 3.2,
    co2Saved: 12.5,
    waterSaved: 320,
    image: 'https://public.readdy.ai/ai/img_res/92db29887abeb85a7a256764603057f0.jpg'
  },
  {
    id: 2,
    title: 'Fabric Scraps Bundle',
    category: 'Fabric',
    price: 8,
    location: 'New York',
    distance: 1.5,
    co2Saved: 5.2,
    waterSaved: 450,
    image: 'https://public.readdy.ai/ai/img_res/bc366920ca750a6c4abd45f4095a8b64.jpg'
  },
  {
    id: 3,
    title: 'Metal Scrap Collection',
    category: 'Metal',
    price: 22,
    location: 'Chicago',
    distance: 4.7,
    co2Saved: 28.3,
    waterSaved: 180,
    image: 'https://public.readdy.ai/ai/img_res/7172b5b09c309a3e64c9dac70ba99228.jpg'
  },
  {
    id: 4,
    title: 'Used Cooking Oil',
    category: 'Food Waste',
    price: 5,
    location: 'Austin',
    distance: 2.1,
    co2Saved: 18.7,
    waterSaved: 220,
    image: 'https://public.readdy.ai/ai/img_res/323e73503e64ab8d8ce1e23a387af0b0.jpg'
  },
  {
    id: 5,
    title: 'Plastic Bottle Collection',
    category: 'Plastic',
    price: 3,
    location: 'Boston',
    distance: 5.3,
    co2Saved: 8.1,
    waterSaved: 310,
    image: 'https://public.readdy.ai/ai/img_res/c8b2f1b36c48ef60b9bf0bf9996e544b.jpg'
  },
  {
    id: 6,
    title: 'Cardboard Boxes',
    category: 'Paper',
    price: 7,
    location: 'San Francisco',
    distance: 1.8,
    co2Saved: 6.4,
    waterSaved: 280,
    image: 'https://public.readdy.ai/ai/img_res/f651fbc7016f6fbca5f2be9daeb947d7.jpg'
  }
];

export const reuseProjects = [
  {
    id: 1,
    title: 'Pallet Wood Coffee Table',
    description: 'Transform shipping pallets into stylish furniture',
    icon: 'recycle',
    color: 'green'
  },
  {
    id: 2,
    title: 'Fabric Scrap Quilt',
    description: 'Create beautiful quilts from textile remnants',
    icon: 'tshirt',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Biodiesel from Cooking Oil',
    description: 'Convert used cooking oil into sustainable fuel',
    icon: 'oil-can',
    color: 'amber'
  },
  {
    id: 4,
    title: 'Glass Bottle Lamps',
    description: 'Upcycle bottles into decorative lighting fixtures',
    icon: 'wine-bottle',
    color: 'purple'
  }
];

export const calculateEnvironmentalImpact = () => {
  const totalCO2Saved = wasteItems.reduce((total, item) => total + item.co2Saved, 0);
  const totalWaterSaved = wasteItems.reduce((total, item) => total + item.waterSaved, 0);
  const totalItemsListed = wasteItems.length;
  
  return {
    co2Saved: totalCO2Saved.toFixed(1),
    waterSaved: totalWaterSaved,
    itemsListed: totalItemsListed
  };
};
