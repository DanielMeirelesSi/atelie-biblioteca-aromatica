"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { categories, products, type CategoryId } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Filters, { type PriceBucket } from "@/components/Filters";
import { SearchIcon, FilterIcon, CloseIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";

const priceBuckets: PriceBucket[] = [
  { id: "todos", label: "Todos" },
  { id: "ate-12", label: "Até R$ 12" },
  { id: "13-24", label: "R$ 13 a R$ 24" },
  { id: "25-mais", label: "R$ 25 ou mais" },
];

function matchesPrice(price: number, bucket: string): boolean {
  switch (bucket) {
    case "ate-12":
      return price <= 12;
    case "13-24":
      return price > 12 && price <= 24;
    case "25-mais":
      return price >= 25;
    default:
      return true;
  }
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const INITIAL_MOBILE = 6;
const INITIAL_DESKTOP = 12;

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "todos">("todos");
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("todos");
  const [selectedFragrance, setSelectedFragrance] = useState("todas");
  const [selectedPrice, setSelectedPrice] = useState("todos");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [initialCount, setInitialCount] = useState(INITIAL_MOBILE);
  const [visibleCount, setVisibleCount] = useState(INITIAL_MOBILE);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setInitialCount(media.matches ? INITIAL_DESKTOP : INITIAL_MOBILE);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const categoryPool = useMemo(
    () =>
      activeCategory === "todos"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const typeOptions = useMemo(
    () => Array.from(new Set(categoryPool.map((p) => p.type))).sort(),
    [categoryPool],
  );

  const fragranceOptions = useMemo(
    () => Array.from(new Set(categoryPool.map((p) => p.fragrance))).sort(),
    [categoryPool],
  );

  const filtered = useMemo(() => {
    const query = normalize(search.trim());
    return products.filter((product) => {
      if (activeCategory !== "todos" && product.category !== activeCategory) return false;
      if (selectedType !== "todos" && product.type !== selectedType) return false;
      if (selectedFragrance !== "todas" && product.fragrance !== selectedFragrance) return false;
      if (!matchesPrice(product.price, selectedPrice)) return false;
      if (query) {
        const haystack = normalize(
          `${product.name} ${product.type} ${product.fragrance} ${product.shortDescription}`,
        );
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [activeCategory, selectedType, selectedFragrance, selectedPrice, search]);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [activeCategory, selectedType, selectedFragrance, selectedPrice, search, initialCount]);

  const activeFilterCount =
    (activeCategory !== "todos" ? 1 : 0) +
    (selectedType !== "todos" ? 1 : 0) +
    (selectedFragrance !== "todas" ? 1 : 0) +
    (selectedPrice !== "todos" ? 1 : 0);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const isExpanded = !hasMore && filtered.length > initialCount;

  function handleCategory(value: CategoryId | "todos") {
    setActiveCategory(value);
    setSelectedType("todos");
    setSelectedFragrance("todas");
  }

  function clearFilters() {
    setActiveCategory("todos");
    setSelectedType("todos");
    setSelectedFragrance("todas");
    setSelectedPrice("todos");
    setSearch("");
    setFiltersOpen(false);
  }

  function scrollToCatalogTop() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="catalogo" ref={sectionRef} className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading script="cada aroma," title="um capítulo seu" />

        {/* Busca */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-plum/50" />
            <input
              type="search"
              inputMode="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nome, aroma ou tipo"
              aria-label="Buscar produtos"
              className="w-full rounded-full border border-plum/15 bg-white py-3.5 pl-12 pr-4 text-[15px] text-ink shadow-sm outline-none transition-colors placeholder:text-ink/40 focus:border-plum/40"
            />
          </div>
        </div>

        {/* Chips de categoria e botão de filtros */}
        <div className="mt-5 flex items-center gap-3">
          <div className="no-scrollbar -mx-4 flex flex-1 gap-2 overflow-x-auto px-4 py-1 sm:mx-0 sm:px-0">
            <button
              type="button"
              onClick={() => handleCategory("todos")}
              aria-pressed={activeCategory === "todos"}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === "todos"
                  ? "border-plum bg-plum text-white"
                  : "border-plum/20 bg-white text-ink/75 hover:border-plum/40"
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeCategory === category.id
                    ? "border-plum bg-plum text-white"
                    : "border-plum/20 bg-white text-ink/75 hover:border-plum/40"
                }`}
              >
                {category.chip}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="relative flex shrink-0 items-center gap-2 rounded-full border border-plum/25 bg-white px-4 py-2 text-sm font-medium text-plum transition-colors hover:border-plum/50"
            aria-label="Abrir filtros"
          >
            <FilterIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Filtros</span>
            {activeFilterCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-plum px-1.5 text-[11px] font-semibold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Resumo de resultados */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-ink/60">
            {filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
          </p>
          {(activeFilterCount > 0 || search) && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-plum hover:text-plum-light"
            >
              <CloseIcon className="h-3.5 w-3.5" />
              Limpar filtros
            </button>
          )}
        </div>

        {/* Grade ou estado vazio */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-plum/25 bg-white/60 px-6 py-14 text-center">
            <p className="font-display text-xl text-plum">Nenhum produto por aqui ainda</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-ink/60">
              Não encontramos nada com esses filtros. Ajuste a busca ou volte para o catálogo
              completo.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex rounded-full bg-plum px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-plum-light"
            >
              Ver todos os produtos
            </button>
          </div>
        ) : (
          <>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {(hasMore || isExpanded) && (
              <div className="mt-9 flex justify-center">
                {hasMore ? (
                  <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + initialCount)}
                    className="rounded-full border border-plum/25 bg-white px-7 py-3 text-sm font-medium text-plum transition-colors hover:border-plum/50"
                  >
                    Mostrar mais produtos
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setVisibleCount(initialCount);
                      scrollToCatalogTop();
                    }}
                    className="rounded-full border border-plum/25 bg-white px-7 py-3 text-sm font-medium text-plum transition-colors hover:border-plum/50"
                  >
                    Mostrar menos
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <Filters
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        categories={categories}
        activeCategory={activeCategory}
        onCategory={handleCategory}
        types={typeOptions}
        selectedType={selectedType}
        onType={setSelectedType}
        fragrances={fragranceOptions}
        selectedFragrance={selectedFragrance}
        onFragrance={setSelectedFragrance}
        priceBuckets={priceBuckets}
        selectedPrice={selectedPrice}
        onPrice={setSelectedPrice}
        resultCount={filtered.length}
        onClear={clearFilters}
      />
    </section>
  );
}
