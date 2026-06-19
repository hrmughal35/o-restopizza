"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppImage } from "@/components/ui/app-image";
import { Plus, Search, Flame, Leaf, Star, Coffee, GlassWater, Droplets, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { categoryTabs, menuItems, type MenuCategory } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";
import { SizePicker, type SizePickerItem } from "@/components/interactive/SizePicker";

type FilterType = "all" | "popular" | "spicy" | "vegetarian";

const drinkGroups = [
  {
    label: "Ice Shakes",
    icon: GlassWater,
    ids: ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13"],
  },
  {
    label: "Tea & Coffee",
    icon: Coffee,
    ids: ["d14","d15","d16"],
  },
  {
    label: "Lime",
    icon: Droplets,
    ids: ["d17","d18","d19"],
  },
  {
    label: "Margarita",
    icon: Wine,
    ids: ["d20","d21","d22"],
  },
];

function DrinkGroupView({ search, filter, onAdd }: { search: string; filter: FilterType; onAdd: (item: { id: string; name: string; price: number; image: string; category: string }) => void }) {
  const allDrinks = menuItems.filter((i) => i.category === "drinks");

  return (
    <div className="space-y-10">
      {drinkGroups.map((group) => {
        const items = allDrinks.filter((item) => {
          if (!group.ids.includes(item.id)) return false;
          if (search && !item.name.toLowerCase().includes(search.toLowerCase())) return false;
          if (filter === "popular" && !item.popular) return false;
          return true;
        });
        if (items.length === 0) return null;

        return (
          <div key={group.label}>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark">{group.label}</h3>
              <div className="flex-1 h-px bg-black/5" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.04 }}
                  className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <AppImage
                      src={item.image}
                      alt={item.name}
                      fill
                      fallbackCategory="drinks"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {item.popular && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-[10px]">Popular</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading text-lg font-bold text-dark">{item.name}</h4>
                    <p className="text-xs text-foreground/50 mt-1 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-heading text-xl font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => onAdd({ id: item.id, name: item.name, price: item.price, image: item.image, category: item.category })}
                      >
                        <Plus className="h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function MenuExperience() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("pizza");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [sizePickerItem, setSizePickerItem] = useState<SizePickerItem | null>(null);
  const { addItem } = useCart();

  const handleAddItem = (item: { id: string; name: string; price: number; image: string; category: string }) => {
    if (item.category === "pizza") {
      setSizePickerItem({ id: item.id, name: item.name, image: item.image, basePrice: item.price });
    } else {
      addItem({ id: item.id, name: item.name, price: item.price, image: item.image });
    }
  };

  const filteredItems = useMemo(() => {
    if (activeTab === "drinks") return [];
    return menuItems.filter((item) => {
      if (item.category !== activeTab) return false;
      if (
        search &&
        !item.name.toLowerCase().includes(search.toLowerCase()) &&
        !item.description.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      if (filter === "popular" && !item.popular) return false;
      if (filter === "spicy" && !item.spicy) return false;
      if (filter === "vegetarian" && !item.vegetarian) return false;
      return true;
    });
  }, [activeTab, search, filter]);

  const filters: { id: FilterType; label: string; icon?: typeof Star }[] = [
    { id: "all", label: "All" },
    { id: "popular", label: "Popular", icon: Star },
    { id: "spicy", label: "Spicy", icon: Flame },
    { id: "vegetarian", label: "Veg", icon: Leaf },
  ];

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Digital Menu
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-dark mt-3">
            Order Your Favorites
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              placeholder="Search menu items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === f.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-background text-foreground/70 hover:bg-primary/10"
                )}
              >
                {f.icon && <f.icon className="h-3.5 w-3.5" />}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSearch(""); setFilter("all"); }}
              className={cn(
                "shrink-0 px-6 py-3 rounded-full font-heading text-lg font-bold transition-all",
                activeTab === tab.id
                  ? "bg-dark text-white shadow-lg"
                  : "bg-background text-foreground/70 hover:bg-dark/10"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "drinks" ? (
            <motion.div
              key="drinks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DrinkGroupView search={search} filter={filter} onAdd={handleAddItem} />
            </motion.div>
          ) : (
            <motion.div
              key={`${activeTab}-${filter}-${search}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filteredItems.length === 0 ? (
                <div className="col-span-full text-center py-16 text-foreground/50">
                  No items found. Try a different search or filter.
                </div>
              ) : (
                filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                    className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <AppImage
                        src={item.image}
                        alt={item.name}
                        fill
                        fallbackCategory={item.category}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        {item.popular && (
                          <Badge variant="secondary" className="text-[10px]">
                            Popular
                          </Badge>
                        )}
                        {item.spicy && (
                          <Badge variant="primary" className="text-[10px]">
                            Spicy
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-lg font-bold text-dark">
                        {item.name}
                      </h3>
                      <p className="text-xs text-foreground/50 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          {item.category === "pizza" && (
                            <span className="text-[10px] text-foreground/40 font-medium">from</span>
                          )}
                          <span className="font-heading text-xl font-bold text-primary block leading-none">
                            {formatPrice(item.category === "pizza" ? 550 : item.price)}
                          </span>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleAddItem({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            category: item.category,
                          })}
                        >
                          <Plus className="h-4 w-4" />
                          {item.category === "pizza" ? "Choose Size" : "Add"}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SizePicker item={sizePickerItem} onClose={() => setSizePickerItem(null)} />
    </section>
  );
}
