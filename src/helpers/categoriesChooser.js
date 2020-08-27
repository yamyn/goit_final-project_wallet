const categoriesMinus = [
    'Основные расходы',
    'Продукты',
    'Машина',
    'Забота о себе',
    'Забота о детях',
    'Товары для дома',
    'Образование',
    'Развлечение',
    'Другое',
];

const categoriesPlus = [
    'Основной Доход',
    'Подарок',
    'Подработка',
    'Кредит',
    'Другое',
];

export default type => {
    const categories = type === '+' ? categoriesPlus : categoriesMinus;

    return categories;
};
