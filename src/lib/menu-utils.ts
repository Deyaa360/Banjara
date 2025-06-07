import { getImagePath } from './image-utils';

// Menu data structure (extracted from menu page)
export const menuData = {
  "Sharing Plates": {
    "Vegetarian": [
      {
        id: 1,
        name: "Mauryaji Basket Chaat",
        region: "Varanasi",
        description: "Green gram, black chickpeas, potato, tamarind, mint yogurt mousse, and pomegranate caviar",
        price: 16,
        isVegetarian: true,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/MauryaJi Basket Chaat.png")
      },
      {
        id: 2,
        name: "Gupchup",
        region: "Odisha", 
        description: "Wheat ball, potato, yellow peas, green chilli, black salt, roasted cumin, mint, and black plum",
        price: 14,
        isVegetarian: true,
        spiceLevel: 2,
        image: getImagePath("images/menu/GUPCHUP (ODISHA).png")
      },
      {
        id: 3,
        name: "Beet and Goat Cheese Chop",
        region: "Kolkata",
        description: "Red beets, goat cheese, carrot, peanut, potato, and red habanero sauce",
        price: 18,
        isVegetarian: true,
        spiceLevel: 1,
        image: getImagePath("images/menu/BEET AND GOAT CHEESE CHOP (KOLKATA).png")
      },
      {
        id: 4,
        name: "Dahi Ke Kebab",
        region: "Lucknow",
        description: "Hung yogurt, bell pepper, fried onion, cashew, Amul cheese, chilli, kataifi, and apricot chutney",
        price: 17,
        isVegetarian: true,
        spiceLevel: 2,
        image: getImagePath("images/menu/DAHI KE KEBAB (LUCKNOW).png")
      }
    ],
    "Non-Vegetarian": [
      {
        id: 5,
        name: "Jhol Momo",
        region: "Arunachal Pradesh",
        description: "Minced chicken, soy sauce, ginger, chilli oil curry, and crispy nori",
        price: 19,
        isVegetarian: false,
        spiceLevel: 3,
        image: getImagePath("images/menu/JHOL MOMO (ARUNANCHAL PRADESH).png")
      },
      {
        id: 6,
        name: "Guntur Chilli Chicken Bao",
        region: "Andhra Pradesh",
        description: "Bao bun, chicken, bell pepper, shallots, soy Guntur chilli, pickled red cabbage, scallion, and a rasam shot",
        price: 21,
        isVegetarian: false,
        spiceLevel: 3,
        image: getImagePath("images/menu/GUNTUR CHILLI CHICKEN BAO (ARUNANCHAL PRADESH).png")
      },
      {
        id: 7,
        name: "Galauti Kebab",
        region: "Lucknow",
        description: "Minced goat, vetiver, rosewater ghee, fried onion, cardamom, mint chutney, and warqi paratha",
        price: 24,
        isVegetarian: false,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/GALAUTI KEBAB (LUCKNOW).png")
      },
      {
        id: 8,
        name: "Aslam Tikka",
        region: "Delhi",
        description: "Chicken thigh, cream, butter, Amul cheese, and chaat masala",
        price: 22,
        isVegetarian: false,
        spiceLevel: 2,
        image: getImagePath("images/menu/ASLAM TIKKA (DELHI).png")
      },
      {
        id: 9,
        name: "Lamb Chop",
        region: "Kashmir",
        description: "New Zealand lamb, masala onion, and walnut chutney",
        price: 28,
        isVegetarian: false,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/LAMB CHOP (KASHMIR).jpg")
      },
    ]
  },
  "Large Plates": {
    "Vegetarian": [
      {
        id: 14,
        name: "Burata Haak",
        region: "Kashmir",
        description: "Spinach, dandelion green, garlic confit, and burrata",
        price: 22,
        isVegetarian: true,
        spiceLevel: 1,
        isSignature: true,
        image: getImagePath("images/menu/BURATA HAAK (KASHMIR).png")
      },
      {
        id: 15,
        name: "Litti Chokha",
        region: "Bihar",
        description: "Whole wheat, roasted Bengal gram, and eggplant",
        price: 18,
        isVegetarian: true,
        spiceLevel: 2,
        image: getImagePath("images/menu/LITTI CHOKHA (BIHAR).png")
      },
      {
        id: 16,
        name: "Dal Makhni",
        region: "Delhi",
        description: "Black urad, cream, and butter",
        price: 19,
        isVegetarian: true,
        spiceLevel: 1,
        image: getImagePath("images/menu/DAL MAKHNI (DELHI).png")
      },
      {
        id: 17,
        name: "Paneer Pinwheel Makhni",
        region: "Punjab",
        description: "Tomato gravy, butter powder, and nuts",
        price: 21,
        isVegetarian: true,
        spiceLevel: 1,
        image: getImagePath("images/menu/PANEER PINWHEEL MAKHNI (PUNJAB).png")
      }
    ],
    "Non-Vegetarian": [
      {
        id: 19,
        name: "Butter Chicken",
        region: "Punjab",
        description: "Tomato gravy, nuts, cream, and butter powder",
        price: 28,
        isVegetarian: false,
        spiceLevel: 1,
        isSignature: true,
        image: getImagePath("images/menu/BUTTER CHICKEN (PUNJAB).png")
      },
      {
        id: 20,
        name: "Goan Fish Curry",
        region: "Goa",
        description: "Seabass, kokum, and coconut milk",
        price: 26,
        isVegetarian: false,
        spiceLevel: 2,
        image: getImagePath("images/menu/GOAN FISH CURRY.png")
      },
      {
        id: 21,
        name: "Laal Maas",
        region: "Rajasthan",
        description: "Smoked goat, Mathania chilli, and yogurt",
        price: 29,
        isVegetarian: false,
        spiceLevel: 3,
        isSignature: true,
        image: getImagePath("images/menu/LAAL MAAS (RAJHJASTHAN).png")
      },
      {
        id: 23,
        name: "Nalli Biryani",
        region: "Hyderabad",
        description: "Lamb shank, saffron, mint, and yogurt",
        price: 34,
        isVegetarian: false,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/NALLI BIRYANI (HYDERABAD).png")
      }
    ]
  }
};

export interface MenuItem {
  id: number;
  name: string;
  region?: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  spiceLevel: number;
  isSignature?: boolean;
  image: string;
}

// Get featured dishes (signature dishes + some popular ones)
export const getFeaturedDishes = (): MenuItem[] => {
  const allItems: MenuItem[] = [];
  
  // Extract all items from the menu data
  Object.values(menuData).forEach(category => {
    Object.values(category).forEach(items => {
      allItems.push(...items);
    });
  });
  
  // Get signature dishes first
  const signatureDishes = allItems.filter(item => item.isSignature);
  
  // Get some non-signature dishes to fill up to 8 items
  const otherDishes = allItems.filter(item => !item.isSignature);
  
  // Combine and limit to 8 items for the carousel
  const featured = [...signatureDishes, ...otherDishes].slice(0, 8);
  
  return featured;
};

// Get dishes by category for variety
export const getDishesFromCategory = (category: string, limit: number = 4): MenuItem[] => {
  const categoryData = menuData[category as keyof typeof menuData];
  if (!categoryData) return [];
  
  const allItems: MenuItem[] = [];
  Object.values(categoryData).forEach(items => {
    allItems.push(...items);
  });
  
  return allItems.slice(0, limit);
};