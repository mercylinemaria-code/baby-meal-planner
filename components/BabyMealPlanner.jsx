"use client";
import { useState, useEffect } from "react";

const THEMES = {
  pinkBunny: {
    name: "Pink Bunny",
    headerGrad: "linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%)",
    accent: "#FF69B4",
    accentLight: "#FFB6E1",
    accentBorder: "#FF1493",
  },
  goldenLion: {
    name: "Golden Lion",
    headerGrad: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
    accent: "#FF8C00",
    accentLight: "#FFB347",
    accentBorder: "#FF6347",
  },
  dinoGreen: {
    name: "Dino Green",
    headerGrad: "linear-gradient(135deg, #90EE90 0%, #32CD32 100%)",
    accent: "#228B22",
    accentLight: "#90EE90",
    accentBorder: "#006400",
  },
  blueElephant: {
    name: "Blue Elephant",
    headerGrad: "linear-gradient(135deg, #87CEEB 0%, #4169E1 100%)",
    accent: "#1E90FF",
    accentLight: "#ADD8E6",
    accentBorder: "#00008B",
  },
  panda: {
    name: "Panda",
    headerGrad: "linear-gradient(135deg, #FFFFFF 0%, #D3D3D3 100%)",
    accent: "#000000",
    accentLight: "#808080",
    accentBorder: "#404040",
  },
};

const DEFAULT_FOOD_GROUPS = {
  carb: {
    emoji: "🍚",
    label: "Carbohydrate",
    foods: [
      { name: "Sweet Potato", benefit: "Rich in beta-carotene" },
      { name: "Oat Porridge", benefit: "Iron & fiber" },
      { name: "Ugali", benefit: "Energy source" },
      { name: "Cassava", benefit: "Carbs & minerals" },
      { name: "Maize", benefit: "Energy & B vitamins" },
      { name: "Millet", benefit: "Nutritious grains" },
      { name: "Rice", benefit: "Easy to digest" },
      { name: "Banana", benefit: "Potassium rich" },
      { name: "Avocado", benefit: "Healthy fats" },
      { name: "Bread", benefit: "Fortified grains" },
    ],
  },
  vegetable: {
    emoji: "🥦",
    label: "Vegetable",
    foods: [
      { name: "Spinach", benefit: "Iron & folate" },
      { name: "Kale/Sukuma", benefit: "Calcium rich" },
      { name: "Beetroot", benefit: "Vitamins & antioxidants" },
      { name: "Carrot", benefit: "Vitamin A" },
      { name: "Pumpkin", benefit: "Beta-carotene" },
      { name: "Broccoli", benefit: "Vitamin C" },
      { name: "Green Beans", benefit: "Fiber & vitamins" },
      { name: "Tomato", benefit: "Lycopene" },
      { name: "Butternut", benefit: "Nutrients" },
      { name: "Cabbage", benefit: "Minerals" },
    ],
  },
  protein: {
    emoji: "🥚",
    label: "Protein",
    foods: [
      { name: "Egg Yolk", benefit: "Choline for brain" },
      { name: "Omena/Dagaa", benefit: "Calcium & omega-3" },
      { name: "Minced Beef", benefit: "Iron & zinc" },
      { name: "Peanut paste", benefit: "Protein & healthy fats" },
      { name: "Chicken", benefit: "Lean protein" },
      { name: "Fish", benefit: "Omega-3 fatty acids" },
      { name: "Beans", benefit: "Plant-based protein" },
      { name: "Lentils", benefit: "Iron & fiber" },
      { name: "Yogurt", benefit: "Probiotics" },
      { name: "Cheese", benefit: "Calcium & protein" },
    ],
  },
  fruit: {
    emoji: "🍓",
    label: "Fruit",
    foods: [
      { name: "Banana", benefit: "Potassium & energy" },
      { name: "Prunes", benefit: "Fiber & iron" },
      { name: "Guava", benefit: "Vitamin C" },
      { name: "Mango", benefit: "Vitamins A & C" },
      { name: "Papaya", benefit: "Enzymes for digestion" },
      { name: "Orange", benefit: "Vitamin C" },
      { name: "Avocado", benefit: "Healthy fats" },
      { name: "Apple", benefit: "Fiber & antioxidants" },
      { name: "Watermelon", benefit: "Hydration" },
      { name: "Pineapple", benefit: "Bromelain enzyme" },
    ],
  },
};

export default function BabyMealPlanner() {
  const [babyName, setBabyName] = useState("Baby");
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(1);
  const [meals, setMeals] = useState({});
  const [notes, setNotes] = useState({});
  const [themeId, setThemeId] = useState("pinkBunny");
  const [foodGroups, setFoodGroups] = useState(DEFAULT_FOOD_GROUPS);
  const [activeTab, setActiveTab] = useState("daily");
  const [editingName, setEditingName] = useState(false);
  const [saveStatus, setSaveStatus] = useState("Saved");

  const theme = THEMES[themeId] || THEMES.pinkBunny;
  const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Load from storage
  useEffect(() => {
    const loadData = async () => {
      try {
        const [nameResult, mealsResult, notesResult, foodResult, themeResult] = await Promise.all([
          window.storage?.get("babyName"),
          window.storage?.get("meals"),
          window.storage?.get("notes"),
          window.storage?.get("foodGroups"),
          window.storage?.get("themeId"),
        ]);

        if (nameResult?.value) setBabyName(JSON.parse(nameResult.value));
        if (mealsResult?.value) setMeals(JSON.parse(mealsResult.value));
        if (notesResult?.value) setNotes(JSON.parse(notesResult.value));
        if (foodResult?.value) setFoodGroups(JSON.parse(foodResult.value));
        if (themeResult?.value) setThemeId(JSON.parse(themeResult.value));
      } catch (error) {
        console.log("Local storage not available, using defaults");
      }
    };
    loadData();
  }, []);

  // Save to storage
  const saveToStorage = async (key, value) => {
    try {
      setSaveStatus("Saving...");
      await window.storage?.set(key, JSON.stringify(value));
      setSaveStatus("Saved");
      setTimeout(() => setSaveStatus(""), 2000);
    } catch (error) {
      setSaveStatus("Error saving");
    }
  };

  const handleMealChange = (day, group, food) => {
  const key = currentMonth + '-W' + currentWeek + '-' + day;
    const updated = { ...meals, [key]: { ...meals[key], [group]: food } };
    setMeals(updated);
    saveToStorage("meals", updated);
  };

  const handleNotesChange = (day, text) => {
    const key = currentMonth + '-W' + currentWeek + '-' + day;
    const updated = { ...notes, [key]: text };
    setNotes(updated);
    saveToStorage("notes", updated);
  };

  const handleBabyNameChange = (name) => {
    setBabyName(name);
    saveToStorage("babyName", name);
  };

  const handleThemeChange = (id) => {
    setThemeId(id);
    saveToStorage("themeId", id);
  };

  const getMealForDay = (day) => meals[${currentMonth}-W${currentWeek}-${day}] || {};
  const getNotesForDay = (day) => notes[${currentMonth}-W${currentWeek}-${day}] || "";

  const containerStyle = {
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  };

  const headerStyle = {
    background: theme.headerGrad,
    color: "white",
    padding: "30px 20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "15px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const buttonStyle = (isActive = false) => ({
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    background: isActive ? theme.accent : "#e0e0e0",
    color: isActive ? "white" : "#333",
    marginRight: "8px",
    marginBottom: "8px",
  });

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: "0 0 10px 0", fontSize: "32px" }}>
              {editingName ? (
                <input
                  type="text"
                  value={babyName}
                  onChange={(e) => handleBabyNameChange(e.target.value)}
                  onBlur={() => setEditingName(false)}
                  autoFocus
                  style={{
                    fontSize: "32px",
                    border: "none",
                    background: "rgba(255,255,255,0.3)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                <span onClick={() => setEditingName(true)} style={{ cursor: "pointer" }}>
                  {babyName}'s Meal Planner
                </span>
              )}
            </h1>
            <p style={{ margin: "0", fontSize: "14px", opacity: 0.9 }}>
              Month {currentMonth} • Week {currentWeek} {saveStatus && • ${saveStatus}}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={cardStyle}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}>Month:</label>
          <select
            value={currentMonth}
            onChange={(e) => setCurrentMonth(Number(e.target.value))}
            style={{ padding: "8px", borderRadius: "4px", border: 2px solid ${theme.accent} }}
          >
            {[1, 2, 3, 4, 5, 6].map((m) => (
              <option key={m} value={m}>
                Month {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}>Week:</label>
          {[1, 2, 3, 4].map((w) => (
            <button key={w} style={buttonStyle(currentWeek === w)} onClick={() => setCurrentWeek(w)}>
              W{w}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={cardStyle}>
        <button style={buttonStyle(activeTab === "daily")} onClick={() => setActiveTab("daily")}>
          Daily Log
        </button>
        <button style={buttonStyle(activeTab === "themes")} onClick={() => setActiveTab("themes")}>
          Themes
        </button>
      </div>

      {/* Daily View */}
      {activeTab === "daily" && (
        <div>
          {DAYS.map((day) => {
            const dayMeal = getMealForDay(day);
            const dayNotes = getNotesForDay(day);
            return (
              <div key={day} style={cardStyle}>
                <h3 style={{ color: theme.accent, marginTop: "0" }}>{day}</h3>
                {Object.entries(foodGroups).map(([groupKey, group]) => (
                  <div key={groupKey} style={{ marginBottom: "15px" }}>
                    <label style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {group.emoji} {group.label}
                    </label>
                    <select
                      value={dayMeal[groupKey] || ""}
                      onChange={(e) => handleMealChange(day, groupKey, e.target.value)}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: 2px solid ${theme.accentLight},
                        marginTop: "5px",
                      }}
                    >
                      <option value="">Select a food...</option>
                      {group.foods.map((food) => (
                        <option key={food.name} value={food.name}>
                          {food.name} - {food.benefit}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
                <div style={{ marginTop: "15px" }}>
                  <label style={{ fontWeight: "bold", fontSize: "14px", display: "block", marginBottom: "5px" }}>
                    Notes
                  </label>
                  <textarea
                    value={dayNotes}
                    onChange={(e) => handleNotesChange(day, e.target.value)}
                    placeholder="Any observations or concerns..."
                    style={{
                      width: "100%",
                      minHeight: "60px",
                      padding: "8px",
                      borderRadius: "4px",
                      border: 2px solid ${theme.accentLight},
                      fontFamily: "inherit",
                      resize: "vertical",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Themes View */}
      {activeTab === "themes" && (
        <div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: "0", color: theme.accent }}>Choose a Theme</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
              {Object.entries(THEMES).map(([id, t]) => (
                <button
                  key={id}
                  onClick={() => handleThemeChange(id)}
                  style={{
                    padding: "15px",
                    borderRadius: "8px",
                    border: themeId === id ? 3px solid ${t.accent} : "2px solid #ddd",
                    background: t.headerGrad,
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s",
                  }}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}