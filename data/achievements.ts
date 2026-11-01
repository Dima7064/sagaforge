export interface AchievementSeed {
  code: string;
  name_ru: string;
  description_ru: string;
  icon: string;
}

export const achievements: AchievementSeed[] = [
  { code: "first_campaign", name_ru: "Первая кампания", description_ru: "Создай свою первую кампанию как мастер", icon: "🎲" },
  { code: "ten_campaigns", name_ru: "Опытный мастер", description_ru: "Создай 10 кампаний", icon: "👑" },
  { code: "first_join", name_ru: "В команде", description_ru: "Присоединись к чужой кампании", icon: "🤝" },
  { code: "five_joins", name_ru: "Душа компании", description_ru: "Присоединись к 5 кампаниям", icon: "🎭" },
  { code: "character_editor", name_ru: "Кузнец судеб", description_ru: "Отредактируй персонажа", icon: "⚒️" },
  { code: "first_export", name_ru: "Книжник", description_ru: "Экспортируй кампанию в PDF", icon: "📜" },
  { code: "first_note", name_ru: "Летописец", description_ru: "Напиши свою первую заметку к персонажу", icon: "📝" },
  { code: "first_library", name_ru: "Архивариус", description_ru: "Сохрани объект в свою библиотеку", icon: "📚" },
  { code: "first_publish", name_ru: "Первопроходец", description_ru: "Опубликуй кампанию в общем каталоге", icon: "🌍" },
  { code: "first_fork", name_ru: "Наследник", description_ru: "Скопируй чужую кампанию к себе", icon: "🧬" },
  { code: "five_races", name_ru: "Космополит", description_ru: "Сыграй за 5 разных рас", icon: "🌍" },
  { code: "all_roles", name_ru: "Мастер на все руки", description_ru: "Сыграй за все 6 ролей", icon: "🛡️" },
  { code: "night_owl", name_ru: "Полуночник", description_ru: "Создай кампанию после полуночи", icon: "🦉" },
];