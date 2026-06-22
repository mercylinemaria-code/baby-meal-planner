// ── THEMES ──────────────────────────────────────────────────────────────────
const THEMES = [
  {
    id: "bunny-pink",
    name: "Bunny",
    gender: "girl",
    animal: "🐰",
    label: "Pink Bunny",
    headerGrad: "linear-gradient(135deg,#F9A8D4,#EC4899)",
    headerText: "#fff",
    accent: "#EC4899",
    accentLight: "#FCE7F3",
    accentBorder: "#F9A8D4",
    tabActive: "#EC4899",
    bg: "linear-gradient(135deg,#FDF2F8 0%,#FCE7F3 50%,#FFF1F2 100%)",
    cardBg: "#fff",
    pillActive: "#FCE7F3",
    completeBg: "linear-gradient(90deg,#EC4899,#F472B6)",
    pattern: "🐰🌸🐰🌸",
    dayPillBorder: "#F9A8D4",
  },
  {
    id: "elephant-lavender",
    name: "Elephant",
    gender: "girl",
    animal: "🐘",
    label: "Lavender Elephant",
    headerGrad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)",
    headerText: "#fff",
    accent: "#8B5CF6",
    accentLight: "#EDE9FE",
    accentBorder: "#C4B5FD",
    tabActive: "#8B5CF6",
    bg: "linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 50%,#FAF5FF 100%)",
    cardBg: "#fff",
    pillActive: "#EDE9FE",
    completeBg: "linear-gradient(90deg,#8B5CF6,#A78BFA)",
    pattern: "🐘🌷🐘🌷",
    dayPillBorder: "#C4B5FD",
  },
  {
    id: "butterfly-peach",
    name: "Butterfly",
    gender: "girl",
    animal: "🦋",
    label: "Peach Butterfly",
    headerGrad: "linear-gradient(135deg,#FDBA74,#F97316)",
    headerText: "#fff",
    accent: "#F97316",
    accentLight: "#FFF7ED",
    accentBorder: "#FED7AA",
    tabActive: "#F97316",
    bg: "linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 50%,#FEF3C7 100%)",
    cardBg: "#fff",
    pillActive: "#FFF7ED",
    completeBg: "linear-gradient(90deg,#F97316,#FBBF24)",
    pattern: "🦋🌼🦋🌼",
    dayPillBorder: "#FED7AA",
  },
  {
    id: "flamingo-rose",
    name: "Flamingo",
    gender: "girl",
    animal: "🦩",
    label: "Rose Flamingo",
    headerGrad: "linear-gradient(135deg,#FDA4AF,#E11D48)",
    headerText: "#fff",
    accent: "#E11D48",
    accentLight: "#FFF1F2",
    accentBorder: "#FECDD3",
    tabActive: "#E11D48",
    bg: "linear-gradient(135deg,#FFF1F2 0%,#FFE4E6 50%,#FCE7F3 100%)",
    cardBg: "#fff",
    pillActive: "#FFF1F2",
    completeBg: "linear-gradient(90deg,#E11D48,#EC4899)",
    pattern: "🦩🌺🦩🌺",
    dayPillBorder: "#FECDD3",
  },
  {
    id: "lion-yellow",
    name: "Lion",
    gender: "boy",
    animal: "🦁",
    label: "Golden Lion",
    headerGrad: "linear-gradient(135deg,#FCD34D,#D97706)",
    headerText: "#fff",
    accent: "#D97706",
    accentLight: "#FFFBEB",
    accentBorder: "#FDE68A",
    tabActive: "#D97706",
    bg: "linear-gradient(135deg,#FFFBEB 0%,#FEF3C7 50%,#FFF7ED 100%)",
    cardBg: "#fff",
    pillActive: "#FFFBEB",
    completeBg: "linear-gradient(90deg,#D97706,#F59E0B)",
    pattern: "🦁⭐🦁⭐",
    dayPillBorder: "#FDE68A",
  },
  {
    id: "dino-green",
    name: "Dinosaur",
    gender: "boy",
    animal: "🦕",
    label: "Dino Green",
    headerGrad: "linear-gradient(135deg,#6EE7B7,#059669)",
    headerText: "#fff",
    accent: "#059669",
    accentLight: "#ECFDF5",
    accentBorder: "#A7F3D0",
    tabActive: "#059669",
    bg: "linear-gradient(135deg,#ECFDF5 0%,#D1FAE5 50%,#F0FDF4 100%)",
    cardBg: "#fff",
    pillActive: "#ECFDF5",
    completeBg: "linear-gradient(90deg,#059669,#34D399)",
    pattern: "🦕🌿🦖🌿",
    dayPillBorder: "#A7F3D0",
  },
  {
    id: "elephant-blue",
    name: "Elephant",
    gender: "boy",
    animal: "🐘",
    label: "Blue Elephant",
    headerGrad: "linear-gradient(135deg,#93C5FD,#2563EB)",
    headerText: "#fff",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentBorder: "#BFDBFE",
    tabActive: "#2563EB",
    bg: "linear-gradient(135deg,#EFF6FF 0%,#DBEAFE 50%,#EEF2FF 100%)",
    cardBg: "#fff",
    pillActive: "#EFF6FF",
    completeBg: "linear-gradient(90deg,#2563EB,#60A5FA)",
    pattern: "🐘🌊🐘🌊",
    dayPillBorder: "#BFDBFE",
  },
  {
    id: "tiger-orange",
    name: "Tiger",
    gender: "boy",
    animal: "🐯",
    label: "Tiger Orange",
    headerGrad: "linear-gradient(135deg,#FB923C,#C2410C)",
    headerText: "#fff",
    accent: "#C2410C",
    accentLight: "#FFF7ED",
    accentBorder: "#FED7AA",
    tabActive: "#C2410C",
    bg: "linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 50%,#FEF9C3 100%)",
    cardBg: "#fff",
    pillActive: "#FFF7ED",
    completeBg: "linear-gradient(90deg,#C2410C,#FB923C)",
    pattern: "🐯🔥🐯🔥",
    dayPillBorder: "#FED7AA",
  },
  {
    id: "panda-mono",
    name: "Panda",
    gender: "neutral",
    animal: "🐼",
    label: "Panda (Neutral)",
    headerGrad: "linear-gradient(135deg,#6B7280,#1F2937)",
    headerText: "#fff",
    accent: "#374151",
    accentLight: "#F9FAFB",
    accentBorder: "#E5E7EB",
    tabActive: "#374151",
    bg: "linear-gradient(135deg,#F9FAFB 0%,#F3F4F6 50%,#E5E7EB 100%)",
    cardBg: "#fff",
    pillActive: "#F3F4F6",
    completeBg: "linear-gradient(90deg,#374151,#6B7280)",
    pattern: "🐼🎋🐼🎋",
    dayPillBorder: "#D1D5DB",
  },
  {
    id: "duck-teal",
    name: "Duck",
    gender: "neutral",
    animal: "🦆",
    label: "Teal Duck (Neutral)",
    headerGrad: "linear-gradient(135deg,#5EEAD4,#0D9488)",
    headerText: "#fff",
    accent: "#0D9488",
    accentLight: "#F0FDFA",
    accentBorder: "#99F6E4",
    tabActive: "#0D9488",
    bg: "linear-gradient(135deg,#F0FDFA 0%,#CCFBF1 50%,#E0F2FE 100%)",
    cardBg: "#fff",
    pillActive: "#F0FDFA",
    completeBg: "linear-gradient(90deg,#0D9488,#2DD4BF)",
    pattern: "🦆💧🦆💧",
    dayPillBorder: "#99F6E4",
  },
];

// ── DEFAULT FOOD GROUPS ──────────────────────────────────────────────────────
const DEFAULT_FOOD_GROUPS = [
  {
    key: "carb", label: "Carbohydrate", emoji: "🍚",
    foods: [
      { name: "Sweet Potato", benefit: "Rich in beta-carotene, vitamin C & potassium for brain & immune growth", emoji: "🍠" },
      { name: "Oat Porridge", benefit: "High in iron & fibre; supports steady energy and healthy weight gain", emoji: "🥣" },
      { name: "Mashed Pumpkin", benefit: "Packed with vitamin A, zinc & complex carbs for cell growth", emoji: "🎃" },
      { name: "Ugali (maize)", benefit: "Energy-dense staple; provides carbs & B-vitamins for daily activity", emoji: "🌽" },
      { name: "Brown Rice", benefit: "Whole grain with magnesium & fibre; gentler on baby's gut than white rice", emoji: "🍚" },
      { name: "Arrowroot (nduma)", benefit: "Easily digestible starch; great first weaning carb, rich in potassium", emoji: "🌿" },
      { name: "Mashed Irish Potato", benefit: "Good source of vitamin C, B6 & potassium; filling and calorie-dense", emoji: "🥔" },
      { name: "Ripe Banana (mashed)", benefit: "Natural sugars + potassium & B6; excellent for weight gain & energy", emoji: "🍌" },
      { name: "Cassava (boiled, mashed)", benefit: "Very calorie-dense; good for babies needing weight gain — serve with protein", emoji: "🟤" },
      { name: "Whole-wheat Bread", benefit: "B-vitamins & fibre; good finger food for older babies (8m+)", emoji: "🍞" },
    ],
  },
  {
    key: "vegetable", label: "Vegetable", emoji: "🥦",
    foods: [
      { name: "Spinach (pureed)", benefit: "Excellent source of iron, folate & calcium — vital for blood & bone development", emoji: "🥬" },
      { name: "Pumpkin / Butternut", benefit: "High in vitamin A & C; supports eye development and immunity", emoji: "🎃" },
      { name: "Carrots (mashed)", benefit: "Beta-carotene powerhouse; supports vision, skin & immune system", emoji: "🥕" },
      { name: "Kale / Sukuma Wiki", benefit: "Iron, calcium & vitamin K; supports strong bones and healthy blood", emoji: "🥦" },
      { name: "Broccoli (steamed, mashed)", benefit: "Rich in vitamin C, folate & calcium; great for immunity and growth", emoji: "🥦" },
      { name: "Green Peas (mashed)", benefit: "Good plant protein + iron & zinc; supports muscle and brain growth", emoji: "🟢" },
      { name: "Zucchini / Courgette", benefit: "Soft, easily digestible; provides vitamin C and hydration", emoji: "🥒" },
      { name: "Beetroot (pureed)", benefit: "High in folate & iron; supports red blood cell production", emoji: "🫀" },
      { name: "Avocado", benefit: "Healthy monounsaturated fats for brain development & calorie-dense weight gain", emoji: "🥑" },
      { name: "Cowpeas leaves (kunde)", benefit: "Iron-rich African green; supports haemoglobin and energy levels", emoji: "🌿" },
    ],
  },
  {
    key: "protein", label: "Protein", emoji: "🥚",
    foods: [
      { name: "Egg Yolk (soft cooked)", benefit: "Choline, iron & healthy fats — critical for brain development", emoji: "🥚" },
      { name: "Tilapia / Fish (pureed)", benefit: "Omega-3 fatty acids & high protein; boosts brain and eye development", emoji: "🐟" },
      { name: "Chicken (minced/pureed)", benefit: "Lean complete protein with zinc & B12 for muscle growth", emoji: "🍗" },
      { name: "Lentils (mashed)", benefit: "Iron, protein & folate; excellent plant-based option for growth", emoji: "🫘" },
      { name: "Beans (well-mashed)", benefit: "High plant protein & iron; supports red blood cells and energy", emoji: "🫘" },
      { name: "Full-fat Yoghurt", benefit: "Calcium, probiotics & fat; supports gut health, bones and weight gain", emoji: "🥛" },
      { name: "Minced Beef (well-cooked)", benefit: "Haem iron & zinc — best absorbed iron source; great for preventing anaemia", emoji: "🥩" },
      { name: "Omena / Dagaa (ground)", benefit: "Tiny but mighty — calcium, omega-3 & protein in one affordable food", emoji: "🐠" },
      { name: "Full-fat Cheese (grated)", benefit: "Calorie-dense, high in calcium & protein; great for weight gain", emoji: "🧀" },
      { name: "Groundnuts / Peanut paste", benefit: "Protein, healthy fats & niacin; very calorie-dense for weight gain (introduce carefully)", emoji: "🥜" },
    ],
  },
  {
    key: "fruit", label: "Fruit", emoji: "🍓",
    foods: [
      { name: "Avocado", benefit: "Highest-calorie fruit; packed with healthy fats for brain & weight gain", emoji: "🥑" },
      { name: "Banana (mashed)", benefit: "Energy-dense with potassium & B6; one of the best fruits for weight gain", emoji: "🍌" },
      { name: "Mango (pureed)", benefit: "Rich in vitamin A & C; supports immunity and skin health", emoji: "🥭" },
      { name: "Pawpaw / Papaya", benefit: "Papain enzyme aids digestion; loaded with vitamin C and folate", emoji: "🍈" },
      { name: "Pear (steamed/mashed)", benefit: "Gentle on tummy, high fibre; great first fruit for new eaters", emoji: "🍐" },
      { name: "Apple (steamed, pureed)", benefit: "Fibre & vitamin C; supports gut health and immune function", emoji: "🍎" },
      { name: "Watermelon (seedless)", benefit: "Hydrating with lycopene & vitamin C; good for hot days", emoji: "🍉" },
      { name: "Passion fruit (strained)", benefit: "Vitamin C, iron & fibre; great immune booster mixed in porridge", emoji: "💛" },
      { name: "Prunes (pureed)", benefit: "Iron & fibre-rich; helps prevent constipation during weaning", emoji: "🟣" },
      { name: "Guava (seedless, mashed)", benefit: "Very high in vitamin C; supports iron absorption when eaten with meals", emoji: "🍏" },
    ],
  },
];

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const COMMON_EMOJIS = ["🍎","🍊","🍋","🍇","🍓","🍒","🥭","🍑","🍍","🥥","🍌","🍈","🍐","🍏","🫐","🥝","🥑","🍠","🥕","🥦","🥬","🧅","🧄","🫘","🥜","🌽","🍚","🍞","🥣","🥛","🧀","🥚","🍗","🥩","🐟","🐠","🌿","🟢","🟤","🎃","🫀","💛","🟣","🍞","🥔"];

function getMealKey(week, day) { return ${week}-${day}; }

export default function BabyMealPlanner() {
  const today = new Date();
  const [loaded, setLoaded] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [themeId, setThemeId] = useState("bunny-pink");
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [meals, setMeals] = useState({});
  const [notes, setNotes] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeTab, setActiveTab] = useState("planner");
  const [babyName, setBabyName] = useState("Baby");
  const [editingName, setEditingName] = useState(false);
  const [openPicker, setOpenPicker] = useState(null);
  const [foodGroups, setFoodGroups] = useState(DEFAULT_FOOD_GROUPS);
  const [editMode, setEditMode] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", benefit: "", emoji: "🍎" });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");

  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];

  // ── LOAD ──
  useEffect(() => {
    async function load() {
      try {
        const keys = ["babyName","meals","notes","foodGroups","themeId"];
        const results = await Promise.all(keys.map(k => window.storage.get(k).catch(() => null)));
        const [name, mealsR, notesR, fgR, thR] = results;
        if (name?.value) setBabyName(name.value);
        if (mealsR?.value) setMeals(JSON.parse(mealsR.value));
        if (notesR?.value) setNotes(JSON.parse(notesR.value));
        if (fgR?.value) setFoodGroups(JSON.parse(fgR.value));
        if (thR?.value) setThemeId(thR.value);
      } catch(e) {}
      setLoaded(true);
    }
    load();
  }, []);

  async function save(key, value) {
    try {
      setSaveStatus("saving");
      await window.storage.set(key, typeof value === "string" ? value : JSON.stringify(value));
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(""), 1500);
    } catch(e) { setSaveStatus("error"); }
  }

  function applyTheme(id) { setThemeId(id); save("themeId", id); setShowThemePicker(false); }
  function updateBabyName(n) { setBabyName(n); save("babyName", n); }

  function updateMeal(day, groupKey, value) {
    const wk = ${currentYear}-${currentMonth}-W${currentWeek};
    const key = getMealKey(wk, day);
    setMeals(prev => { const n = { ...prev, [key]: { ...(prev[key]||{}), [groupKey]: value } }; save("meals", n); return n; });
  }
  function getMeal(day, groupKey) {
    const wk = ${currentYear}-${currentMonth}-W${currentWeek};
    return (meals[getMealKey(wk, day)]||{})[groupKey] || "";
  }
  function updateNote(day, value) {
    const wk = ${currentYear}-${currentMonth}-W${currentWeek};
    setNotes(prev => { const n = { ...prev, [getMealKey(wk,day)]: value }; save("notes", n); return n; });
  }
  function getNote(day) {
    const wk = ${currentYear}-${currentMonth}-W${currentWeek};
    return notes[getMealKey(wk, day)] || "";
  }
  function getDayCompletion(day) { return foodGroups.filter(g => getMeal(day, g.key).trim()).length; }

  function openAddFood(groupKey) { setEditingFood({ groupKey, index: -1 }); setEditForm({ name:"", benefit:"", emoji:"🍎" }); setShowEmojiPicker(false); }
  function openEditFood(groupKey, index) {
    const f = foodGroups.find(g => g.key===groupKey).foods[index];
    setEditingFood({ groupKey, index }); setEditForm({ name:f.name, benefit:f.benefit, emoji:f.emoji }); setShowEmojiPicker(false);
  }
  function saveFood() {
    if (!editForm.name.trim()) return;
    const { groupKey, index } = editingFood;
    const next = foodGroups.map(g => {
      if (g.key !== groupKey) return g;
      const foods = [...g.foods];
      const entry = { name:editForm.name.trim(), benefit:editForm.benefit.trim(), emoji:editForm.emoji };
      if (index===-1) foods.push(entry); else foods[index]=entry;
      return { ...g, foods };
    });
    setFoodGroups(next); save("foodGroups", next); setEditingFood(null);
  }
  function deleteFood(groupKey, index) {
    const next = foodGroups.map(g => g.key!==groupKey ? g : { ...g, foods: g.foods.filter((_,i)=>i!==index) });
    setFoodGroups(next); save("foodGroups", next);
  }
  function resetFoods() {
    if (!window.confirm("Reset all food lists to defaults?")) return;
    setFoodGroups(DEFAULT_FOOD_GROUPS); save("foodGroups", DEFAULT_FOOD_GROUPS);
  }

  const totalDaysLogged = DAYS.filter(d => getDayCompletion(d)===4).length;

  if (!loaded) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FFF7ED", fontFamily:"system-ui" }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:48, marginBottom:12 }}>🍼</div>
        <div style={{ color:"#F97316", fontWeight:600 }}>Loading your meal book…</div>
      </div>
    </div>
  );

  const T = theme;

  return (
    <div style={{ minHeight:"100vh", background:T.bg, fontFamily:"'Segoe UI',system-ui,sans-serif" }} onClick={() => { if(openPicker) setOpenPicker(null); }}>

      {/* ── THEME PICKER MODAL ── */}
      {showThemePicker && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:300, display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
          <div style={{ background:"white", borderRadius:"24px 24px 0 0", width:"100%", maxWidth:640, maxHeight:"85vh", overflow:"hidden", display:"flex", flexDirection:"column" }}>
            <div style={{ padding:"20px 20px 0", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <div style={{ fontWeight:800, fontSize:18, color:"#1F2937" }}>Choose a Theme 🎨</div>
                <div style={{ fontSize:12, color:"#6B7280", marginTop:2 }}>Animal themes for girls, boys & neutral</div>
              </div>
              <button onClick={() => setShowThemePicker(false)} style={{ background:"#F3F4F6", border:"none", borderRadius:"50%", width:32, height:32, cursor:"pointer", fontSize:16 }}>✕</button>
            </div>

            <div style={{ overflowY:"auto", padding:20, flex:1 }}>
              {["girl","boy","neutral"].map(gender => (
                <div key={gender} style={{ marginBottom:20 }}>
                  <div style={{ fontSize:11, fontWeight:800, textTransform:"uppercase", letterSpacing:1.5, color:"#9CA3AF", marginBottom:10 }}>
                    {gender === "girl" ? "👧 For Girls" : gender === "boy" ? "👦 For Boys" : "🌈 Neutral"}
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    {THEMES.filter(t => t.gender===gender).map(t => (
                      <button key={t.id} onClick={() => applyTheme(t.id)}
                        style={{ border: themeId===t.id ? 3px solid ${t.accent} : "2px solid #E5E7EB", borderRadius:16, overflow:"hidden", cursor:"pointer", background:"white", padding:0, textAlign:"left" }}>
                        {/* Theme preview strip */}
                        <div style={{ height:52, background:t.headerGrad, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, letterSpacing:4 }}>
                          {t.animal}
                        </div>
                        <div style={{ padding:"10px 12px" }}>
                          <div style={{ fontWeight:700, fontSize:13, color:"#1F2937" }}>{t.label}</div>
                          <div style={{ display:"flex", gap:4, marginTop:6 }}>
                            {[t.headerGrad, t.accentLight, t.accentBorder].map((c,i) => (
                              <div key={i} style={{ width:14, height:14, borderRadius:"50%", background:c, border:"1px solid #E5E7EB" }} />
                            ))}
                          </div>
                          {themeId===t.id && <div style={{ fontSize:10, color:t.accent, fontWeight:700, marginTop:4 }}>✓ Active</div>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── EDIT FOOD MODAL ── */}
      {editingFood && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:"white", borderRadius:20, width:"100%", maxWidth:420, padding:20, boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ fontWeight:700, fontSize:17, color:"#1F2937", marginBottom:16 }}>
              {editingFood.index===-1 ? "➕ Add New Food" : "✏️ Edit Food"}
            </div>
            <div style={{ marginBottom:12 }}>
              <div style={{ fontSize:11, fontWeight:600, color:"#6B7280", marginBottom:6, textTransform:"uppercase", letterSpacing:0.5 }}>Emoji</div>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <button onClick={() => setShowEmojiPicker(p=>!p)} style={{ fontSize:28, background:"#F9FAFB", border:"1.5px solid #E5E7EB", borderRadius:10, padding:"6px 12px", cursor:"pointer" }}>{editForm.emoji}</button>
                <span style={{ fontSize:12, color:"#9CA3AF" }}>Tap to change</span>
              </div>
              {showEmojiPicker && (
                <div style={{ marginTop:8, display:"flex", flexWrap:"wrap", gap:6, maxHeight:120, overflowY:"auto", background:"#F9FAFB", borderRadius:10, padding:8 }}>
                  {COMMON_EMOJIS.map(e => (
                    <button key={e} onClick={() => { setEditForm(f=>({...f,emoji:e})); setShowEmojiPicker(false); }}
                      style={{ fontSize:22, background:editForm.emoji===e?"#FEF3C7":"white", border:editForm.emoji===e?"2px solid #F59E0B":"1px solid #E5E7EB", borderRadius:8, padding:4, cursor:"pointer", width:40, height:40 }}>{e}</button>
                  ))}
                </div>
              )}
            </div>
            <div style={{ marginBottom:12 }}>
              <div style={{ fontSize:11, fontWeight:600, color:"#6B7280", marginBottom:6, textTransform:"uppercase", letterSpacing:0.5 }}>Food Name *</div>
              <input value={editForm.name} onChange={e=>setEditForm(f=>({...f,name:e.target.value}))} placeholder="e.g. Mashed Sweet Potato"
                style={{ width:"100%", border:"1.5px solid #E5E7EB", borderRadius:10, padding:"10px 12px", fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }} />
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, fontWeight:600, color:"#6B7280", marginBottom:6, textTransform:"uppercase", letterSpacing:0.5 }}>Nutritional Benefit</div>
              <textarea value={editForm.benefit} onChange={e=>setEditForm(f=>({...f,benefit:e.target.value}))} placeholder="e.g. High in iron and vitamin C for healthy growth" rows={3}
                style={{ width:"100%", border:"1.5px solid #E5E7EB", borderRadius:10, padding:"10px 12px", fontSize:13, outline:"none", resize:"none", boxSizing:"border-box", fontFamily:"inherit" }} />
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setEditingFood(null)} style={{ flex:1, padding:"12px", borderRadius:12, border:"1.5px solid #E5E7EB", background:"white", color:"#6B7280", cursor:"pointer", fontWeight:600, fontSize:14 }}>Cancel</button>
              <button onClick={saveFood} disabled={!editForm.name.trim()}
                style={{ flex:2, padding:"12px", borderRadius:12, border:"none", background:editForm.name.trim() ? T.headerGrad : "#E5E7EB", color:"white", cursor:editForm.name.trim()?"pointer":"not-allowed", fontWeight:700, fontSize:14 }}>
                Save Food
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── HEADER ── */}
      <div style={{ background:T.headerGrad, padding:"20px 16px 16px", color:T.headerText }}>
        <div style={{ maxWidth:640, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
            <div style={{ fontSize:11, letterSpacing:2, textTransform:"uppercase", opacity:0.85 }}>
              {T.pattern} Meal Plan Book
            </div>
            <div style={{ display:"flex", gap:8, alignItems:"center" }}>
              {saveStatus && (
                <div style={{ fontSize:11, background:"rgba(255,255,255,0.2)", borderRadius:20, padding:"3px 10px" }}>
                  {saveStatus==="saving"?"💾 Saving…":saveStatus==="saved"?"✅ Saved":"⚠️ Error"}
                </div>
              )}
              <button onClick={() => setShowThemePicker(true)}
                style={{ background:"rgba(255,255,255,0.25)", border:"none", color:"white", borderRadius:20, padding:"6px 12px", cursor:"pointer", fontWeight:600, fontSize:12, display:"flex", alignItems:"center", gap:4 }}>
                🎨 Theme
              </button>
            </div>
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            {editingName ? (
              <input autoFocus value={babyName} onChange={e=>setBabyName(e.target.value)}
                onBlur={() => { setEditingName(false); updateBabyName(babyName); }}
                onKeyDown={e=>e.key==="Enter"&&(setEditingName(false),updateBabyName(babyName))}
                style={{ fontSize:26, fontWeight:700, background:"rgba(255,255,255,0.25)", border:"none", borderBottom:"2px solid white", color:"white", outline:"none", width:200, borderRadius:4, padding:"2px 6px" }} />
            ) : (
              <h1 onClick={() => setEditingName(true)} style={{ fontSize:26, fontWeight:700, margin:0, cursor:"pointer", display:"flex", alignItems:"center", gap:8 }}>
                {T.animal} {babyName}'s Meals <span style={{ fontSize:14, opacity:0.75 }}>✏️</span>
              </h1>
            )}
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
            <button onClick={() => { if(currentMonth===0){setCurrentMonth(11);setCurrentYear(y=>y-1);}else setCurrentMonth(m=>m-1); }}
              style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"white", borderRadius:20, padding:"4px 10px", cursor:"pointer", fontSize:16 }}>‹</button>
            <span style={{ fontWeight:600, fontSize:16 }}>{MONTHS[currentMonth]} {currentYear}</span>
            <button onClick={() => { if(currentMonth===11){setCurrentMonth(0);setCurrentYear(y=>y+1);}else setCurrentMonth(m=>m+1); }}
              style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"white", borderRadius:20, padding:"4px 10px", cursor:"pointer", fontSize:16 }}>›</button>
            <span style={{ margin:"0 4px", opacity:0.5 }}>|</span>
            {[1,2,3,4].map(w => (
              <button key={w} onClick={() => setCurrentWeek(w)}
                style={{ background:currentWeek===w?"white":"rgba(255,255,255,0.2)", border:"none", color:currentWeek===w?T.accent:"white", borderRadius:20, padding:"4px 12px", cursor:"pointer", fontWeight:currentWeek===w?700:400, fontSize:13 }}>W{w}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TABS ── */}
      <div style={{ background:"white", borderBottom:"1px solid #E5E7EB", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ maxWidth:640, margin:"0 auto", display:"flex" }}>
          {[["planner","📅 Log"],["foodlist","🥗 Foods"],["overview","📊 Overview"]].map(([tab,label]) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ flex:1, padding:"12px 4px", border:"none", background:"none", fontWeight:activeTab===tab?700:400, color:activeTab===tab?T.tabActive:"#6B7280", borderBottom:activeTab===tab?3px solid ${T.tabActive}:"3px solid transparent", cursor:"pointer", fontSize:12 }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:640, margin:"0 auto", padding:16 }}>

        {/* ── DAILY LOG ── */}
        {activeTab==="planner" && (
          <div>
            <div style={{ display:"flex", gap:6, overflowX:"auto", paddingBottom:8, marginBottom:16 }}>
              {DAYS.map(day => {
                const count = getDayCompletion(day);
                const isSel = selectedDay===day;
                return (
                  <button key={day} onClick={() => setSelectedDay(isSel?null:day)}
                    style={{ flex:"0 0 auto", padding:"8px 12px", borderRadius:12, border:isSel?2px solid ${T.accent}:"2px solid #E5E7EB", background:isSel?T.accentLight:"white", cursor:"pointer", minWidth:72, textAlign:"center" }}>
                    <div style={{ fontSize:11, color:"#9CA3AF", marginBottom:2 }}>{day.slice(0,3)}</div>
                    <div style={{ display:"flex", justifyContent:"center", gap:2, margin:"4px 0" }}>
                      {foodGroups.map(g => (
                        <div key={g.key} style={{ width:8, height:8, borderRadius:"50%", background:getMeal(day,g.key)?T.accent:"#E5E7EB" }} />
                      ))}
                    </div>
                    <div style={{ fontSize:10, color:count===4?"#16A34A":"#9CA3AF" }}>{count}/4</div>
                  </button>
                );
              })}
            </div>

            {(selectedDay?[selectedDay]:DAYS).map(day => (
              <div key={day} style={{ background:"white", borderRadius:16, marginBottom:16, boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
                <div style={{ padding:"12px 16px", background:getDayCompletion(day)===4?T.completeBg:T.headerGrad, color:"white", display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"16px 16px 0 0" }}>
                  <span style={{ fontWeight:700, fontSize:16 }}>{T.animal} {day}</span>
                  <span style={{ fontSize:13, opacity:0.9 }}>{getDayCompletion(day)===4?"✅ Complete!":${getDayCompletion(day)}/4 filled}</span>
                </div>

                <div style={{ padding:12, display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  {foodGroups.map(group => {
                    const pk = ${day}-${group.key};
                    const isOpen = openPicker===pk;
                    const val = getMeal(day, group.key);
                    const selFood = group.foods.find(f=>f.name===val);
                    return (
                      <div key={group.key} style={{ position:"relative" }}>
                        <div style={{ background:val?T.accentLight:"#FAFAFA", border:1.5px solid ${val?T.accent:"#E5E7EB"}, borderRadius:12, padding:10 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:4, marginBottom:8 }}>
                            <span style={{ fontSize:16 }}>{group.emoji}</span>
                            <span style={{ fontSize:10, fontWeight:700, color:T.accent, textTransform:"uppercase", letterSpacing:0.5 }}>{group.label}</span>
                          </div>
                          <div onClick={e => { e.stopPropagation(); setOpenPicker(isOpen?null:pk); }}
                            style={{ cursor:"pointer", minHeight:36, display:"flex", alignItems:"center", justifyContent:"space-between", gap:4 }}>
                            {val ? (
                              <div style={{ flex:1 }}>
                                <div style={{ fontSize:13, fontWeight:600, color:"#1F2937" }}>{selFood?.emoji||""} {val}</div>
                                {selFood && <div style={{ fontSize:10, color:T.accent, marginTop:2, lineHeight:1.3 }}>{selFood.benefit.split(";")[0]}</div>}
                              </div>
                            ) : (
                              <span style={{ fontSize:12, color:"#9CA3AF", fontStyle:"italic" }}>Tap to choose</span>
                            )}
                            <span style={{ fontSize:14, color:T.accent, flexShrink:0 }}>{isOpen?"▲":"▼"}</span>
                          </div>
                          {val && <button onClick={() => updateMeal(day,group.key,"")} style={{ marginTop:6, fontSize:10, color:"#9CA3AF", background:"none", border:"none", cursor:"pointer", padding:0 }}>✕ Clear</button>}
                        </div>

                        {isOpen && (
                          <div onClick={e=>e.stopPropagation()} style={{ position:"absolute", top:"100%", left:0, right:0, zIndex:50, background:"white", borderRadius:12, boxShadow:"0 8px 24px rgba(0,0,0,0.15)", border:1.5px solid ${T.accentBorder}, overflow:"hidden", marginTop:4 }}>
                            <div style={{ padding:"8px 12px", background:T.headerGrad, color:"white", fontSize:11, fontWeight:700 }}>Choose a {group.label}</div>
                            <div style={{ maxHeight:260, overflowY:"auto" }}>
                              {group.foods.length===0 && <div style={{ padding:16, textAlign:"center", color:"#9CA3AF", fontSize:12 }}>No foods yet. Go to 🥗 Foods tab.</div>}
                              {group.foods.map(food => (
                                <div key={food.name} onClick={() => { updateMeal(day,group.key,food.name); setOpenPicker(null); }}
                                  style={{ padding:"10px 12px", borderBottom:"1px solid #F3F4F6", cursor:"pointer", background:val===food.name?T.accentLight:"white" }}>
                                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                                    <span style={{ fontSize:20 }}>{food.emoji}</span>
                                    <div style={{ flex:1 }}>
                                      <div style={{ fontSize:13, fontWeight:600, color:"#1F2937" }}>{food.name}</div>
                                      <div style={{ fontSize:11, color:"#6B7280", lineHeight:1.3, marginTop:1 }}>{food.benefit}</div>
                                    </div>
                                    {val===food.name && <span style={{ color:T.accent }}>✓</span>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div style={{ padding:"0 12px 12px" }}>
                  <textarea placeholder="📝 Notes — reactions, appetite, new foods tried…"
                    value={getNote(day)} onChange={e=>updateNote(day,e.target.value)} rows={2}
                    style={{ width:"100%", borderRadius:10, border:"1.5px solid #E5E7EB", padding:"8px 10px", fontSize:12, color:"#374151", outline:"none", resize:"none", fontFamily:"inherit", background:"#FAFAFA", boxSizing:"border-box" }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── FOOD LIST ── */}
        {activeTab==="foodlist" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
              <div>
                <div style={{ fontWeight:700, fontSize:15, color:"#1F2937" }}>🌱 Your Food Lists</div>
                <div style={{ fontSize:12, color:"#6B7280" }}>Add, edit or remove foods from each category</div>
              </div>
              <button onClick={() => setEditMode(p=>!p)}
                style={{ padding:"8px 14px", borderRadius:20, border:"none", background:editMode?"#1F2937":T.headerGrad, color:"white", cursor:"pointer", fontWeight:600, fontSize:12 }}>
                {editMode?"✅ Done":"✏️ Edit"}
              </button>
            </div>

            {editMode && (
              <div style={{ background:T.accentLight, border:1px solid ${T.accentBorder}, borderRadius:12, padding:12, marginBottom:16, fontSize:12, color:"#374151" }}>
                💡 Tap ✏️ to edit, 🗑️ to delete, or <strong>+ Add Food</strong> to add your own.
                <button onClick={resetFoods} style={{ display:"block", marginTop:8, fontSize:11, color:"#DC2626", background:"none", border:"none", cursor:"pointer", padding:0, textDecoration:"underline" }}>Reset all to defaults</button>
              </div>
            )}

            {foodGroups.map(group => (
              <div key={group.key} style={{ background:"white", borderRadius:16, marginBottom:16, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
                <div style={{ padding:"12px 16px", background:T.headerGrad, color:"white", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div>
                    <div style={{ fontWeight:700, fontSize:16 }}>{group.emoji} {group.label}s</div>
                    <div style={{ fontSize:11, opacity:0.85 }}>{group.foods.length} foods</div>
                  </div>
                  {editMode && (
                    <button onClick={() => openAddFood(group.key)} style={{ background:"rgba(255,255,255,0.25)", border:"none", color:"white", borderRadius:20, padding:"6px 14px", cursor:"pointer", fontWeight:700, fontSize:13 }}>
                      + Add Food
                    </button>
                  )}
                </div>
                {group.foods.length===0 && <div style={{ padding:20, textAlign:"center", color:"#9CA3AF", fontSize:13 }}>No foods yet. Tap + Add Food above.</div>}
                {group.foods.map((food,i) => (
                  <div key={${food.name}-${i}} style={{ padding:"12px 16px", borderBottom:i<group.foods.length-1?"1px solid #F3F4F6":"none", display:"flex", alignItems:"flex-start", gap:10 }}>
                    <span style={{ fontSize:24, flexShrink:0 }}>{food.emoji}</span>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:14, fontWeight:600, color:"#1F2937" }}>{food.name}</div>
                      <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.4, marginTop:2 }}>{food.benefit}</div>
                    </div>
                    {editMode && (
                      <div style={{ display:"flex", gap:6, flexShrink:0 }}>
                        <button onClick={() => openEditFood(group.key,i)} style={{ background:"#F3F4F6", border:"none", borderRadius:8, padding:"6px 8px", cursor:"pointer", fontSize:14 }}>✏️</button>
                        <button onClick={() => { if(window.confirm(Delete "${food.name}"?)) deleteFood(group.key,i); }} style={{ background:"#FFF1F2", border:"none", borderRadius:8, padding:"6px 8px", cursor:"pointer", fontSize:14 }}>🗑️</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* ── OVERVIEW ── */}
        {activeTab==="overview" && (
          <div>
            <div style={{ background:"white", borderRadius:16, padding:16, marginBottom:16, boxShadow:"0 2px 8px rgba(0,0,0,0.07)", textAlign:"center" }}>
              <div style={{ fontSize:48, marginBottom:4 }}>{totalDaysLogged===7?T.animal:totalDaysLogged>=4?"⭐":"🍼"}</div>
              <div style={{ fontWeight:700, fontSize:20, color:"#1F2937" }}>{totalDaysLogged} / 7 days complete</div>
              <div style={{ color:"#6B7280", fontSize:13, marginTop:4 }}>Week {currentWeek} — {MONTHS[currentMonth]} {currentYear}</div>
              <div style={{ marginTop:10, fontSize:12, color:T.accent, fontWeight:600 }}>{T.pattern}</div>
            </div>

            <div style={{ background:"white", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
              <div style={{ padding:"12px 16px", fontWeight:700, color:"#374151", borderBottom:"1px solid #F3F4F6" }}>This Week at a Glance</div>
              {DAYS.map(day => {
                const count = getDayCompletion(day);
                return (
                  <div key={day} style={{ padding:"12px 16px", borderBottom:"1px solid #F9FAFB" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                      <span style={{ fontWeight:600, fontSize:13, color:"#374151" }}>{day}</span>
                      <span style={{ fontSize:12, color:count===4?"#16A34A":T.accent, fontWeight:600 }}>{count}/4</span>
                    </div>
                    <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                      {foodGroups.map(g => {
                        const val = getMeal(day, g.key);
                        const food = g.foods.find(f=>f.name===val);
                        return val ? (
                          <span key={g.key} style={{ fontSize:11, padding:"3px 10px", borderRadius:20, background:T.accentLight, color:T.accent, border:1px solid ${T.accentBorder}, display:"flex", alignItems:"center", gap:4 }}>
                            {food?.emoji||g.emoji} {val}
                          </span>
                        ) : (
                          <span key={g.key} style={{ fontSize:11, padding:"3px 10px", borderRadius:20, background:"#F9FAFB", color:"#9CA3AF", border:"1px solid #E5E7EB" }}>{g.emoji} —</span>
                        );
                      })}
                    </div>
                    {getNote(day) && <div style={{ marginTop:6, fontSize:11, color:"#6B7280", fontStyle:"italic" }}>📝 {getNote(day)}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>