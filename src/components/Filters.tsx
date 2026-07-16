"use client";

import { useEffect } from "react";
import type { Category, CategoryId } from "@/data/products";
import { CloseIcon } from "@/components/icons";

export interface PriceBucket {
  id: string;
  label: string;
}

interface FiltersProps {
  open: boolean;
  onClose: () => void;
  categories: Category[];
  activeCategory: CategoryId | "todos";
  onCategory: (value: CategoryId | "todos") => void;
  types: string[];
  selectedType: string;
  onType: (value: string) => void;
  fragrances: string[];
  selectedFragrance: string;
  onFragrance: (value: string) => void;
  priceBuckets: PriceBucket[];
  selectedPrice: string;
  onPrice: (value: string) => void;
  resultCount: number;
  onClear: () => void;
}

function OptionPill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-2 text-sm transition-colors ${
        active
          ? "border-plum bg-plum text-white"
          : "border-plum/20 bg-white text-ink/75 hover:border-plum/40"
      }`}
    >
      {children}
    </button>
  );
}

export default function Filters({
  open,
  onClose,
  categories,
  activeCategory,
  onCategory,
  types,
  selectedType,
  onType,
  fragrances,
  selectedFragrance,
  onFragrance,
  priceBuckets,
  selectedPrice,
  onPrice,
  resultCount,
  onClear,
}: FiltersProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Filtros do catálogo"
    >
      <button
        type="button"
        aria-label="Fechar filtros"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 animate-fade-in"
      />

      <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-cream px-5 pb-6 pt-4 shadow-float animate-sheet-up safe-bottom sm:inset-x-auto sm:right-6 sm:top-6 sm:bottom-6 sm:w-96 sm:max-h-none sm:rounded-3xl">
        <div className="sticky top-0 -mx-5 mb-2 flex items-center justify-between border-b border-plum/10 bg-cream px-5 pb-3 pt-1">
          <h2 className="font-display text-xl text-plum">Filtros</h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-plum"
            aria-label="Fechar filtros"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
            Categoria
          </h3>
          <div className="flex flex-wrap gap-2">
            <OptionPill active={activeCategory === "todos"} onClick={() => onCategory("todos")}>
              Todos
            </OptionPill>
            {categories.map((category) => (
              <OptionPill
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => onCategory(category.id)}
              >
                {category.label}
              </OptionPill>
            ))}
          </div>
        </div>

        {types.length > 1 && (
          <div className="mt-6">
            <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Tipo de produto
            </h3>
            <div className="flex flex-wrap gap-2">
              <OptionPill active={selectedType === "todos"} onClick={() => onType("todos")}>
                Todos
              </OptionPill>
              {types.map((type) => (
                <OptionPill
                  key={type}
                  active={selectedType === type}
                  onClick={() => onType(type)}
                >
                  {type}
                </OptionPill>
              ))}
            </div>
          </div>
        )}

        {fragrances.length > 1 && (
          <div className="mt-6">
            <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Fragrância
            </h3>
            <div className="flex flex-wrap gap-2">
              <OptionPill
                active={selectedFragrance === "todas"}
                onClick={() => onFragrance("todas")}
              >
                Todas
              </OptionPill>
              {fragrances.map((fragrance) => (
                <OptionPill
                  key={fragrance}
                  active={selectedFragrance === fragrance}
                  onClick={() => onFragrance(fragrance)}
                >
                  {fragrance}
                </OptionPill>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
            Faixa de preço
          </h3>
          <div className="flex flex-wrap gap-2">
            {priceBuckets.map((bucket) => (
              <OptionPill
                key={bucket.id}
                active={selectedPrice === bucket.id}
                onClick={() => onPrice(bucket.id)}
              >
                {bucket.label}
              </OptionPill>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 -mx-5 mt-8 flex items-center gap-3 border-t border-plum/10 bg-cream px-5 pt-4">
          <button
            type="button"
            onClick={onClear}
            className="rounded-full border border-plum/25 px-5 py-3 text-sm font-medium text-plum transition-colors hover:border-plum/50"
          >
            Limpar filtros
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full bg-plum px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-plum-light"
          >
            Ver {resultCount} {resultCount === 1 ? "produto" : "produtos"}
          </button>
        </div>
      </div>
    </div>
  );
}
