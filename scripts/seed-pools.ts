import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const RACES = ["Human", "Elf", "Dwarf", "Halfling", "Gnome", "Half-Elf", "Half-Orc"];
const NAMES = ["Альфред", "Беатрис", "Гарат", "Дориан", "Эвелина", "Кайрен", "Лиан", "Маргарет", "Николас", "Оливия", "Борин", "Тордин", "Элара", "Сайрус", "Моргана"];
const TITLES = ["Сумрачный лес", "Проклятие Тенебры", "Кровь и пепел", "Тайна старого маяка", "Песнь дракона", "Тени прошлого", "Клинок предателя", "Корона из костей"];

const LOC_DESCS = [
  "Древнее место силы, где эхо прошлого не умолкает.",
  "Мрачные руины, поросшие колючим терновником.",
  "Оживленный торговый город, полный интриг.",
  "Заброшенный храм, где еще теплятся угли старых костров.",
  "Глубокое ущелье, скрывающее вход в подземный мир.",
  "Таверна на перекрестке, где собираются наемники.",
  "Проклятое поле, на котором никогда не тает снег."
];

const FACTION_DESCS = [
  "Тайное общество, плетущее интриги в тени.",
  "Рыцарский орден, потерявший своего лидера.",
  "Синдикат контрабандистов, контролирующий порт.",
  "Культ фанатиков, жаждущих пробуждения древнего зла.",
  "Гильдия ремесленников, скрывающая темные секреты.",
  "Отряд наемников, готовый продать кого угодно за звонкую монету."
];

const NPC_DESCS = [
  "Хитрый информатор с бегающими глазами.",
  "Старый наемник, уставший от бесконечных битв.",
  "Жрица, потерявшая веру после страшной трагедии.",
  "Купец, который знает слишком много о делах знати.",
  "Молодой вор, мечтающий о большой добыче.",
  "Стражник, который берет взятки, но не забывает о чести.",
  "Бывший легионер, спившийся после войны.",
  "Юная чародейка, боящаяся своей неконтролируемой силы.",
  "Охотник на монстров с мрачным прошлым.",
  "Шут, который на самом деле умнее всех при дворе."
];

async function seed() {
  await supabase.from("name_pool").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  await supabase.from("title_pool").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  await supabase.from("description_pool").delete().neq("id", "00000000-0000-0000-0000-000000000000");

  const namesToInsert: any[] = [];
  for (const race of RACES) {
    for (const name of NAMES) {
      namesToInsert.push({ race_name: race, name: `${name} (${race})`, locale: "ru" });
    }
  }
  await supabase.from("name_pool").insert(namesToInsert);

  const titlesToInsert = TITLES.map(t => ({ title: t, locale: "ru" }));
  await supabase.from("title_pool").insert(titlesToInsert);

  const descsToInsert: any[] = [];
  for (const text of LOC_DESCS) {
    descsToInsert.push({ entity_type: "location", text, locale: "ru" });
  }
  for (const text of FACTION_DESCS) {
    descsToInsert.push({ entity_type: "faction", text, locale: "ru" });
  }
  for (const text of NPC_DESCS) {
    descsToInsert.push({ entity_type: "npc", text, locale: "ru" });
  }
  await supabase.from("description_pool").insert(descsToInsert);

  console.log("Пулы успешно заполнены большим количеством данных!");
}

seed().catch(console.error);