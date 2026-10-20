// ============================================================
//  ХРАНИЛИЩЕ
// ============================================================
const STORAGE_KEY = "flashcards-state-v3";

const DEFAULT_DECKS = [
  {
    name: "Счета 01-20",
    cards: [
      { word: "01", definition: "Основные средства",                                     favorite: false },
      { word: "02", definition: "Амортизация основных средств",                          favorite: false },
      { word: "03", definition: "Доходные вложения в материальные ценности",             favorite: false },
      { word: "04", definition: "Нематериальные активы",                                 favorite: false },
      { word: "05", definition: "Амортизация нематериальных активов",                    favorite: false },
      { word: "07", definition: "Оборудование к установке",                              favorite: false },
      { word: "08", definition: "Вложения во внеоборотные активы",                       favorite: false },
      { word: "09", definition: "Отложенные налоговые активы",                           favorite: false },
      { word: "10", definition: "Материалы",                                             favorite: false },
      { word: "11", definition: "Животные на выращивании и откорме",                     favorite: false },
      { word: "14", definition: "Резервы под снижение стоимости материальных ценностей", favorite: false },
      { word: "15", definition: "Заготовление и приобретение материальных ценностей",    favorite: false },
      { word: "16", definition: "Отклонение в стоимости материальных ценностей",         favorite: false },
      { word: "19", definition: "Налог на добавленную стоимость по приобретенным ценностям", favorite: false },
      { word: "20", definition: "Основное производство",                                 favorite: false }
    ]
  },
  {
    name: "Счета 21-40",
    cards: [
      { word: "21", definition: "Полуфабрикаты собственного производства",   favorite: false },
      { word: "23", definition: "Вспомогательные производства",              favorite: false },
      { word: "25", definition: "Общепроизводственные расходы",              favorite: false },
      { word: "26", definition: "Общехозяйственные расходы",                 favorite: false },
      { word: "28", definition: "Брак в производстве",                       favorite: false },
      { word: "29", definition: "Обслуживающие производства и хозяйства",    favorite: false },
      { word: "40", definition: "Выпуск продукции (работ, услуг)",           favorite: false }
    ]
  },
  {
    name: "Счета 41-60",
    cards: [
      { word: "41", definition: "Товары",                                             favorite: false },
      { word: "42", definition: "Торговая наценка",                                   favorite: false },
      { word: "43", definition: "Готовая продукция",                                  favorite: false },
      { word: "44", definition: "Расходы на продажу",                                 favorite: false },
      { word: "45", definition: "Товары отгруженные",                                 favorite: false },
      { word: "46", definition: "Выполненные этапы по незавершенным работам",         favorite: false },
      { word: "50", definition: "Касса",                                              favorite: false },
      { word: "51", definition: "Расчетные счета",                                    favorite: false },
      { word: "52", definition: "Валютные счета",                                     favorite: false },
      { word: "55", definition: "Специальные счета в банках",                         favorite: false },
      { word: "57", definition: "Переводы в пути",                                    favorite: false },
      { word: "58", definition: "Финансовые вложения",                                favorite: false },
      { word: "59", definition: "Резервы под обесценение финансовых вложений",        favorite: false },
      { word: "60", definition: "Расчеты с поставщиками и подрядчиками",              favorite: false }
    ]
  },
  {
    name: "Счета 61-80",
    cards: [
      { word: "62", definition: "Расчеты с покупателями и заказчиками",       favorite: false },
      { word: "63", definition: "Резервы по сомнительным долгам",             favorite: false },
      { word: "66", definition: "Расчеты по краткосрочным кредитам и займам", favorite: false },
      { word: "67", definition: "Расчеты по долгосрочным кредитам и займам",  favorite: false },
      { word: "68", definition: "Расчеты по налогам и сборам",                favorite: false },
      { word: "69", definition: "Расчеты по социальному страхованию и обеспечению", favorite: false },
      { word: "70", definition: "Расчеты с персоналом по оплате труда",       favorite: false },
      { word: "71", definition: "Расчеты с подотчетными лицами",              favorite: false },
      { word: "73", definition: "Расчеты с персоналом по прочим операциям",   favorite: false },
      { word: "75", definition: "Расчеты с учредителями",                     favorite: false },
      { word: "76", definition: "Расчеты с разными дебиторами и кредиторами", favorite: false },
      { word: "77", definition: "Отложенные налоговые обязательства",         favorite: false },
      { word: "79", definition: "Внутрихозяйственные расчеты",                favorite: false },
      { word: "80", definition: "Уставный капитал",                           favorite: false }
    ]
  },
  {
    name: "Счета 81-99",
    cards: [
      { word: "81", definition: "Собственные акции (доли)",                                favorite: false },
      { word: "82", definition: "Резервный капитал",                                       favorite: false },
      { word: "83", definition: "Добавочный капитал",                                      favorite: false },
      { word: "84", definition: "Нераспределенная прибыль (непокрытый убыток)",            favorite: false },
      { word: "86", definition: "Целевое финансирование",                                  favorite: false },
      { word: "90", definition: "Продажи",                                                 favorite: false },
      { word: "91", definition: "Прочие доходы и расходы",                                 favorite: false },
      { word: "94", definition: "Недостачи и потери от порчи ценностей",                   favorite: false },
      { word: "96", definition: "Резервы предстоящих расходов",                            favorite: false },
      { word: "97", definition: "Расходы будущих периодов",                                favorite: false },
      { word: "98", definition: "Доходы будущих периодов",                                 favorite: false },
      { word: "99", definition: "Прибыли и убытки",                                        favorite: false }
    ]
  }
];

const DEFAULT_SETTINGS = {
  theme: "system",      // было "dark"
  font: "system",
  animation: "flipY",
  speed: 0.6,
  shuffleOnStart: false
};

let decks = [];
let settings = { ...DEFAULT_SETTINGS };
let favoriteOnly = false;

function resolveTheme() {
  if (settings.theme !== "system") return settings.theme;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      decks = JSON.parse(JSON.stringify(DEFAULT_DECKS));
      settings = { ...DEFAULT_SETTINGS };
      return;
    }
    const data = JSON.parse(raw);
    decks = Array.isArray(data.decks) && data.decks.length
      ? data.decks.map(normalizeDeck)
      : JSON.parse(JSON.stringify(DEFAULT_DECKS));
    settings = { ...DEFAULT_SETTINGS, ...(data.settings || {}) };
  } catch (e) {
    console.warn("Не удалось прочитать localStorage:", e);
    decks = JSON.parse(JSON.stringify(DEFAULT_DECKS));
    settings = { ...DEFAULT_SETTINGS };
  }
}

function normalizeDeck(deck) {
  return {
    name: String(deck.name || "Без названия"),
    cards: Array.isArray(deck.cards)
      ? deck.cards.map((c) => ({
          word: String(c.word ?? ""),
          definition: String(c.definition ?? ""),
          favorite: Boolean(c.favorite)
        }))
      : []
  };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ decks, settings }));
  } catch (e) {
    console.warn("Не удалось сохранить в localStorage:", e);
  }
}

// ============================================================
//  СОСТОЯНИЕ ПРИЛОЖЕНИЯ
// ============================================================
let currentDeckIndex = 0;
let currentCardIndex = 0;
let isFlipped = false;
let isAnimating = false;

// Индекс карточки в ПОЛНОМ массиве раздела (не в отфильтрованном)
// Нужен, чтобы при фильтре «только избранные» правильно понять,
// какую именно карточку мы показываем.
let viewIndices = [];  // индексы карточек, доступных в текущем режиме

// ===== DOM =====
const cardEl          = document.getElementById("card");
const wordText        = document.getElementById("wordText");
const definitionText  = document.getElementById("definitionText");
const currentDeckName = document.getElementById("currentDeckName");
const cardListCount   = document.getElementById("cardListCount");

const starFront       = document.getElementById("starFront");
const starBack        = document.getElementById("starBack");

const openDecksBtn    = document.getElementById("openDecksBtn");
const decksModal      = document.getElementById("decksModal");
const closeDecksBtn   = document.getElementById("closeDecksBtn");
const deckListEl      = document.getElementById("deckList");
const newDeckName     = document.getElementById("newDeckName");
const createDeckBtn   = document.getElementById("createDeckBtn");

const openCardListBtn = document.getElementById("openCardListBtn");
const cardListModal   = document.getElementById("cardListModal");
const closeCardListBtn= document.getElementById("closeCardListBtn");
const addCardFromListBtn = document.getElementById("addCardFromListBtn");
const cardListEl      = document.getElementById("cardList");
const cardListEmpty   = document.getElementById("cardListEmpty");

const toggleFavFilterBtn = document.getElementById("toggleFavFilterBtn");
const fontSelect = document.getElementById("fontSelect");

const openSettingsBtn = document.getElementById("openSettingsBtn");
const settingsModal   = document.getElementById("settingsModal");
const closeSettingsBtn= document.getElementById("closeSettingsBtn");
const resetSettingsBtn= document.getElementById("resetSettingsBtn");
const themeSelect     = document.getElementById("themeSelect");
const animationSelect = document.getElementById("animationSelect");
const speedSelect     = document.getElementById("speedSelect");
const shuffleOnStart  = document.getElementById("shuffleOnStart");

const cardModal       = document.getElementById("cardModal");
const cardModalTitle  = document.getElementById("cardModalTitle");
const addBtn          = document.getElementById("addBtn");
const newWord         = document.getElementById("newWord");
const newDefinition   = document.getElementById("newDefinition");
const saveBtn         = document.getElementById("saveBtn");
const cancelBtn       = document.getElementById("cancelBtn");

const sortBtn         = document.getElementById("sortBtn");
const sortMenu        = document.getElementById("sortMenu");

// Что редактируем: null — новая карточка, число — индекс в текущем разделе
let editingCardIndex = null;
let currentSort = "default";
let viewOrder = []; 

// ============================================================
//  ПОМОЩНИКИ
// ============================================================
function currentDeck() {
  return decks[currentDeckIndex];
}

function applySettings() {
  const theme = resolveTheme();
  document.body.className =
    `theme-${theme} anim-${settings.animation} font-${settings.font}`;

  document.documentElement.style.setProperty("--anim-speed", settings.speed + "s");
  cardEl.style.setProperty("--anim-speed", settings.speed + "s");

  themeSelect.value = settings.theme;
  fontSelect.value = settings.font;
  animationSelect.value = settings.animation;
  speedSelect.value = String(settings.speed);
  shuffleOnStart.checked = settings.shuffleOnStart;
}

fontSelect.addEventListener("change", () => {
  settings.font = fontSelect.value;
  saveState();
  applySettings();
});

// Реагируем на смену системной темы «на лету»
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (settings.theme === "system") applySettings();
});

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// Пересчитываем список видимых карточек с учётом фильтра избранного
function rebuildViewIndices() {
  const deck = currentDeck();
  if (!deck) { viewIndices = []; return; }

  // Если порядок ещё не задан (первый запуск) — строим по умолчанию
  if (viewOrder.length !== deck.cards.length) {
    viewOrder = deck.cards.map((_, i) => i);
  }

  viewIndices = [];

  if (favoriteOnly) {
    // Фильтр избранных — идём по viewOrder, оставляем только избранные
    for (const i of viewOrder) {
      if (deck.cards[i] && deck.cards[i].favorite) viewIndices.push(i);
    }
  } else {
    // Берём весь порядок
    viewIndices = viewOrder.slice();
  }

  if (currentCardIndex >= viewIndices.length) currentCardIndex = 0;
}

function updateCounters() {
  const deck = currentDeck();
  if (deck) cardListCount.textContent = deck.cards.length;
}

function updateStar() {
  const deck = currentDeck();
  const realIndex = viewIndices[currentCardIndex];
  const card = deck && realIndex != null ? deck.cards[realIndex] : null;
  const isFav = !!(card && card.favorite);

  starFront.classList.toggle("is-favorite", isFav);
  starBack.classList.toggle("is-favorite", isFav);
  starFront.textContent = isFav ? "★" : "☆";
  starBack.textContent  = isFav ? "★" : "☆";

  starFront.disabled = !card;
  starBack.disabled  = !card;
}

// ============================================================
//  ЗАГРУЗКА КАРТОЧКИ (без анимации)
// ============================================================
function loadCurrentCard() {
  const deck = currentDeck();
  if (!deck) return;

  currentDeckName.textContent = deck.name;

  rebuildViewIndices();

  if (viewIndices.length === 0) {
    wordText.textContent = favoriteOnly
      ? "Нет избранных карточек"
      : "Нет карточек";
    definitionText.textContent = favoriteOnly
      ? "Отметь карточки звёздочкой ⭐ или выключи фильтр"
      : "Добавь первую карточку в раздел";
    updateCounters();
    updateStar();
    cardEl.classList.remove("is-flipped");
    isFlipped = false;
    return;
  }

  const card = deck.cards[viewIndices[currentCardIndex]];
  wordText.textContent = card.word;
  definitionText.textContent = card.definition;

  updateCounters();
  updateStar();

  cardEl.classList.remove("is-flipped");
  isFlipped = false;
}

// ============================================================
//  ЛОГИКА КЛИКА
// ============================================================
async function handleCardClick() {
  const deck = currentDeck();
  if (!deck || viewIndices.length === 0) return;
  if (isAnimating) return;

  isAnimating = true;
  const total = viewIndices.length;

  if (!isFlipped) {
    cardEl.classList.add("is-flipped");
    isFlipped = true;
    await wait(settings.speed * 1000);

    // Готовим слово следующей карточки на скрытой лицевой стороне
    const nextViewIdx = (currentCardIndex + 1) % total;
    const nextCard = deck.cards[viewIndices[nextViewIdx]];
    wordText.textContent = nextCard.word;
  } else {
    currentCardIndex = (currentCardIndex + 1) % total;
    cardEl.classList.remove("is-flipped");
    isFlipped = false;
    await wait(settings.speed * 1000);

    const card = deck.cards[viewIndices[currentCardIndex]];
    definitionText.textContent = card.definition;

    updateCounters();
    updateStar();
  }

  isAnimating = false;
}

// ============================================================
//  ИЗБРАННОЕ
// ============================================================
function toggleFavoriteCurrent() {
  const deck = currentDeck();
  const realIndex = viewIndices[currentCardIndex];
  if (!deck || realIndex == null) return;

  deck.cards[realIndex].favorite = !deck.cards[realIndex].favorite;
  saveState();
  updateStar();
  renderCardList();
}

// ============================================================
//  РАЗДЕЛЫ
// ============================================================
function renderDeckList() {
  deckListEl.innerHTML = "";

  decks.forEach((deck, index) => {
    const li = document.createElement("li");
    li.className = "deck-item" + (index === currentDeckIndex ? " is-active" : "");

    const name = document.createElement("span");
    name.className = "deck-item__name";
    name.textContent = deck.name;

const favCount = deck.cards.filter((c) => c.favorite).length;
const count = document.createElement("span");
count.className = "deck-item__count";
count.textContent = `🃏 ${deck.cards.length} · ⭐ ${favCount}`;

    const del = document.createElement("button");
    del.className = "deck-item__delete";
    del.textContent = "🗑️";
    del.title = "Удалить раздел";
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteDeck(index);
    });

    li.appendChild(name);
    li.appendChild(count);
    li.appendChild(del);
    li.addEventListener("click", () => switchDeck(index));

    deckListEl.appendChild(li);
  });
}

function switchDeck(index) {
  currentDeckIndex = index;
  currentCardIndex = 0;
  isFlipped = false;
  isAnimating = false;
  cardEl.classList.remove("is-flipped");

  // Сбрасываем порядок под новый раздел
  const deck = currentDeck();
  viewOrder = deck.cards.map((_, i) => i);

  if (settings.shuffleOnStart) {
    sortCards("random");
  } else {
    saveState();
    closeDecksModal();
    loadCurrentCard();
  }
}

function createDeck() {
  const name = newDeckName.value.trim();
  if (!name) { alert("Введи название раздела!"); return; }

  decks.push({ name, cards: [] });
  newDeckName.value = "";
  currentDeckIndex = decks.length - 1;
  currentCardIndex = 0;
  saveState();
  renderDeckList();
  loadCurrentCard();
}

function deleteDeck(index) {
  if (decks.length === 1) { alert("Нельзя удалить последний раздел!"); return; }
  if (!confirm(`Удалить раздел "${decks[index].name}"?`)) return;

  decks.splice(index, 1);
  if (currentDeckIndex >= decks.length) currentDeckIndex = decks.length - 1;
  currentCardIndex = 0;
  isFlipped = false;
  cardEl.classList.remove("is-flipped");

  saveState();
  renderDeckList();
  loadCurrentCard();
}

// ============================================================
//  СПИСОК КАРТОЧЕК
// ============================================================
function renderCardList() {
  const deck = currentDeck();
  cardListEl.innerHTML = "";

  cardListCount.textContent = deck ? deck.cards.length : 0;

  if (!deck || deck.cards.length === 0) {
    cardListEmpty.hidden = false;
    return;
  }
  cardListEmpty.hidden = true;

  // Новые — наверх: идём с конца массива
  for (let index = deck.cards.length - 1; index >= 0; index--) {
    const card = deck.cards[index];

    const li = document.createElement("li");
    li.className = "card-item";

    const fav = document.createElement("button");
    fav.className = "card-item__fav" + (card.favorite ? " is-favorite" : "");
    fav.textContent = card.favorite ? "★" : "☆";
    fav.title = "В избранное";
    fav.addEventListener("click", () => {
      card.favorite = !card.favorite;
      saveState();
      renderCardList();
      updateStar();
    });

    const content = document.createElement("div");
    content.className = "card-item__content";
    const w = document.createElement("span");
    w.className = "card-item__word";
    w.textContent = card.word;
    const d = document.createElement("span");
    d.className = "card-item__def";
    d.textContent = card.definition;
    content.appendChild(w);
    content.appendChild(d);

    const actions = document.createElement("div");
    actions.className = "card-item__actions";

    const editBtn = document.createElement("button");
    editBtn.className = "card-item__btn";
    editBtn.textContent = "✏️";
    editBtn.title = "Редактировать";
    editBtn.addEventListener("click", () => openCardModal(index));

    const delBtn = document.createElement("button");
    delBtn.className = "card-item__btn card-item__btn--del";
    delBtn.textContent = "🗑️";
    delBtn.title = "Удалить карточку";
    delBtn.addEventListener("click", () => deleteCard(index));

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(fav);
    li.appendChild(content);
    li.appendChild(actions);

    cardListEl.appendChild(li);
  }
}

function deleteCard(index) {
  const deck = currentDeck();
  if (!deck) return;
  if (!confirm(`Удалить карточку "${deck.cards[index].word}"?`)) return;

  deck.cards.splice(index, 1);
  saveState();
  renderCardList();
  loadCurrentCard();
}

// ============================================================
//  МОДАЛКИ
// ============================================================
function openDecksModal() {
  newDeckName.value = "";
  renderDeckList();
  decksModal.classList.add("is-open");
}
function closeDecksModal() { decksModal.classList.remove("is-open"); }

function openCardListModal() {
  renderCardList();
  cardListModal.classList.add("is-open");
}
function closeCardListModal() { cardListModal.classList.remove("is-open"); }

function openSettingsModal() { settingsModal.classList.add("is-open"); }
function closeSettingsModal() { settingsModal.classList.remove("is-open"); }

// editingIndex: null — новая, число — редактируем существующую
function openCardModal(editingIndex = null) {
  editingCardIndex = editingIndex;

  if (editingIndex === null) {
    cardModalTitle.textContent = "Новая карточка";
    newWord.value = "";
    newDefinition.value = "";
  } else {
    const card = currentDeck().cards[editingIndex];
    cardModalTitle.textContent = "Редактировать карточку";
    newWord.value = card.word;
    newDefinition.value = card.definition;
  }

  cardModal.classList.add("is-open");
  newWord.focus();
}
function closeCardModal() {
  cardModal.classList.remove("is-open");
  editingCardIndex = null;
}

// ============================================================
//  СОХРАНЕНИЕ КАРТОЧКИ (новая или редактирование)
// ============================================================
function saveCard() {
  const word = newWord.value.trim();
  const definition = newDefinition.value.trim();

  if (!word || !definition) { alert("Заполни оба поля!"); return; }

  const deck = currentDeck();

  if (editingCardIndex === null) {
    // новая карточка — favorite по умолчанию false
    deck.cards.push({ word, definition, favorite: false });
    currentCardIndex = deck.cards.length - 1;
  } else {
    // сохраняем существующее значение favorite, не сбрасываем
    const old = deck.cards[editingCardIndex];
    deck.cards[editingCardIndex] = {
      word,
      definition,
      favorite: old.favorite
    };
  }

  saveState();
  closeCardModal();
  renderCardList();
  loadCurrentCard();
}

// ============================================================
//  ПЕРЕМЕШИВАНИЕ
// ============================================================
function shuffleCards(deck) {
  for (let i = deck.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
  }
}

// ============================================================
//  СОРТИРОВКА
// ============================================================
function sortCards(mode) {
  const deck = currentDeck();
  if (!deck || deck.cards.length === 0) return;

  // Строим порядок по умолчанию — по индексам 0..N-1
  viewOrder = deck.cards.map((_, i) => i);

  switch (mode) {
    case "default":
      // Сортировка по номеру (для счетов) — но без изменения deck.cards
      viewOrder.sort((ia, ib) => {
        const a = deck.cards[ia];
        const b = deck.cards[ib];
        const na = parseInt(a.word, 10);
        const nb = parseInt(b.word, 10);
        if (!isNaN(na) && !isNaN(nb)) return na - nb;
        return 0;
      });
      break;

    case "random":
      // Перемешиваем порядок (индексы)
      for (let i = viewOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [viewOrder[i], viewOrder[j]] = [viewOrder[j], viewOrder[i]];
      }
      break;

    case "reverse":
      viewOrder.reverse();
      break;

    case "fav-first":
      viewOrder.sort((ia, ib) =>
        Number(deck.cards[ib].favorite) - Number(deck.cards[ia].favorite)
      );
      break;
  }

  currentSort = mode;
  currentCardIndex = 0;
  isFlipped = false;
  cardEl.classList.remove("is-flipped");
  saveState();
  loadCurrentCard();
  updateSortMenu();
}

function updateSortMenu() {
  sortMenu.querySelectorAll(".sort-menu__item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.sort === currentSort);
  });
}

function openSortMenu()  { sortMenu.hidden = false; }
function closeSortMenu() { sortMenu.hidden = true; }
function toggleSortMenu() { sortMenu.hidden ? openSortMenu() : closeSortMenu(); }

// ============================================================
//  ФИЛЬТР ИЗБРАННЫХ
// ============================================================
function toggleFavoriteFilter() {
  favoriteOnly = !favoriteOnly;
  currentCardIndex = 0;
  isFlipped = false;
  cardEl.classList.remove("is-flipped");

  // Подсветка кнопки — теперь прямо здесь
  toggleFavFilterBtn.classList.toggle("is-active", favoriteOnly);

  loadCurrentCard();
}

// ============================================================
//  НАСТРОЙКИ
// ============================================================
themeSelect.addEventListener("change", () => {
  settings.theme = themeSelect.value;
  saveState();
  applySettings();
});

animationSelect.addEventListener("change", () => {
  settings.animation = animationSelect.value;
  saveState();
  applySettings();
});

speedSelect.addEventListener("change", () => {
  settings.speed = parseFloat(speedSelect.value);
  saveState();
  applySettings();
});

shuffleOnStart.addEventListener("change", () => {
  settings.shuffleOnStart = shuffleOnStart.checked;
  saveState();
});

resetSettingsBtn.addEventListener("click", () => {
  settings = { ...DEFAULT_SETTINGS };
  saveState();
  applySettings();
});

// ============================================================
//  СЛУШАТЕЛИ
// ============================================================
cardEl.addEventListener("click", (e) => {
  // клик по звёздочке не должен переворачивать карточку
  if (e.target.closest(".card__star")) return;
  handleCardClick();
});

starFront.addEventListener("click", (e) => { e.stopPropagation(); toggleFavoriteCurrent(); });
starBack.addEventListener("click",  (e) => { e.stopPropagation(); toggleFavoriteCurrent(); });

sortBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleSortMenu();
});

sortMenu.querySelectorAll(".sort-menu__item").forEach((item) => {
  item.addEventListener("click", () => {
    sortCards(item.dataset.sort);
    closeSortMenu();
  });
});

// Клик вне меню — закрываем
document.addEventListener("click", (e) => {
  if (!e.target.closest(".sort-wrap")) closeSortMenu();
});
addBtn.addEventListener("click", () => openCardModal(null));
saveBtn.addEventListener("click", saveCard);
cancelBtn.addEventListener("click", closeCardModal);

openDecksBtn.addEventListener("click", openDecksModal);
closeDecksBtn.addEventListener("click", closeDecksModal);
createDeckBtn.addEventListener("click", createDeck);

openCardListBtn.addEventListener("click", openCardListModal);
closeCardListBtn.addEventListener("click", closeCardListModal);
addCardFromListBtn.addEventListener("click", () => {
  closeCardListModal();
  openCardModal(null);
});

toggleFavFilterBtn.addEventListener("click", toggleFavoriteFilter);

openSettingsBtn.addEventListener("click", openSettingsModal);
closeSettingsBtn.addEventListener("click", closeSettingsModal);

// Закрытие по клику на фон
[
  [decksModal, closeDecksModal],
  [cardModal, closeCardModal],
  [settingsModal, closeSettingsModal],
  [cardListModal, closeCardListModal]
].forEach(([modal, close]) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === " ") { e.preventDefault(); handleCardClick(); }
  if (e.key === "Escape") {
    closeDecksModal();
    closeCardModal();
    closeSettingsModal();
    closeCardListModal();
  }
});

// ============================================================
//  СТАРТ
// ============================================================
loadState();
applySettings();
if (settings.shuffleOnStart) sortCards("random");
loadCurrentCard();
updateSortMenu();