export type MockCategory = {
    categoryId: string;
    name: "技術書" | "小説" | "児童書" | "ビジネス書" | "漫画" | "雑誌";
};

export type MockBook = {
    bookUuid: string;
    title: string;
    author: string;
    category: MockCategory;
    stock: number;
};

export const categories: MockCategory[] = [
    {
        categoryId: "18836923-5194-47f1-bf4c-e09eb5fa8fef",
        name: "技術書",
    },
    {
        categoryId: "1c7dc46b-5618-4d9b-ad4a-0a805e7032d6",
        name: "小説",
    },
    {
        categoryId: "e269c98c-61b7-4ca7-9fae-ecd74234989e",
        name: "児童書",
    },
    {
        categoryId: "9dd9db1f-14fe-42e5-879d-e1a2c74223d8",
        name: "ビジネス書",
    },
    {
        categoryId: "51e7f90e-5d61-4546-aa42-e85d98fbe542",
        name: "漫画",
    },
    {
        categoryId: "d652b797-d71a-4c4c-9539-65049819d942",
        name: "雑誌",
    },
];

const technicalBookCategory = categories[0];
const novelCategory = categories[1];
const childrenBookCategory = categories[2];
const businessBookCategory = categories[3];
const comicCategory = categories[4];
const magazineCategory = categories[5];

export const mockBooks: MockBook[] = [
    {
        bookUuid: "b-001",
        title: "ぐりとぐら",
        author: "中川李枝子",
        category: childrenBookCategory,
        stock: 5,
    },
    {
        bookUuid: "b-002",
        title: "はらぺこあおむし",
        author: "エリック・カール",
        category: childrenBookCategory,
        stock: 4,
    },
    {
        bookUuid: "b-003",
        title: "100万回生きたねこ",
        author: "佐野洋子",
        category: childrenBookCategory,
        stock: 3,
    },
    {
        bookUuid: "b-004",
        title: "おおきなかぶ",
        author: "A・トルストイ",
        category: childrenBookCategory,
        stock: 6,
    },
    {
        bookUuid: "b-005",
        title: "エルマーのぼうけん",
        author: "ルース・スタイルス・ガネット",
        category: childrenBookCategory,
        stock: 2,
    },
    {
        bookUuid: "b-006",
        title: "いやいやえん",
        author: "中川李枝子",
        category: childrenBookCategory,
        stock: 4,
    },
    {
        bookUuid: "b-007",
        title: "かいけつゾロリのドラゴンたいじ",
        author: "原ゆたか",
        category: childrenBookCategory,
        stock: 3,
    },
    {
        bookUuid: "b-008",
        title: "窓ぎわのトットちゃん",
        author: "黒柳徹子",
        category: childrenBookCategory,
        stock: 2,
    },
    {
        bookUuid: "b-009",
        title: "JavaScript実践ガイド",
        author: "鈴木一郎",
        category: technicalBookCategory,
        stock: 2,
    },
    {
        bookUuid: "b-010",
        title: "React入門",
        author: "田中太郎",
        category: technicalBookCategory,
        stock: 1,
    },
    {
        bookUuid: "b-011",
        title: "コンビニ人間",
        author: "村田沙耶香",
        category: novelCategory,
        stock: 3,
    },
    {
        bookUuid: "b-012",
        title: "夢をかなえるゾウ",
        author: "水野敬也",
        category: businessBookCategory,
        stock: 2,
    },
    {
        bookUuid: "b-013",
        title: "ドラえもん 1",
        author: "藤子・F・不二雄",
        category: comicCategory,
        stock: 5,
    },
    {
        bookUuid: "b-014",
        title: "こども科学百科",
        author: "学研編集部",
        category: magazineCategory,
        stock: 1,
    },
];