
const foods = [
    {   
        foodId: 1,
        foodImg: "/images/suachuakhongduong.jpg",
        foodName: 'Sữa chua không đường',
        foodKcal: '61 kcal',
        foodType: 'cup (100 gram)',
        foodCalories: 61,
        foodCarbs: 4.8,
        foodProtein: 3.7,
        foodFat: 3
    },
    {
        foodId: 2,
        foodImg: "/images/chuoitay.jpg",
        foodName: 'Chuối tây',
        foodKcal: '33 kcal',
        foodType: 'gram / ml',
        foodCalories: 20,
        foodCarbs: 4.8,
        foodProtein: 6,
        foodFat: 3
    },
    {
        foodId: 3,
        foodImg: "/images/phomaiconbocuoi.jpg",
        foodName: 'Phô mai con bò cười',
        foodKcal: '201 kcal',
        foodType: 'cup, small (15 gram)',
        foodCalories: 80,
        foodCarbs: 4.8,
        foodProtein: 3.7,
        foodFat: 3
    },
    {
        foodId: 4,
        foodImg: "/images/yenthach.jpg",
        foodName: 'Yến thạch',
        foodKcal: '140 kcal',
        foodType: 'small (40 gram)',
        foodCalories: 14,
        foodCarbs: 4.2,
        foodProtein: 200,
        foodFat: 3
    },
    {
        foodId: 5,
        foodImg: "/images/chuoisu.jpg",
        foodName: 'Chuối sứ',
        foodKcal: '54 kcal',
        foodType: 'spread',
        foodCalories: 40,
        foodCarbs: 4.8,
        foodProtein: 3.7,
        foodFat: 3
    },
    {
        foodId: 6,
        foodImg: "/images/chuoita.jpg",
        foodName: 'Chuối ta',
        foodKcal: '99 kcal',
        foodType: 'fruit',
        foodCalories: 50,
        foodCarbs: 3.6,
        foodProtein: 3.7,
        foodFat: 3
    },
    {
        foodId: 7,
        foodImg: "/images/chomchom.jpg",
        foodName: 'Quả chôm chôm',
        foodKcal: '5 kcal',
        foodType: 'feaspoon',
        foodCalories: 100,
        foodCarbs: 4.8,
        foodProtein: 3.7,
        foodFat: 0.5
    },
    {
        foodId: 8,
        foodImg: "/images/thitlonnac.jpg",
        foodName: 'Thịt lợn nạc',
        foodKcal: '136 kcal',
        foodType: 'Lát (100 gram)',
        foodCalories: 200,
        foodCarbs: 4,
        foodProtein: 3,
        foodFat: 10
    },
    {
        foodId: 9,
        foodImg: "/images/banhmi.jpg",
        foodName: 'Bánh mì',
        foodKcal: '596 kcal',
        foodType: 'gram / ml',
        foodCalories: 596,
        foodCarbs: 70,
        foodProtein: 35,
        foodFat: 19
    },
    {
        foodId: 10,
        foodImg: "/images/tao.jpg",
        foodName: 'Táo',
        foodKcal: '9 kcal',
        foodType: 'gram / ml',
        foodCalories: 9,
        foodCarbs: 3,
        foodProtein: 0,
        foodFat: 0
    },
    {
        foodId: 11,
        foodImg: "/images/banhquy.jpg",
        foodName: 'Bánh quy',
        foodKcal: '137 kcal',
        foodType: 'gram / ml',
        foodCalories: 137,
        foodCarbs: 17,
        foodProtein: 2,
        foodFat: 8
    },
    {
        foodId: 12,
        foodImg: "/images/caibap.jpg",
        foodName: 'Cải bắp',
        foodKcal: '138 kcal',
        foodType: 'gram / ml',
        foodCalories: 138,
        foodCarbs: 17,
        foodProtein: 7,
        foodFat: 1
    },
    {
        foodId: 13,
        foodImg: "/images/cahoi.jpg",
        foodName: 'Cá hồi',
        foodKcal: '159 kcal',
        foodType: 'gram / ml',
        foodCalories: 159,
        foodCarbs: 0,
        foodProtein: 25,
        foodFat: 6
    },
    {
        foodId: 14,
        foodImg: "/images/cam.jpg",
        foodName: 'Cam',
        foodKcal: '142 kcal',
        foodType: 'gram / ml',
        foodCalories: 142,
        foodCarbs: 36,
        foodProtein: 1,
        foodFat: 0
    },
    {
        foodId: 15,
        foodImg: "/images/cocsua.jpg",
        foodName: 'Cốc sữa',
        foodKcal: '150 kcal',
        foodType: 'gram / ml',
        foodCalories: 150,
        foodCarbs: 15,
        foodProtein: 10,
        foodFat: 6
    },
    {
        foodId: 16,
        foodImg: "/images/traxanh.jpg",
        foodName: 'Trà xanh',
        foodKcal: '10 kcal',
        foodType: 'gram / ml',
        foodCalories: 10,
        foodCarbs: 2,
        foodProtein: 0,
        foodFat: 0
    },
    {
        foodId: 17,
        foodImg: "/images/thitga.jpg",
        foodName: 'Thịt gà',
        foodKcal: '146 kcal',
        foodType: 'gram / ml',
        foodCalories: 147,
        foodCarbs: 10,
        foodProtein: 9,
        foodFat: 9
    },
    {
        foodId: 18,
        foodImg: "/images/thitbo.jpg",
        foodName: 'Thịt bò',
        foodKcal: '961 kcal',
        foodType: 'gram / ml',
        foodCalories: 961,
        foodCarbs:0,
        foodProtein: 90,
        foodFat: 65
    },
    {
        foodId: 19,
        foodImg: "/images/trung.jpg",
        foodName: 'Trứng gà',
        foodKcal: '12 kcal',
        foodType: 'gram / ml',
        foodCalories: 12,
        foodCarbs:1,
        foodProtein: 1,
        foodFat: 1
    },
    {
        foodId: 20,
        foodImg: "/images/khoatay.jpg",
        foodName: 'Khoai tây',
        foodKcal: '68 kcal',
        foodType: 'gram / ml',
        foodCalories: 68,
        foodCarbs:16,
        foodProtein: 2,
        foodFat: 1
    },
]

export default foods;