// Recipe data
const recipes = [
    {
        id: 1,
        name: "Oshifima with Chicken Stew",
        image: "https://www.foodformzansi.co.za/wp-content/uploads/2024/07/FFM53-1140x570.jpg",
        description: "A traditional Namibian staple made from millet or mahangu flour, served with a flavorful chicken stew.",
        prepTime: "1 hour",
        servings: 4,
        region: "Northern Namibia",
        ingredients: ["2 cups mahangu flour (pearl millet flour)", "4 cups water", "1 kg chicken pieces", "2 onions, chopped", "3 tomatoes, chopped", "2 cloves garlic, minced", "1 tbsp curry powder", "Salt and pepper to taste", "Vegetable oil"],
        instructions: ["In a pot, bring 2 cups of water to a boil.", "In a bowl, mix the mahangu flour with 2 cups of cold water to form a smooth paste.", "Slowly pour the paste into the boiling water, stirring continuously.", "Reduce heat and continue stirring until the mixture thickens.", "Cover and let it cook on low heat for 15 minutes, stirring occasionally.", "For the stew, heat oil in a separate pot and sauté onions until translucent.", "Add garlic and cook for 1 minute.", "Add chicken pieces and brown them on all sides.", "Add tomatoes, curry powder, salt, and pepper.", "Add enough water to cover the chicken, bring to a boil, then simmer for 30 minutes.", "Serve the oshifima with the chicken stew."]
    },
    {
        id: 2,
        name: "Kapana",
        image: "https://namibiatoday.com/wp-content/uploads/2021/03/kapana-street-food.jpg",
        description: "Grilled meat strips seasoned with special spices, a popular street food in Namibia.",
        prepTime: "30 minutes",
        servings: 6,
        region: "Windhoek",
        ingredients: ["1 kg beef (sirloin or ribeye)", "2 tbsp kapana spice mix (or substitute with: 1 tbsp paprika, 1 tsp cayenne pepper, 1 tsp garlic powder, 1 tsp salt)", "1 tbsp vegetable oil", "1 onion, finely chopped", "1 tomato, finely chopped", "1 chili pepper, finely chopped (optional)"],
        instructions: ["Cut the beef into thin strips.", "Mix the spices together and rub them into the meat.", "Let the meat marinate for at least 15 minutes.", "Preheat the grill to high heat.", "Grill the meat strips for 2-3 minutes per side until cooked to your liking.", "Mix the chopped onion, tomato, and chili together to make a relish.", "Serve the grilled meat with the relish on the side."]
    },
    {
        id: 3,
        name: "Mopane Worm Stew",
        image: "https://www.foodandhome.co.za/wp-content/uploads/2023/09/mopane-worms-1-1024x576.png",
        description: "A protein-rich delicacy made from mopane worms, popular in northern Namibia.",
        prepTime: "45 minutes",
        servings: 4,
        region: "Ovamboland",
        ingredients: ["2 cups dried mopane worms", "2 onions, chopped", "3 tomatoes, chopped", "2 cloves garlic, minced", "1 green pepper, chopped", "2 tbsp vegetable oil", "1 tsp ground coriander", "Salt and pepper to taste", "Water as needed"],
        instructions: ["Rinse the dried mopane worms thoroughly in cold water.", "Soak them in water for 15-20 minutes until they become soft.", "In a pot, heat the vegetable oil and sauté the onions until translucent.", "Add garlic and cook for 1 minute.", "Add the tomatoes and green pepper, cooking until soft.", "Drain the mopane worms and add them to the pot.", "Add ground coriander, salt, and pepper.", "Add enough water to just cover the mixture.", "Simmer on low heat for 20-25 minutes until the stew thickens.", "Serve with oshifima or mahangu porridge."]
    },
    {
        id: 4,
        name: "Potjiekos",
        image: "https://cdn.foodloversmarket.co.za/wp-content/uploads/20231212145041/website-recipe-672x378-3.png",
        description: "A traditional slow-cooked stew made in a cast-iron pot over an open fire.",
        prepTime: "3 hours",
        servings: 8,
        region: "Nationwide",
        ingredients: ["1 kg lamb or beef, cubed", "2 onions, chopped", "4 potatoes, cubed", "4 carrots, sliced", "2 sweet potatoes, cubed", "1 cup butternut squash, cubed", "2 cloves garlic, minced", "2 tbsp vegetable oil", "1 tbsp paprika", "1 tsp dried thyme", "1 tsp dried rosemary", "2 bay leaves", "1 cup red wine (optional)", "2 cups beef stock", "Salt and pepper to taste"],
        instructions: ["Heat oil in a potjie pot over an open fire.", "Brown the meat in batches and set aside.", "In the same pot, sauté the onions until translucent.", "Add garlic and cook for 1 minute.", "Return the meat to the pot and add paprika, thyme, rosemary, and bay leaves.", "Pour in the red wine (if using) and beef stock.", "Bring to a simmer, cover, and cook for 1.5 hours.", "Add the vegetables, placing them in layers: carrots first, then potatoes, sweet potatoes, and butternut squash on top.", "Do not stir! Let the vegetables steam on top of the meat.", "Cover and cook for another 1 hour until the vegetables are tender.", "Season with salt and pepper before serving."]
    },
    {
        id: 5,
        name: "Vetkoek with Mince",
        image: "https://cdn.foodloversmarket.co.za/wp-content/uploads/20240902153016/1.-Magwinya-Thumbnails_1080x1920.jpg",
        description: "Deep-fried dough bread filled with spiced minced meat, a popular comfort food.",
        prepTime: "1 hour",
        servings: 6,
        region: "Central Namibia",
        ingredients: ["For the vetkoek: 4 cups all-purpose flour, 2 tsp instant yeast, 1 tsp salt, 1 tbsp sugar, 1.5 cups warm water, Oil for deep frying", "For the mince: 500g ground beef, 1 onion (chopped), 1 carrot (grated), 1 tbsp curry powder, 1 tsp mixed herbs, 1 cup beef stock, 2 tbsp tomato paste, Salt and pepper to taste"],
        instructions: ["For the vetkoek, mix flour, yeast, salt, and sugar in a bowl.", "Add warm water and mix until a soft dough forms.", "Knead for 5-10 minutes until smooth and elastic.", "Cover and let rise in a warm place for 30 minutes.", "For the mince, heat oil in a pan and sauté onions until soft.", "Add ground beef and brown it.", "Add grated carrot, curry powder, and mixed herbs.", "Stir in tomato paste and beef stock.", "Simmer for 15-20 minutes until the sauce thickens.", "Season with salt and pepper.", "Divide the risen dough into 12 equal pieces and flatten each piece.", "Heat oil for deep frying to 350°F (175°C).", "Fry each piece of dough until golden brown on both sides.", "Drain on paper towels.", "Split open the vetkoek and fill with the mince mixture."]
    },
    {
        id: 6,
        name: "Mealie Pap with Tomato Relish",
        image: "https://img.freepik.com/premium-photo/traditional-south-african-pap-sous-maize-meal-covered-tomato-onion-relish_1048944-5487472.jpg",
        description: "A traditional maize porridge served with a spicy tomato and onion relish.",
        prepTime: "40 minutes",
        servings: 4,
        region: "Southern Namibia",
        ingredients: ["2 cups maize meal", "4 cups water", "1 tsp salt", "For the relish: 4 tomatoes (chopped), 2 onions (chopped), 2 cloves garlic (minced), 1 chili pepper (chopped), 2 tbsp oil, Salt and pepper to taste"],
        instructions: ["Bring 3 cups of water to a boil in a pot.", "Mix the maize meal with 1 cup of cold water to form a smooth paste.", "Slowly pour the paste into the boiling water, stirring continuously.", "Add salt and reduce heat to low.", "Cover and simmer for 30 minutes, stirring occasionally.", "For the relish, heat oil in a pan and sauté onions until translucent.", "Add garlic and chili, cooking for 1 minute.", "Add tomatoes and cook until soft and the mixture thickens.", "Season with salt and pepper.", "Serve the pap with the tomato relish on top or on the side."]
    },
    {
        id: 7,
        name: "Kapana (Street Food)",
        image: "https://www.esterkocht.com/wp-content/uploads/2021/12/Kapana.-Braai.-Namibische-Kuche.-scaled-e1651574189103.jpg.webp",
        description: "Popular Namibian street food consisting of grilled beef served with chili sauce and spices.",
        prepTime: "20 mins",
        servings: 4,
        ingredients: [
            "500g beef sirloin, thinly sliced",
            "2 tbsp vegetable oil",
            "1 onion, finely chopped",
            "2 tomatoes, diced",
            "2-3 chili peppers, finely chopped",
            "1 tsp salt",
            "1 tsp black pepper",
            "1 tsp paprika",
            "Fresh bread rolls for serving"
        ],
        instructions: [
            "Heat oil in a large pan or on a grill.",
            "Add the sliced beef and cook for 5-7 minutes until browned.",
            "Add onions, tomatoes, and chili peppers to the pan.",
            "Season with salt, pepper, and paprika.",
            "Cook for another 5 minutes until vegetables are softened.",
            "Serve hot with fresh bread rolls."
        ],
        region: "Windhoek"
    },
    {
        id: 8,
        name: "Oshifima (Mahangu Porridge)",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/95/b2/68.jpg",
        description: "Traditional millet porridge that is a staple food in many Namibian households.",
        prepTime: "30 mins",
        servings: 6,
        ingredients: [
            "2 cups mahangu (pearl millet) flour",
            "4 cups water",
            "1 tsp salt"
        ],
        instructions: [
            "Bring water to a boil in a large pot.",
            "Gradually add mahangu flour while stirring continuously.",
            "Reduce heat and continue stirring to prevent lumps.",
            "Add salt and cook for 15-20 minutes until thick.",
            "Serve with meat stew or vegetables."
        ],
        region: "northern Namibia"
    },
    {
        id: 9,
        name: "Potjiekos (Slow-cooked Stew)",
        image: "https://pulses.org/images/com_yoorecipe/wgpd/cropped-South_Africa_potjie-0576.jpg",
        description: "Traditional slow-cooked stew prepared in a three-legged cast iron pot over an open fire.",
        prepTime: "2 hours",
        servings: 8,
        ingredients: [
            "1 kg lamb or beef, cubed",
            "2 onions, chopped",
            "3 carrots, sliced",
            "2 potatoes, cubed",
            "1 cup green beans",
            "2 tomatoes, chopped",
            "2 cups beef stock",
            "2 tbsp vegetable oil",
            "2 tsp salt",
            "1 tsp black pepper",
            "1 tsp paprika",
            "1 bay leaf"
        ],
        instructions: [
            "Heat oil in a potjiekos pot or heavy-based pot.",
            "Brown the meat in batches and set aside.",
            "Sauté onions until translucent.",
            "Layer vegetables in the pot: meat, onions, carrots, potatoes, beans, tomatoes.",
            "Add seasonings and pour in beef stock.",
            "Cover and simmer for 1.5-2 hours until meat is tender.",
            "Do not stir during cooking to preserve layers."
        ],
        region: "Southern Namibia"
    },
    {
        id: 10,
        name: "Mopane Worms",
        image: "https://www.zimbokitchen.com/wp-content/uploads/2015/01/Amacimbi900px.jpg",
        description: "Dried caterpillars that are a popular protein source and delicacy in Namibia.",
        prepTime: "45 mins",
        servings: 4,
        ingredients: [
            "2 cups dried mopane worms",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 cloves garlic, minced",
            "2 tbsp vegetable oil",
            "1 tsp salt",
            "1 tsp chili powder",
            "2 cups water"
        ],
        instructions: [
            "Soak mopane worms in water for 30 minutes to rehydrate.",
            "Drain and rinse thoroughly.",
            "Heat oil in a pan and sauté onions until golden.",
            "Add garlic and tomatoes, cook until softened.",
            "Add mopane worms, salt, and chili powder.",
            "Add water, cover, and simmer for 15-20 minutes.",
            "Serve with oshifima or rice."
        ],
        region: "Northern Namibia"
    },
    {
        id: 11,
        name: "Biltong (Dried Meat)",
        image: "https://bestbiltong.com/cdn/shop/files/Biltong-and-Drywors-Combo-1kg_500x500.jpg?v=1743514367",
        description: "Air-dried cured meat that is a popular snack throughout Namibia.",
        prepTime: "3-5 days drying",
        servings: 10,
        ingredients: [
            "1 kg beef silverside or topside",
            "3 tbsp coarse salt",
            "2 tbsp brown sugar",
            "1 tbsp coriander seeds, crushed",
            "1 tbsp black pepper, coarsely ground",
            "1 tsp bicarbonate of soda",
            "1/2 cup vinegar"
        ],
        instructions: [
            "Cut meat into strips along the grain, about 2cm thick.",
            "Mix salt, sugar, coriander, pepper, and bicarbonate of soda.",
            "Rub the mixture thoroughly into the meat strips.",
            "Place in a container, sprinkle with vinegar, and refrigerate for 24 hours.",
            "Hang the meat in a well-ventilated area for 3-5 days until dry.",
            "Store in an airtight container."
        ],
        region: "southern Namibia"
    },
    {
        id: 12,
        name: "Ombidi (Wild Spinach)",
        image: "https://www.esterkocht.com/wp-content/uploads/2019/04/Namibian-Spinach-Stew-With-Tomatoes-Recipe-e1556324351743-720x720.jpg.webp",
        description: "Traditional wild spinach dish often served with oshifima or meat.",
        prepTime: "25 mins",
        servings: 4,
        ingredients: [
            "4 cups ombidi (wild spinach) or regular spinach",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "1 tbsp vegetable oil",
            "1 tsp salt",
            "1/2 cup water",
            "1 tbsp ground peanuts (optional)"
        ],
        instructions: [
            "Wash spinach thoroughly and chop finely.",
            "Heat oil in a pot and sauté onions until translucent.",
            "Add tomatoes and cook until softened.",
            "Add spinach, salt, and water.",
            "Cover and simmer for 15 minutes until spinach is cooked.",
            "Stir in ground peanuts if using.",
            "Serve as a side dish."
        ],
        region: "Northern Namibia"
    }
];